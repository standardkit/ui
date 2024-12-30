import { NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SkSidebarPageModule, SkUserMenuModule, UiButton, UiCardPage, UiHeader, UiSidebar } from '@standardkit/ui';
import { CardPageLayout } from './card-page';
import { SidebarPageLayout } from './sidebar-page';

@NgModule({
  imports: [RouterOutlet, SkSidebarPageModule, UiSidebar, UiButton, SkUserMenuModule, UiCardPage, UiHeader],
  declarations: [SidebarPageLayout, CardPageLayout],
  exports: [SidebarPageLayout, CardPageLayout],
})
export class LayoutModule {}
