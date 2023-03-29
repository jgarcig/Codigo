import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PersonalDataI } from 'src/app/Interfaces/form-personal-data.interface';
import * as Constants from "../../../shared/constants";
import * as fromRegisterFormActions from 'src/app/redux/register-form/register-form.actions';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-form-address-data-web',
  templateUrl: './form-address-data-web.component.html',
  styleUrls: ['./form-address-data-web.component.scss'],
})
export class FormAddressDataWebComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
              private store: Store<any>) { }

  isLoading: boolean = false;
  addressForm!: FormGroup;
  dataRedux: PersonalDataI | undefined ;
  reduxObj$: Observable<any>| undefined;
  indexFromredux:any;

  ngOnInit() {
    this.addressForm = this.formBuilder.group({
      country: ['', [Validators.required]],
      zipCode: ['', [Validators.required, Validators.pattern(Constants.POSTAL_CODE_REGEXP)]],
      state: ['', [Validators.required]],
      city: ['', [Validators.required]],
      suburb: ['', [Validators.required]],
      townhall: [''],
      street: ['', [Validators.required]],
      numexterior:['',Validators.required],
      numinterior:['',Validators.required]
    });

    this.reduxObj$ = this.store.select(redux => redux.formRegistryState);
    this.reduxObj$.subscribe((resp) =>{ 
      this.dataRedux = resp.formRegistryData;
    }).unsubscribe();
  }

  submitAddressDataForm(){
    this.isLoading = true;
    
    const FORM_REGISTRY = {
      ...this.dataRedux,
      ...this.addressForm.value,
      indexProgress: 'addressCompleted',
      indexStep:2
    }

    setTimeout( () =>{
      this.store.dispatch(fromRegisterFormActions.setRegisterDataAction({ formRegistryData: FORM_REGISTRY }) );
      this.isLoading = false;
    },2000)
  }

  btnRegresar(){
    this.isLoading = true;
    let tag = document.getElementById("custom"+this.dataRedux?.indexStep);
    tag?.classList.remove("active")

    let localIndex:any = this.dataRedux?.indexStep 
    localIndex -= 1
    const FORM_REGISTRY = {
      ...this.dataRedux,
      ...this.addressForm.value,
      indexStep: localIndex

    } 
    setTimeout( () =>{
      this.store.dispatch(fromRegisterFormActions.setRegisterDataAction({ formRegistryData: FORM_REGISTRY }) );
      this.isLoading = false;
    },2000)
    
  }

}
