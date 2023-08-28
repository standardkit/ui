import { Component, forwardRef, Input, Optional, Self } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { InputComponent, InputInterface } from '../input';

@Component({
  selector: 'sk-password-input',
  templateUrl: 'password-input.component.html',
  styleUrls: ['password-input.component.scss'],
  providers: [{ provide: InputComponent, useExisting: forwardRef(() => SkPasswordInputComponent), multi: true }],
})
export class SkPasswordInputComponent implements ControlValueAccessor, InputInterface {
  @Input() public placeholder?: string;

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

  public onValueChange(value: string): void {
    this.writeValue(value);
    this.onChange(value);
  }

  public setName(name: string): void {
    this.name = name;
  }

  public onBlur(): void {
    this.onTouched();
  }
}
