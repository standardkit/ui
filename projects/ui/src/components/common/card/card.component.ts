import { Component, Input } from '@angular/core';

@Component({
  selector: 'sk-card',
  templateUrl: 'card.component.html',
  styleUrls: ['card.component.scss'],
  standalone: false,
})
export class SkCardComponent {
  @Input() public name?: string;
}
