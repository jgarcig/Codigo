import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FinanceDataPageRoutingModule } from './finance-data-routing.module';

import { FinanceDataPage } from './finance-data.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FinanceDataPageRoutingModule,
    ComponentsModule
  ],
  declarations: [FinanceDataPage]
})
export class FinanceDataPageModule {}
