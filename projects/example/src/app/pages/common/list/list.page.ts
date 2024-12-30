import { Component } from '@angular/core';
import {
  BreadcrumbInterface,
  ListItemInterface,
  UiBreadcrumbs,
  UiCard,
  UiColumn,
  UiList,
  UiRow,
  UiTopBar,
} from '@standardkit/ui';

@Component({
  imports: [UiRow, UiColumn, UiCard, UiList, UiBreadcrumbs, UiTopBar],
  templateUrl: 'list.page.html',
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
