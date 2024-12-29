import { NgForOf, NgIf } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { UiModal } from '../../common';
import { UiBar, UiButton } from '../../core';
import {
  SkLabelModule,
  SkMultiSelectInputModule,
  SkSelectInputModule,
  SkSelectOptionModule,
  UiDateInput,
  UiField,
  UiForm,
} from '../../forms';
import { SkFilterComponent } from './filter.component';

@NgModule({
  imports: [
    NgForOf,
    NgIf,
    ReactiveFormsModule,
    UiButton,
    SkLabelModule,
    SkMultiSelectInputModule,
    SkSelectInputModule,
    SkSelectOptionModule,
    UiForm,
    UiModal,
    UiBar,
    UiDateInput,
    UiField,
  ],
  declarations: [SkFilterComponent],
  exports: [SkFilterComponent],
})
export class SkFilterModule {}
