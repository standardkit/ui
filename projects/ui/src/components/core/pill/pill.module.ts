import { NgClass, NgIf } from '@angular/common';
import { NgModule } from '@angular/core';
import { SkIconModule } from '../icon';
import { PillComponent } from './pill.component';

@NgModule({
  declarations: [PillComponent],
  exports: [PillComponent],
  imports: [NgClass, NgIf, SkIconModule],
})
export class PillModule {}
