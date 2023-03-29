import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import * as fromRegisterFormActions from 'src/app/redux/register-form/register-form.actions';

@Component({
  selector: 'app-form-documents-data-web',
  templateUrl: './form-documents-data-web.component.html',
  styleUrls: ['./form-documents-data-web.component.scss'],
})
export class FormDocumentsDataWebComponent implements OnInit {

  isLoading: boolean = false;
  status: boolean = false;
  documentsDataForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private store: Store<any>,
    public router: Router) { }

  ngOnInit() {
    this.documentsDataForm = this.formBuilder.group({
      photo: ['', [Validators.required]],
      typeDocument: ['', [Validators.required]],
      frontDocument: ['', [Validators.required]],
      backDocument: ['', [Validators.required]],
      acceptAdvice: ['', [Validators.required]]
    })
  }

  submitDocumentsDataForm() {
    this.isLoading = true;
    const FORM_REGISTRY = {
      ...this.documentsDataForm.value,
      indexStep: 4
    }

    setTimeout(() => {
      this.store.dispatch(fromRegisterFormActions.setRegisterDataAction({ formRegistryData: FORM_REGISTRY }));
      this.isLoading = false;
    }, 2000);
  }
}

