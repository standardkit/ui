import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { LayoutStore } from './layout.store';

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  private _hasBottomBar$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private _isCollapsed$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private layoutStore: LayoutStore) {
    const isCollapsed: boolean = layoutStore.getCollapsed();
    this._isCollapsed$.next(isCollapsed);
  }

  public registerBottomBar(): void {
    this._hasBottomBar$.next(true);
  }

  public unregisterBottomBar(): void {
    this._hasBottomBar$.next(false);
  }

  public hasBottomBar$(): Observable<boolean> {
    return this._hasBottomBar$.asObservable();
  }

  public setCollapsed(isCollapsed: boolean): void {
    this._isCollapsed$.next(isCollapsed);
    this.layoutStore.setCollapsed(isCollapsed);
  }

  public isCollapsed$(): Observable<boolean> {
    return this._isCollapsed$.asObservable();
  }
}
