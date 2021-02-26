import { Pipe, PipeTransform } from '@angular/core';
import { TextConstants } from 'src/app/lang/en-strings';

@Pipe({
  name: 'convertText'
})
export class ConvertTextPipe implements PipeTransform {
    
    transform(value: string): string {
        let t = TextConstants[value];
        return t == undefined ? value : t ;
  }

}
