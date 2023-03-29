import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-documents-data',
  templateUrl: './documents-data.page.html',
  styleUrls: ['./documents-data.page.scss'],
})
export class DocumentsDataPage implements OnInit {

  constructor(  public sharedService: SharedService ) { }

  ngOnInit() {
  }

}
