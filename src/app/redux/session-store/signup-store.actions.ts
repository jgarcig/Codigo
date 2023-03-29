import { createAction, props } from "@ngrx/store";
import { UserSignUpI } from "src/app/Interfaces/user-signup.interface"

export const enum RegistryStoreActionTypes {
    LOAD_DATA_REGISTRY = '[REGISTRY] Load Data Registry',
    SET_REGISTRY_USER = '[REGISTRY] Set Registry User'
}

export const loadDataRegistryAction = createAction(
    RegistryStoreActionTypes.LOAD_DATA_REGISTRY
);

export const setRegistryStoreAction = createAction(
    RegistryStoreActionTypes.SET_REGISTRY_USER,
    props<{ dataRegistry: UserSignUpI }>()
);