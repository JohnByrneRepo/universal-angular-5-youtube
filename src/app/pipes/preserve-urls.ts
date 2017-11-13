import {Pipe} from '@angular/core'; 

@Pipe({
  name : 'preserveUrls'
})

export class PreserveUrlsPipe {
  transform(htmlString){
    return htmlString.replace(/(?:(https?\:\/\/[^\s]+))/g, '<a href="$1">$1</a>');
  }
}
