import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {ProfiloPage} from './profilo';
import { ProfiloPageRoutingModule } from './profilo-routing.module';
import {HttpClient} from '@angular/common/http';
//import {TranslateLoader} from '@ngx-translate/core';
//import {createTranslateLoader} from '../../app.module';

const routes: Routes = [
    {
        path: '',
        component: ProfiloPage
    }
];

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        IonicModule,
        ProfiloPageRoutingModule
    ],
    declarations: [ProfiloPage]
})

export class ProfiloModule {
}
