import { PlayerComponent } from './../player/player.component';
import { Component, OnInit, Input } from '@angular/core';
import { HomeService } from './../services/home.service';
import 'rxjs/add/operator/map';

import {
  AngularFirestore,
  AngularFirestoreCollection
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Movie {
  name: string;
  url: string;
  description: string;
  date: string;
}

@Component({
  selector: 'SPA-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.scss']
})
export class ListMoviesComponent implements OnInit {
  private itemsCollection: AngularFirestoreCollection<Movie>;
  items: Observable<Movie[]>;

  constructor(private afs: AngularFirestore, private homeService: HomeService) {
    this.itemsCollection = afs.collection<Movie>('movies', ref =>
      ref.orderBy('order', 'desc')
    );

    this.items = this.itemsCollection.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Movie;
        const id = a.payload.doc.id;
        return { id, ...data };
      });
    });
  }

  ngOnInit() { }

  showMovie(item) {
    event.stopPropagation();
    this.homeService.setHOME(item);
  }
}
