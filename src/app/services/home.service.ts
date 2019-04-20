import { Injectable, EventEmitter } from '@angular/core';
import { Component, OnInit, Input, Output } from '@angular/core';
import { Home } from '../home';
import {
  AngularFirestore,
  AngularFirestoreDocument
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { HttpClient } from '@angular/common/http';

const URL =
  'https://www.otaboanense.com.br/wp-json/wp/v2/posts/?per_page=5&_embed';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private homeID: string = 'mASRjAsNATTfPenPzpZI';
  private _homeFull: Home;
  @Output() aClickedEvent = new EventEmitter<string>();
  @Output() HomeEvent = new EventEmitter<Home>();
  @Output() NewsEvent = new EventEmitter<Object>();

  itemObservable: Observable<Object>;
  private _news: any;

  constructor(public afs: AngularFirestore, public http: HttpClient) {
    let itemNews: Observable<Object> = this.http.get(URL);
    itemNews.subscribe(data => {
      this.NewsEvent.emit(data);
    });
  }

  get news(): any {
    return this._news;
  }

  getHOME(): string {
    return this.homeID;
  }

  setHOME(home) {
    this.homeID = home;
    this.aClickedEvent.emit(this.homeID);
  }

  set homeFull(home: Home) {
    this._homeFull = home;
    this.HomeEvent.emit(this._homeFull);
  }

  get homeFull(): Home {
    return this._homeFull;
  }

  saveToDB(home: any) {
    let myhome = this.afs.doc<Home>('home/' + this.getHOME());
    myhome
      .update({
        banner_middle_link: home.banner_middle_link,
        banner_middle_image: home.banner_middle_image,
        banner_top_image: home.banner_top_image,
        banner_top_url: home.banner_top_url
      })
      .then(() =>
        Swal.fire({
          title: 'Sucesso',
          text: 'Informações atualizadas com sucesso!',
          type: 'info',
          confirmButtonText: 'Legal!'
        })
      );
  }
}
