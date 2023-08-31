import { NgIf, NgOptimizedImage } from '@angular/common';
import { NgModule } from '@angular/core';
import { SkCardPageComponent } from './card-page.component';

@NgModule({
  imports: [NgIf, NgOptimizedImage],
  declarations: [SkCardPageComponent],
  exports: [SkCardPageComponent],
})
export class SkCardPageModule {}
