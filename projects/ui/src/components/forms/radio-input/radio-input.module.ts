import { NgIf } from '@angular/common';
import { NgModule } from '@angular/core';
import { SkInputErrorModule } from '../input-error';
import { SkRadioInputComponent } from './radio-input.component';

@NgModule({
  imports: [SkInputErrorModule, NgIf],
  declarations: [SkRadioInputComponent],
  exports: [SkRadioInputComponent],
})
export class SkRadioInputModule {}
