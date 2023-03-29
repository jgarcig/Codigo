import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import * as Constants from "../../shared/constants";
import * as fromRegisterFormActions from 'src/app/redux/register-form/register-form.actions';
import { Observable } from 'rxjs';
import { PersonalDataI } from 'src/app/Interfaces/form-personal-data.interface';

@Component({
  selector: 'app-form-address-data',
  templateUrl: './form-address-data.component.html',
  styleUrls: ['./form-address-data.component.scss'],
})
export class FormAddressDataComponent implements OnInit {

  isLoading: boolean = false;
  addressForm!: FormGroup;
  
  reduxObj$: Observable<any> | undefined;
  dataRedux: PersonalDataI | undefined ;
  indexFormStatus: string | undefined;
  
  constructor(  private formBuilder: FormBuilder, 
                private store: Store<any>,
                public router: Router ) { }

  ngOnInit() {
    this.addressForm = this.formBuilder.group({
      country: ['', [Validators.required]],
      zipCode: ['', [Validators.required, Validators.pattern(Constants.POSTAL_CODE_REGEXP)]],
      state: ['', [Validators.required]],
      city: ['', [Validators.required]],
      suburb: ['', [Validators.required]],
      townhall: [''],
      street: ['', [Validators.required]]
    });

    this.reduxObj$ = this.store.select(redux => redux.formRegistryState);
    this.reduxObj$.subscribe( (resp) => {
      this.dataRedux = resp.formRegistryData;
    }).unsubscribe();
  }

  submitAddressDataForm(){

    this.isLoading = true;
    
    const FORM_REGISTRY = {
      ...this.dataRedux,
      ...this.addressForm.value,
      indexProgress: 'addressCompleted'
    }

    setTimeout( () =>{
      this.store.dispatch(fromRegisterFormActions.setRegisterDataAction({ formRegistryData: FORM_REGISTRY }) );
      this.isLoading = false;
      this.router.navigateByUrl('welcome');
    },2000)
    

  }

}
