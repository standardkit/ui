import { NgIf } from '@angular/common';
import { NgModule } from '@angular/core';
import { SkIconModule } from '../../core';
import { SkRadioOptionComponent } from './radio-option.component';

@NgModule({
  imports: [SkIconModule, NgIf],
  declarations: [SkRadioOptionComponent],
  exports: [SkRadioOptionComponent],
})
export class SkRadioOptionModule {}
