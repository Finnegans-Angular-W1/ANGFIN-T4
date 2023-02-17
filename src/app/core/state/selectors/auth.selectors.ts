import { createSelector } from '@ngrx/store';
import { AuthState } from '../../interfaces/auth.state';
import { AppState } from '../app.state';


export const selectAuthFeatures = (state: AppState) => state.auth;

export const selectAuthLoading = createSelector(
    selectAuthFeatures,
    (state: AuthState) => state.loading
);

export const selectAuthError = createSelector(
    selectAuthFeatures,
    (state: AuthState) => state.error
);

export const selectToken = createSelector(
    selectAuthFeatures,
    (state: AuthState) => state.token
);

export const selectUser = createSelector(
    selectAuthFeatures,
    (state: AuthState) => state.user
);

export const selectUserId = createSelector(
    selectAuthFeatures,
    (state: AuthState) => state.user.id
);