import { NgForOf, NgIf } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SkIconModule } from '../../core';
import { SkInputErrorModule } from '../input-error';
import { SkSelectOptionModule } from '../select-option';
import { SkSelectSearchModule } from '../select-search';
import { SkSelectInputComponent } from './select-input.component';

@NgModule({
  imports: [FormsModule, NgIf, SkInputErrorModule, SkSelectOptionModule, SkIconModule, SkSelectSearchModule, NgForOf],
  declarations: [SkSelectInputComponent],
  exports: [SkSelectInputComponent],
})
export class SkSelectInputModule {}
