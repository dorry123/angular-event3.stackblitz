import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { RecensioniListPage } from './recensioni-list';
import { RecensioniListPageRoutingModule } from './recensioni-list-routing.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RecensioniListPageRoutingModule
  ],
  declarations: [RecensioniListPage],
})
export class RecensioniListModule {}
