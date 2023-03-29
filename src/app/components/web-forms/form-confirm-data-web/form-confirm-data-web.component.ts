import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AddressDataI, PersonalDataI } from 'src/app/Interfaces/form-personal-data.interface';
import { ValidatePendingComponent } from '../../modals/validate-pending/validate-pending.component';
import * as fromRegisterFormActions from 'src/app/redux/register-form/register-form.actions';

@Component({
  selector: 'app-form-confirm-data-web',
  templateUrl: './form-confirm-data-web.component.html',
  styleUrls: ['./form-confirm-data-web.component.scss'],
})
export class FormConfirmDataWebComponent implements OnInit {

  isLoading: boolean = false;
  status: boolean = false;
  confirmDataForm!: FormGroup;

  dataPersonal: any;
  dataAddress: AddressDataI | undefined;
  dataFinance: any;
  dataDocuments: any;

  reduxObj$: Observable<any> | undefined;
  dataRedux: PersonalDataI | undefined;

  constructor(private formBuilder: FormBuilder,
    private store: Store<any>,
    public router: Router,
    private modalCtrl: ModalController) { }

  ngOnInit() {

    this.confirmDataForm = this.formBuilder.group({
      privacyAccept: [null, [Validators.required]],
      termsAccept: [null, [Validators.required]]
    });

    this.reduxObj$ = this.store.select(redux => redux.formRegisterState);
    this.reduxObj$.subscribe((resp) => {

      this.dataPersonal = {
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
  async showModalValidatePending() {

    const modal = await this.modalCtrl.create({
      component: ValidatePendingComponent
    });

    await modal.present();
  }

  detectChange(evt: any, param: number) {
    if (!evt.detail.checked) {
      param === 0 ?
        this.confirmDataForm.controls['privacyAccept'].setValue(null) :
        this.confirmDataForm.controls['termsAccept'].setValue(null);
    }
  }

  submitConfirmDataForm() {
    this.isLoading = true;

    const FORM_REGISTRY = {
      ...this.confirmDataForm.value,
      indexStep: 5
    }

    setTimeout(() => {
      this.store.dispatch(fromRegisterFormActions.setRegisterDataAction({ formRegistryData: FORM_REGISTRY }));
      this.isLoading = false;
    }, 2000)
  }
}
