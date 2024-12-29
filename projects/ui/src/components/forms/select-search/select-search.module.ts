import { NgIf } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UiIcon } from '../../core';
import { SkSelectSearchComponent } from './select-search.component';

@NgModule({
  imports: [UiIcon, FormsModule, NgIf],
  declarations: [SkSelectSearchComponent],
  exports: [SkSelectSearchComponent],
})
export class SkSelectSearchModule {}
