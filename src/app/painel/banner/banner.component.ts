import { UserService } from './../../services/user.service';
import { HomeService } from './../../services/home.service';
import { Component, OnInit } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreDocument
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Home } from './../../home';

@Component({
  selector: 'SPA-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  home: Home;
  constructor(
    private afs: AngularFirestore,
    public homeService: HomeService,
    public userService: UserService
  ) {}

  ngOnInit() {
    this.homeService.HomeEvent.subscribe((home: Home) => {
      this.home = home;
    });
  }

  updateBanner() {
    this.homeService.saveToDB(this.home);
  }
}
