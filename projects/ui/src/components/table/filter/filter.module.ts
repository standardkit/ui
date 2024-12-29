import { NgForOf, NgIf } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { UiModal } from '../../common';
import { UiBar, UiButton } from '../../core';
import {
  SkMultiSelectInputModule,
  SkSelectInputModule,
  SkSelectOptionModule,
  UiDateInput,
  UiField,
  UiForm,
  UiLabel,
} from '../../forms';
import { SkFilterComponent } from './filter.component';

@NgModule({
  imports: [
    NgForOf,
    NgIf,
    ReactiveFormsModule,
    UiButton,
    SkMultiSelectInputModule,
    SkSelectInputModule,
    SkSelectOptionModule,
    UiForm,
    UiModal,
    UiBar,
    UiDateInput,
    UiField,
    UiLabel,
  ],
  declarations: [SkFilterComponent],
  exports: [SkFilterComponent],
})
export class SkFilterModule {}
