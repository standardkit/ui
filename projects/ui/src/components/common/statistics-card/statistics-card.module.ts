import { NgIf } from '@angular/common';
import { NgModule } from '@angular/core';
import { SkIconModule, UiButton } from '../../core';
import { SkStatisticsCardComponent } from './statistics-card.component';

@NgModule({
  imports: [SkIconModule, UiButton, NgIf],
  declarations: [SkStatisticsCardComponent],
  exports: [SkStatisticsCardComponent],
})
export class SkStatisticsCardModule {}
