import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { URL } from '../constants';
import { TipoEvento} from '../model/tipoevento.model';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class TipoeventoService {
    constructor(private http: HttpClient) {
    }

    listTipoEvento(): Observable<TipoEvento[]> {
        return this.http.get<TipoEvento[]>(URL.ALL_TIPOEVENTO);
        console.log(URL.ALL_TIPOEVENTO);
    }



}
