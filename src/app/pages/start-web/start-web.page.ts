import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-start-web',
  templateUrl: './start-web.page.html',
  styleUrls: ['./start-web.page.scss'],
})
export class StartWebPage implements OnInit {

  stepView = 'homeView';

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
  }

  changeOptionView(param: string) {
    this.stepView = param;
  }

}
