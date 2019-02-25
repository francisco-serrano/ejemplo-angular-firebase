import {Component, OnInit} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {auth, User} from 'firebase';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private user: User;

  estaLogueado: boolean;

  displayName: Promise<string>;
  photoURL: Promise<string>;

  constructor(
    private angularFireAuth: AngularFireAuth,
    private toastr: ToastrService
  ) {
    this.angularFireAuth.authState.subscribe(user => {
      if (user) {
        this.user = user;
        this.displayName = Promise.resolve(user.displayName);
        this.photoURL = Promise.resolve(user.photoURL);

        this.estaLogueado = true;

        console.log(user);

        this.toastr.success('We saved these books for you', 'Welcome back ' + this.user.displayName + '!', {
          timeOut: 2000
        });
      }
    });
  }

  ngOnInit() {
  }

  public async onLoginWithGoogle() {
    return this.angularFireAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  public async onLogout() {
    this.toastr.success('See you soon!', 'Good bye ' + this.user.displayName, {
      timeOut: 2000
    });

    this.displayName = Promise.reject();
    this.photoURL = Promise.reject();

    this.estaLogueado = false;

    return this.angularFireAuth.auth.signOut();
  }
}
