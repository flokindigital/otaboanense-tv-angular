import { Video } from './../model/video';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { HttpClient } from '@angular/common/http';
import {
  AngularFirestore,
  AngularFirestoreCollection
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  videosCollection: AngularFirestoreCollection<Video>;
  videos: Observable<Video[]>;

  private _videoEdit: Video;

  constructor(public afs: AngularFirestore, public router: Router) {
    this.videosCollection = this.afs.collection<Video>('movies');
    // this.videos = this.videosCollection.valueChanges();
    this.videos = this.videosCollection.snapshotChanges().map(videos => {
      return videos.map(a => {
        const data = a.payload.doc.data() as Video;
        const id = a.payload.doc.id;
        return { id, ...data };
      });
    });
  }

  getVideos(): Observable<Video[]> {
    return this.videos;
  }

  set videoEdit(video) {
    this._videoEdit = video;
  }

  get videoEdit(): Video {
    return this._videoEdit;
  }

  editVideo(video) {
    video.url = 'https://www.youtube.com/embed/' + video.youtubeid;
    let videoRef = this.afs
      .doc<Video>('movies/' + video.id)
      .update(video)
      .then(video => this.router.navigate(['/painel/videos']));
  }

  addVideo(video) {
    console.log('veio para adicionar', video);
    video.url = 'https://www.youtube.com/embed/' + video.youtubeid;
    let videoRef = this.afs
      .collection('movies')
      .doc<Video>(video.id)
      .set(video)
      .then(video => this.router.navigate(['/painel/videos']));
  }
}
