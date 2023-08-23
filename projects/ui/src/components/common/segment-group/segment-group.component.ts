import { AfterViewInit, Component, ContentChildren, Input, QueryList } from '@angular/core';
import { SkSegmentComponent } from '../segment';

@Component({
  selector: 'sk-segment-group',
  templateUrl: 'segment-group.component.html',
  styleUrls: ['segment-group.component.scss'],
})
export class SkSegmentGroupComponent implements AfterViewInit {
  @ContentChildren(SkSegmentComponent) public segments!: QueryList<SkSegmentComponent>;

  @Input() public initialSegmentValue?: string;

  public ngAfterViewInit(): void {
    if (this.segments.length <= 1) {
      throw new Error('Not enough segments');
    }

    this.segments.forEach((segment: SkSegmentComponent) => {
      segment.selectSegment.subscribe({ next: () => this.onSelectSegment(segment) });
    });

    setTimeout(() => {
      this.segments.first.position = 'start';
      this.segments.last.position = 'end';
      if (this.initialSegmentValue) {
        this.segments.forEach((segment: SkSegmentComponent) => {
          if (segment.value === this.initialSegmentValue) {
            segment.isActive = true;
          }
        });
      } else {
        this.segments.first.isActive = true;
      }
    }, 0);
  }

  private onSelectSegment(selectedSegment: SkSegmentComponent): void {
    this.segments.forEach((segment: SkSegmentComponent) => {
      segment.isActive = segment === selectedSegment;
    });
  }
}
