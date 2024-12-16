import { NgForOf, NgIf } from '@angular/common';
import { NgModule } from '@angular/core';
import { SkIconModule, UiButton } from '../../core';
import { SkInputErrorModule } from '../input-error';
import { SkFileInputComponent } from './file-input.component';

@NgModule({
  imports: [SkIconModule, UiButton, NgIf, NgForOf, SkInputErrorModule],
  declarations: [SkFileInputComponent],
  exports: [SkFileInputComponent],
})
export class SkFileInputModule {}
