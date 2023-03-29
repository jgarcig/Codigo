import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BehaviourService {

  dataSource = new BehaviorSubject<any>(null);
  public $getdataSource = this.dataSource.asObservable();

  constructor() { }

  setdataSource(param: any){
    console.log("set dataSaource ",param);
    
    this.dataSource.next(param)  
  }
}
