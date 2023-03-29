import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as Constants from "../../shared/constants";
import * as fromRegisterFormActions from 'src/app/redux/register-form/register-form.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-form-personal-data',
  templateUrl: './form-personal-data.component.html',
  styleUrls: ['./form-personal-data.component.scss'],
})
export class FormPersonalDataComponent implements OnInit {

  isLoading: boolean = false;
  personalDtaForm!: FormGroup;
  date: any;

  constructor(  private formBuilder: FormBuilder, 
                private store: Store<any>,
                public router: Router ) { }

  ngOnInit() {
    this.personalDtaForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      surname: ['', [Validators.required ]],
      secondSurname: ['', [Validators.required]],
      dateBirth: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required, Validators.pattern(Constants.PHONE_REGEXP)]],
      gender: ['', [Validators.required]],
      contryTax: ['', [Validators.required]],
      rfc: ['', [Validators.required, Validators.pattern(Constants.RFC_REGEXP)]],
      UScitizen: ['', [Validators.required]]
    });

  }

  submitPersonalDataForm(){

    this.isLoading = true;
    
    const FORM_REGISTRY = {
      ...this.personalDtaForm.value,
      indexProgress: 'personalCompleted'
    }

    setTimeout( () =>{
      this.store.dispatch(fromRegisterFormActions.setRegisterDataAction({ formRegistryData: FORM_REGISTRY }) );
      this.isLoading = false;
      this.router.navigateByUrl('welcome');
    },2000)
    

  }

  
}
