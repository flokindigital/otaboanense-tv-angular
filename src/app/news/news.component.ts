import { HomeService } from './../services/home.service';
import { Component, OnInit } from '@angular/core';
import { Home } from '../home';
import { Observable } from 'rxjs';

@Component({
  selector: 'SPA-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  news: any;

  constructor(public homeService: HomeService) { }

  ngOnInit() {
    this.homeService.NewsEvent.subscribe((news: Object) => {
      this.news = news;
    });
  }
}
