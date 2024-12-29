import { NgIf } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UiIcon } from '../../core';
import { UiInputError } from '../input-error';
import { SkTimeInputComponent } from './time-input.component';

@NgModule({
  imports: [FormsModule, NgIf, UiInputError, UiIcon],
  declarations: [SkTimeInputComponent],
  exports: [SkTimeInputComponent],
})
export class SkTimeInputModule {}
