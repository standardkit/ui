import { Style } from '../constants';

/** @deprecated needs to be renewed, and use Enum from @standardkit/core */
export type StyleType = (typeof Style)[keyof typeof Style];
