import { NgIf } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputErrorModule } from '../input-error';
import { TextInputComponent } from './text-input.component';

@NgModule({
  declarations: [TextInputComponent],
  exports: [TextInputComponent],
  imports: [FormsModule, NgIf, InputErrorModule],
})
export class TextInputModule {}
