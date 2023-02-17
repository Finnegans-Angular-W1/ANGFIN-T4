import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorInterceptor implements HttpInterceptor{

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      console.log('Request catched');
    return next.handle(req).pipe(
      catchError(this.catchederror)
    ); 
  }

  catchederror(error: HttpErrorResponse){
    console.log('Error catched');
    return throwError(error);
  }
}
