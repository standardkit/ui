import { NgForOf, NgIf } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SkModalModule } from '../../common';
import { SkBarModule, SkButtonModule, SkPillModule } from '../../core';
import {
  SkDateInputModule,
  SkFieldModule,
  SkFormModule,
  SkLabelModule,
  SkMultiSelectInputModule,
  SkSelectInputModule,
  SkSelectOptionModule,
} from '../../forms';
import { SkFilterComponent } from './filter.component';

@NgModule({
  imports: [
    NgForOf,
    NgIf,
    ReactiveFormsModule,
    SkBarModule,
    SkButtonModule,
    SkDateInputModule,
    SkFieldModule,
    SkFormModule,
    SkLabelModule,
    SkModalModule,
    SkMultiSelectInputModule,
    SkPillModule,
    SkSelectInputModule,
    SkSelectOptionModule,
  ],
  declarations: [SkFilterComponent],
  exports: [SkFilterComponent],
})
export class SkFilterModule {}
