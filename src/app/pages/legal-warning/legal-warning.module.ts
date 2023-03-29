import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LegalWarningPageRoutingModule } from './legal-warning-routing.module';

import { LegalWarningPage } from './legal-warning.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LegalWarningPageRoutingModule,
    ComponentsModule
  ],
  declarations: [LegalWarningPage]
})
export class LegalWarningPageModule {}
