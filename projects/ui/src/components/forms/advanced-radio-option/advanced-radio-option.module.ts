import { NgIf } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiIcon } from '../../core';
import { SkAdvancedRadioOptionComponent } from './advanced-radio-option.component';

@NgModule({
  imports: [UiIcon, NgIf],
  declarations: [SkAdvancedRadioOptionComponent],
  exports: [SkAdvancedRadioOptionComponent],
})
export class SkAdvancedRadioOptionModule {}
