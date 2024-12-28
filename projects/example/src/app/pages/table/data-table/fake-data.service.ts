import { Injectable } from '@angular/core';
import {
  FilterEnum,
  FilterInterface,
  LegacyDataRequest as DataRequest,
  LegacyDataResponse as DataResponse,
  mapPagination,
} from '@standardkit/core';
import { delay, Observable, of, take } from 'rxjs';
import { FakeDataInterface } from './fake-data.interface';

const FAKE_DATA: FakeDataInterface[] = [
  { id: '1', name: 'Superman', age: 85, profession: 'Hero', gender: 'male' },
  { id: '2', name: 'Batman', age: 46, profession: 'Edgy', gender: 'male' },
  { id: '3', name: 'Spiderman', age: 17, profession: 'Web developer', gender: 'male' },
  { id: '4', name: 'Iron Man', age: 50, profession: 'Engineer', gender: 'male' },
  { id: '5', name: 'Wonder Woman', age: 5000, profession: 'Army nurse', gender: 'female' },
  { id: '6', name: 'Catwoman', age: 23, profession: 'Scratch', gender: 'female' },
  { id: '7', name: 'Ant Man', age: 49, profession: 'Small hero', gender: 'male' },
  { id: '8', name: 'Aquaman', age: 32, profession: 'Wet and sometimes hero', gender: 'male' },
  { id: '9', name: 'Water woman', age: 20, profession: 'who?', gender: 'female' },
  { id: '10', name: 'Hulk', age: 20, profession: 'Smash', gender: 'male' },
];

@Injectable({ providedIn: 'root' })
export class FakeDataService {
  public getFakeData$(request: DataRequest<FakeDataInterface>): Observable<DataResponse<FakeDataInterface>> {
    let data: FakeDataInterface[] = FAKE_DATA;

    request.filters?.forEach((filter: FilterInterface<FakeDataInterface>): void => {
      if (filter.key === 'gender') {
        data = data.filter((fakeData: FakeDataInterface): boolean => fakeData.gender === filter.value);
      }
    });

    const response: DataResponse<FakeDataInterface> = {
      items: data, // TODO : Use pagination
      pagination: mapPagination(request.pagination, data.length, data.length),
      filters: request.filters,
      sort: request.sort,

      searchable: ['name'],
      filterable: [
        {
          type: FilterEnum.SingleSelect,
          key: 'gender',
          values: [
            { value: 'male', label: 'Man' },
            { value: 'female', label: 'Woman' },
          ],
        },
      ],
      sortable: ['name', 'age'],
    };

    return of(response).pipe(delay(1000), take(1));
  }
}
