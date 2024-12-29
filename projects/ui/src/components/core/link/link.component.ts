import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-link',
  templateUrl: 'link.component.html',
  styleUrl: 'link.component.scss',
})
export class UiLink {
  @Input() public url: string = '';
  @Input() public opensNewTab: boolean = false;
  // TODO : Make routerlink compatible or internal-link component (RouterLinkWithHref)
}
