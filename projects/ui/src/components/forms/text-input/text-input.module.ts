import { NgIf } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UiInputError } from '../input-error';
import { SkTextInputComponent } from './text-input.component';

@NgModule({
  imports: [FormsModule, NgIf, UiInputError],
  declarations: [SkTextInputComponent],
  exports: [SkTextInputComponent],
})
export class SkTextInputModule {}
