import { Component } from '@angular/core';
import { BreadcrumbInterface } from '@standardkit/ui';

@Component({
  templateUrl: './home.page.html',
  standalone: false,
})
export class HomePage {
  public breadcrumbs: BreadcrumbInterface[] = [
    { name: 'StandardKit' },
    { name: 'Example', route: '/core/link' },
    { name: 'Another one' },
  ];
}
