import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { BindBehaviourService } from 'src/app/services/bind-behaviour.service';
import { MockDataService } from 'src/app/services/mock-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  statusRegistry: string | undefined;
  reduxObj$: Observable<any> | undefined;

  constructor(  private mockService: MockDataService,
                private store: Store<any>,
                private behaviourService: BindBehaviourService ) { }

  ionViewDidEnter(){
    // this.mockService.getDataFromLocalJson().subscribe( (resp: any)=>{      
    //   this.statusRegistry = resp.data[0].status;
    //   console.log('statusRegistry', this.statusRegistry);
    // });
    this.reduxObj$ = this.store.select(redux => redux.formRegistryState);
    this.reduxObj$.subscribe( (resp) => {
      console.log('reduxObj$', resp);
      
      this.statusRegistry = resp.formRegistryData.indexProgress
      console.log('statusRegistry', this.statusRegistry);
      
    }).unsubscribe();
  }
  
  ngOnInit() {}

}
