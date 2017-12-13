import { Injectable } from '@angular/core';
import { Response } from '@angular/http';

import { MOCK_API } from '../config/api.config';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { Service } from './service';
@Injectable()
export class ItemsService extends Service<any>  {
  private apiurl = 'api/items2';  // URL to web api
  constructor( private http: HttpClient) {
    super();
 
  }
  query(): Observable<any[]> {
    return this.http.get<any[]>(this.apiurl)
    .pipe(
      tap(Items => this.log(`fetched Items`)),
      catchError(this.handleError('Items', []))
    );

  }
  get(id: number): Observable<any> {
    const url = `${this.apiurl}/${id}`;
    return this.http.get<any>(url).pipe(
      tap(_ => this.log(`fetched Items id=${id}`)),
      catchError(this.handleError<any>(`Items id=${id}`))
    );
  }
  staticQuery(): Observable<any[]> {
    return this.http.get<any[]>(this.apiurl)
    .pipe(
      tap(Items => this.log(`fetched Items`)),
      catchError(this.handleError('Items', []))
    );

  }
  staticGet(id: number): Observable<any> {
    const url = `${this.apiurl}/${id}`;
    return this.http.get<any>(url).pipe(
      tap(_ => this.log(`fetched Items id=${id}`)),
      catchError(this.handleError<any>(`Items id=${id}`))
    );
  }
  
  
}
