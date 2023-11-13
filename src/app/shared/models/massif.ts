import { GeographicalZone } from '../enums/geographical-zone';
import { MassifI } from '../interfaces/massif-i';

export class Massif implements MassifI {
  id!: number;
  name!: string;
  geographicalZone: GeographicalZone = GeographicalZone.ALPES_DU_NORD;

  constructor(fields?: Partial<Massif>) {
    Object.assign(this, fields);
  }
}
