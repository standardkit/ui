import { NgIf, NgOptimizedImage } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SkHeaderComponent } from './header.component';

@NgModule({
  declarations: [SkHeaderComponent],
  exports: [SkHeaderComponent],
  imports: [RouterLink, NgOptimizedImage, NgIf],
})
export class SkHeaderModule {}
