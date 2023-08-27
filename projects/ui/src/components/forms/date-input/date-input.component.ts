import { Component, forwardRef, Optional, Self } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { InputComponent, InputInterface } from '../input';

@Component({
  selector: 'sk-date-input',
  templateUrl: 'date-input.component.html',
  styleUrls: ['date-input.component.scss'],
  providers: [{ provide: InputComponent, useExisting: forwardRef(() => SkDateInputComponent), multi: true }],
})
export class SkDateInputComponent implements ControlValueAccessor, InputInterface {
  public value?: Date | null;
  public name?: string;
  public isDisabled: boolean = false;
  public onChange!: (value: Date | null) => void;
  public onTouched!: () => void;

  constructor(@Optional() @Self() public control: NgControl) {
    if (control) {
      control.valueAccessor = this;
    }
  }

  public registerOnChange(onChange: (value: Date | null) => void): void {
    this.onChange = onChange;
  }

  public registerOnTouched(onTouched: () => void): void {
    this.onTouched = onTouched;
  }

  public setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  public writeValue(value: Date | null): void {
    this.value = value;
  }

  public onValueChange(value: string): void {
    const date: Date = new Date(value);
    this.writeValue(date);
    this.onChange(date);
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
