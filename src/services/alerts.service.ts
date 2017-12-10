import { Injectable } from '@angular/core';
import { Response } from '@angular/http';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { Service } from './service';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable()
export class AlertsService extends Service  {
  private apiurl = 'api/alerts2';  // URL to web api
  constructor( private http: HttpClient) {
    super();
  }

  query(): Observable<any[]> {
    return this.http.get<any[]>(this.apiurl)
    .pipe(
      tap(alerts => this.log(`fetched alerts`)),
      catchError(this.handleError('alerts', []))
    );

  }
  get(id: number): Observable<any> {
    const url = `${this.apiurl}/${id}`;
    return this.http.get<any>(url).pipe(
      tap(_ => this.log(`fetched alerts id=${id}`)),
      catchError(this.handleError<any>(`alerts id=${id}`))
    );
  }
  

}
