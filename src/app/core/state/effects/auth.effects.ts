import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { EMPTY, tap } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { AuthService } from "../../services/auth.service";


@Injectable()
export class AuthEffects {

    login$ = createEffect(() => {
        return this.actions$.pipe(
            ofType('[Login View] Send login form'),
            mergeMap((action: any) => this.authService.login(action.user)
                .pipe(
                    map(token => ({ type: '[Login View] Send login form success', token })),
                    catchError(async (error) => ({ type: '[Login View] Send login form error', error }))
                ))
        );
    });

    register$ = createEffect(() => {
        return this.actions$.pipe(
            ofType('[Register View] Send register form'),
            mergeMap((action: any) => this.authService.register(action.user)
                .pipe(
                    map(() => ({ type: '[Register View] Send register form success' })),
                    catchError(async (error) => ({ type: '[Register View] Send register form error', error }))
                ))
        );
    });

    setUser$ = createEffect(() => {
        return this.actions$.pipe(
            ofType('[Login View] Send login form success'),
            mergeMap(() => this.authService.getUserDetails()
                .pipe(
                    map(user => ({ type: '[Login View] Set user state', user})),
                    catchError(() => EMPTY)
                )
            )
        )
    })

    constructor(
        private actions$: Actions,
        private authService: AuthService,
        private router: Router
    ) {}

}