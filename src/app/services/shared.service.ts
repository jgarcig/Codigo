import { Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor( public navCtrl: NavController ) { }


  popNavigate(){
    this.navCtrl.pop();
  }


}
