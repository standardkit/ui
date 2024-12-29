import { NgIf } from '@angular/common';
import { Component, forwardRef, Optional, Self } from '@angular/core';
import { ControlValueAccessor, FormsModule, NgControl } from '@angular/forms';
import { UiIcon } from '../../core';
import { InputComponent, InputInterface } from '../input';
import { SkInputErrorModule } from '../input-error';

@Component({
  selector: 'ui-checkbox-input',
  templateUrl: 'checkbox-input.component.html',
  styleUrl: 'checkbox-input.component.scss',
  providers: [{ provide: InputComponent, useExisting: forwardRef(() => UiCheckboxInput), multi: true }],
  imports: [FormsModule, NgIf, UiIcon, SkInputErrorModule],
})
export class UiCheckboxInput implements ControlValueAccessor, InputInterface {
  public value: boolean = false;
  public name?: string;
  public isDisabled: boolean = false;
  public onChange!: (value: boolean) => void;
  public onTouched!: () => void;

  constructor(@Optional() @Self() public control: NgControl) {
    if (control) {
      control.valueAccessor = this;
    }
  }

  public registerOnChange(onChange: (value: boolean) => void): void {
    this.onChange = onChange;
  }

  public registerOnTouched(onTouched: () => void): void {
    this.onTouched = onTouched;
  }

  public setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  public writeValue(value: boolean | null): void {
    this.value = !!value;
  }

  public onValueChange(value: boolean): void {
    this.writeValue(value);
    this.onChange(value);
    this.onTouched();
  }

  public setName(name: string): void {
    this.name = name;
  }
}
