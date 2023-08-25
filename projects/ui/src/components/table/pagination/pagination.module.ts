import { NgForOf, NgIf } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SkIconModule } from '../../core';
import { SkPaginationComponent } from './pagination.component';

@NgModule({
  imports: [FormsModule, SkIconModule, NgIf, NgForOf],
  declarations: [SkPaginationComponent],
  exports: [SkPaginationComponent],
})
export class SkPaginationModule {}
