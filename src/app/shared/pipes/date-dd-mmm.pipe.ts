import { Pipe, PipeTransform } from '@angular/core';
import * as dayJS from 'dayjs';
import * as relativeTime from 'dayjs/plugin/relativeTime';
dayJS.extend(relativeTime);
import 'dayjs/locale/fr';

@Pipe({
  name: 'dateDdMmm',
})
export class DateDdMmmPipe implements PipeTransform {
  transform(value: Date): string {
    return dayJS(value).locale('fr').format('DD MMM');
  }
}
