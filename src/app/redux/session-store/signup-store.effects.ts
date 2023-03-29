import { Injectable } from "@angular/core";
import { Actions, createEffect } from "@ngrx/effects";
import * as registryStoreActions from './signup-store.actions';


@Injectable()

export class LoginStoreEffects {

    constructor  (private actions$: Actions ){}

    // loginUserActiveData$ = createEffect(() => this.actions$.pipe(
    //     ofType(registryStoreActions.loadDataLoginAction),
        
    //     switchMap( () => {
    //         return this.service.getStatusReport(this.reportParam, this.ejerciParam)
    //         .pipe(
    //             map(
    //                 (resp) => reportsActions.setReportActiveAction({payload: resp})                                           
    //             ),
    //             // catchError( err => of(cartActions.setErrorAction({payload: err})))
    //         )
    //     })
    // ));

}

