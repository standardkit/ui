import { NgIf } from '@angular/common';
import { NgModule } from '@angular/core';
import { SkIconModule } from '../../core';
import { SkAlertComponent } from './alert.component';

@NgModule({
  imports: [NgIf, SkIconModule],
  declarations: [SkAlertComponent],
  exports: [SkAlertComponent],
})
export class SkAlertModule {}
