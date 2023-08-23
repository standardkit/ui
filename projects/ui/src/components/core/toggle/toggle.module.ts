import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SkIconModule } from '../icon';
import { ToggleComponent } from './toggle.component';

@NgModule({
  imports: [CommonModule, SkIconModule],
  declarations: [ToggleComponent],
  exports: [ToggleComponent],
})
export class ToggleModule {}
