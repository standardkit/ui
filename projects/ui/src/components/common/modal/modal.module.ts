import { NgModule } from '@angular/core';
import { SkIconModule } from '../../core';
import { SkModalComponent } from './modal.component';

@NgModule({
  declarations: [SkModalComponent],
  exports: [SkModalComponent],
  imports: [SkIconModule],
})
export class SkModalModule {}
