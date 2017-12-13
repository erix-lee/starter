import { Injectable } from '@angular/core';
import { Response } from '@angular/http';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Service } from './service';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class ProductsService extends Service<any>  {
  private apiurl = 'api/products';  // URL to web api
  constructor( private http: HttpClient) {
    super();
  }

  query(): Observable<any[]> {
    return this.http.get<any[]>(this.apiurl)
    .pipe(
      tap(products => this.log(`fetched products`)),
      catchError(this.handleError('products', []))
    );

  }
  get(id: number): Observable<any> {
    const url = `${this.apiurl}/${id}`;
    return this.http.get<any>(url).pipe(
      tap(_ => this.log(`fetched products id=${id}`)),
      catchError(this.handleError<any>(`products id=${id}`))
    );
  }
}
