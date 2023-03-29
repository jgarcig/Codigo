import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UserLoginI } from 'src/app/Interfaces/user-login.interface';
import { UserSignUpI } from 'src/app/Interfaces/user-signup.interface';
import * as fromLoginActions from 'src/app/redux/session-store/signup-store.actions';

@Component({
  selector: 'app-two-factor-auth',
  templateUrl: './two-factor-auth.component.html',
  styleUrls: ['./two-factor-auth.component.scss'],
})
export class TwoFactorAuthComponent implements OnInit {

  @Input() stepView: string | undefined;
  @Output() backStepView = new EventEmitter<string>();

  isLoading: boolean = false;
  formFactorView: string = 'phoneVerification'
  reduxObj$: Observable<any> | undefined;
  dataFromRedux: UserLoginI | undefined ;
  completedCode:  string | undefined;
  btnEnable: boolean = false;

  constructor(  private store: Store<any>,
                public route: Router  ) { }

  ngOnInit() { }


  focusDetect(evt: Event) {
    evt.stopPropagation();
  }

  resendCode(){
    alert('click on resendCode()')
  }

  onCodeChanged(code: string) {
    console.log('code.length', code.length);
    code.length === 6 ? this.btnEnable = true : this.btnEnable = false;
  }

  onCodeCompleted(code: string) {    
    this.completedCode = code;    
    console.log('this.completedCode', this.completedCode);
  }

  confirmCode(){
    this.isLoading = true;

    setTimeout( ()=>{

      this.reduxObj$ = this.store.select(redux => redux.loginState)
      this.reduxObj$.subscribe( (resp)=>{
        this.dataFromRedux = resp.dataLogin

        if(this.dataFromRedux?.accessFrom === 'login'){
          this.isLoading = false;
          this.formFactorView = 'emailVerification';
        }else{
          this.isLoading = false;
          this.formFactorView = 'waitingVerification';
        }

      });
     
    }, 1700)
  }

  signUpCompleted(){
    this.backStepView.emit('homeView');
  }

  loginCompleted(){
    this.route.navigateByUrl('welcome');
  }

}


