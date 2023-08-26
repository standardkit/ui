import { NgIf } from '@angular/common';
import { NgModule } from '@angular/core';
import { LabelComponent } from './label.component';

@NgModule({
  declarations: [LabelComponent],
  exports: [LabelComponent],
  imports: [NgIf],
})
export class LabelModule {}
