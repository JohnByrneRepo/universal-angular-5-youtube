import {Pipe} from '@angular/core';
 
@Pipe({
  name : 'formatDate'
})
 
export class FormatDatePipe {
  transform(rawDate){
    const date = new Date(rawDate);
    const locale = 'en-us';
    const month = date.toLocaleString(locale, { month: 'long' }).slice(0, 3);
    const day = date.getDate();
    const year = date.getFullYear();
    return `Published on ${month} ${day}, ${year}`;
  }
}