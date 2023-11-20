import { HttpClient } from '@angular/common/http';
import { Layout } from './layout';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
//get layout by id
export class LayoutService {
  getLayouts() {
      throw new Error('Method not implemented.');
     
  }
  private url:string ='./layouts'
  constructor(private http: HttpClient) { }


  getLayouts1():Observable<Layout[]> {
    // Our actual request
    const mockData : Observable<Layout[]> = this.http.get<Layout[]>(this.url);

    mockData.pipe(catchError(this.handleError<Layout[]>('getResutls', [])));

    return mockData
  }



getLayouts2(): Observable<Layout[]> {     // returning a list
  return this.http.get<Layout[]>(this.url)
    .pipe(
      catchError(this.handleError<Layout[]>('getLayouts', []))
    );
}

private handleError<T>(operation = 'operation', result?: T) { //default value
  return (error: any): Observable<T> => {

    console.error(error); // log to console instead
    console.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}
}
