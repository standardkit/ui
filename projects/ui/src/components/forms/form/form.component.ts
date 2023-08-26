import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'sk-form[formGroup]',
  templateUrl: 'form.component.html',
  styleUrls: ['form.component.scss'],
})
export class SkFormComponent {
  @Input() public formGroup!: FormGroup;
  @Input() public hasAutocomplete: boolean = false;

  @Output() public submitForm: EventEmitter<void> = new EventEmitter();

  public onSubmit(): void {
    this.formGroup.markAllAsTouched();
    if (this.formGroup.valid) {
      this.submitForm.emit();
    }
  }
}
