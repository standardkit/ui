import { NgModule } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SkSubNavigationItemComponent } from './sub-navigation-item.component';

@NgModule({
  declarations: [SkSubNavigationItemComponent],
  exports: [SkSubNavigationItemComponent],
  imports: [RouterLink, RouterLinkActive],
})
export class SkSubNavigationItemModule {}
