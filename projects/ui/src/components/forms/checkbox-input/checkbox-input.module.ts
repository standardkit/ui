import { NgIf } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SkIconModule } from '../../core';
import { SkInputErrorModule } from '../input-error';
import { SkCheckboxInputComponent } from './checkbox-input.component';

@NgModule({
  imports: [FormsModule, NgIf, SkInputErrorModule, SkIconModule, SkIconModule],
  declarations: [SkCheckboxInputComponent],
  exports: [SkCheckboxInputComponent],
})
export class SkCheckboxInputModule {}
