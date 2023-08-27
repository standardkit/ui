import { NgIf } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SkIconModule } from '../../core';
import { InputErrorModule } from '../input-error';
import { SkCheckboxInputComponent } from './checkbox-input.component';

@NgModule({
  imports: [FormsModule, NgIf, InputErrorModule, SkIconModule, SkIconModule],
  declarations: [SkCheckboxInputComponent],
  exports: [SkCheckboxInputComponent],
})
export class SkCheckboxInputModule {}
