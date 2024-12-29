import { NgForOf, NgIf } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UiIcon } from '../../core';
import { SkPaginationComponent } from './pagination.component';

@NgModule({
  imports: [FormsModule, UiIcon, NgIf, NgForOf],
  declarations: [SkPaginationComponent],
  exports: [SkPaginationComponent],
})
export class SkPaginationModule {}
