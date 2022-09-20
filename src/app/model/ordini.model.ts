
// import {TipoPag} from './tipopag.model';

export class Ordini {
    id: number;
    id_utente: number;
    id_evento: number;
    importo_intero: number;
    qta: number;
    sconto_bonus: number;
    cod_bonus: string;
    qta_bambino: number;
    importo_bambini: number;
    tot_pagato: number;
    //tipoPag: TipoPag
    cod_ticket: string;
}