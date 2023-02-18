import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { catchError, exhaustMap, first, flatMap, Observable, throwError } from "rxjs";
import { AuthService } from "../services/auth.service";
import { AppState } from "../state/app.state";
import { selectToken } from "../state/selectors/auth.selectors";

@Injectable()
export class jwtInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService, private store: Store<AppState>) {

  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return this.store.select(selectToken).pipe(
      exhaustMap((token) => {
        if (!token) {
          return next.handle(req);
        }
        let modifiedReq = req.clone({
          setHeaders: { Authorization: `Bearer ${ token }` }
        });
        return next.handle(modifiedReq)
      })
    )
  }
}
