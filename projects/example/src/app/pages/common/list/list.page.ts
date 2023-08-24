import { Component } from '@angular/core';
import { SkBreadcrumbInterface, SkListItemInterface } from '@standardkit/ui';

@Component({ templateUrl: 'list.page.html' })
export class ListPage {
  public listItems: SkListItemInterface[] = [
    { icon: 'bolt', name: 'Check the electricity', action: (): void => {}, actionIcon: 'bolt' },
    { icon: 'skull', name: 'Do something else', action: (): void => {} },
    { icon: 'bolt', name: 'Check the electricity', action: (): void => {}, actionIcon: 'close' },
    { icon: 'bolt', name: 'Check the electricity', action: (): void => {} },
    { icon: 'bolt', name: 'Check the electricity', action: (): void => {} },
  ];

  public breadcrumbs: SkBreadcrumbInterface[] = [{ name: 'Common' }, { name: 'List' }];
}
