import { Component } from '@angular/core';
import { SkBreadcrumbInterface } from '@standardkit/ui';

@Component({ templateUrl: 'segment.page.html' })
export class SegmentPage {
  public breadcrumbs: SkBreadcrumbInterface[] = [{ name: 'Common' }, { name: 'Segment' }];
}
