import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({ templateUrl: 'checkbox-input.page.html' })
export class CheckboxInputPage {
  public formControl: FormControl = new FormControl(false, [Validators.requiredTrue]);
  public hasError: boolean = false;

  public onToggleError(): void {
    this.hasError ? this.formControl.markAsTouched() : this.formControl.markAsUntouched();

    this.hasError = !this.hasError;
  }

  public onToggleChecked(): void {
    this.formControl.setValue(!this.formControl.value);
  }

  public onToggleDisabled(): void {
    this.formControl.disabled ? this.formControl.enable() : this.formControl.disable();
  }
}
