import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as Constants from "../../shared/constants";
import * as fromLoginActions from 'src/app/redux/session-store/login-store.action';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  isLoading: boolean = false;
  loginForm!: FormGroup;

  @Input() stepView: string | undefined;
  @Output() backStepView = new EventEmitter<string>();

  constructor(  private formBuilder: FormBuilder,
                private store: Store<any> ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern(Constants.PURE_EMAIL_REGEXP) ]],
      password: ['', [Validators.required ]]
    })
  }

  backToInitView(){
    this.stepView = 'homeView'
    this.backStepView.emit(this.stepView);
  }

  submitLoginForm(){
    console.log(this.loginForm);
    
    this.isLoading = true;
    const DATA_FORM_TO_STORE = {
      ...this.loginForm.value,
      accessFrom: 'login'
    }
    this.store.dispatch(fromLoginActions.setLoginStoreAction({ dataLogin: DATA_FORM_TO_STORE }) );
    
    setTimeout( () =>{
      this.stepView = 'twoFactor'
      this.backStepView.emit(this.stepView);
      this.isLoading = false;
    },2000)
    
  }
  
  changeOptionView(param:'registryView'){    
    setTimeout( () =>{
      this.stepView = param
      this.backStepView.emit(this.stepView);
      this.isLoading = false;
    },10) 
  }
  
}
