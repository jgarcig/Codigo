import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LegalWarningPage } from './legal-warning.page';

const routes: Routes = [
  {
    path: '',
    component: LegalWarningPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LegalWarningPageRoutingModule {}
