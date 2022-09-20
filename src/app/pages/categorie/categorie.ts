import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {TipoeventoService} from '../../services/tipoevento.service';
import {TipoEvento} from '../../model/tipoevento.model';
import {tap} from 'rxjs/internal/operators/tap';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'page-categorie',
  templateUrl: 'categorie.html',
  styleUrls: ['./categorie.scss'],
})

export class CategoriePage implements OnInit {

  private categorie$: Observable<TipoEvento[]>;
  constructor(private tipoeventoService: TipoeventoService) {}

    ngOnInit() {
    this.categorie$ = this.tipoeventoService.listTipoEvento();
    //console.log(this.categorie$);
  }

  doRefresh(event) {
    this.categorie$ = this.tipoeventoService.listTipoEvento()
        .pipe(tap(() => {
          event.target.complete();
        }));
  }



}