import { AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'sk-search',
  templateUrl: 'search.component.html',
  styleUrls: ['search.component.scss'],
})
export class SkSearchComponent implements AfterViewInit {
  @ViewChild('input') public input!: ElementRef<HTMLInputElement>;

  @Input() public field?: string;
  @Input() public dataName?: string = '';
  @Input() public isDisabled: boolean = false;

  @Output() public search: EventEmitter<string> = new EventEmitter();
  @Output() public clear: EventEmitter<void> = new EventEmitter();

  public query: string = '';

  private wasSearched: boolean = false;

  public ngAfterViewInit(): void {
    this.input.nativeElement.focus();
  }

  public onSearch(): void {
    if (this.query === '') {
      this.wasSearched = false;
      this.clear.emit();
    } else {
      this.wasSearched = true;
      this.search.emit(this.query);
    }
  }

  public onClear(): void {
    this.query = '';
    this.input.nativeElement.focus();
    if (this.wasSearched) {
      this.clear.emit();
    }
  }
}
