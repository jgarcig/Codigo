import { Component, Input, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UserLoginI } from 'src/app/Interfaces/user-login.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start',
  templateUrl: './start.page.html',
  styleUrls: ['./start.page.scss'],
})

export class StartPage implements OnInit {
  
  stepView = 'homeView';
  // stepView = 'twoFactor';
  reduxObj$: Observable<any> | undefined;
  dataRedux: UserLoginI | any ;

  constructor(  public route:Router, public platform: Platform, private store: Store<any>) { }

  ngOnInit() {

    if (this.platform.is('desktop')) {
    
      alert(this.platform.is('desktop'))
      this.route.navigateByUrl('/start-web')
    }

    this.reduxObj$ = this.store.select(redux => redux.loginState);
    this.reduxObj$.subscribe( (resp) => {
      this.dataRedux = resp.dataLogin;
      this.stepView = this.dataRedux.accessFrom; 
    });
  }

  changeOptionView(param: string){    
    this.stepView = param;    
  }

}

