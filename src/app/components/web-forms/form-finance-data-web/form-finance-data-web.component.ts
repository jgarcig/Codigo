import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PersonalDataI } from 'src/app/Interfaces/form-personal-data.interface';
import * as fromRegisterFormActions from 'src/app/redux/register-form/register-form.actions';

@Component({
  selector: 'app-form-finance-data-web',
  templateUrl: './form-finance-data-web.component.html',
  styleUrls: ['./form-finance-data-web.component.scss'],
})
export class FormFinanceDataWebComponent implements OnInit {

  isLoading: boolean = false;
  financeForm!: FormGroup;
  date: any;
  dataRedux: PersonalDataI | undefined;
  reduxObj$: Observable<any> | undefined;

  constructor(private formBuilder:FormBuilder,
              private store: Store<any>) { }

  ngOnInit() {
    this.financeForm = this.formBuilder.group({
      salary: ['', [Validators.required]],
      occupation: ['', [Validators.required]],
      jobName: ['', [Validators.required]],
      jobActivity: ['', [Validators.required]],
      seniority: ['', [Validators.required]],
      jobExperience: ['', [Validators.required]],
      publicCharges: ['', [Validators.required]],
      //se agregaron nuevos
      numDepositosxMes:['',[Validators.required]],
      montodeposito:['',[Validators.required]]
    });

    this.reduxObj$ = this.store.select(redux => redux.formRegistryState);
    this.reduxObj$.subscribe((resp) =>{
      this.dataRedux = resp.formRegistryData
    }).unsubscribe();

  }

  submitFinanceDataForm(){

    const FORM_REGISTRY = {
      ...this.dataRedux,
      ...this.financeForm.value,
      indexProgress: 'financeCompleted',
      indexStep:3
    }

    this.isLoading = true;
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
      ...this.financeForm.value,
      indexStep: localIndex

    }    
    setTimeout( () =>{
      this.store.dispatch(fromRegisterFormActions.setRegisterDataAction({ formRegistryData: FORM_REGISTRY }) );
      this.isLoading = false;
    },2000)
    
  }
}
