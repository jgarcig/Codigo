import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddressDataPageRoutingModule } from './address-data-routing.module';

import { AddressDataPage } from './address-data.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddressDataPageRoutingModule,
    ComponentsModule
  ],
  declarations: [AddressDataPage]
})
export class AddressDataPageModule {}
