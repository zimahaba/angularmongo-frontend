import { Component } from '@angular/core';
import { AuthenticationService } from './service/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private authenticationService: AuthenticationService) {}

  loggerIn() {
    return this.authenticationService.loggedIn();
  }

  logout() {
    this.authenticationService.logout();
    location.reload();
  }
}
