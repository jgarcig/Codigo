import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormulariosWebPage } from './formularios-web.page';

const routes: Routes = [
  {
    path: '',
    component: FormulariosWebPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormulariosWebPageRoutingModule {}
