import {Injectable} from '@angular/core';
import {Observable, Observer, of} from 'rxjs/index';

class ObservblItem {
  constructor(public username: string) {
  }
}

@Injectable({
  providedIn: 'root'
})
export class FormsService {
  private myUser: ObservblItem = {
    username: 'VASYA'
  }
  public nameUser = new Observable<string>((observer: Observer<any>) => observer.next(this.myUser.username));

  constructor() {
    const viewName = this.nameUser.subscribe({
      next: x => console.log('>>>Name Observable object = ' + x)
    });

  }
}
