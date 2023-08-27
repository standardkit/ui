import { NgIf } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputErrorModule } from '../input-error';
import { NumberInputComponent } from './number-input.component';

@NgModule({
  declarations: [NumberInputComponent],
  exports: [NumberInputComponent],
  imports: [FormsModule, NgIf, InputErrorModule],
})
export class NumberInputModule {}
