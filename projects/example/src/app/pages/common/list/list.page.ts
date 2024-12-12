import { Component } from '@angular/core';
import { BreadcrumbInterface, ListItemInterface } from '@standardkit/ui';

@Component({
  templateUrl: 'list.page.html',
  standalone: false,
})
export class ListPage {
  public listItems: ListItemInterface[] = [
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    { icon: 'bolt', name: 'Check the electricity', action: (): void => {}, actionIcon: 'bolt' },
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    { icon: 'skull', name: 'Do something else', action: (): void => {} },
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    { icon: 'bolt', name: 'Check the electricity', action: (): void => {}, actionIcon: 'close' },
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    { icon: 'bolt', name: 'Check the electricity', action: (): void => {} },
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    { icon: 'bolt', name: 'Check the electricity', action: (): void => {} },
  ];

  public breadcrumbs: BreadcrumbInterface[] = [{ name: 'Common' }, { name: 'List' }];
}
