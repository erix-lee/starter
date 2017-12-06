import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { HttpInterceptorService, RESTService } from '@covalent/http';
import { MOCK_API } from '../config/api.config';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Service } from './service';
export interface IFeature {
  title: string;
  id: number;
  user: string;
  modified: Date;
  created: Date;
  icon: string;
  enabled: number;
}
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable()
export class FeaturesService extends Service  {
  private apiurl = 'api/features';  // URL to web api
  constructor( private http: HttpClient) {
    super();
  }
  staticQuery(): Observable<any[]> {
    return this.http.get<any[]>(this.apiurl)
    .pipe(
      tap(alerts => this.log(`fetched IFeature`)),
      catchError(this.handleError('IFeature', []))
    );

  }
  query(): Observable<any[]> {
    return this.http.get<any[]>(this.apiurl)
    .pipe(
      tap(alerts => this.log(`fetched IFeature`)),
      catchError(this.handleError('IFeature', []))
    );

  }
  get(id: number): Observable<any> {
    const url = `${this.apiurl}/${id}`;
    return this.http.get<any>(url).pipe(
      tap(_ => this.log(`fetched IFeature id=${id}`)),
      catchError(this.handleError<any>(`IFeature id=${id}`))
    );
  }
  update (feature: IFeature): Observable<any> {
    return this.http.put(this.apiurl, feature, httpOptions).pipe(
      tap(_ => this.log(`updated hero id=${feature.id}`)),
      catchError(this.handleError<IFeature>('updateIFeature'))
    );
  }
  create(feature: IFeature): Observable<IFeature> {
    return this.http.post<IFeature>(this.apiurl, feature, httpOptions).pipe(
      tap((feature: IFeature) => this.log(`added IFeature w/ id=${feature.id}`)),
      catchError(this.handleError<IFeature>('addIFeature'))
    );
  }
  delete (feature: IFeature| number): Observable<IFeature> {
    const id = typeof feature === 'number' ? feature : feature.id;
    const url = `${this.apiurl}/${id}`;
  
    return this.http.delete<IFeature>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted hero id=${id}`)),
      catchError(this.handleError<IFeature>('deleteIFeature'))
    );
  }
}
