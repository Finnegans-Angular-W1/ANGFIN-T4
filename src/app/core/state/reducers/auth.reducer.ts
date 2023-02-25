import { createReducer, on } from "@ngrx/store";
import { AuthState } from "../../interfaces/auth.state";
import { User } from '../../interfaces/user';
import { sendLoginForm, sendLoginFormSuccess, sendLoginFormError, sendRegisterFormError, sendRegisterForm, sendRegisterFormSuccess, logout, setUserState, updateUser } from '../actions/auth.actions';



export const initialState: AuthState = { loading: false, user: {} as User, token: undefined, error: null}

export const authReducer = createReducer(
    initialState,
    on(sendLoginFormError, (state, { error }) => {
        return { ...state, error, loading: false }
    }),
    on(sendLoginForm, (state, { user }) => {
        return { ...state, loading: true, user }
    }),
    on(sendLoginFormSuccess, (state, { token }) => {
        return { ...state, loading: false, token, error: null }
    }),
    on(sendRegisterFormError, (state, { error }) => {
        return { ...state, error, loading: false }
    }),
    on(sendRegisterForm, (state, { user }) => {
        return { ...state, loading: true }
    }),
    on(sendRegisterFormSuccess, (state) => {
        return { ...state, error: null, loading: false }
    }),
    on(logout, (state) => {
        return { ...state, loading: false, user: {} as User, token: undefined, error: null }
    }),
    on(setUserState, (state, {user}) => {
        return { ...state, user }
    }),
    on(updateUser, (state, {first_name, last_name}) => {
        let updatedUser: User = Object.assign({}, state.user);
        updatedUser.first_name = first_name;
        updatedUser.last_name = last_name;
        return { ...state, user: updatedUser }
    })
)