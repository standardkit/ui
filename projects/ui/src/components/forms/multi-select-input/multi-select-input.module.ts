import { NgForOf, NgIf } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SkBarModule, SkButtonModule, SkIconModule, SkTagModule } from '../../core';
import { SkInputErrorModule } from '../input-error';
import { SkSelectOptionModule } from '../select-option';
import { SkSelectSearchModule } from '../select-search';
import { SkMultiSelectInputComponent } from './multi-select-input.component';

@NgModule({
  imports: [
    FormsModule,
    NgIf,
    SkInputErrorModule,
    SkSelectOptionModule,
    SkIconModule,
    NgForOf,
    SkTagModule,
    SkButtonModule,
    SkBarModule,
    SkSelectSearchModule,
  ],
  declarations: [SkMultiSelectInputComponent],
  exports: [SkMultiSelectInputComponent],
})
export class SkMultiSelectInputModule {}
