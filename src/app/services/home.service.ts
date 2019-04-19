import { Injectable, EventEmitter } from '@angular/core';
import { Component, OnInit, Input, Output } from '@angular/core';
import { Home } from '../home';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private homeID: string = 'mASRjAsNATTfPenPzpZI';
  private _homeFull: Home;
  @Output() aClickedEvent = new EventEmitter<string>();
  @Output() HomeEvent = new EventEmitter<Home>();

  constructor() {}

  getHOME(): string {
    return this.homeID;
  }

  setHOME(home) {
    this.homeID = home;
    console.log('service chegou', home);
    this.aClickedEvent.emit(this.homeID);
  }

  set homeFull(home: Home) {
    this._homeFull = home;
    this.HomeEvent.emit(this._homeFull);
  }

  get homeFull(): Home {
    return this._homeFull;
  }
}
