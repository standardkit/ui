import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PaginationInterface, PaginationStateInterface } from '@standardkit/core';

// TODO : Make the text configurable (through a service?)

@Component({
  selector: 'sk-pagination[state]',
  templateUrl: 'pagination.component.html',
  styleUrl: 'pagination.component.scss',
  standalone: false,
})
export class SkPaginationComponent {
  @Input() public state!: PaginationStateInterface;

  @Output() public request: EventEmitter<PaginationInterface> = new EventEmitter<PaginationInterface>();

  public limitOptions: number[] = [10, 25, 50, 100]; // TODO : Make configurable

  public get currentPage(): number {
    return this.state.currentPage;
  }

  public set currentPage(page: number) {
    if (!page || page < 1 || page > this.state.totalNumberOfPages || this.state.currentPage === page) {
      return;
    }
    this.state.currentPage = page;
    // TODO : This does not seem to work for unknown amount of pages (numberOfPages === -1)
    //  We aren't sure if there is a next page, but we should at least allow lower than current

    this.state.offset = (page - 1) * this.state.limit;
    this.onRequest();
  }

  public onLimitChange(value: string): void {
    this.state.limit = Number(value);
    this.state.offset = 0;
    this.onRequest();
  }

  // TODO : Implement first & last page (double arrows)
  public onPreviousPage(): void {
    this.state.currentPage--;
    this.state.offset -= this.state.limit;
    this.onRequest();
  }

  public onNextPage(): void {
    this.state.currentPage++;
    this.state.offset += this.state.limit;
    this.onRequest();
  }

  public isNextPageDisabled(): boolean {
    return this.state.totalNumberOfRows === -1
      ? this.state.numberOfRows < this.state.limit
      : this.state.offset + this.state.limit >= this.state.totalNumberOfRows;
  }

  private onRequest(): void {
    this.request.emit({ offset: this.state.offset, limit: this.state.limit });
  }
}
