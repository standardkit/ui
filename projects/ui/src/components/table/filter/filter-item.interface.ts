import { FilterableValueInterface, FilterType, State } from '@standardkit/core';

export interface FilterItemInterface {
  key: string;
  label: string;
  type: FilterType;
  values?: FilterableValueInterface[];
  state: State;
}
