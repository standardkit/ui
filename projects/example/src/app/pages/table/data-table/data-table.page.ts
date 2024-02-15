import { Component } from '@angular/core';
import {
  ColumnInterface,
  DataRequest,
  DataResponse,
  FilterConfigurationInterface,
  SegmentConfigurationInterface,
  TableToggleActionInterface,
} from '@standardkit/core';
import { Observable, of } from 'rxjs';
import { FakeDataInterface } from './fake-data.interface';
import { FakeDataService } from './fake-data.service';
import { BreadcrumbInterface } from '@standardkit/ui';

@Component({ templateUrl: 'data-table.page.html' })
export class DataTablePage {
  public breadcrumbs: BreadcrumbInterface[] = [{ name: 'Table' }, { name: 'Data Table' }];
  public response?: DataResponse<FakeDataInterface>;
  public columns: ColumnInterface<FakeDataInterface>[] = [
    { key: 'name', label: 'Name', highlight: true },
    { key: 'age', label: 'Age' },
    { key: 'profession', label: 'Profession' },
  ];

  public filterConfiguration: FilterConfigurationInterface<FakeDataInterface>[] = [{ key: 'gender', label: 'Gender' }];
  public segments: SegmentConfigurationInterface<FakeDataInterface> = {
    key: 'gender',
    segments: [
      { label: 'On Mission', value: 'male' },
      { label: 'Ready', value: 'female' },
    ],
  };

  public toggleAction: TableToggleActionInterface<FakeDataInterface> = {
    label: 'On Mission',
    activateLabel: 'On Mission',
    inactivateLabel: 'Ready for Mission',
    isActive: (row: FakeDataInterface): boolean => row.gender === 'male',
    toggleActive: (row: FakeDataInterface): Observable<null> => {
      row.gender = 'male';
      return of(null);
    },
    toggleInactive: (row: FakeDataInterface): Observable<null> => {
      row.gender = 'female';
      return of(null);
    },
  };

  constructor(private fakeDataService: FakeDataService) {}

  public onRequest(request: DataRequest<FakeDataInterface>): void {
    this.fakeDataService.getFakeData$(request).subscribe({
      next: (response: DataResponse<FakeDataInterface>): void => {
        this.response = response;
      },
      error: (error: unknown): void => {
        console.error(error);
      },
    });
  }
}
