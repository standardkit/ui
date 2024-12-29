import { NgIf } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiIcon } from '../icon';
import { SkTagComponent } from './tag.component';

@NgModule({
  imports: [NgIf, UiIcon],
  declarations: [SkTagComponent],
  exports: [SkTagComponent],
})
export class SkTagModule {}
