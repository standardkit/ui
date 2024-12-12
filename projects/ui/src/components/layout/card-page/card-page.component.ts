import { Component, Input } from '@angular/core';

@Component({
  selector: 'sk-card-page',
  templateUrl: 'card-page.component.html',
  styleUrls: ['card-page.component.scss'],
  standalone: false,
})
export class SkCardPageComponent {
  @Input() public logo?: string;
  @Input() public brand: string = '';
}
