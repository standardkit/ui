import {
  AfterContentInit,
  Component,
  ContentChildren,
  EventEmitter,
  HostListener,
  Input,
  OnChanges,
  Output,
  QueryList,
  SimpleChanges,
} from '@angular/core';
import { State } from '@standardkit/core';
import { SkTabComponent } from '../tab';

@Component({
  selector: 'sk-tab-group',
  templateUrl: 'tab-group.component.html',
  styleUrls: ['tab-group.component.scss'],
})
export class SkTabGroupComponent implements AfterContentInit, OnChanges {
  @HostListener('window:resize') public resize = (): void => this.onScroll();

  @ContentChildren(SkTabComponent) public tabs!: QueryList<SkTabComponent>;

  @Input() public activeTab?: string;

  @Output() public activeTabChange: EventEmitter<string> = new EventEmitter();

  public state: State = new State();

  public ngAfterContentInit(): void {
    this.tabs.forEach((tab: SkTabComponent) => {
      tab.isActive = tab.name === this.activeTab;
      tab.selectTab.subscribe({
        next: () => this.onSelectTab(tab),
      });
    });
    setTimeout(() => this.state.onSuccess(), 0);
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes['activeTab']) {
      this.tabs?.forEach((tab: SkTabComponent) => {
        tab.isActive = tab.name === this.activeTab;
      });
    }
  }

  private onSelectTab(selectedTab: SkTabComponent): void {
    this.tabs.forEach((tab: SkTabComponent) => {
      tab.isActive = tab === selectedTab;
      if (tab.isActive) {
        this.activeTabChange.emit(tab.name);
      }
    });
  }

  public onScroll(): void {
    // triggers reload
  }
}
