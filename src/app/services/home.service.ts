import { Injectable, EventEmitter } from '@angular/core';
import { Component, OnInit, Input, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private homeID: string = 'mASRjAsNATTfPenPzpZI';
  @Output() aClickedEvent = new EventEmitter<string>();

  constructor() {}

  getHOME(): string {
    return this.homeID;
  }

  setHOME(home) {
    this.homeID = home;
    console.log('service chegou', home);
    this.aClickedEvent.emit(this.homeID);
  }
}
