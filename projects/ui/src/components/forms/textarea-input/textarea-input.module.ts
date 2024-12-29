import { NgIf } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiInputError } from '../input-error';
import { SkTextareaInputComponent } from './textarea-input.component';

@NgModule({
  imports: [UiInputError, NgIf],
  declarations: [SkTextareaInputComponent],
  exports: [SkTextareaInputComponent],
})
export class SkTextareaInputModule {}
