import { NgIf } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SkIconModule } from '../../core';
import { SkInputErrorModule } from '../input-error';
import { SkTimeInputComponent } from './time-input.component';

@NgModule({
  imports: [FormsModule, NgIf, SkInputErrorModule, SkIconModule],
  declarations: [SkTimeInputComponent],
  exports: [SkTimeInputComponent],
})
export class SkTimeInputModule {}
