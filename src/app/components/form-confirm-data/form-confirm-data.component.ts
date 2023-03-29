import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ValidatePendingComponent } from '../modals/validate-pending/validate-pending.component';
import * as fromRegisterFormActions from 'src/app/redux/register-form/register-form.actions';
import { PersonalDataI } from 'src/app/Interfaces/form-personal-data.interface';

@Component({
  selector: 'app-form-confirm-data',
  templateUrl: './form-confirm-data.component.html',
  styleUrls: ['./form-confirm-data.component.scss'],
})
export class FormConfirmDataComponent implements OnInit {

  isLoading: boolean = false;

  dataPersonal: any;
  dataAddress: any;
  dataFinance: any;
  dataDocuments: any;

  confirmForm!: FormGroup;

  reduxObj$: Observable<any> | undefined;
  dataRedux: PersonalDataI | undefined ;

  constructor(  private store: Store<any>,  
                private formBuilder: FormBuilder,
                private modalCtrl: ModalController  ) { }

  ngOnInit() {

    this.confirmForm = this.formBuilder.group({
      privacyAccept: [null, [Validators.required]],
      termsAccept: [null, [Validators.required]]
    });

    this.reduxObj$ = this.store.select(redux => redux.formRegistryState);
    this.reduxObj$.subscribe( (resp) => {

      this.dataPersonal ={
        name: resp.formRegistryData.name,
        surname: resp.formRegistryData.surname,
        secondSurname: resp.formRegistryData.secondSurname,
        dateBirth: resp.formRegistryData.dateBirth,
        phoneNumber: resp.formRegistryData.phoneNumber,
        gender: resp.formRegistryData.gender,
        contryTax: resp.formRegistryData.contryTax,
        rfc: resp.formRegistryData.rfc,
        UScitizen: resp.formRegistryData.UScitizen,
      };

      this.dataAddress = {
        country: resp.formRegistryData.country,
        zipCode: resp.formRegistryData.zipCode,
        state: resp.formRegistryData.state,
        city: resp.formRegistryData.city,
        suburb: resp.formRegistryData.suburb,
        townhall: resp.formRegistryData.townhall,
        street: resp.formRegistryData.street
      };

      this.dataFinance = {
        salary: resp.formRegistryData.salary,
        occupation: resp.formRegistryData.occupation,
        jobName: resp.formRegistryData.jobName,
        jobActivity: resp.formRegistryData.jobActivity,
        seniority: resp.formRegistryData.seniority,
        jobExperience: resp.formRegistryData.jobExperience,
        publicCharges: resp.formRegistryData.publicCharges
      };

      this.dataDocuments = {
        photo: resp.formRegistryData.photo,
        typeDocument: resp.formRegistryData.typeDocument,
        frontDocument: resp.formRegistryData.frontDocument,
        backDocument: resp.formRegistryData.backDocument,
      };
      
    }).unsubscribe();


  }

  async showModalValidatePending(){

    const modal = await this.modalCtrl.create({
      component: ValidatePendingComponent
    });

    await modal.present();
  }

  detectChange(evt: any, param: number){    
    if(!evt.detail.checked){
      param === 0 ? 
        this.confirmForm.controls['privacyAccept'].setValue(null) : 
        this.confirmForm.controls['termsAccept'].setValue(null);
    }
  }

  submitConfirmForm(){
    this.isLoading = true;

    const FORM_CONFIRM = {
      ...this.dataRedux,
      ...this.confirmForm.value,
      indexProgress: 'confirmDoctosSend'
    }

    console.log('FORM_CONFIRM', FORM_CONFIRM);

    setTimeout( ()=>{
      this.store.dispatch(fromRegisterFormActions.setRegisterDataAction({ formRegistryData: FORM_CONFIRM }) );
      this.showModalValidatePending();
      this.isLoading = false;
    }, 1500)


  }

}
