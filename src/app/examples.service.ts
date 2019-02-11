import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs/index';

@Injectable({
  providedIn: 'root'
})
export class ExamplesService {
  public objObservable1 = {
    className: 'open menu'
  };
  public objObservable2 = of({
    className: 'open menu 1 open'
  });

  public vasya = {name: 'Вася', age: 23};
  public masha = {name: 'Маша', age: 100};
  public vovochka = {name: 'Вовочка', age: 6};
  public people = [this.vasya, this.masha, this.vovochka];

  public getObj1(): Observable<any> {
    return of(this.objObservable1);
  }

  public getArrayObjects(): Observable<any> {
    return of(this.people);
  }
}
