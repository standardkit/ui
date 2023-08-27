import { NgClass, NgIf } from '@angular/common';
import { NgModule } from '@angular/core';
import { SkIconModule } from '../icon';
import { SkPillComponent } from './pill.component';

@NgModule({
  imports: [NgClass, NgIf, SkIconModule],
  declarations: [SkPillComponent],
  exports: [SkPillComponent],
})
export class SkPillModule {}
