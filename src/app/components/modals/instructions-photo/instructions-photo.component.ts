import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-instructions-photo',
  templateUrl: './instructions-photo.component.html',
  styleUrls: ['./instructions-photo.component.scss'],
})
export class InstructionsPhotoComponent implements OnInit {

  constructor(  public modalCtrl: ModalController  ) { }

  ngOnInit() {}

}
