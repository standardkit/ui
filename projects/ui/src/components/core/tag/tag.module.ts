import { NgIf } from '@angular/common';
import { NgModule } from '@angular/core';
import { SkIconModule } from '../icon';
import { SkTagComponent } from './tag.component';

@NgModule({
  declarations: [SkTagComponent],
  exports: [SkTagComponent],
  imports: [SkIconModule, NgIf],
})
export class SkTagModule {}
