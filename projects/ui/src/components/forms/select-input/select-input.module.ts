import { NgForOf, NgIf } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UiIcon } from '../../core';
import { UiInputError } from '../input-error';
import { SkSelectOptionModule } from '../select-option';
import { SkSelectSearchModule } from '../select-search';
import { SkSelectInputComponent } from './select-input.component';

@NgModule({
  imports: [FormsModule, NgIf, UiInputError, SkSelectOptionModule, UiIcon, SkSelectSearchModule, NgForOf],
  declarations: [SkSelectInputComponent],
  exports: [SkSelectInputComponent],
})
export class SkSelectInputModule {}
