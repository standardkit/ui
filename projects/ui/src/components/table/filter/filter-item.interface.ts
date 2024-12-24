import { FilterableValueInterface, FilterType } from '@standardkit/core';

export interface FilterItemInterface {
  key: string;
  label: string;
  type: FilterType;
  values?: FilterableValueInterface[];
  isPending: boolean;
}
