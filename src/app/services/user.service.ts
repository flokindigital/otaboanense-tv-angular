import { User } from './../model/user';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: firebase.User;

  constructor(public auth: AngularFireAuth, public route: Router) {
    console.log('USER SERVICE ON');
    this.auth.auth.onAuthStateChanged(user => {
      if (!user) {
        this.route.navigate(['/painel/login']);
      } else {
        this.user = user;
      }
    });
  }

  login(user: User) {
    this.auth.auth
      .signInWithEmailAndPassword(user.email, user.password)
      .then(user => this.route.navigate(['painel/videos']))
      .catch(error => {
        Swal.fire(
          'Error',
          'Ocorreu um erro ao entrar. Verifique as informações inseridas',
          'error'
        );
      });
  }

  logout() {
    this.auth.auth.signOut().then(success => {
      this.route.navigate(['painel/login']);
    });
  }
}
