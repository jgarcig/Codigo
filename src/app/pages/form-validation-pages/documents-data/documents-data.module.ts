import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DocumentsDataPageRoutingModule } from './documents-data-routing.module';

import { DocumentsDataPage } from './documents-data.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DocumentsDataPageRoutingModule,
    ComponentsModule
  ],
  declarations: [DocumentsDataPage]
})
export class DocumentsDataPageModule {}
