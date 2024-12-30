import { NgModule } from '@angular/core';
import { SkRowModule, SkTopBarModule, UiBottomBar, UiBreadcrumbs, UiButton, UiColumn } from '@standardkit/ui';
import { HomePage } from './home.page';

@NgModule({
  imports: [UiBottomBar, UiButton, SkRowModule, SkTopBarModule, UiBreadcrumbs, UiColumn],
  declarations: [HomePage],
  exports: [HomePage],
})
export class HomeModule {}
