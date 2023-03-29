import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as Constants from "../../shared/constants";
import * as fromRegistryActions from 'src/app/redux/session-store/signup-store.actions';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  
  isLoading: boolean = false;
  signInForm!: FormGroup;

  @Input() stepView: string | undefined;
  @Output() backStepView = new EventEmitter<string>();

  constructor(  private formBuilder: FormBuilder,
                private store: Store<any>  ) { }

  ngOnInit() { 
    this.signInForm = this.formBuilder.group({
      rfcType: ['', [Validators.required ]],
      email: ['', [Validators.required, Validators.pattern(Constants.PURE_EMAIL_REGEXP) ]],
      user: ['', [Validators.required, Validators.minLength(8)]],
      password: ['', [Validators.required ]],
      confirmPass: ['', [Validators.required ]],
      phone: [null, [Validators.required, Validators.pattern(Constants.PHONE_REGEXP) ]],
    })
  }

  backToInitView(){
    this.stepView = 'homeView'
    this.backStepView.emit(this.stepView);
  }

  submitForm(){
    
    this.isLoading = true;
    this.store.dispatch(fromRegistryActions.setRegistryStoreAction({ dataRegistry: this.signInForm.value }) );
    
    setTimeout( () =>{
      this.stepView = 'twoFactor'
      this.backStepView.emit(this.stepView);
      this.isLoading = false;
    },2000)
    
  }

}
