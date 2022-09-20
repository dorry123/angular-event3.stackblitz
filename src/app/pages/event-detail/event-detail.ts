import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import {ActivatedRoute, ParamMap} from '@angular/router';
import { EventoService } from '../../services/evento.service';
import { Evento } from '../../model/evento.model';
//import { URL } from '../constants';
import {Observable} from 'rxjs';

@Component({
  selector: 'page-event-detail',
  templateUrl: 'event-detail.html',
  styleUrls: ['./event-detail.scss'],
})

export class EventDetailPage implements OnInit{
  private evento$: Observable<Evento>;

  constructor(private route: ActivatedRoute,
              private eventoService: EventoService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.evento$ = this.eventoService.findEventoById(parseInt(params.get('id'), 0));
    });
  }

}