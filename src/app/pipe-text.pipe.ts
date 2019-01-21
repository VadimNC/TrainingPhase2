import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'pipeText'})
export class PipeTextPipe implements PipeTransform {
  transform(value: string, param: string): string {
    let result = '';
    if (param === 'upper') {
      result = value.toLocaleUpperCase();
    }
    if (param === 'spaces') {
      result = value.replace(/ /g, '');
    }

    return result;
  }
}
