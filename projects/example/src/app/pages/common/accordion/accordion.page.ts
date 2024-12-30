import { Component } from '@angular/core';
import {
  BreadcrumbInterface,
  UiAccordion,
  UiAccordionItem,
  UiBreadcrumbs,
  UiCard,
  UiColumn,
  UiRow,
  UiTopBar,
} from '@standardkit/ui';

@Component({
  imports: [UiTopBar, UiBreadcrumbs, UiRow, UiColumn, UiCard, UiAccordion, UiAccordionItem],
  templateUrl: 'accordion.page.html',
})
export class AccordionPage {
  public breadcrumbs: BreadcrumbInterface[] = [{ name: 'Common' }, { name: 'Accordion' }];
}
