import { NgForOf, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';
import { UiIcon } from '../../core';
import { BreadcrumbInterface } from './breadcrumb.interface';

@Component({
  selector: 'ui-breadcrumbs',
  templateUrl: 'breadcrumbs.component.html',
  styleUrl: 'breadcrumbs.component.scss',
  imports: [NgForOf, NgIf, RouterLinkWithHref, UiIcon],
})
export class UiBreadcrumbs {
  @Input() public breadcrumbs: BreadcrumbInterface[] = [];
}
