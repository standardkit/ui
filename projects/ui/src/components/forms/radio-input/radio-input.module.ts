import { NgIf } from '@angular/common';
import { NgModule } from '@angular/core';
import { InputErrorModule } from '../input-error';
import { SkRadioInputComponent } from './radio-input.component';

@NgModule({
  imports: [InputErrorModule, NgIf],
  declarations: [SkRadioInputComponent],
  exports: [SkRadioInputComponent],
})
export class SkRadioInputModule {}
