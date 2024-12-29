import { NgForOf, NgIf } from '@angular/common';
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
import { ControlValueAccessor, FormsModule, NgControl } from '@angular/forms';
import Fuse, { FuseResult } from 'fuse.js';
import { UiIcon } from '../../core';
import { InputComponent, InputInterface } from '../input';
import { UiInputError } from '../input-error';
import { SkSelectOptionComponent, SkSelectOptionModule } from '../select-option';
import { SkSelectSearchModule } from '../select-search';

const FUSE_OPTIONS = {
  keys: ['label'],
  findAllMatches: true,
  includeScore: true,
  isCaseSensitive: false,
  shouldSort: true,
};

@Component({
  selector: 'ui-select-input',
  templateUrl: 'select-input.component.html',
  styleUrl: 'select-input.component.scss',
  providers: [{ provide: InputComponent, useExisting: forwardRef(() => UiSelectInput), multi: true }],
  imports: [FormsModule, NgIf, UiInputError, SkSelectOptionModule, UiIcon, SkSelectSearchModule, NgForOf],
})
export class UiSelectInput implements ControlValueAccessor, InputInterface, AfterContentInit {
  @ViewChild('selectBox') public select!: ElementRef<HTMLElement>;
  @ViewChild('scrollBody') public scrollBody!: ElementRef<HTMLElement>;

  @ContentChildren(SkSelectOptionComponent) public contentOptions!: QueryList<SkSelectOptionComponent>;

  @Input() public placeholder: string = '';
  @Input() public isNotClearable: boolean = false;
  @Input() public hasNoError: boolean = false;

  public value?: string | number | null;
  // TODO : Adjust height based on this
  public scrollThreshold: number = 4; // If more than this, results will be scrolled

  // TODO : Make configurable?
  public name?: string;
  public isDisabled: boolean = false;
  public onChange!: (value: string | number | null) => void;
  public onTouched!: () => void;
  public showOptions: boolean = false;
  public selectedOption?: SkSelectOptionComponent;
  public skipClickDetection: boolean = false;
  public noResults: boolean = false;
  public renderedOptions: SkSelectOptionComponent[] = [];
  private fuse: Fuse<SkSelectOptionComponent> = new Fuse([], FUSE_OPTIONS);

  constructor(@Optional() @Self() public control: NgControl) {
    if (control) {
      control.valueAccessor = this;
    }
  }

  public get hasError(): boolean {
    return !!this.control.touched && !!this.control.invalid;
  }

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
      this.showOptions = false;
      this.onTouched();
    }
  };

  public ngAfterContentInit(): void {
    this.fuse.setCollection([...this.contentOptions.toArray()]);
    this.checkOptions();
  }

  public registerOnChange(onChange: (value: string | number | null) => void): void {
    this.onChange = onChange;
  }

  public registerOnTouched(onTouched: () => void): void {
    this.onTouched = onTouched;
  }

  public setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  public writeValue(value: string | number | null): void {
    this.value = value;
    this.checkOptions();
  }

  public setName(name: string): void {
    this.name = name;
  }

  public onToggleShowOptions(): void {
    if (this.isDisabled) {
      return;
    }
    this.skipClickDetection = true;
    this.showOptions = !this.showOptions;
    if (this.showOptions) {
      this.renderedOptions = this.contentOptions.toArray();
      setTimeout((): void => {
        const selectedOption: HTMLElement | null = document.getElementById(String(this.value));
        if (selectedOption && this.renderedOptions.length > this.scrollThreshold) {
          selectedOption.scrollIntoView({ block: 'center' });
        }
      }, 1);
    } else {
      this.onTouched();
    }
  }

  public onSelectOption(selectedOption: SkSelectOptionComponent): void {
    this.writeValue(selectedOption.value);
    this.onChange(selectedOption.value);
    this.showOptions = false;
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
    this.writeValue(null);
    this.onChange(null);
    this.onTouched();
  }

  private checkOptions(): void {
    this.contentOptions?.forEach((option: SkSelectOptionComponent): void => {
      if (option.value === this.value) {
        this.selectedOption = option;
      }
    });
  }
}
