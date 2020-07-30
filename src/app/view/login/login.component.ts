import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  constructor(private router: Router, private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
  }

  login() {
    console.log('username: ', this.username);
    console.log('password: ', this.password);
    this.authenticationService.login(this.username, this.password).subscribe(
      response => {this.router.navigate(['/home']);},
      error => {alert('wrong')}
    );
  }

  logout() {
    this.authenticationService.logout();
    location.reload();
  }
}
