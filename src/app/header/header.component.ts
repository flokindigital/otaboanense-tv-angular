import { Home } from './../home';
import { HomeService } from './../services/home.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'SPA-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  home: Home;

  constructor(public homeService: HomeService) {
    this.home = homeService.homeFull;
    console.log('VER ---------->', this.home);
  }

  ngOnInit() {
    this.homeService.HomeEvent.subscribe((home: Home) => {
      this.home = home;
    });
  }
}
