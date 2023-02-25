import { createAction, props } from '@ngrx/store';
import { User } from '../../interfaces/user';

export const sendLoginForm = createAction(
    '[Login View] Send login form',
    props<{user: User}>()
)

export const sendLoginFormSuccess = createAction(
    '[Login View] Send login form success',
    props<{ token: string }>()
)

export const sendLoginFormError = createAction(
    '[Login View] Send login form error',
    props<{ error: any }>()
)

export const sendRegisterForm = createAction(
    '[Register View] Send register form',
    props<{user: User}>()
)

export const sendRegisterFormSuccess = createAction(
    '[Register View] Send register form success'
)

export const sendRegisterFormError = createAction(
    '[Register View] Send register form error',
    props<{ error: any }>()
)

export const setUserState = createAction(
    '[Login View] Set user state',
    props<{ user: User }>()
    )

export const logout = createAction(
    '[Logout] Logout user'
)

export const updateUser = createAction(
    '[Edit View] Update user',
    props<{ first_name: string, last_name: string }>()
)