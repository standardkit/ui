import { Component } from '@angular/core';
import { BreadcrumbInterface } from '@standardkit/ui';

@Component({
  templateUrl: 'card.page.html',
  standalone: false,
})
export class CardPage {
  public breadcrumbs: BreadcrumbInterface[] = [{ name: 'Common' }, { name: 'Card' }];
}
