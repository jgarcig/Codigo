import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as Constants from "../../../shared/constants";
import * as fromRegisterFormActions from 'src/app/redux/register-form/register-form.actions';

@Component({
  selector: 'app-form-personal-data-web',
  templateUrl: './form-personal-data-web.component.html',
  styleUrls: ['./form-personal-data-web.component.scss'],
})
export class FormPersonalDataWebComponent implements OnInit {

  isLoading: boolean = false;
  personalDataForm!: FormGroup;
  date:any;
 

  constructor(private formuBuilder: FormBuilder,
              private store: Store<any>) { }

  ngOnInit() {
    this.personalDataForm = this.formuBuilder.group({
      name:['',[Validators.required]],
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
      ...this.personalDataForm.value,
       indexProgress: 'personalCompleted',
        indexStep:1
    }
    setTimeout( () =>{
      this.store.dispatch(fromRegisterFormActions.setRegisterDataAction({ formRegistryData: FORM_REGISTRY }) );
      this.isLoading = false;
    },2000)
    
  }

}
