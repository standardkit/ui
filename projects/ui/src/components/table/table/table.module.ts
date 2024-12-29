import { NgForOf, NgIf } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiButton, UiIcon, UiPill, UiToggle } from '../../core';
import { UiCheckboxInput } from '../../forms';
import { SkTableComponent } from './table.component';

@NgModule({
  imports: [NgForOf, NgIf, UiIcon, UiButton, UiCheckboxInput, UiPill, UiToggle],
  declarations: [SkTableComponent],
  exports: [SkTableComponent],
})
export class SkTableModule {}
