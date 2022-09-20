import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import {ActivatedRoute, ParamMap} from '@angular/router';
import { OrdiniService } from '../../services/ordini.service';
import { Ordini } from '../../model/ordini.model';
//import { URL } from '../constants';
import {Observable} from 'rxjs';

@Component({
  selector: 'page-ordinit-detail',
  templateUrl: 'ordini-detail.html',
  styleUrls: ['./ordini-detail.scss'],
})

export class OrdiniDetailPage implements OnInit{
  private ordini$: Observable<Ordini>;

  constructor(private route: ActivatedRoute,
              private ordiniService: OrdiniService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.ordini$ = this.ordiniService.findOrdiniById(parseInt(params.get('id'), 0));
    });
  }

}