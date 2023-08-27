import { NgIf, NgOptimizedImage } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SkHeaderComponent } from './header.component';

@NgModule({
  imports: [RouterLink, NgOptimizedImage, NgIf],
  declarations: [SkHeaderComponent],
  exports: [SkHeaderComponent],
})
export class SkHeaderModule {}
