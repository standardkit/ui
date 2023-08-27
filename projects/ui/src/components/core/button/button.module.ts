import { NgIf } from '@angular/common';
import { NgModule } from '@angular/core';
import { SkIconModule } from '../icon';
import { SkButtonComponent } from './button.component';

@NgModule({
  imports: [SkIconModule, NgIf],
  declarations: [SkButtonComponent],
  exports: [SkButtonComponent],
})
export class SkButtonModule {}
