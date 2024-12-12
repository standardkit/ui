import { Component, Input } from '@angular/core';
import { BreadcrumbInterface } from './breadcrumb.interface';

@Component({
  selector: 'sk-breadcrumbs',
  templateUrl: 'breadcrumbs.component.html',
  styleUrls: ['breadcrumbs.component.scss'],
  standalone: false,
})
export class SkBreadcrumbsComponent {
  @Input() public breadcrumbs: BreadcrumbInterface[] = [];
}
