import { NgModule } from '@angular/core';
import { BarPage } from './bar';
import { ButtonPage } from './button';
import { IconPage } from './icon';
import { SkButtonModule, SkBarModule, SkIconModule } from '@standardkit/ui';

const PAGES: any[] = [BarPage, IconPage, ButtonPage];

@NgModule({
  imports: [SkBarModule, SkIconModule, SkButtonModule],
  declarations: PAGES,
  exports: PAGES,
})
export class CoreModule {}
