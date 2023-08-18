import { NgIf } from '@angular/common';
import { NgModule } from '@angular/core';
import { SkBarComponent } from './bar.component';

@NgModule({
  declarations: [SkBarComponent],
  exports: [SkBarComponent],
  imports: [NgIf],
})
export class SkBarModule {}
