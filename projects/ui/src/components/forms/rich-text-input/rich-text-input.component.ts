import {
  Component,
  forwardRef,
  Input,
  OnDestroy,
  OnInit,
  Optional,
  Self,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { ControlValueAccessor, FormControl, NgControl } from '@angular/forms';
import { QuillEditorBase, QuillModules } from 'ngx-quill';
import { Subscription } from 'rxjs';
import { InputComponent, InputInterface } from '../input';

@Component({
  selector: 'sk-rich-text-input',
  templateUrl: 'rich-text-input.component.html',
  styleUrls: ['rich-text-input.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [{ provide: InputComponent, useExisting: forwardRef(() => SkRichTextInputComponent), multi: true }],
})
export class SkRichTextInputComponent implements ControlValueAccessor, InputInterface, OnInit, OnDestroy {
  @ViewChild('editor') public editor!: QuillEditorBase;

  @Input() public placeholder: string = '';

  public value?: string | null;
  public name?: string;
  public isDisabled: boolean = false;
  public quillControl: FormControl = new FormControl();
  public subscriptions: Subscription = new Subscription();

  // TODO : Make configurable
  public modules: QuillModules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['link'],
    ],
  };

  public onChange!: (value: string | null) => void;
  public onTouched!: () => void;

  constructor(@Optional() @Self() public control: NgControl) {
    if (control) {
      control.valueAccessor = this;
    }
  }

  public ngOnInit(): void {
    const subscription: Subscription = this.quillControl.valueChanges.subscribe({
      next: (value: string | null): void => {
        this.onValueChange(value);
      },
    });
    this.subscriptions.add(subscription);
  }

  public ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  public registerOnChange(onChange: (value: string | null) => void): void {
    this.onChange = onChange;
  }

  public registerOnTouched(onTouched: () => void): void {
    this.onTouched = onTouched;
  }

  public setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  public writeValue(value: string | null): void {
    this.value = value;
    this.quillControl.setValue(value);
  }

  public onValueChange(value: string | null): void {
    this.value = value;
    this.onChange(value);
  }

  public setName(name: string): void {
    this.name = name;
  }

  // Don't submit the form, for two reasons:
  // 1. Should just do a newline just like textarea.
  // 2. Angular expects a HTMLInputElement and Quill is not.
  public onKeydownEnter(event: Event): void {
    event.stopPropagation();
  }
}
