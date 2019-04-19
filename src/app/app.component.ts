import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { HomeService } from './services/home.service';
import {
  AngularFirestore,
  AngularFirestoreDocument
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import { Home } from './home';

@Component({
  selector: 'SPA-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private itemDoc: AngularFirestoreDocument<Home>;
  item: Observable<Home>;
  temp_values: any;

  constructor(
    private afs: AngularFirestore,
    public sanitizer: DomSanitizer,
    private homeService: HomeService
  ) {
    this.itemDoc = this.afs.doc<Home>('home/' + this.homeService.getHOME());
    this.item = this.itemDoc.valueChanges();
    this.item.subscribe(item => {
      this.temp_values = item;
      this.homeService.homeFull = item;
    });
  }
}
