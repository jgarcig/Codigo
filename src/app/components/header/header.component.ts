import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {}
  
  navigateRoute(param: string) {
  
    switch (param) {
      case 'home':
        alert(param)
      break;
        
      case 'registry':
        this.router.navigate(['/start', param]);
      break;
    }
  }
}
