import { Component, forwardRef, Optional, Self } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { InputComponent, InputInterface } from '../input';

@Component({
  selector: 'sk-time-input',
  templateUrl: 'time-input.component.html',
  styleUrls: ['time-input.component.scss'],
  providers: [{ provide: InputComponent, useExisting: forwardRef(() => SkTimeInputComponent), multi: true }],
})
export class SkTimeInputComponent implements ControlValueAccessor, InputInterface {
  public value?: string | null;
  public name?: string;
  public isDisabled: boolean = false;
  public onChange!: (value: string | null) => void;
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

  public onClear(): void {
    this.writeValue(null);
    this.onChange(null);
    this.onTouched();
  }
}
