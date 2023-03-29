import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PersonalDataI } from 'src/app/Interfaces/form-personal-data.interface';
import { InstructionsPhotoComponent } from '../modals/instructions-photo/instructions-photo.component';
import * as fromRegisterFormActions from 'src/app/redux/register-form/register-form.actions';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-documents-data',
  templateUrl: './form-documents-data.component.html',
  styleUrls: ['./form-documents-data.component.scss'],
})
export class FormDocumentsDataComponent implements OnInit {

  isLoading: boolean = false;
  reduxObj$: Observable<any> | undefined;
  dataRedux: PersonalDataI | undefined ;
  documentsForm!: FormGroup;

  photoLoaded = false;
  frontUploaded = false;
  backUploaded = false;

  constructor(  private modalCtrl: ModalController,
                private formBuilder: FormBuilder,
                private store: Store<any>,
                public router: Router ) { }

  ngOnInit() {
    this.documentsForm = this.formBuilder.group({
      photo: [null, [Validators.required]],
      typeDocument: [null, [Validators.required]],
      frontDocument: [null, [Validators.required]],
      backDocument: [null, [Validators.required]],
      acceptAdvice:[null, [Validators.required]]
    });

    this.reduxObj$ = this.store.select(redux => redux.formRegistryState);
    this.reduxObj$.subscribe( (resp) => {
      this.dataRedux = resp.formRegistryData;
    }).unsubscribe();
  }

  async showModalPhotoInstructions(){

    const modal = await this.modalCtrl.create({
      component: InstructionsPhotoComponent,
    });

    await modal.present();
  }

  openCameraToTakePhoto(){
    console.log('openCameraToTakePhoto()');    
    this.isLoading = true;
    setTimeout( ()=>{
      this.isLoading = false;
      this.photoLoaded = true;
      this.documentsForm.controls['photo'].setValue('PHOTO-base64-example!');

    },1500)
  }

  uploadDocument(param: string){
    console.log(param);    
    this.isLoading = true;

    setTimeout( ()=>{

      if(param === 'front'){
        this.frontUploaded = true;
        this.documentsForm.controls['frontDocument'].setValue('FRONT-base64-example!');
        this.isLoading = false;
  
      }else{
        this.backUploaded = true;
        this.documentsForm.controls['backDocument'].setValue('BACK-base64-example!');
        this.isLoading = false;

      }

    },1500)
  }

  submitDocumentsForm(){

    this.isLoading = true;

    const FORM_REGISTRY = {
      ...this.dataRedux,
      ...this.documentsForm.value,
      indexProgress: 'documentsCompleted'
    }
    
    setTimeout( () =>{
      this.store.dispatch(fromRegisterFormActions.setRegisterDataAction({ formRegistryData: FORM_REGISTRY }) );
      this.isLoading = false;
      this.router.navigateByUrl('welcome');
    },2000)

  }

  detectCheck(evt: any){
    if(!evt.detail.checked){
      this.documentsForm.controls['acceptAdvice'].setValue(null);
    }
  }

}
