import { NgForOf, NgIf } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SkModalModule } from '../../common';
import { SkBarModule, SkPillModule, UiButton } from '../../core';
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
    SkBarModule,
    UiButton,
    SkDateInputModule,
    SkFieldModule,
    SkLabelModule,
    SkModalModule,
    SkMultiSelectInputModule,
    SkPillModule,
    SkSelectInputModule,
    SkSelectOptionModule,
    UiForm,
  ],
  declarations: [SkFilterComponent],
  exports: [SkFilterComponent],
})
export class SkFilterModule {}
