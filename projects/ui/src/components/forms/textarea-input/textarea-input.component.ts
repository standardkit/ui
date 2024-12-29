import { NgIf } from '@angular/common';
import { Component, forwardRef, Input, Optional, Self } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { InputComponent, InputInterface } from '../input';
import { UiInputError } from '../input-error';

@Component({
  selector: 'ui-textarea-input',
  templateUrl: 'textarea-input.component.html',
  styleUrl: 'textarea-input.component.scss',
  providers: [{ provide: InputComponent, useExisting: forwardRef(() => UiTextareaInput), multi: true }],
  imports: [UiInputError, NgIf],
})
export class UiTextareaInput implements ControlValueAccessor, InputInterface {
  @Input() public placeholder: string = '';
  @Input() public numberOfRows: number = 3;

  public value?: string | null;
  public name?: string;
  public isDisabled: boolean = false;
  public onChange!: (value: string) => void;
  public onTouched!: () => void;

  constructor(@Optional() @Self() public control: NgControl) {
    if (control) {
      control.valueAccessor = this;
    }
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
  }

  public onValueChange(event: Event): void {
    const value: string = (event.target as HTMLTextAreaElement).value;
    this.writeValue(value);
    this.onChange(value);
  }

  public setName(name: string): void {
    this.name = name;
  }

  public onKeydownEnter(event: Event): void {
    event.stopPropagation();
  }
}
