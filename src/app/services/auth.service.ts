import {Injectable} from '@angular/core';
import {auth, User} from 'firebase';
import {AngularFireAuth} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUser: User;

  private displayName: Promise<string>;
  private photoURL: Promise<string>;

  constructor(private angularFireAuth: AngularFireAuth) {
    this.angularFireAuth.authState.subscribe(user => {
      if (user) {
        console.log('AuthService: recibio usuario');

        this.currentUser = user;
        this.displayName = Promise.resolve(user.displayName);
        this.photoURL = Promise.resolve(user.photoURL);
      }
    });
  }

  public async signIn() {
    await this.angularFireAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  public async signOut() {
    localStorage.removeItem('user');
    await this.angularFireAuth.auth.signOut();
  }

  public getUserName() {


    return this.displayName;
  }

  public getProfilePicUrl() {
    return this.photoURL;
  }
}
