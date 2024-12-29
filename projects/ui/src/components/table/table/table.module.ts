import { NgForOf, NgIf } from '@angular/common';
import { NgModule } from '@angular/core';
import { SkIconModule, SkPillModule, SkToggleModule, UiButton } from '../../core';
import { SkCheckboxInputModule } from '../../forms';
import { SkTableComponent } from './table.component';

@NgModule({
  imports: [NgForOf, NgIf, SkIconModule, SkPillModule, UiButton, SkCheckboxInputModule, SkToggleModule],
  declarations: [SkTableComponent],
  exports: [SkTableComponent],
})
export class SkTableModule {}
