import { NgIf } from '@angular/common';
import { NgModule } from '@angular/core';
import { SkButtonModule, SkIconModule } from '../../core';
import { SkStatisticsCardComponent } from './statistics-card.component';

@NgModule({
  imports: [SkIconModule, SkButtonModule, NgIf],
  declarations: [SkStatisticsCardComponent],
  exports: [SkStatisticsCardComponent],
})
export class SkStatisticsCardModule {}
