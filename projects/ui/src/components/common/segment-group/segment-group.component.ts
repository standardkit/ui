import { AfterViewInit, Component, ContentChildren, Input, QueryList } from '@angular/core';
import { UiSegment } from '../segment';

@Component({
  selector: 'ui-segment-group',
  templateUrl: 'segment-group.component.html',
  styleUrl: 'segment-group.component.scss',
})
export class UiSegmentGroup implements AfterViewInit {
  @ContentChildren(UiSegment) public segments!: QueryList<UiSegment>;

  @Input() public initialSegmentValue?: string;

  public ngAfterViewInit(): void {
    if (this.segments.length <= 1) {
      throw new Error('Not enough segments');
    }

    this.segments.forEach((segment: UiSegment) => {
      segment.selectSegment.subscribe({ next: () => this.onSelectSegment(segment) });
    });

    setTimeout(() => {
      this.segments.first.position = 'start';
      this.segments.last.position = 'end';
      if (this.initialSegmentValue) {
        this.segments.forEach((segment: UiSegment) => {
          if (segment.value === this.initialSegmentValue) {
            segment.isActive = true;
          }
        });
      } else {
        this.segments.first.isActive = true;
      }
    }, 0);
  }

  private onSelectSegment(selectedSegment: UiSegment): void {
    this.segments.forEach((segment: UiSegment) => {
      segment.isActive = segment === selectedSegment;
    });
  }
}
