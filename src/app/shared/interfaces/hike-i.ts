import { ActivityType } from '../enums/activity-type.enums';
import { MassifI } from './massif-i';

export interface HikeI {
  id?: number;
  title: string;
  doneAt: string;
  massif: MassifI;
  activityType: ActivityType;
}
