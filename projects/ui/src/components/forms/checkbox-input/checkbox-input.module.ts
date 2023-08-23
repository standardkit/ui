import { NgIf } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SkIconModule } from '../../core';
import { InputErrorModule } from '../input-error';
import { SkCheckboxInputComponent } from './checkbox-input.component';

@NgModule({
  declarations: [SkCheckboxInputComponent],
  exports: [SkCheckboxInputComponent],
  imports: [FormsModule, NgIf, InputErrorModule, SkIconModule, SkIconModule],
})
export class SkCheckboxInputModule {}
