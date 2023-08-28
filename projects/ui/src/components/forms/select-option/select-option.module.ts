import { NgIf } from '@angular/common';
import { NgModule } from '@angular/core';
import { SkIconModule } from '../../core';
import { SkSelectOptionComponent } from './select-option.component';

@NgModule({
  imports: [SkIconModule, NgIf],
  declarations: [SkSelectOptionComponent],
  exports: [SkSelectOptionComponent],
})
export class SkSelectOptionModule {}
