import { ActivityType } from '../enums/activity-type.enums';
import { HikeI } from '../interfaces/hike-i';
import { Massif } from './massif';

export class Hike implements HikeI {
  /*
   * Rappel :
   * "!" propriété obligatoire
   * "?" propriété optionnelle
   */

  id!: number;
  title!: string;
  doneAt!: Date;
  massif!: Massif;
  activityType: ActivityType = ActivityType.RANDONNEE;

  constructor(fields?: Partial<Hike>) {
    Object.assign(this, fields);
  }
}
