import { NgForOf, NgIf } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { UiModal } from '../../common';
import { UiBar, UiButton } from '../../core';
import {
  SkSelectOptionModule,
  UiDateInput,
  UiField,
  UiForm,
  UiLabel,
  UiMultiSelectInput,
  UiSelectInput,
} from '../../forms';
import { SkFilterComponent } from './filter.component';

@NgModule({
  imports: [
    NgForOf,
    NgIf,
    ReactiveFormsModule,
    UiButton,
    SkSelectOptionModule,
    UiForm,
    UiModal,
    UiBar,
    UiDateInput,
    UiField,
    UiLabel,
    UiMultiSelectInput,
    UiSelectInput,
  ],
  declarations: [SkFilterComponent],
  exports: [SkFilterComponent],
})
export class SkFilterModule {}
