import { NgForOf, NgIf } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterLinkActive, RouterLinkWithHref } from '@angular/router';
import { SkIconModule } from '../../core';
import { SkNavigationItemModule } from '../navigation-item';
import { SkSidebarComponent } from './sidebar.component';

@NgModule({
  imports: [NgForOf, SkIconModule, RouterLinkWithHref, RouterLinkActive, NgIf, SkNavigationItemModule],
  declarations: [SkSidebarComponent],
  exports: [SkSidebarComponent],
})
export class SkSidebarModule {}
