import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'sk-statistics-card',
  templateUrl: 'statistics-card.component.html',
  styleUrls: ['statistics-card.component.scss'],
})
export class SkStatisticsCardComponent {
  @Input() public icon: string = 'star';
  @Input() public statistic: number | string = '';
  @Input() public description?: string;
  @Input() public buttonText: string = '';

  @Output() public buttonClick: EventEmitter<void> = new EventEmitter();

  public onClick(): void {
    this.buttonClick.emit();
  }
}
