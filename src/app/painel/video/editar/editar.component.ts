import { YoutubeAPI } from './../../../model/youtube';
import { Video } from './../../../model/video';
import { VideoService } from './../../../services/video.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientModule, HttpClientJsonpModule, HttpClient } from '@angular/common/http';
import { formatDate } from '@angular/common';

const API = "https://noembed.com/embed?url=https://www.youtube.com/watch?v=";

@Component({
  selector: 'SPA-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss']
})
export class EditarComponent implements OnInit {
  video: Video;



  constructor(public videoService: VideoService,
    public router: Router,
    public http: HttpClient) {


    this.video = videoService.videoEdit;
    if (this.video == null) {
      this.video = {
        name: '',
        description: '',
        order: (1000 + (new Date().getUTCMilliseconds())),
        date: '',
        youtubeid: '',
        id: this.uuidv4(),
        url: ''
      };
    }

    console.log('VER VIDEO', this.video);
  }

  getVideoAPI() {
    this.http.jsonp<YoutubeAPI>(API + this.video.youtubeid, 'callback').subscribe(value => {
      this.video.name = value.title;
      this.video.description = value.author_name;
      this.video.date = "Publicado em " + formatDate(new Date(), 'dd/MM/yyyy', 'en');
    });
  }

  save() {
    if (this.router.url == '/painel/video/novo') {
      // this.video.id = this.uuidv4();
      this.videoService.addVideo(this.video);
    } else {
      this.videoService.editVideo(this.video);
    }
  }

  uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = (Math.random() * 16) | 0,
        v = c == 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }
  ngOnInit() { }
}
