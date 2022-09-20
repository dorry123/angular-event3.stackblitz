import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { CategoriePage } from './categorie';
import { CategoriePageRoutingModule } from './categorie-routing.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    CategoriePageRoutingModule
  ],
  declarations: [CategoriePage],
})
export class CategorieModule {}
