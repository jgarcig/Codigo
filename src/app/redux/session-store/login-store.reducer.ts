import { createReducer, on } from '@ngrx/store';
import * as loginStoreActions from './login-store.action';

export interface State {
    dataLogin: any;
}
export const initialState: State = {
    dataLogin: null,
};

export const featureKey = 'login';

export const reducer = createReducer(

    initialState,

    on( loginStoreActions.setLoginStoreAction, (state, {dataLogin}) => ({ 
        ...state, 
        dataLogin
    }))

)

export const loginStoreReducer = (state: any, action: any) => reducer(state, action);
