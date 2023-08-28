import { NgIf } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SkInputErrorModule } from '../input-error';
import { SkPasswordInputComponent } from './password-input.component';

@NgModule({
  imports: [FormsModule, NgIf, SkInputErrorModule],
  declarations: [SkPasswordInputComponent],
  exports: [SkPasswordInputComponent],
})
export class SkPasswordInputModule {}
