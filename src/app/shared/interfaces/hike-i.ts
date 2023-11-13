import { ActivityType } from '../enums/activity-type.enums';
import { MassifI } from './massif-i';

export interface HikeI {
  id?: number;
  title: string;
  doneAt: Date;
  massif: MassifI;
  activityType: ActivityType;
}
