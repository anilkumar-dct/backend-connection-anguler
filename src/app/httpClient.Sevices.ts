import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Enviornment } from './environment';

@Injectable({ providedIn: 'root' })
export class HttpClientServices {
  private environment = inject(Enviornment);
  private baseurl = this.environment.baseUrl;
  constructor(private http: HttpClient) {}

  getAllUser(): Observable<any> {
    return this.http.get(this.baseurl + 'places').pipe(
      catchError((error) => {
        console.log(error);
        return throwError(() => error);
      })
    );
  }
  createUser(data: any): Observable<any> {
    return this.http.post(this.baseurl, data).pipe(
      catchError((error) => {
        console.log(error);
        return throwError(() => error);
      })
    );
  }
  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.baseurl}/${id}`).pipe(
      catchError((error) => {
        console.log(error);
        return throwError(() => error);
      })
    );
  }
}
