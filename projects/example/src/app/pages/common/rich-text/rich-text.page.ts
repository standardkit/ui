import { Component } from '@angular/core';
import { UiCard, UiColumn, UiRichText, UiRow, UiTopBar } from '@standardkit/ui';

@Component({
  imports: [UiTopBar, UiRow, UiColumn, UiCard, UiRichText],
  templateUrl: 'rich-text.page.html',
})
export class RichTextPage {}
