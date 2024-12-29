import { NgForOf, NgIf } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { UiModal } from '../../common';
import { SkPillModule, UiBar, UiButton } from '../../core';
import {
  SkDateInputModule,
  SkFieldModule,
  SkLabelModule,
  SkMultiSelectInputModule,
  SkSelectInputModule,
  SkSelectOptionModule,
  UiForm,
} from '../../forms';
import { SkFilterComponent } from './filter.component';

@NgModule({
  imports: [
    NgForOf,
    NgIf,
    ReactiveFormsModule,
    UiButton,
    SkDateInputModule,
    SkFieldModule,
    SkLabelModule,
    SkMultiSelectInputModule,
    SkPillModule,
    SkSelectInputModule,
    SkSelectOptionModule,
    UiForm,
    UiModal,
    UiBar,
  ],
  declarations: [SkFilterComponent],
  exports: [SkFilterComponent],
})
export class SkFilterModule {}
