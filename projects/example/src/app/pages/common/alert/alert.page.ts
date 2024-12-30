import { Component } from '@angular/core';
import { UiAlert, UiBar, UiColumn, UiIcon, UiRow, UiTopBar } from '@standardkit/ui';

@Component({
  imports: [UiColumn, UiRow, UiTopBar, UiBar, UiAlert, UiIcon],
  templateUrl: 'alert.page.html',
})
export class AlertPage {}
