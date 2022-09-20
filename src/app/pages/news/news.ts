import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {NewsService} from '../../services/news.service';
import {News} from '../../model/news.model';

@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
  styleUrls: ['./news.scss'],
})
export class NewsPage implements OnInit{
  news: any[] = [];
  private news$: Observable<News[]>;

  constructor(private newsService: NewsService) {}

      ngOnInit() {
    this.news$ = this.newsService.listNews();
  }

  // ionViewDidEnter() {
  //   this.eventData.getNews().subscribe((news: any[]) => {
  //     this.news = news;
  //   });
  // }


}