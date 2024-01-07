import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  private _number = Math.random();

  constructor(
    private readonly httpClient: HttpClient
  ) { }

  getTitle(): Observable<any> {
    return this.httpClient.get<any>('https://jsonplaceholder.typicode.com/posts/1');
  }

  getNumber() {
    return this._number;
  }
}
