import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RecensioniPage } from './recensioni';
import { RecensioniPageRoutingModule } from './recensioni-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecensioniPageRoutingModule
  ],
  declarations: [
    RecensioniPage,
  ]
})
export class RecensioniModule { }
