import { NgModule } from '@angular/core';
import { BarPage } from './bar';
import { SkBarModule } from '@standardkit/ui';

const PAGES: any[] = [BarPage];

@NgModule({
  imports: [SkBarModule],
  declarations: PAGES,
  exports: PAGES,
})
export class CoreModule {}
