import { NgIf } from '@angular/common';
import { NgModule } from '@angular/core';
import { SkTabComponent } from './tab.component';

// TODO : Add tab group and export together in 1 module

@NgModule({
  imports: [NgIf],
  declarations: [SkTabComponent],
  exports: [SkTabComponent],
})
export class SkTabModule {}
