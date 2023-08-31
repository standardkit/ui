import { Component } from '@angular/core';
import {
  ColumnInterface,
  DataRequest,
  DataResponse,
  FilterConfigurationInterface,
  SegmentConfigurationInterface,
} from '@standardkit/core';
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
      { label: 'Men', value: 'male' },
      { label: 'Women', value: 'female' },
    ],
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
