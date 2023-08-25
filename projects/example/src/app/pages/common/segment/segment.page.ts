import { Component } from '@angular/core';
import { BreadcrumbInterface } from '@standardkit/ui';

@Component({ templateUrl: 'segment.page.html' })
export class SegmentPage {
  public breadcrumbs: BreadcrumbInterface[] = [{ name: 'Common' }, { name: 'Segment' }];
}
