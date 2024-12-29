import { NgIf } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UiInputError } from '../input-error';
import { SkPasswordInputComponent } from './password-input.component';

@NgModule({
  imports: [FormsModule, NgIf, UiInputError],
  declarations: [SkPasswordInputComponent],
  exports: [SkPasswordInputComponent],
})
export class SkPasswordInputModule {}
