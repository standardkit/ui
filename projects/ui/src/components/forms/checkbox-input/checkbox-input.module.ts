import { NgIf } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UiIcon } from '../../core';
import { SkInputErrorModule } from '../input-error';
import { SkCheckboxInputComponent } from './checkbox-input.component';

@NgModule({
  imports: [FormsModule, NgIf, SkInputErrorModule, UiIcon],
  declarations: [SkCheckboxInputComponent],
  exports: [SkCheckboxInputComponent],
})
export class SkCheckboxInputModule {}
