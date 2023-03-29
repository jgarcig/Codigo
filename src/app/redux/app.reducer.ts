import { ActionReducerMap } from "@ngrx/store";
import * as signupReducer from "./session-store/signup-store.reducer";
import * as loginReducer from './session-store/login-store.reducer'
import * as registerFormReducer from './register-form/register-form.reducer'


export interface AppState {
    registryState: signupReducer.State,
    loginState: loginReducer.State,
    formRegistryState: registerFormReducer.State
}

export const appReducers: ActionReducerMap<AppState> = {
    registryState: signupReducer.registryStoreReducer,
    loginState: loginReducer.loginStoreReducer,
    formRegistryState: registerFormReducer.formDataStoreReducer
}