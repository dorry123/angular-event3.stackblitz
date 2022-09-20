import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdiniDetailPage } from './ordini-detail';
import { OrdiniDetailPageRoutingModule } from './ordini-detail-routing.module';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    OrdiniDetailPageRoutingModule
  ],
  declarations: [
    OrdiniDetailPage,
  ]
})
export class OrdiniDetailModule { }
