import { Component } from '@angular/core';
import { EventData } from '../../providers/event-data';

@Component({
  selector: 'page-recensioni-list',
  templateUrl: 'recensioni-list.html',
  styleUrls: ['./recensioni-list.scss'],
})
export class RecensioniListPage {
  recensione: any[] = [];

  constructor(public eventData: EventData) {}

  ionViewDidEnter() {
    this.eventData.getRecensioni().subscribe((recensione: any[]) => {
      this.recensione = recensione;
    });
  }
}
