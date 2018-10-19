import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { tap } from 'rxjs/operators';
import { PATH } from './apiPath';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(protected http: HttpClient) {}

  getValue(value: number, initialCurrency: String, destinationCurrency: String): Observable<Number> {
    return this.http.get<Number>(PATH + '/' + value + '/' + initialCurrency + '/' + destinationCurrency).pipe( tap(() => {
      // Success
    },
    (error) => {
      console.log(error);
    }));
  }

}
