import { VideoService } from './../../services/video.service';
import { Video } from './../../model/video';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'SPA-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {
  videos: Observable<Video[]>;
  videoHome: string;

  constructor(
    public userService: UserService,
    public videoService: VideoService,
    public router: Router
  ) {
    this.videos = this.videoService.getVideos();
    this.videoService.getVideoHome().subscribe(data => {
      this.videoHome = data.highlihgt;
    });
  }

  ngOnInit() { }

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

  remove(video: Video) {
    Swal.fire({ title: 'Apagar Vídeo', text: 'Deseja realmente apagar este vídeo ?', type: 'info', showCancelButton: true, showCloseButton: true }).then(success => {
      if (success.value) {
        this.videoService.removeVideo(video);
      }
    });
  }

  updateHome() {
    this.videoService.updateHome(this.videoHome);
  }
}
