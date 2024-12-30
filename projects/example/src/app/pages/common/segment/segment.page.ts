import { Component } from '@angular/core';
import { BreadcrumbInterface, UiBreadcrumbs, UiSegment, UiSegmentGroup, UiTopBar } from '@standardkit/ui';

@Component({
  imports: [UiTopBar, UiBreadcrumbs, UiSegmentGroup, UiSegment],
  templateUrl: 'segment.page.html',
})
export class SegmentPage {
  public breadcrumbs: BreadcrumbInterface[] = [{ name: 'Common' }, { name: 'Segment' }];
}
