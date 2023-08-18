import { Component, Input } from '@angular/core';

@Component({
  selector: 'sk-link',
  templateUrl: 'link.component.html',
  styleUrls: ['link.component.scss'],
})
export class SkLinkComponent {
  @Input() public url: string = '';
  // TODO : Make routerlink compatible or internal-link component
  // TODO : Make open in same tab with something like a target input
}
