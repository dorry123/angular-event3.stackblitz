import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {OrdiniService} from '../../services/ordini.service';
import {Ordini} from '../../model/ordini.model';

import {tap} from 'rxjs/internal/operators/tap';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'page-ordini',
  templateUrl: 'ordini.html',
  styleUrls: ['./ordini.scss'],
})

export class OrdiniPage implements OnInit {
  ordini: any[] = [];
  private ordini$: Observable<Ordini[]>;

  constructor(private ordiniService: OrdiniService) {}

    ngOnInit() {
    this.ordini$ = this.ordiniService.listOrdini();
  }

   doRefresh(event) {
    this.ordini$ = this.ordiniService.listOrdini()
        .pipe(tap(() => {
          event.target.complete();
        }));
  } 

}