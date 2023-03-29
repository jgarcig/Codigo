import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallesCarruselPageRoutingModule } from './detalles-carrusel-routing.module';

import { DetallesCarruselPage } from './detalles-carrusel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallesCarruselPageRoutingModule
  ],
  declarations: [DetallesCarruselPage]
})
export class DetallesCarruselPageModule {}
