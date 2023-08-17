import { NgModule } from '@angular/core';
import { HomePage } from './home';
import { SkAlertModule } from '@standardkit/ui';

@NgModule({
  imports: [SkAlertModule],
  declarations: [HomePage],
  exports: [HomePage],
})
export class PagesModule {}
