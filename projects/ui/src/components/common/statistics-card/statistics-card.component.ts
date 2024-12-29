import { NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UiButton, UiIcon } from '../../core';

@Component({
  selector: 'ui-statistics-card',
  templateUrl: 'statistics-card.component.html',
  styleUrl: 'statistics-card.component.scss',
  imports: [UiIcon, UiButton, NgIf],
})
export class UiStatisticsCard {
  @Input() public icon: string = 'star';
  @Input() public statistic: number | string = '';
  @Input() public description?: string;
  @Input() public buttonText: string = '';

  @Output() public buttonClick: EventEmitter<void> = new EventEmitter<void>();

  public onClick(): void {
    this.buttonClick.emit();
  }
}
