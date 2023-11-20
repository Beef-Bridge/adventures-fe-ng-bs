import { Pipe, PipeTransform } from '@angular/core';
import * as dayJS from 'dayjs';
import * as relativeTime from 'dayjs/plugin/relativeTime';
dayJS.extend(relativeTime);
import 'dayjs/locale/fr';

@Pipe({
  name: 'dateDayJs',
})
export class DateDayJsPipe implements PipeTransform {
  transform(value: Date, format: string = 'DD MMM YYYY'): string {
    let dateFormat = '';

    switch (format) {
      case 'DD MMM':
        dateFormat = dayJS(value).locale('fr').format('DD MMM');
        break;
      case 'DD MMM YYYY':
      default:
        dateFormat = dayJS(value).locale('fr').format('DD MMM YYYY');
        break;
    }
    return dateFormat;
  }
}
