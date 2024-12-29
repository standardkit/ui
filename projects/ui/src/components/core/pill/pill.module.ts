import { NgClass, NgIf } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiIcon } from '../icon';
import { SkPillComponent } from './pill.component';

@NgModule({
  imports: [NgClass, NgIf, UiIcon],
  declarations: [SkPillComponent],
  exports: [SkPillComponent],
})
export class SkPillModule {}
