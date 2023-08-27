import { NgClass } from '@angular/common';
import { NgModule } from '@angular/core';
import { SkIconComponent } from './icon.component';

@NgModule({
  imports: [NgClass],
  declarations: [SkIconComponent],
  exports: [SkIconComponent],
})
export class SkIconModule {}
