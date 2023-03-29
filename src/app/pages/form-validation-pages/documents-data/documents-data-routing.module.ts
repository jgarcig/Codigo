import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DocumentsDataPage } from './documents-data.page';

const routes: Routes = [
  {
    path: '',
    component: DocumentsDataPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DocumentsDataPageRoutingModule {}
