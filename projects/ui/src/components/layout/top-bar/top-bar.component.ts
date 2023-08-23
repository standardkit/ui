import { Component, Input } from '@angular/core';

@Component({
  selector: 'sk-top-bar',
  templateUrl: 'top-bar.component.html',
  styleUrls: ['top-bar.component.scss'],
})
export class TopBarComponent {
  @Input() public name?: string;
  @Input() public isFullWidth: boolean = false;
}
