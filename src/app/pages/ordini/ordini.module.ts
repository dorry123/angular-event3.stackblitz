import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { OrdiniPage } from './ordini';
import { OrdiniPageRoutingModule } from './ordini-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrdiniPageRoutingModule
  ],
  declarations: [OrdiniPage]
})
export class OrdiniModule {}

