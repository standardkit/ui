import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LayoutService } from '../layout.service';

@Component({
  selector: 'sk-bottom-bar',
  templateUrl: 'bottom-bar.component.html',
  styleUrls: ['bottom-bar.component.scss'],
})
export class SkBottomBarComponent implements OnInit, OnDestroy {
  public isCollapsed$!: Observable<boolean>;

  constructor(private layoutService: LayoutService) {}

  public ngOnInit(): void {
    this.layoutService.registerBottomBar();
    this.isCollapsed$ = this.layoutService.isCollapsed$();
  }

  public ngOnDestroy(): void {
    this.layoutService.unregisterBottomBar();
  }
}
