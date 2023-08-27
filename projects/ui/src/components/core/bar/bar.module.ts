import { NgIf } from '@angular/common';
import { NgModule } from '@angular/core';
import { SkBarComponent } from './bar.component';

@NgModule({
  imports: [NgIf],
  declarations: [SkBarComponent],
  exports: [SkBarComponent],
})
export class SkBarModule {}
