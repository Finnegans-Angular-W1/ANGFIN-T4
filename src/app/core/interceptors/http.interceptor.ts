import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, throwError } from "rxjs";
import { AuthService } from "../services/auth.service";

@Injectable()
export class Interceptor implements HttpInterceptor {
    constructor(private authService: AuthService) {

    }
    
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = localStorage.getItem('user_token');

        if(!token){
            return next.handle(req);
        }

        if (token) {
            req = req.clone({
                setHeaders: { Authorization: `bearer ${token}` }
            });
        }

        return next.handle(req).pipe( catchError((response: HttpErrorResponse) =>{
            if (response.status === 401){
                this.authService.logout();
            }
            return throwError(() => response)
        })
        )

        
        
    }

}

