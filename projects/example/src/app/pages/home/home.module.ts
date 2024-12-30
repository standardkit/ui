import { NgModule } from '@angular/core';
import {
  SkJumbotronModule,
  SkRowModule,
  SkTopBarModule,
  UiBottomBar,
  UiBreadcrumbs,
  UiButton,
  UiColumn,
} from '@standardkit/ui';
import { HomePage } from './home.page';

@NgModule({
  imports: [UiBottomBar, UiButton, SkJumbotronModule, SkRowModule, SkTopBarModule, UiBreadcrumbs, UiColumn],
  declarations: [HomePage],
  exports: [HomePage],
})
export class HomeModule {}
