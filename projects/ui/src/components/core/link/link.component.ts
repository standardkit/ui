import { Component, Input } from '@angular/core';

@Component({
  selector: 'sk-link',
  templateUrl: 'link.component.html',
  styleUrls: ['link.component.scss'],
})
export class SkLinkComponent {
  @Input() public url: string = '';
  @Input() public opensNewTab: boolean = false;
  // TODO : Make routerlink compatible or internal-link component (RouterLinkWithHref)
}
