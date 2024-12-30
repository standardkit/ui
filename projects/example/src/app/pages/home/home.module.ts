import { NgModule } from '@angular/core';
import { UiBottomBar, UiBreadcrumbs, UiButton, UiColumn, UiJumbotron, UiRow, UiTopBar } from '@standardkit/ui';
import { HomePage } from './home.page';

@NgModule({
  imports: [UiBottomBar, UiButton, UiRow, UiTopBar, UiBreadcrumbs, UiColumn, UiJumbotron],
  declarations: [HomePage],
  exports: [HomePage],
})
export class HomeModule {}
