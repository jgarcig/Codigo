import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() { }
  navigateRoute(param: string) {
    switch (param) {
      case 'terms-and-conditions':
        alert(param)
        break;
      case 'notice-of-privacy':
        alert(param)
        break;
      case 'legal-warning':
        alert(param)
        break;
      case 'facebook':
        alert(param)
        break;
      case 'instagram':
        alert(param)
        break;
      case 'twitter':
        alert(param)
        break;
    }
  }
}
