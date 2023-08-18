import { NgModule } from '@angular/core';
import { BarPage } from './bar';
import { ButtonPage } from './button';
import { IconPage } from './icon';
import { LinkPage } from './link';
import { SkButtonModule, SkBarModule, SkIconModule, SkLinkModule } from '@standardkit/ui';

const PAGES: any[] = [BarPage, IconPage, ButtonPage, LinkPage];

@NgModule({
  imports: [SkBarModule, SkIconModule, SkButtonModule, SkLinkModule],
  declarations: PAGES,
  exports: PAGES,
})
export class CoreModule {}
