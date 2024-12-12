import { Component, Input } from '@angular/core';

@Component({
  selector: 'sk-jumbotron',
  templateUrl: 'jumbotron.component.html',
  styleUrls: ['jumbotron.component.scss'],
  standalone: false,
})
export class SkJumbotronComponent {
  @Input() public name: string = '';
  @Input() public description: string = '';
}
