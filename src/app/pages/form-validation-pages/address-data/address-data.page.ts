import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-address-data',
  templateUrl: './address-data.page.html',
  styleUrls: ['./address-data.page.scss'],
})
export class AddressDataPage implements OnInit {

  constructor(  public sharedService: SharedService ) { }

  ngOnInit() {
  }

}
