import { DatePipe, NgIf } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SkIconModule } from '../../core';
import { InputErrorModule } from '../input-error';
import { SkDateInputComponent } from './date-input.component';

@NgModule({
  imports: [FormsModule, NgIf, InputErrorModule, DatePipe, SkIconModule],
  declarations: [SkDateInputComponent],
  exports: [SkDateInputComponent],
})
export class SkDateInputModule {}
