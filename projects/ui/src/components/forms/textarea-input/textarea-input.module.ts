import { NgIf } from '@angular/common';
import { NgModule } from '@angular/core';
import { SkInputErrorModule } from '../input-error';
import { SkTextareaInputComponent } from './textarea-input.component';

@NgModule({
  imports: [SkInputErrorModule, NgIf],
  declarations: [SkTextareaInputComponent],
  exports: [SkTextareaInputComponent],
})
export class SkTextareaInputModule {}
