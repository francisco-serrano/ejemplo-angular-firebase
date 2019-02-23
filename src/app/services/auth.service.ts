import {Injectable} from '@angular/core';
import {auth, User} from 'firebase';
import {AngularFireAuth} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private angularFireAuth: AngularFireAuth) {
    this.angularFireAuth.authState.subscribe(user => {
      let userItem = null;

      if (user) {
        this.user = user;
        userItem = JSON.stringify(this.user);
      }

      localStorage.setItem('user', userItem);
    });
  }

  private user: User;

  static getUser(): object {
    return JSON.parse(localStorage.getItem('user'));
  }

  public async loginWithGoogle() {
    return this.angularFireAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  public async logout() {
    await this.angularFireAuth.auth.signOut();
    localStorage.removeItem('user');
  }
}
