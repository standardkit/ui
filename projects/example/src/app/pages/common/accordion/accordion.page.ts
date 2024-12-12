import { Component } from '@angular/core';
import { BreadcrumbInterface } from '@standardkit/ui';

@Component({
  templateUrl: 'accordion.page.html',
  standalone: false,
})
export class AccordionPage {
  public breadcrumbs: BreadcrumbInterface[] = [{ name: 'Common' }, { name: 'Accordion' }];
}
