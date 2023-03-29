import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FinanceDataPage } from './finance-data.page';

const routes: Routes = [
  {
    path: '',
    component: FinanceDataPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FinanceDataPageRoutingModule {}
