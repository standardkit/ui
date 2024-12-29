import { NgForOf, NgIf } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { UiModal } from '../../common';
import { UiBar, UiButton } from '../../core';
import {
  SkFieldModule,
  SkLabelModule,
  SkMultiSelectInputModule,
  SkSelectInputModule,
  SkSelectOptionModule,
  UiDateInput,
  UiForm,
} from '../../forms';
import { SkFilterComponent } from './filter.component';

@NgModule({
  imports: [
    NgForOf,
    NgIf,
    ReactiveFormsModule,
    UiButton,
    SkFieldModule,
    SkLabelModule,
    SkMultiSelectInputModule,
    SkSelectInputModule,
    SkSelectOptionModule,
    UiForm,
    UiModal,
    UiBar,
    UiDateInput,
  ],
  declarations: [SkFilterComponent],
  exports: [SkFilterComponent],
})
export class SkFilterModule {}
