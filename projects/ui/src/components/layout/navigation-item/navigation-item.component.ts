import { NgForOf, NgIf } from '@angular/common';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { SubNavigationItemInterface } from '../../../interfaces';
import { UiIcon } from '../../core';
import { LayoutService } from '../layout.service';
import { SkSubNavigationItemModule } from '../sub-navigation-item';

@Component({
  selector: 'ui-navigation-item',
  templateUrl: 'navigation-item.component.html',
  styleUrl: 'navigation-item.component.scss',
  imports: [UiIcon, NgIf, SkSubNavigationItemModule, NgForOf],
})
export class UiNavigationItem implements OnInit, OnChanges {
  @Input({ required: true }) public icon!: string;
  @Input({ required: true }) public name!: string;
  @Input({ required: true }) public route!: string;
  @Input() public isExact: boolean = false;
  @Input() public children?: SubNavigationItemInterface[] = [];
  @Input() public isCollapsed: boolean = false; // Collapsed by sidebar

  public isActive: boolean = false;
  public isExpanded: boolean = false; // Expanded submenu
  public wasCollapsed: boolean = false;
  public skipCollapseReset: boolean = false;

  constructor(
    private router: Router,
    private layoutService: LayoutService,
  ) {}

  public ngOnInit(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe({ next: () => this.checkActive() });
    this.checkActive();
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes['isCollapsed']) {
      if (!this.skipCollapseReset) {
        this.wasCollapsed = false;
      } else {
        this.skipCollapseReset = false;
      }
    }
  }

  public onSelectItem(): void {
    if (this.children) {
      if (this.isCollapsed) {
        this.skipCollapseReset = true;
        this.layoutService.setCollapsed(false);
        this.isExpanded = true;
        this.wasCollapsed = true;
      } else {
        this.isExpanded = !this.isExpanded;
        this.skipCollapseReset = true;
        this.layoutService.setCollapsed(this.wasCollapsed);
        this.wasCollapsed = false;
      }
    } else {
      void this.router.navigate([this.route]);
    }
  }

  private checkActive(): void {
    this.isActive = this.router.isActive(this.route, {
      paths: this.isExact ? 'exact' : 'subset',
      queryParams: 'ignored',
      fragment: 'ignored',
      matrixParams: 'ignored',
    });
    if (this.isActive) {
      this.isExpanded = true;
    }
    if (this.wasCollapsed) {
      this.layoutService.setCollapsed(true);
      this.skipCollapseReset = true;
      this.wasCollapsed = false;
    }
  }
}
