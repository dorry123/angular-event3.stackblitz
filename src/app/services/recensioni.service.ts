import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { URL } from '../constants';
import { Recensione } from '../model/recensione.model';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class RecensioniService {
    constructor(private http: HttpClient) {
    }

    listRecensioni(): Observable<Recensione[]> {
        return this.http.get<Recensione[]>(URL.ALL_NOTE);
        console.log(URL.ALL_NOTE);
    }

    findRecensioneById(idNota: number): Observable<Recensione> {
        const recUrl = `${URL.FIND_NOTA_BYID}/${idNota}`;
        return this.http.get<Recensione>(recUrl);
    }

    createRecensione(recensione: Recensione) {
        return this.http.post<Recensione>(URL.ADD_NOTA, recensione);
    }

    updateRecensione(recensione: Recensione) {
        return this.http.put<Recensione>(URL.UPDATE_NOTA, recensione);
    }

    deleteRecensione(recensione: Recensione) {
        const deleteUrl = `${URL.DELETE_NOTA}/${recensione.id}`;
        return this.http.delete<Recensione>(deleteUrl);
    }

}
