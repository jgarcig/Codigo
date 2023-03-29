import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetallesCarruselPage } from './detalles-carrusel.page';

const routes: Routes = [
  {
    path: '',
    component: DetallesCarruselPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetallesCarruselPageRoutingModule {}
