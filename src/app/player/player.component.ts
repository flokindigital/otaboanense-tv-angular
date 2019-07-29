import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { HomeService } from './../services/home.service';

import {
  AngularFirestore,
  AngularFirestoreDocument
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Video } from '../model/video';

export interface Movie {
  name: string;
  url: string;
  description: string;
  date: string;
  youtubeid: string;
}

export interface Home {
  highlihgt: string;
}

@Component({
  selector: 'SPA-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  private itemDoc: AngularFirestoreDocument<Home>;
  item: Observable<Home>;
  id: string;
  private itemsCollection: AngularFirestoreDocument<Movie>;
  movieHighlight: Observable<Movie>;
  movieHOME: any;

  @Input() movie: any;
  @Input() videoplayer: any;

  constructor(
    private afs: AngularFirestore,
    public sanitizer: DomSanitizer,
    private homeService: HomeService
  ) {
    this.itemDoc = this.afs.doc<Home>('home/' + this.homeService.getHOME());
    this.item = this.itemDoc.valueChanges();
    this.item.subscribe(val => {

      this.itemsCollection = this.afs.doc<Movie>('movies/' + (this.videoplayer != null ? this.videoplayer : val.highlihgt));
      this.movieHighlight = this.itemsCollection.valueChanges();
      this.movieHighlight.subscribe(val => {
        console.log('CARREGOU', val);
        this.movieHOME = val;
      });
    });
  }

  ngOnInit() {
    this.homeService.aClickedEvent.subscribe((movie: string) => {
      this.changePlayer(movie);
    });

  }

  public changePlayer(movie) {
    this.itemsCollection = this.afs.doc<Movie>('movies/' + movie.id);
    this.movieHighlight = this.itemsCollection.valueChanges();
    this.movieHighlight.subscribe(val => {
      this.movieHOME = val;
    });
  }
}
