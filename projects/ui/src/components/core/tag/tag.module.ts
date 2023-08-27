import { NgIf } from '@angular/common';
import { NgModule } from '@angular/core';
import { SkIconModule } from '../icon';
import { SkTagComponent } from './tag.component';

@NgModule({
  imports: [SkIconModule, NgIf],
  declarations: [SkTagComponent],
  exports: [SkTagComponent],
})
export class SkTagModule {}
