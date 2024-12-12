import { Component, Input } from '@angular/core';

@Component({
  selector: 'sk-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss'],
  standalone: false,
})
export class SkHeaderComponent {
  @Input() public logo?: string;
  @Input() public brand: string = '';

  // TODO : Add collapse on mobile
}
