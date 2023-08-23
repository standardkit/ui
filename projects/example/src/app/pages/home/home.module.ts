import { NgModule } from '@angular/core';
import { HomePage } from './home.page';
import { SkBottomBarModule, SkBreadcrumbsModule, SkButtonModule, SkTopBarModule } from '@standardkit/ui';

@NgModule({
  imports: [SkTopBarModule, SkButtonModule, SkBottomBarModule, SkBreadcrumbsModule],
  declarations: [HomePage],
  exports: [HomePage],
})
export class HomeModule {}
