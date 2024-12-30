import { Component } from '@angular/core';
import { UiBar, UiButton, UiColumn, UiRow, UiTopBar } from '@standardkit/ui';

@Component({
  imports: [UiTopBar, UiRow, UiColumn, UiBar, UiButton],
  templateUrl: 'button.page.html',
})
export class ButtonPage {}
