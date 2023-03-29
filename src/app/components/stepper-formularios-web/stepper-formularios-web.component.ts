import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MockDataService } from 'src/app/services/mock-data.service';

@Component({
  selector: 'app-stepper-formularios-web',
  templateUrl: './stepper-formularios-web.component.html',
  styleUrls: ['./stepper-formularios-web.component.scss'],
})
export class StepperFormulariosWebComponent implements OnInit {

  ejemplo: any; 
  stepper:any;
  indexglobal = 0;
  
  constructor(private dataService: MockDataService,
                private store: Store<any>) { }

  reduxObj$: Observable<any> | undefined;

  ngOnInit() {
    this.dataService.getStepper().subscribe((result)=>{
      this.stepper = result;
      
    });

    this.reduxObj$ = this.store.select(redux => redux.formRegistryState);
    this.reduxObj$.subscribe( (resp) => {
    if(resp.formRegistryData === null){
      this.indexglobal = 0;
      
    }
    else{
      this.indexglobal = resp.formRegistryData.indexStep;
    }
    this.dinamicClassStepper(this.indexglobal);
    
    });

  }

  dinamicClassStepper(index:number){
    console.log("index inicial" , index);

         for(var i=index; i<4;i++){
        let custom0 = document.getElementById("custom0");
        custom0?.classList.add("active");
        
        let custom = document.getElementById("custom"+ this.indexglobal);
        custom?.classList.add("active");
        
      }
  }

 

}
