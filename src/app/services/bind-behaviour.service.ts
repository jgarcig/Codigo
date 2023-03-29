import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BindBehaviourService {

  dataSource = new BehaviorSubject<any>(null);
  public $getdataSource = this.dataSource.asObservable();

  statusRegistry = new BehaviorSubject<any>(null);
  public $getStatusRegistry = this.statusRegistry.asObservable();

  constructor() { }

  setdataSource(param: any){   
    this.dataSource.next(param)
  }

  setStatusRegistry(param: any){   
    this.statusRegistry.next(param)
  }
  
}
