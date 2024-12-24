import { SegmentInterface } from './segment.interface';

export interface SegmentConfigurationInterface<T> {
  key: Extract<keyof T, string>;
  segments: SegmentInterface[];
}
