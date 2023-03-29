import { createReducer, on } from '@ngrx/store';
import { PersonalDataI } from 'src/app/Interfaces/form-personal-data.interface';
import * as registerFormActions from './register-form.actions';

export interface State {
    // formRegistryData: PersonalDataI;
    // formRegistryData
}

export const initialState: State = {
    formRegistryData: null
}

export const featureKey = 'formRegistryData';

export const reducer = createReducer(

    initialState,

    on( registerFormActions.setRegisterDataAction, (state, {formRegistryData}) => ({ 
        ...state, 
        formRegistryData
    }))

)

export const formDataStoreReducer = (state: any, action: any) => reducer(state, action);


