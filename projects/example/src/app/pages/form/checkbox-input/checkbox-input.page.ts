import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { UiButton, UiCheckboxInput, UiColumn, UiRow, UiTopBar } from '@standardkit/ui';

@Component({
  imports: [UiTopBar, UiButton, UiColumn, UiRow, UiCheckboxInput, ReactiveFormsModule],
  templateUrl: 'checkbox-input.page.html',
})
export class CheckboxInputPage {
  public formControl: FormControl = new FormControl<boolean>(false, { validators: [Validators.requiredTrue] });
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
