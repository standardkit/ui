import { NgForOf, NgIf } from '@angular/common';
import { NgModule } from '@angular/core';
import { SkButtonModule, SkIconModule } from '../../core';
import { SkInputErrorModule } from '../input-error';
import { SkFileInputComponent } from './file-input.component';

@NgModule({
  imports: [SkIconModule, SkButtonModule, NgIf, NgForOf, SkInputErrorModule],
  declarations: [SkFileInputComponent],
  exports: [SkFileInputComponent],
})
export class SkFileInputModule {}
