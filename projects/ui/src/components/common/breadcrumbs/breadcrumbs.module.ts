import { NgForOf, NgIf } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';
import { SkIconModule } from '../../core';
import { SkBreadcrumbsComponent } from './breadcrumbs.component';

@NgModule({
  declarations: [SkBreadcrumbsComponent],
  exports: [SkBreadcrumbsComponent],
  imports: [NgForOf, NgIf, RouterLinkWithHref, SkIconModule],
})
export class SkBreadcrumbsModule {}
