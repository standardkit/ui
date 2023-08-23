import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SkIconModule } from '../icon';
import { SkToggleComponent } from './toggle.component';

@NgModule({
  imports: [CommonModule, SkIconModule],
  declarations: [SkToggleComponent],
  exports: [SkToggleComponent],
})
export class SkToggleModule {}
