import { NgIf } from '@angular/common';
import { NgModule } from '@angular/core';
import { SkCardComponent } from './card.component';

@NgModule({
  imports: [NgIf],
  declarations: [SkCardComponent],
  exports: [SkCardComponent],
})
export class SkCardModule {}
