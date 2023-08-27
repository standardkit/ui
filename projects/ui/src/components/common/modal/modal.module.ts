import { NgModule } from '@angular/core';
import { SkIconModule } from '../../core';
import { SkModalComponent } from './modal.component';

@NgModule({
  imports: [SkIconModule],
  declarations: [SkModalComponent],
  exports: [SkModalComponent],
})
export class SkModalModule {}
