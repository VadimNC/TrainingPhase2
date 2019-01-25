import {Component, OnInit} from '@angular/core';
import {HttpService} from '../http.service';
import {User} from '../user';
import {Observable, range} from 'rxjs/index';
import {filter} from 'rxjs/internal/operators';

@Component({
  selector: 'app-http-client',
  templateUrl: './http-client.component.html',
  styleUrls: ['./http-client.component.css']
})
export class HttpClientComponent implements OnInit {
  userTo: User;
  public o = range(0, 20).pipe(filter(num => num >= 15));
  public t = 777;

  constructor(private httpService: HttpService) {
  }

  ngOnInit() {
    this.httpService.getData().subscribe((data: User) => this.userTo = data);
    // const g = this.t;
    // console.log('TTT = ' + g);
    this.o.subscribe({
      next: (value: any) => console.log('next=' + value)
    });
  }

}
