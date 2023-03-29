import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MockDataService {

  constructor( private httpClient: HttpClient) { }

  getDataFromLocalJson(): Observable <any>{
    return this.httpClient.get('assets/json/mock.json')
  }

  getCarrusel():Observable<any>{
    return this.httpClient.get('assets/json/carrusel.json')
  }

  getStepper():Observable<any>{
    return this.httpClient.get('assets/json/stepper.json')
  }
}
