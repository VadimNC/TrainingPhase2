import {Component, OnInit} from '@angular/core';
import {HttpService} from '../http.service';
import {User} from '../user';

@Component({
  selector: 'app-http-client',
  templateUrl: './http-client.component.html',
  styleUrls: ['./http-client.component.css']
})
export class HttpClientComponent implements OnInit {
  userTo: User;

  constructor(private httpService: HttpService) {
  }

  ngOnInit() {
    this.httpService.getData().subscribe((data: User) => this.userTo = data);
  }
}
