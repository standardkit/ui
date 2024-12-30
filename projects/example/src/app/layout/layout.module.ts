import { NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  SkHeaderModule,
  SkSidebarModule,
  SkSidebarPageModule,
  SkUserMenuModule,
  UiButton,
  UiCardPage,
} from '@standardkit/ui';
import { CardPageLayout } from './card-page';
import { SidebarPageLayout } from './sidebar-page';

@NgModule({
  imports: [RouterOutlet, SkSidebarPageModule, SkSidebarModule, SkHeaderModule, UiButton, SkUserMenuModule, UiCardPage],
  declarations: [SidebarPageLayout, CardPageLayout],
  exports: [SidebarPageLayout, CardPageLayout],
})
export class LayoutModule {}
