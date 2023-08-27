import { NgIf } from '@angular/common';
import { NgModule } from '@angular/core';
import { SkIconModule } from '../../core';
import { SkAdvancedRadioOptionComponent } from './advanced-radio-option.component';

@NgModule({
  imports: [SkIconModule, NgIf],
  declarations: [SkAdvancedRadioOptionComponent],
  exports: [SkAdvancedRadioOptionComponent],
})
export class SkAdvancedRadioOptionModule {}
