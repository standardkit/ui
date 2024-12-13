import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'ui-form',
  templateUrl: 'form.component.html',
  styleUrl: 'form.component.scss',
  imports: [ReactiveFormsModule],
})
export class UiForm {
  @Input({ required: true }) public formGroup!: FormGroup;
  @Input() public hasAutocomplete: boolean = false;

  @Output() public submitForm: EventEmitter<void> = new EventEmitter<void>();

  public onSubmit(): void {
    this.formGroup.markAllAsTouched();
    if (this.formGroup.valid) {
      this.submitForm.emit();
    }
  }
}
