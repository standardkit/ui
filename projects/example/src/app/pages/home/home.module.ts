import { NgModule } from '@angular/core';
import { SkTopBarModule, UiBottomBar, UiBreadcrumbs, UiButton, UiColumn, UiJumbotron, UiRow } from '@standardkit/ui';
import { HomePage } from './home.page';

@NgModule({
  imports: [UiBottomBar, UiButton, UiRow, SkTopBarModule, UiBreadcrumbs, UiColumn, UiJumbotron],
  declarations: [HomePage],
  exports: [HomePage],
})
export class HomeModule {}
