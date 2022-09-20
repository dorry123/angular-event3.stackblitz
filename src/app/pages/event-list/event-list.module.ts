import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { EventListPage } from './event-list';
import { EventListPageRoutingModule } from './event-list-routing.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    EventListPageRoutingModule
  ],
  declarations: [EventListPage],
})
export class EventListModule {}
