import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiIcon } from '../icon';
import { SkToggleComponent } from './toggle.component';

@NgModule({
  imports: [CommonModule, UiIcon],
  declarations: [SkToggleComponent],
  exports: [SkToggleComponent],
})
export class SkToggleModule {}
