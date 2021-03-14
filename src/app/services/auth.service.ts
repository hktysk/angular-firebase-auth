import { Injectable } from '@angular/core';
// import { Router } from '@angular/router';

import firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private angularFireAuth: AngularFireAuth,
    // private router: Router
  ) {}

  async signIn(provider: firebase.auth.AuthProvider) {
    await this.angularFireAuth
      .signInWithPopup(provider)
      .then(() => {
        alert('認証に成功しました')

        // ページを移動する場合
        // this.router.navigate(['/'])
      })
      .catch(() => {
        alert('認証失敗しました');
      })
  }

  async googleSignIn() {
    await this.signIn(new firebase.auth.GoogleAuthProvider());
  }

  async gitHubSignIn() {
    await this.signIn(new firebase.auth.GithubAuthProvider());
  }

  async twitterSignIn() {
    await this.signIn(new firebase.auth.TwitterAuthProvider());
  }
}
