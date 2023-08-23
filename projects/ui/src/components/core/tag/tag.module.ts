import { NgIf } from '@angular/common';
import { NgModule } from '@angular/core';
import { SkIconModule } from '../icon';
import { TagComponent } from './tag.component';

@NgModule({
  declarations: [TagComponent],
  exports: [TagComponent],
  imports: [SkIconModule, NgIf],
})
export class TagModule {}
