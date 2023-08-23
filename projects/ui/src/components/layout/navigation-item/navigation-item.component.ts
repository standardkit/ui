import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { SubNavigationItemInterface } from '../../../interfaces';
import { LayoutService } from '../layout.service';

@Component({
  selector: 'sk-navigation-item[icon][name][route]',
  templateUrl: 'navigation-item.component.html',
  styleUrls: ['navigation-item.component.scss'],
})
export class SkNavigationItemComponent implements OnInit, OnChanges {
  @Input() public icon!: string;
  @Input() public name!: string;
  @Input() public route!: string;
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
      this.router.navigate([this.route]);
    }
  }
}
