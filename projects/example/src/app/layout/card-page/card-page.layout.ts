import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UiCardPage } from '@standardkit/ui';

@Component({
  imports: [UiCardPage, RouterOutlet],
  templateUrl: 'card-page.layout.html',
})
export class CardPageLayout {}
