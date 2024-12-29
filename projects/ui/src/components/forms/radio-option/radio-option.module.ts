import { NgIf } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiIcon } from '../../core';
import { SkRadioOptionComponent } from './radio-option.component';

@NgModule({
  imports: [UiIcon, NgIf],
  declarations: [SkRadioOptionComponent],
  exports: [SkRadioOptionComponent],
})
export class SkRadioOptionModule {}
