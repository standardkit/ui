export interface FilterConfigurationInterface<T> {
  key: Extract<keyof T, string> | string;
  label: string;
}
