import { NgIf } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UiInputError } from '../input-error';
import { SkNumberInputComponent } from './number-input.component';

@NgModule({
  imports: [FormsModule, NgIf, UiInputError],
  declarations: [SkNumberInputComponent],
  exports: [SkNumberInputComponent],
})
export class SkNumberInputModule {}
