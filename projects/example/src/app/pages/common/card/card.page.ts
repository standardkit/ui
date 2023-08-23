import { Component } from '@angular/core';
import { SkBreadcrumbInterface } from '@standardkit/ui';

@Component({ templateUrl: 'card.page.html' })
export class CardPage {
  public breadcrumbs: SkBreadcrumbInterface[] = [{ name: 'Common' }, { name: 'Card' }];
}
