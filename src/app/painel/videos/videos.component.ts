import { VideoService } from './../../services/video.service';
import { Video } from './../../model/video';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'SPA-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {
  videos: Video[];

  constructor(
    public userService: UserService,
    public videoService: VideoService,
    public router: Router
  ) {
    this.videoService.getVideos().subscribe(video => {
      this.videos = video;
      console.log('VIDEOS', this.videos);
    });
  }

  ngOnInit() {}

  edit(video) {
    this.videoService.videoEdit = video;
    this.router.navigate(['painel/video/editar']);
  }

  new() {
    this.router.navigate(['painel/video/novo']);
  }

  logout() {
    this.userService.logout();
    this.router.navigate(['painel/videos']);
  }

  remove(video) {}
}
