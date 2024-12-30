import { Component } from '@angular/core';
import { UiColumn, UiLink, UiRow, UiTopBar } from '@standardkit/ui';

@Component({
  imports: [UiTopBar, UiRow, UiColumn, UiLink],
  templateUrl: 'link.page.html',
})
export class LinkPage {}
