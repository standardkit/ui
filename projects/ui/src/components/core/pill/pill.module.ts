import { NgClass, NgIf } from '@angular/common';
import { NgModule } from '@angular/core';
import { SkIconModule } from '../icon';
import { SkPillComponent } from './pill.component';

@NgModule({
  declarations: [SkPillComponent],
  exports: [SkPillComponent],
  imports: [NgClass, NgIf, SkIconModule],
})
export class SkPillModule {}
