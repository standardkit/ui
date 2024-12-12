import { Component, ElementRef, EventEmitter, HostListener, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'sk-modal',
  templateUrl: 'modal.component.html',
  styleUrls: ['modal.component.scss'],
  standalone: false,
})
export class SkModalComponent {
  @HostListener('document:keydown.escape') public escape = (): void => this.closeModal.emit();

  // TODO : Implement optional outside click

  @ViewChild('body') public body!: ElementRef;

  @Input() public name: string = '';
  @Input() public isWide: boolean = false;
  @Input() public width: 's' | 'm' | 'l' = 'm'; // TODO : Make these sizes like other sizes (wide, narrow)
  @Input() public containsOverflow: boolean = false;
  @Input() public hasBodyBackground: boolean = false;

  @Output() public closeModal: EventEmitter<void> = new EventEmitter<void>();

  public isScrollable: boolean = false;

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
