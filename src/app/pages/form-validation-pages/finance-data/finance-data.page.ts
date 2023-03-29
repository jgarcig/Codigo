import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-finance-data',
  templateUrl: './finance-data.page.html',
  styleUrls: ['./finance-data.page.scss'],
})
export class FinanceDataPage implements OnInit {

  constructor(  public sharedService: SharedService ) { }

  ngOnInit() {
  }

}
