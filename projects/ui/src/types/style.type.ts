import { Style } from '../constants';

export type StyleType = (typeof Style)[keyof typeof Style];
