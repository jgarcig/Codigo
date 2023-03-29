import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';;
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(public platform: Platform, public route: Router) {

    this.platform.ready().then(() => {
      if (this.platform.is('desktop')) {
        this.route.navigateByUrl('/landing')
      }
      else {
        this.route.navigateByUrl('/start')
      }
    })
  }
}
