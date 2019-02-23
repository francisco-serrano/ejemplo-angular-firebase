import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = AuthService.getUser();
  isLoggedIn: boolean;

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.isLoggedIn = this.user !== null;

    console.log('Usuario: ', this.user);
    console.log('isLoggedIn: ', this.isLoggedIn);
  }

  onLoginWithGoogle() {
    this.authService.loginWithGoogle().then(response => {
      console.log('Inició sesión');
      console.log(response);

      this.isLoggedIn = true;
    });
  }

  onLogout() {
    this.authService.logout().then(() => {
      this.isLoggedIn = false;
      console.log('Logged Out');
    });
  }
}
