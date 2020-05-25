import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpHeaderResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators'
import { Registration } from './registration/registration';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  private baseUrl = 'https://localhost:44351/Registration';  // URL to web api

  constructor(private http: HttpClient) { }

  // NPINumber will be the unique identifier
  PutRegistration(registration: Registration): Observable<Registration> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.baseUrl}/{registration.NPINumber}`;
    const result = this.http.put<Registration>(url, registration, { headers: headers })
      .pipe(
        map(() => registration) // registration info not returned
        //catchError(this.handleError)
      );
    return result;
  }

  handleError() {}
}

