import { Component, OnInit } from '@angular/core';
import { BehaviourService } from 'src/app/services/behaviour.service';

@Component({
  selector: 'app-detalles-carrusel',
  templateUrl: './detalles-carrusel.page.html',
  styleUrls: ['./detalles-carrusel.page.scss'],
})
export class DetallesCarruselPage implements OnInit {

  image:string ="";
  titulo:string="";
  descripcion:string="";

  constructor(private behaviuor: BehaviourService) { }

  ngOnInit() {
    this.behaviuor.$getdataSource.subscribe((respuesta)=>{
      console.log(respuesta);

      this.image = respuesta.image;
      this.titulo = respuesta.titulo;
      this.descripcion = respuesta.descripcion;
      
    }).unsubscribe();
  }

}
