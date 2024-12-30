import { NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UiButton, UiCardPage, UiHeader, UiSidebar, UiSidebarPage, UiUserMenu } from '@standardkit/ui';
import { CardPageLayout } from './card-page';
import { SidebarPageLayout } from './sidebar-page';

@NgModule({
  imports: [RouterOutlet, UiSidebar, UiButton, UiUserMenu, UiCardPage, UiHeader, UiSidebarPage],
  declarations: [SidebarPageLayout, CardPageLayout],
  exports: [SidebarPageLayout, CardPageLayout],
})
export class LayoutModule {}
