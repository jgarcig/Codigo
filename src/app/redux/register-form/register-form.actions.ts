import { createAction, props } from "@ngrx/store";
import { PersonalDataI } from "src/app/Interfaces/form-personal-data.interface";

export const enum RegisterFormActionTypes {
    LOAD_DATA_REGISTER = '[DATA] Load Data Register',
    SET_REGISTER_DATA = '[DATA] Set Register Data'
}

export const loadDataRegisterAction = createAction(
    RegisterFormActionTypes.LOAD_DATA_REGISTER
);

export const setRegisterDataAction = createAction(
    RegisterFormActionTypes.SET_REGISTER_DATA,
    props<{ formRegistryData: PersonalDataI }>()
);