import { NgClass } from '@angular/common';
import { NgModule } from '@angular/core';
import { SkIconComponent } from './icon.component';

@NgModule({
  declarations: [SkIconComponent],
  exports: [SkIconComponent],
  imports: [NgClass],
})
export class SkIconModule {}
