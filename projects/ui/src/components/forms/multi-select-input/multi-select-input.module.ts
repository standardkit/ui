import { NgForOf, NgIf } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UiBar, UiButton, UiIcon, UiTag } from '../../core';
import { UiInputError } from '../input-error';
import { SkSelectOptionModule } from '../select-option';
import { SkSelectSearchModule } from '../select-search';
import { SkMultiSelectInputComponent } from './multi-select-input.component';

@NgModule({
  imports: [
    FormsModule,
    NgIf,
    UiInputError,
    SkSelectOptionModule,
    NgForOf,
    UiButton,
    SkSelectSearchModule,
    UiBar,
    UiIcon,
    UiTag,
  ],
  declarations: [SkMultiSelectInputComponent],
  exports: [SkMultiSelectInputComponent],
})
export class SkMultiSelectInputModule {}
