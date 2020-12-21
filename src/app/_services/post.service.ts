import { Injectable } from '@angular/core';
import { Post } from '../_models/post';
import { HttpClient, HttpHeaders } from  "@angular/common/http";
import { Observable } from 'rxjs';
import {  throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {
   private apiServer = "http://localhost:9191/api/v1";
   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) { }


  findAll(): Observable<Array<Post>> {
     return this.http.get<Array<Post>>(`${this.apiServer}/posts`,this.httpOptions).pipe(
       catchError(this.errorHandler)
     )
  }


  delete(id: any): Observable<String>{
    console.log(`${this.apiServer}/postd/${id}`)
    return this.http.delete<String>(`${this.apiServer}/postd/${id}`).pipe(
      catchError(this.errorHandler)
    )
  }

  errorHandler(error: any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
 }
  
}
