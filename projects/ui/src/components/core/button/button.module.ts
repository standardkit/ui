import { NgIf } from '@angular/common';
import { NgModule } from '@angular/core';
import { SkIconModule } from '../icon';
import { SkButtonComponent } from './button.component';

@NgModule({
  declarations: [SkButtonComponent],
  exports: [SkButtonComponent],
  imports: [SkIconModule, NgIf],
})
export class SkButtonModule {}
