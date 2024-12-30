import { Component } from '@angular/core';
import {
  BreadcrumbInterface,
  UiAccordion,
  UiAccordionItem,
  UiBar,
  UiBreadcrumbs,
  UiButton,
  UiCard,
  UiColumn,
  UiLink,
  UiPill,
  UiRow,
  UiTopBar,
} from '@standardkit/ui';

@Component({
  imports: [
    UiTopBar,
    UiBreadcrumbs,
    UiRow,
    UiColumn,
    UiCard,
    UiPill,
    UiButton,
    UiAccordion,
    UiAccordionItem,
    UiBar,
    UiLink,
  ],
  templateUrl: 'card.page.html',
})
export class CardPage {
  public breadcrumbs: BreadcrumbInterface[] = [{ name: 'Common' }, { name: 'Card' }];
}
