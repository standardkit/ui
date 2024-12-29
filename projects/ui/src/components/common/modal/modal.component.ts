import { Component, ElementRef, EventEmitter, HostListener, Input, Output, ViewChild } from '@angular/core';
import { SkIconModule } from '../../core';

@Component({
  selector: 'ui-modal',
  templateUrl: 'modal.component.html',
  styleUrl: 'modal.component.scss',
  imports: [SkIconModule],
})
export class UiModal {
  @ViewChild('body') public body!: ElementRef;

  // TODO : Implement optional outside click
  @Input() public name: string = '';
  @Input() public isWide: boolean = false;
  @Input() public width: 's' | 'm' | 'l' = 'm'; // TODO : Make these sizes like other sizes (wide, narrow)
  @Input() public containsOverflow: boolean = false;
  @Input() public hasBodyBackground: boolean = false;
  @Output() public closeModal: EventEmitter<void> = new EventEmitter<void>();
  public isScrollable: boolean = false;

  @HostListener('document:keydown.escape') public escape = (): void => this.closeModal.emit();

  public onClose(): void {
    this.closeModal.emit();
  }

  public onInsideClick(): void {
    this.onScroll();
  }

  public onScroll(): void {
    this.isScrollable = this.body.nativeElement.scrollHeight > this.body.nativeElement.clientHeight;
  }
}
