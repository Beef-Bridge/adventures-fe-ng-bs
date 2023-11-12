import { GeographicalZone } from '../enums/geographical-zone';

export interface MassifI {
  id?: number;
  name: string;
  geographicalZone: GeographicalZone;
}
