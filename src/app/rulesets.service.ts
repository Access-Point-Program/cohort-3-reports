import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { Ruleset } from './Ruleset';

@Injectable({
  providedIn: 'root',
})
export class RulesetService {
  constructor(private http: HttpClient) {}

  // Get calls

  // Get all the ruleset names only
  getRulesets(): Observable<Ruleset[]> {
    return this.http
      .get<Ruleset[]>('api/rulesets')
      .pipe(catchError(this.handleError<Ruleset[]>('getRulesets', [])));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
