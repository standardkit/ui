import { NgIf } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputErrorModule } from '../input-error';
import { SkNumberInputComponent } from './number-input.component';

@NgModule({
  imports: [FormsModule, NgIf, InputErrorModule],
  declarations: [SkNumberInputComponent],
  exports: [SkNumberInputComponent],
})
export class SkNumberInputModule {}
