import { Pipe, PipeTransform } from '@angular/core';
import th from 'date-fns/locale/th';
import {format} from 'date-fns'

@Pipe({
  name: 'dateCustom'
})
export class DateCustomPipe implements PipeTransform {

  transform(value: Date, formatDate:string, locale:Locale=th):unknown{
    return format(value, formatDate, {locale});
  }
  }


