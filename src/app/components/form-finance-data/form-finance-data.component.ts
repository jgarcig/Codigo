import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PersonalDataI } from 'src/app/Interfaces/form-personal-data.interface';
import * as fromRegisterFormActions from 'src/app/redux/register-form/register-form.actions';

@Component({
  selector: 'app-form-finance-data',
  templateUrl: './form-finance-data.component.html',
  styleUrls: ['./form-finance-data.component.scss'],
})
export class FormFinanceDataComponent implements OnInit {

  isLoading: boolean = false;
  financeForm!: FormGroup;
  reduxObj$: Observable<any> | undefined;
  dataRedux: PersonalDataI | undefined ;
  date: any;

  constructor(  private formBuilder: FormBuilder,
                private store: Store<any>,
                public router: Router ) { }

  ngOnInit() {
    this.financeForm = this.formBuilder.group({
      salary: ['', [Validators.required]],
      occupation: ['', [Validators.required]],
      jobName: ['', [Validators.required]],
      jobActivity: ['', [Validators.required]],
      seniority: ['', [Validators.required]],
      jobExperience: ['', [Validators.required]],
      publicCharges: ['', [Validators.required]]
    });

    this.reduxObj$ = this.store.select(redux => redux.formRegistryState);
    this.reduxObj$.subscribe( (resp) => {
      this.dataRedux = resp.formRegistryData;
    }).unsubscribe();
  }

  submitFinanceDataForm(){
    this.isLoading = true;
    
    const FORM_REGISTRY = {
      ...this.dataRedux,
      ...this.financeForm.value,
      indexProgress: 'financeCompleted'
    }

    setTimeout( () =>{
      this.store.dispatch(fromRegisterFormActions.setRegisterDataAction({ formRegistryData: FORM_REGISTRY }) );
      this.isLoading = false;
      this.router.navigateByUrl('welcome');
    },2000)
  }

}
