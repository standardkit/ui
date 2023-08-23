import { NgIf } from '@angular/common';
import { NgModule } from '@angular/core';
import { SkTopBarComponent } from './top-bar.component';

@NgModule({
  imports: [NgIf],
  declarations: [SkTopBarComponent],
  exports: [SkTopBarComponent],
})
export class SkTopBarModule {}
