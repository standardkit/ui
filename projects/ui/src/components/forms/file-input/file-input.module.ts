import { NgForOf, NgIf } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiButton, UiIcon } from '../../core';
import { SkInputErrorModule } from '../input-error';
import { SkFileInputComponent } from './file-input.component';

@NgModule({
  imports: [UiIcon, UiButton, NgIf, NgForOf, SkInputErrorModule],
  declarations: [SkFileInputComponent],
  exports: [SkFileInputComponent],
})
export class SkFileInputModule {}
