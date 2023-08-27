import { NgForOf, NgIf } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';
import { SkIconModule } from '../../core';
import { SkBreadcrumbsComponent } from './breadcrumbs.component';

@NgModule({
  imports: [NgForOf, NgIf, RouterLinkWithHref, SkIconModule],
  declarations: [SkBreadcrumbsComponent],
  exports: [SkBreadcrumbsComponent],
})
export class SkBreadcrumbsModule {}
