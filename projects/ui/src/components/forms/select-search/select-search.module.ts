import { NgIf } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SkIconModule } from '../../core';
import { SkSelectSearchComponent } from './select-search.component';

@NgModule({
  imports: [SkIconModule, FormsModule, NgIf],
  declarations: [SkSelectSearchComponent],
  exports: [SkSelectSearchComponent],
})
export class SkSelectSearchModule {}
