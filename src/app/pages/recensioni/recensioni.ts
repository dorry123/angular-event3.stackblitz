import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import {Observable} from 'rxjs';
//import { EventData } from '../../providers/event-data';
import {RecensioniService} from '../../services/recensioni.service';
import {Recensione} from '../../model/recensione.model';

import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'page-recensioni',
  templateUrl: 'recensioni.html',
  styleUrls: ['./recensioni.scss'],
})
export class RecensioniPage implements OnInit {
  private recensioni$: Observable<Recensione[]>;
  submitted = false;
  supportMessage: string;

  constructor(
    public alertCtrl: AlertController,
    public toastCtrl: ToastController,
    private recensioniService: RecensioniService
  ) { }

    ngOnInit() {
    this.recensioni$ = this.recensioniService.listRecensioni();
  }

    openDettaglioRecensioni(r: Recensione) {
    // DO nothing
  }

  async ionViewDidEnter() {
    const toast = await this.toastCtrl.create({
      message: 'This does not actually send a support request.',
      duration: 3000
    });
    await toast.present();
  }

  async submit(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      this.supportMessage = '';
      this.submitted = false;

      const toast = await this.toastCtrl.create({
        message: 'Tuo messaggio è stato inserito',
        duration: 3000
      });
      await toast.present();
    }
  }

/*    ionViewDidEnter() {
    this.eventData.getEvents().subscribe((evento: any[]) => {
      this.evento = evento;
    });
  }  */

}


  
  // If the user enters text in the support question and then navigates
  // without submitting first, ask if they meant to leave the page
  // async ionViewCanLeave(): Promise<boolean> {
  //   // If the support message is empty we should just navigate
  //   if (!this.supportMessage || this.supportMessage.trim().length === 0) {
  //     return true;
  //   }

  //   return new Promise((resolve: any, reject: any) => {
  //     const alert = await this.alertCtrl.create({
  //       title: 'Leave this page?',
  //       message: 'Are you sure you want to leave this page? Your support message will not be submitted.',
  //       buttons: [
  //         { text: 'Stay', handler: reject },
  //         { text: 'Leave', role: 'cancel', handler: resolve }
  //       ]
  //     });

  //     await alert.present();
  //   });
  // }
  

