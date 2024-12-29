import { NgIf } from '@angular/common';
import { Component, forwardRef, Input, Optional, Self } from '@angular/core';
import { ControlValueAccessor, FormsModule, NgControl } from '@angular/forms';
import { InputComponent, InputInterface } from '../input';
import { UiInputError } from '../input-error';

@Component({
  selector: 'ui-number-input',
  templateUrl: 'number-input.component.html',
  styleUrl: 'number-input.component.scss',
  providers: [{ provide: InputComponent, useExisting: forwardRef(() => UiNumberInput), multi: true }],
  imports: [FormsModule, NgIf, UiInputError],
})
export class UiNumberInput implements ControlValueAccessor, InputInterface {
  @Input() public placeholder: string = '';

  public value?: number | null;
  public name?: string;
  public isDisabled: boolean = false;
  public onChange!: (value: number) => void;
  public onTouched!: () => void;

  constructor(@Optional() @Self() public control: NgControl) {
    if (control) {
      control.valueAccessor = this;
    }
  }

  public registerOnChange(onChange: (value: number | null) => void): void {
    this.onChange = onChange;
  }

  public registerOnTouched(onTouched: () => void): void {
    this.onTouched = onTouched;
  }

  public setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  public writeValue(value: number | null): void {
    this.value = value;
  }

  public onValueChange(value: number): void {
    this.writeValue(value);
    this.onChange(value);
  }

  public setName(name: string): void {
    this.name = name;
  }
}
