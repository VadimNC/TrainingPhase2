import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'pipeColor'})
export class PipeColorPipe implements PipeTransform {
  transform(value: string, param1: string, param2: string): string {
    let result = '';
    if ((param1 || param2) === 'upper') result = value.toLocaleUpperCase();
    if ((param1 || param2) === 'spaces') result = value.replace(/ /g, '');
    if ((param1 || param2) === 'uppSpac') result = value.toLocaleUpperCase().replace(/ /g, '');
    return result;
  }
}
