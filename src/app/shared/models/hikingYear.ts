import { HikingYearI } from '../interfaces/hikingYear-i';
import { Hike } from './hike';

export class HikingYear implements HikingYearI {
  year!: number;
  hikes!: Hike[];

  constructor(fields?: Partial<HikingYear>) {
    Object.assign(this, fields);
  }
}
