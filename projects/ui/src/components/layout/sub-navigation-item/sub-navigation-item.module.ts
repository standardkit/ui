import { NgModule } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SkSubNavigationItemComponent } from './sub-navigation-item.component';

@NgModule({
  imports: [RouterLink, RouterLinkActive],
  declarations: [SkSubNavigationItemComponent],
  exports: [SkSubNavigationItemComponent],
})
export class SkSubNavigationItemModule {}
