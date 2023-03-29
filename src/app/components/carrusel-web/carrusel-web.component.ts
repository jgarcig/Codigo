import { Component, OnInit, ViewChild } from '@angular/core';
import { Data, Router } from '@angular/router';
import { IonSegment, IonSlides } from '@ionic/angular';
import { Observable } from 'rxjs';
import { BehaviourService } from 'src/app/services/behaviour.service';
import { MockDataService } from 'src/app/services/mock-data.service';

@Component({
  selector: 'app-carrusel-web',
  templateUrl: './carrusel-web.component.html',
  styleUrls: ['./carrusel-web.component.scss'],
})
export class CarruselWebComponent implements OnInit {

  @ViewChild('slider', { static: true }) private slider!: IonSlides;


carrusel: any;

public slideOpts = {
  slidesPerView: 3
};
  constructor(private dataService: MockDataService,
              public router:Router,
              private behaviuor:BehaviourService) { }

  ngOnInit() {
    this.dataService.getCarrusel().subscribe((result)=>{
      this.carrusel = result;

    });
   
  }
  btnNext(){
    this.slider.slideNext(1000);
  }
  btnAtras(){
    this.slider.slidePrev(1000);
  }

  detalleCarrusel(parametro:any){
    this.behaviuor.setdataSource(parametro);
    this.router.navigateByUrl("detalles-carrusel")
  }

}
