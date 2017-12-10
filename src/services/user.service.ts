import { Provider, SkipSelf, Optional, InjectionToken, Injectable } from '@angular/core';
import { Response, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

 

import { catchError, map, tap } from 'rxjs/operators';
import { Service } from './service';
export interface IUser {
  displayName?: string;
  id: number;
  email?: string;
  created: Date;
  lastAccess?: Date;
  siteAdmin?: number;
}
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable()
export class UserService extends Service {
  private apiurl = 'api/users';  // URL to web api
  constructor(private http: HttpClient) {
    super( );
  }

  staticQuery(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.apiurl)
    .pipe(
      tap(alerts => this.log(`fetched alerts`)),
      catchError(this.handleError('alerts', []))
    );

  }
  query(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.apiurl)
    .pipe(
      tap(alerts => this.log(`fetched alerts`)),
      catchError(this.handleError('alerts', []))
    );

  }
  get(id: number): Observable<IUser> {
    const url = `${this.apiurl}/${id}`;
    return this.http.get<IUser>(url).pipe(
      tap(_ => this.log(`fetched alerts id=${id}`)),
      catchError(this.handleError<IUser>(`alerts id=${id}`))
    );
  }
  create(user: IUser): Observable<IUser> {
    return this.http.post<IUser>(this.apiurl, user, httpOptions).pipe(
      tap((user: IUser) => this.log(`added hero w/ id=${user.id}`)),
      catchError(this.handleError<IUser>('addHero'))
    );
  }
  update (user: IUser): Observable<any> {
    return this.http.put(this.apiurl, user, httpOptions).pipe(
      tap(_ => this.log(`updated hero id=${user.id}`)),
      catchError(this.handleError<IUser>('updateHero'))
    );
  }
  delete (user: IUser| number): Observable<IUser> {
    const id = typeof user === 'number' ? user : user.id;
    const url = `${this.apiurl}/${id}`;
  
    return this.http.delete<IUser>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted hero id=${id}`)),
      catchError(this.handleError<IUser>('deleteIUser'))
    );
  }
}

