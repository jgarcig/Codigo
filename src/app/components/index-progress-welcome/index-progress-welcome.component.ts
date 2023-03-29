import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PersonalDataI } from 'src/app/Interfaces/form-personal-data.interface';

@Component({
  selector: 'app-index-progress-welcome',
  templateUrl: './index-progress-welcome.component.html',
  styleUrls: ['./index-progress-welcome.component.scss'],
})
export class IndexProgressWelcomeComponent implements OnInit {

  reduxObj$: Observable<any> | undefined;
  dataRedux: PersonalDataI | undefined ;
  indexFormStatus: string | undefined;

  constructor(  public router: Router,
                private store: Store<any> ) { }

  ngOnInit() {
    this.reduxObj$ = this.store.select(redux => redux.formRegistryState);
    this.reduxObj$.subscribe( (resp) => {
      this.dataRedux = resp.formRegistryData;

      if( this.dataRedux !== null){
        this.indexFormStatus = this.dataRedux?.indexProgress;
        console.log('indexFormStatus', this.indexFormStatus);
      }

    });
  }

  navigateToForm( args: string ){
    switch( args ){
      case 'personal':
        this.router.navigateByUrl('personal-data');
      break;

      case 'address':
        this.router.navigateByUrl('address-data');
      break;

      case 'finance':
        this.router.navigateByUrl('finance-data');
      break;

      case 'documents':
        this.router.navigateByUrl('documents-data');
      break;

      case 'confirm':
        this.router.navigateByUrl('confirm-data');
      break;
      
    }
  }

}
