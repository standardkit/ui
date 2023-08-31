import { NgIf } from '@angular/common';
import { NgModule } from '@angular/core';
import { SkInputErrorModule } from '../input-error';
import { TextareaInputComponent } from './textarea-input.component';

@NgModule({
  imports: [SkInputErrorModule, NgIf],
  declarations: [TextareaInputComponent],
  exports: [TextareaInputComponent],
})
export class TextareaInputModule {}
