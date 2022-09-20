import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { URL } from '../constants';
import { News } from '../model/news.model';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class NewsService {
    constructor(private http: HttpClient) {
    }

    listNews(): Observable<News[]> {
        return this.http.get<News[]>(URL.ALL_NEWS);
        console.log(URL.ALL_NEWS);
    }

    findNewsById(id: number): Observable<News> {
        const newsUrl = `${URL.FIND_NEWS_BYID}/${id}`;
        return this.http.get<News>(newsUrl);
    }

    createNews(news: News) {
        return this.http.post<News>(URL.ADD_NEWS, news);
    }

    updateNews(news: News) {
        return this.http.put<News>(URL.UPDATE_NEWS, news);
    }

    deleteNews(news: News) {
        const deleteUrl = `${URL.DELETE_NOTA}/${news.id}`;
        return this.http.delete<News>(deleteUrl);
    }
    //file ok

}
