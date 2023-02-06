import { ActionReducerMap } from "@ngrx/store";
import { AuthState } from "../interfaces/auth.state";
import { authReducer } from "./reducers/auth.reducer";

export interface AppState {
    auth: AuthState;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
    auth: authReducer
};
