import { ActivityType } from '../enums/activity-type.enums';
import { HikeI } from '../interfaces/hike-i';
import { MassifI } from '../interfaces/massif-i';

export class Hike implements HikeI {

  /*
   * Rappel :
   * "!" propriété obligatoire
   * "?" propriété optionnelle
   */

  id!: number;
  title!: string;
  doneAt!: string;
  massif!: MassifI;
  activityType: ActivityType = ActivityType.RANDONNEE;

  constructor(fields?: Partial<Hike>) {
    Object.assign(this, fields);
  }
}
