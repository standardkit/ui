import { NgForOf, NgIf } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { UiModal } from '../../common';
import { UiBar, UiButton } from '../../core';
import { UiDateInput, UiField, UiForm, UiLabel, UiMultiSelectInput, UiSelectInput, UiSelectOption } from '../../forms';
import { SkFilterComponent } from './filter.component';

@NgModule({
  imports: [
    NgForOf,
    NgIf,
    ReactiveFormsModule,
    UiButton,
    UiForm,
    UiModal,
    UiBar,
    UiDateInput,
    UiField,
    UiLabel,
    UiMultiSelectInput,
    UiSelectInput,
    UiSelectOption,
  ],
  declarations: [SkFilterComponent],
  exports: [SkFilterComponent],
})
export class SkFilterModule {}
