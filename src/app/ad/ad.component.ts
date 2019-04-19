import { Component, OnInit } from '@angular/core';
import { Home } from './../home';
import { HomeService } from './../services/home.service';

@Component({
  selector: 'SPA-ad',
  templateUrl: './ad.component.html',
  styleUrls: ['./ad.component.scss']
})
export class AdComponent implements OnInit {
  home: Home;
  constructor(public homeService: HomeService) {}

  ngOnInit() {
    this.homeService.HomeEvent.subscribe((home: Home) => {
      this.home = home;
    });
  }
}
