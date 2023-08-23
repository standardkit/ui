import { Component } from '@angular/core';
import { SkBreadcrumbInterface } from '@standardkit/ui';

@Component({ templateUrl: 'accordion.page.html' })
export class AccordionPage {
  public breadcrumbs: SkBreadcrumbInterface[] = [{ name: 'Common' }, { name: 'Accordion' }];
}
