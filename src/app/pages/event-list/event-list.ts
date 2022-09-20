import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {EventoService} from '../../services/evento.service';
import {Evento} from '../../model/evento.model';
import {tap} from 'rxjs/internal/operators/tap';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'page-event-list',
  templateUrl: 'event-list.html',
  styleUrls: ['./event-list.scss'],
})

export class EventListPage implements OnInit {
  private eventi$: Observable<Evento[]>;
  constructor(private eventoService: EventoService) {}

    ngOnInit() {
    this.eventi$ = this.eventoService.listEventi();
  }

  doRefresh(event) {
    this.eventi$ = this.eventoService.listEventi()
        .pipe(tap(() => {
          event.target.complete();
        }));
  }

      openDettaglioEvento(e: Evento) {
    // DO nothing
  }


}