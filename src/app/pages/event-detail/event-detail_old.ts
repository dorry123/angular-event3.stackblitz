import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventData } from '../../providers/event-data';
import { ActionSheetController } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'page-event-detail',
  templateUrl: 'event-detail.html',
  styleUrls: ['./event-detail.scss'],
})
export class EventDetailPage {
  event: any;

  constructor(
    private dataProvider: EventData,
    private route: ActivatedRoute,
    public actionSheetCtrl: ActionSheetController,
    public eventData: EventData,
    public inAppBrowser: InAppBrowser,
  ) {}

  ionViewWillEnter() {
    this.dataProvider.load().subscribe((data: any) => {
      const idEvento = this.route.snapshot.paramMap.get('idEvento');
      if (data && data.events) {
        for (const event of data.events) {
          if (event && event.id === idEvento) {
            this.event = event;
            break;
          }
        }
      }
    });
  }

  openExternalUrl(url: string) {
    this.inAppBrowser.create(
      url,
      '_blank'
    );
  }

  async openEventShare(event: any) {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Share ' + event.name,
      buttons: [
        {
          text: 'Copy Link',
          handler: () => {
            console.log(
              'Copy link clicked on https://twitter.com/' + event.twitter
            );
            if (
              (window as any).cordova &&
              (window as any).cordova.plugins.clipboard
            ) {
              (window as any).cordova.plugins.clipboard.copy(
                'https://twitter.com/' + event.twitter
              );
            }
          }
        },
        {
          text: 'Share via ...'
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });

    await actionSheet.present();
  }

  async openContact(event: any) {
    const mode = 'ios'; // this.config.get('mode');

    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Contact ' + event.name,
      buttons: [
        {
          text: `Email ( ${event.email} )`,
          icon: mode !== 'ios' ? 'mail' : null,
          handler: () => {
            window.open('mailto:' + event.email);
          }
        },
        {
          text: `Call ( ${event.phone} )`,
          icon: mode !== 'ios' ? 'call' : null,
          handler: () => {
            window.open('tel:' + event.phone);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });

    await actionSheet.present();
  }
}
