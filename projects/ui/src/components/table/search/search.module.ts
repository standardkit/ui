import { NgIf } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SkIconModule, UiButton } from '../../core';
import { SkSearchComponent } from './search.component';

@NgModule({
  imports: [UiButton, SkIconModule, FormsModule, NgIf],
  declarations: [SkSearchComponent],
  exports: [SkSearchComponent],
})
export class SkSearchModule {}
