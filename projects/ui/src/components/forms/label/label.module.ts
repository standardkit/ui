import { NgIf } from '@angular/common';
import { NgModule } from '@angular/core';
import { SkLabelComponent } from './label.component';

@NgModule({
  imports: [NgIf],
  declarations: [SkLabelComponent],
  exports: [SkLabelComponent],
})
export class SkLabelModule {}
