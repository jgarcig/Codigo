import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formularios-web',
  templateUrl: './formularios-web.page.html',
  styleUrls: ['./formularios-web.page.scss'],
})
export class FormulariosWebPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  atrasWeb(){
    this.router.navigateByUrl('landing');
  }

}
