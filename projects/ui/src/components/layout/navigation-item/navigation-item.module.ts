import { NgForOf, NgIf } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterLinkWithHref } from '@angular/router';
import { UiIcon } from '../../core';
import { SkSubNavigationItemModule } from '../sub-navigation-item';
import { SkNavigationItemComponent } from './navigation-item.component';

@NgModule({
  imports: [UiIcon, RouterLinkWithHref, RouterLinkActive, NgIf, SkSubNavigationItemModule, NgForOf, RouterLink],
  declarations: [SkNavigationItemComponent],
  exports: [SkNavigationItemComponent],
})
export class SkNavigationItemModule {}
