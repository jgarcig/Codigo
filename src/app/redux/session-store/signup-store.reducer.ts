import { createReducer, on } from '@ngrx/store';
import * as signupStoreActions from './signup-store.actions';

export interface State {
    dataRegistry: any;
}
export const initialState: State = {
    dataRegistry: null,
};

export const featureKey = 'registry';

export const reducer = createReducer(

    initialState,

    on( signupStoreActions.setRegistryStoreAction, (state, {dataRegistry}) => ({ 
        ...state, 
        dataRegistry
    }))

)

export const registryStoreReducer = (state: any, action: any) => reducer(state, action);

