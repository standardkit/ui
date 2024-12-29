import { NgForOf, NgIf } from '@angular/common';
import { NgModule } from '@angular/core';
import { SkToggleModule, UiButton, UiIcon, UiPill } from '../../core';
import { SkCheckboxInputModule } from '../../forms';
import { SkTableComponent } from './table.component';

@NgModule({
  imports: [NgForOf, NgIf, UiIcon, UiButton, SkCheckboxInputModule, SkToggleModule, UiPill],
  declarations: [SkTableComponent],
  exports: [SkTableComponent],
})
export class SkTableModule {}
