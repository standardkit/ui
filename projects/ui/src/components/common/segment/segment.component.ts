import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'sk-segment',
  templateUrl: 'segment.component.html',
  styleUrls: ['segment.component.scss'],
  standalone: false,
})
export class SkSegmentComponent {
  @Input() public value?: any;

  @Output() public selectSegment: EventEmitter<void> = new EventEmitter<void>();

  public isActive: boolean = false;
  public position: 'start' | 'default' | 'end' = 'default';

  public onSelectSegment(): void {
    this.selectSegment.emit();
  }
}
