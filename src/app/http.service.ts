import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/todos/1';

  constructor(private http: HttpClient) {
  }

  getData() {
    return this.http.get(this.apiUrl);
  }
}
