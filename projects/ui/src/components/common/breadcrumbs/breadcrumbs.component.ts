import { Component, Input } from '@angular/core';
import { SkBreadcrumbInterface } from './breadcrumb.interface';

@Component({
  selector: 'sk-breadcrumbs',
  templateUrl: 'breadcrumbs.component.html',
  styleUrls: ['breadcrumbs.component.scss'],
})
export class SkBreadcrumbsComponent {
  @Input() public breadcrumbs: SkBreadcrumbInterface[] = [];
}
