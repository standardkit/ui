import { NgIf } from '@angular/common';
import { AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UiButton, UiIcon } from '../../core';

@Component({
  selector: 'ui-search',
  templateUrl: 'search.component.html',
  styleUrl: 'search.component.scss',
  imports: [UiButton, UiIcon, FormsModule, NgIf],
})
export class UiSearch implements AfterViewInit {
  @ViewChild('input') public input!: ElementRef<HTMLInputElement>;

  @Input() public field?: string;
  @Input() public dataName?: string = '';
  @Input() public isDisabled: boolean = false;

  @Output() public search: EventEmitter<string> = new EventEmitter<string>();
  @Output() public clear: EventEmitter<void> = new EventEmitter<void>();

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
