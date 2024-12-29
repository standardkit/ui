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
import { UiTab } from '../tab';

@Component({
  selector: 'ui-tab-group',
  templateUrl: 'tab-group.component.html',
  styleUrl: 'tab-group.component.scss',
})
export class UiTabGroup implements AfterContentInit, OnChanges {
  @ContentChildren(UiTab) public tabs!: QueryList<UiTab>;

  @Input() public activeTab?: string;

  @Output() public activeTabChange: EventEmitter<string> = new EventEmitter<string>();

  public isLoaded: boolean = false;

  @HostListener('window:resize') public resize = (): void => this.onScroll();

  public ngAfterContentInit(): void {
    this.tabs.forEach((tab: UiTab) => {
      tab.isActive = tab.name === this.activeTab;
      tab.selectTab.subscribe({
        next: () => this.onSelectTab(tab),
      });
    });
    setTimeout(() => (this.isLoaded = true), 0);
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes['activeTab']) {
      this.tabs?.forEach((tab: UiTab) => {
        tab.isActive = tab.name === this.activeTab;
      });
    }
  }

  public onScroll(): void {
    // triggers reload
  }

  private onSelectTab(selectedTab: UiTab): void {
    this.tabs.forEach((tab: UiTab) => {
      tab.isActive = tab === selectedTab;
      if (tab.isActive) {
        this.activeTabChange.emit(tab.name);
      }
    });
  }
}
