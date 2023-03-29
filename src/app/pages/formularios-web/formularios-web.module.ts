import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormulariosWebPageRoutingModule } from './formularios-web-routing.module';

import { FormulariosWebPage } from './formularios-web.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormulariosWebPageRoutingModule,
    ComponentsModule
  ],
  declarations: [FormulariosWebPage]
})
export class FormulariosWebPageModule {}
