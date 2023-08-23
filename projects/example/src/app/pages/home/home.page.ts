import { Component } from '@angular/core';
import { SkBreadcrumbInterface } from '@standardkit/ui';

@Component({ templateUrl: './home.page.html' })
export class HomePage {
  public breadcrumbs: SkBreadcrumbInterface[] = [
    { name: 'StandardKit' },
    { name: 'Example', route: '/core/link' },
    { name: 'Another one' },
  ];
}
