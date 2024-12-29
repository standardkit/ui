import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ui-segment',
  templateUrl: 'segment.component.html',
  styleUrl: 'segment.component.scss',
})
export class UiSegment {
  @Input() public value?: any;

  @Output() public selectSegment: EventEmitter<void> = new EventEmitter<void>();

  public isActive: boolean = false;
  public position: 'start' | 'default' | 'end' = 'default';

  public onSelectSegment(): void {
    this.selectSegment.emit();
  }
}
