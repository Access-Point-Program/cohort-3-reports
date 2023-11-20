import { Injectable } from '@angular/core';
import { Results } from './Results';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TableService {
  private url: string = '/api/results'

  constructor(
    private http: HttpClient
  ) { }




  getResults(): Observable<Results[]> {
    return this.http.get<Results[]>(this.url)
      .pipe(
        catchError(this.handleError<Results[]>('getResults', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

   
      console.error(error); // log to console instead

      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
