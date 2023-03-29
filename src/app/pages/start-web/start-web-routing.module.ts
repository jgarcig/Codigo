import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StartWebPage } from './start-web.page';

const routes: Routes = [
  {
    path: '',
    component: StartWebPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StartWebPageRoutingModule {}
