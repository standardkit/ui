import { NgIf } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiIcon } from '../../core';
import { SkSelectOptionComponent } from './select-option.component';

@NgModule({
  imports: [UiIcon, NgIf],
  declarations: [SkSelectOptionComponent],
  exports: [SkSelectOptionComponent],
})
export class SkSelectOptionModule {}
