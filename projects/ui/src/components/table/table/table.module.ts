import { NgForOf, NgIf } from '@angular/common';
import { NgModule } from '@angular/core';
import { SkAlertModule } from '../../common';
import { SkButtonModule, SkIconModule, SkPillModule, SkToggleModule } from '../../core';
import { SkCheckboxInputModule } from '../../forms';
import { SkTableComponent } from './table.component';

@NgModule({
  imports: [
    NgForOf,
    NgIf,
    SkIconModule,
    SkPillModule,
    SkButtonModule,
    SkCheckboxInputModule,
    SkAlertModule,
    SkToggleModule,
  ],
  declarations: [SkTableComponent],
  exports: [SkTableComponent],
})
export class SkTableModule {}
