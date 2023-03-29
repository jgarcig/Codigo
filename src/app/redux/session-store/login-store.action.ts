import { createAction, props } from "@ngrx/store";
import { UserLoginI } from "src/app/Interfaces/user-login.interface";

export const enum LoginStoreActionTypes {
    LOAD_DATA_LOGIN = '[LOGIN] Load Data Login',
    SET_LOGIN_USER = '[LOGIN] Set Login User'
}

export const loadDataLoginAction = createAction(
    LoginStoreActionTypes.LOAD_DATA_LOGIN
);

export const setLoginStoreAction = createAction(
    LoginStoreActionTypes.SET_LOGIN_USER,
    props<{ dataLogin: UserLoginI }>()
);