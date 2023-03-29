import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StartWebPageRoutingModule } from './start-web-routing.module';

import { StartWebPage } from './start-web.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StartWebPageRoutingModule,
    ComponentsModule
  ],
  declarations: [StartWebPage]
})
export class StartWebPageModule {}
