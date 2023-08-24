import { NgForOf } from '@angular/common';
import { NgModule } from '@angular/core';
import { SkIconModule } from '../../core';
import { SkListComponent } from './list.component';

@NgModule({
  imports: [SkIconModule, NgForOf],
  declarations: [SkListComponent],
  exports: [SkListComponent],
})
export class SkListModule {}
