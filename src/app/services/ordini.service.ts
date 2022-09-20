import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ordini } from '../model/ordini.model';
// utente
import { Utente } from '../model/utente.model';
import {Observable} from 'rxjs';
import { URL } from '../constants';

@Injectable({
    providedIn: 'root'
})
export class OrdiniService {

    constructor(private http: HttpClient) {
    }
    private res: any;
    listOrdini(): Observable<Ordini[]> {
        return this.http.get<Ordini[]>(URL.ALL_ORDINI);
        console.log(URL.ALL_ORDINI);
    }

    findOrdiniById(idOrdini: number): Observable<Ordini> {
        const ordiniUrl = `${URL.FIND_ORDINE_BYID}/${idOrdini}`;
        return this.http.get<Ordini>(ordiniUrl);
    }

    //FIND_ORDINI_BYUSER - da provare
 /*    findOrdiniByUser(user: Utente): Observable<Ordini> {
        const ordiniUrl = `${URL.FIND_ORDINI_BYUSER}/${user}`;
    } */

    createOrdini(ordini: Ordini) {
        return this.http.post<Ordini>(URL.ADD_ORDINE, ordini);
    }

    updateOrdini(ordini: Ordini) {
        return this.http.put<Ordini>(URL.UPDATE_ORDINE, ordini);
    }

    deleteOrdini(ordini: Ordini) {
        const deleteUrl = `${URL.DELETE_ORDINE}/${ordini.id}`;
        return this.http.delete<Ordini>(deleteUrl);
    }

    


}
