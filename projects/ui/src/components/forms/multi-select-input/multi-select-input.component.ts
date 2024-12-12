import {
  AfterContentInit,
  Component,
  ContentChildren,
  ElementRef,
  forwardRef,
  HostListener,
  Input,
  Optional,
  QueryList,
  Self,
  ViewChild,
} from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import Fuse, { FuseResult } from 'fuse.js';
import { InputComponent, InputInterface } from '../input';
import { SkSelectOptionComponent } from '../select-option';
import { SkSelectSearchComponent } from '../select-search';

const FUSE_OPTIONS = {
  keys: ['label'],
  findAllMatches: true,
  includeScore: true,
  isCaseSensitive: false,
  shouldSort: true,
};

@Component({
  selector: 'sk-multi-select-input',
  templateUrl: 'multi-select-input.component.html',
  styleUrls: ['multi-select-input.component.scss'],
  providers: [{ provide: InputComponent, useExisting: forwardRef(() => SkMultiSelectInputComponent), multi: true }],
  standalone: false,
})
export class SkMultiSelectInputComponent implements ControlValueAccessor, InputInterface, AfterContentInit {
  @ViewChild('selectBox') public select!: ElementRef<HTMLElement>;
  @ViewChild('scrollBody') public scrollBody!: ElementRef<HTMLElement>;
  @ViewChild(SkSelectSearchComponent) public search?: SkSelectSearchComponent;

  @HostListener('document:click', ['$event']) public onOutsideClick = (event: Event): void => {
    if (
      event instanceof PointerEvent &&
      (event.target as HTMLElement).className === 'label' &&
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      (event.target as HTMLElement).attributes['for'].value === this.name
    ) {
      this.select.nativeElement.focus();
    }
    if (this.skipClickDetection) {
      this.skipClickDetection = false;
      return;
    }
    if (this.showOptions) {
      this.onApply();
    }
  };

  @ContentChildren(SkSelectOptionComponent) public contentOptions!: QueryList<SkSelectOptionComponent>;

  @Input() public placeholder: string = '';

  public value: (string | number)[] = [];
  public backupValue: (string | number)[] = [];
  public name?: string;
  public isDisabled: boolean = false;
  public onChange!: (value: (string | number)[]) => void;
  public onTouched!: () => void;
  public showOptions: boolean = false;
  public selectedOptions: SkSelectOptionComponent[] = [];
  public skipClickDetection: boolean = false;
  public renderedOptions: SkSelectOptionComponent[] = [];

  private fuse: Fuse<SkSelectOptionComponent> = new Fuse([], FUSE_OPTIONS);

  constructor(@Optional() @Self() public control: NgControl) {
    if (control) {
      control.valueAccessor = this;
    }
  }

  public ngAfterContentInit(): void {
    this.fuse.setCollection([...this.contentOptions.toArray()]);
    this.renderedOptions = this.contentOptions.toArray();

    setTimeout(() => {
      this.renderedOptions.forEach((option: SkSelectOptionComponent) => {
        option.isSelected = this.value.includes(option.value);
        if (option.isSelected) {
          this.selectedOptions.push(option);
        }
      });
    }, 0);
  }

  public get hasError(): boolean {
    return !!this.control.touched && !!this.control.invalid;
  }

  public registerOnChange(onChange: (value: (string | number)[]) => void): void {
    this.onChange = onChange;
  }

  public registerOnTouched(onTouched: () => void): void {
    this.onTouched = onTouched;
  }

  public setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  public writeValue(value: (string | number)[] | null): void {
    this.value = value ?? [];
    const selectedOptions: SkSelectOptionComponent[] = [];
    this.contentOptions?.forEach((option: SkSelectOptionComponent): void => {
      option.isSelected = this.value.includes(option.value);
      if (option.isSelected) {
        selectedOptions.push(option);
      }
    });
    this.selectedOptions = selectedOptions;
  }

  public setName(name: string): void {
    this.name = name;
  }

  public onToggleShowOptions(): void {
    this.skipClickDetection = true;
    this.showOptions = !this.showOptions;
    if (this.showOptions) {
      this.backupValue = [...this.value];
      this.renderedOptions = this.contentOptions.toArray();
    } else {
      this.onCancel();
    }
  }

  public onSelectOption(option: SkSelectOptionComponent): void {
    const newValue: (string | number)[] = [...this.value, option.value];
    this.writeValue(newValue);
    this.skipClickDetection = true;
    option.isSelected = true;
    this.search?.input.nativeElement.focus();
  }

  public onDeselectOption(selectedOption: SkSelectOptionComponent): void {
    const newValue: (string | number)[] = this.value.filter(
      (value: string | number): boolean => value !== selectedOption.value,
    );
    this.skipClickDetection = true;
    this.writeValue(newValue);
    if (!this.showOptions) {
      this.onChange(newValue);
      this.onTouched();
    } else {
      this.search?.input.nativeElement.focus();
    }
  }

  public onClickTag(event: Event, option: SkSelectOptionComponent): void {
    event.stopPropagation();
    this.onDeselectOption(option);
  }

  public onCancel(): void {
    this.writeValue([...this.backupValue]);
    this.showOptions = false;
    this.onTouched();
  }

  public onReset(): void {
    this.showOptions = false;
    this.writeValue([]);
    this.onChange([]);
    this.onTouched();
  }

  public onApply(): void {
    this.showOptions = false;
    this.onChange(this.value);
    this.onTouched();
  }

  public onSearch(query: string): void {
    if (query === '') {
      return this.onSearchClear();
    }
    this.renderedOptions = this.fuse.search(query).map((result: FuseResult<SkSelectOptionComponent>) => result.item);
    this.scrollBody.nativeElement.scrollTop = 0;
  }

  public onSearchClear(): void {
    this.renderedOptions = this.contentOptions.toArray();
  }

  public onClear(event: Event): void {
    event.stopPropagation();
    this.writeValue([]);
    this.onChange([]);
    this.onTouched();
  }
}
