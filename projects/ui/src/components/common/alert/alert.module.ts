import { NgIf } from '@angular/common';
import { NgModule } from '@angular/core';
import { SkAlertComponent } from './alert.component';

@NgModule({
  imports: [NgIf],
  declarations: [SkAlertComponent],
  exports: [SkAlertComponent],
})
export class SkAlertModule {}
