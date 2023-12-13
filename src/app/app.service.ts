import { Injectable } from '@angular/core';
import { Results } from './Results';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { Ruleset } from './Ruleset';
import { Layout } from './layout';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  
  constructor(private http: HttpClient) {}

  getResults(rulesetID?: number, layoutID?: number): Observable<Results[]> {
    // Add any parameters provided
    let params: HttpParams = new HttpParams();

    if (layoutID) {
      params = params.append('layout', layoutID);
    }

    if (rulesetID) {
      params = params.append('ruleset', rulesetID);
    }

    // Make the call to the API
    return this.http
      .get<Results[]>(`/api/simulations`, { params })
      .pipe(catchError(this.handleError<Results[]>('getSimulations', [])));
  }

  // Get all the ruleset names only
  getRulesets(): Observable<Ruleset[]> {
    // Make the call to the API
    return this.http
      .get<Ruleset[]>('/api/rulesets')
      .pipe(catchError(this.handleError<Ruleset[]>('getRulesets', [])));
  }

  getLayouts(): Observable<Layout[]> {
    // Make the call to the API
    return this.http
      .get<Layout[]>('/api/layouts')
      .pipe(catchError(this.handleError<Layout[]>('getLayouts', [])));
  }

  // Error Handler
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
