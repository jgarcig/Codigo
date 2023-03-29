import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion-list',
  templateUrl: './accordion-list.component.html',
  styleUrls: ['./accordion-list.component.scss'],
})
export class AccordionListComponent implements OnInit {

  @Input() objPersonalInp: any;
  @Input() objAddressInp: any;
  @Input() objFinanceInp: any;
  @Input() objDcumentsInp: any;

  detailOpened : boolean = false;
  titleCard: string | undefined;

  constructor() { }

  ngOnInit() { 
    console.log('objPersonalInp', this.objPersonalInp);
    console.log('objAddressInp', this.objAddressInp);
    console.log('objFinanceInp', this.objFinanceInp);
    console.log('objDcumentsInp', this.objDcumentsInp);

  }

  toggleAccordion(): void {
    this.detailOpened = !this.detailOpened;
  }

}
