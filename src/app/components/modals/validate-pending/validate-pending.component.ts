import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-validate-pending',
  templateUrl: './validate-pending.component.html',
  styleUrls: ['./validate-pending.component.scss'],
})
export class ValidatePendingComponent implements OnInit {

  constructor(  public modalCtrl: ModalController,
                private router: Router  ) { }

  ngOnInit() {}

  closeAndNavigate(){
    this.modalCtrl.dismiss();
    this.router.navigateByUrl('welcome');
  }

}
