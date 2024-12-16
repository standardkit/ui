import { NgForOf, NgIf } from '@angular/common';
import { NgModule } from '@angular/core';
import { SkSegmentGroupModule, SkSegmentModule } from '../../common';
import { UiButton } from '../../core';
import { SkFilterModule } from '../filter';
import { SkPaginationModule } from '../pagination';
import { SkSearchModule } from '../search';
import { SkTableModule } from '../table';
import { SkDataTableComponent } from './data-table.component';

@NgModule({
  imports: [
    NgForOf,
    NgIf,
    UiButton,
    SkFilterModule,
    SkPaginationModule,
    SkSearchModule,
    SkSegmentGroupModule,
    SkSegmentModule,
    SkTableModule,
  ],
  declarations: [SkDataTableComponent],
  exports: [SkDataTableComponent],
})
export class SkDataTableModule {}
