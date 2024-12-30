import { AsyncPipe } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LayoutService } from '../layout.service';

@Component({
  selector: 'ui-bottom-bar',
  templateUrl: 'bottom-bar.component.html',
  styleUrl: 'bottom-bar.component.scss',
  imports: [AsyncPipe],
})
export class UiBottomBar implements OnInit, OnDestroy {
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
