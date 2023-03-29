import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmDataPageRoutingModule } from './confirm-data-routing.module';

import { ConfirmDataPage } from './confirm-data.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmDataPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ConfirmDataPage]
})
export class ConfirmDataPageModule {}
