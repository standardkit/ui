import { NgModule } from '@angular/core';
import { BarPage } from './bar';
import { IconPage } from './icon';
import { SkBarModule, SkIconModule } from '@standardkit/ui';

const PAGES: any[] = [BarPage, IconPage];

@NgModule({
  imports: [SkBarModule, SkIconModule],
  declarations: PAGES,
  exports: PAGES,
})
export class CoreModule {}
