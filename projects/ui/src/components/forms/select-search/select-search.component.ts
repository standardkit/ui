import { AfterViewInit, Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'sk-select-search',
  templateUrl: 'select-search.component.html',
  styleUrls: ['select-search.component.scss'],
})
export class SkSelectSearchComponent implements AfterViewInit {
  @ViewChild('input') public input!: ElementRef<HTMLInputElement>;

  @Output() public search: EventEmitter<string> = new EventEmitter();
  @Output() public clear: EventEmitter<void> = new EventEmitter();

  public query: string = '';

  public ngAfterViewInit(): void {
    setTimeout(() => this.input.nativeElement.focus(), 0);
  }

  public onClear(): void {
    this.query = '';
    this.input.nativeElement.focus();
    this.clear.emit();
  }

  public onClick(event: Event): void {
    event.stopPropagation();
  }

  public onChange(query: string): void {
    this.query = query;
    this.search.emit(query);
  }
}
