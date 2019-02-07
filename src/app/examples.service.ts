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

  public getObj1(): Observable<any> {
    return of(this.objObservable1);
  }
}
