import { NgForOf, NgIf } from '@angular/common';
import { NgModule } from '@angular/core';
import { SkPillModule, SkToggleModule, UiButton, UiIcon } from '../../core';
import { SkCheckboxInputModule } from '../../forms';
import { SkTableComponent } from './table.component';

@NgModule({
  imports: [NgForOf, NgIf, UiIcon, SkPillModule, UiButton, SkCheckboxInputModule, SkToggleModule],
  declarations: [SkTableComponent],
  exports: [SkTableComponent],
})
export class SkTableModule {}
