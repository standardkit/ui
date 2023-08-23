import { NgModule } from '@angular/core';
import { BarPage } from './bar';
import { ButtonPage } from './button';
import { IconPage } from './icon';
import { LinkPage } from './link';
import { TagPage } from './tag';
import { TagModule, SkButtonModule, SkBarModule, SkIconModule, SkLinkModule } from '@standardkit/ui';

const PAGES: any[] = [BarPage, IconPage, ButtonPage, LinkPage, TagPage];

@NgModule({
  imports: [SkBarModule, SkIconModule, SkButtonModule, SkLinkModule, TagModule],
  declarations: PAGES,
  exports: PAGES,
})
export class CoreModule {}
