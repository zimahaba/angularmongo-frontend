import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../model/user';
import { map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem('currentUser'))
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(username, password): Observable<any> {
    let user = new User();
    user.username = username;
    user.password = password;

    return this.http
      .post<any>(
        'http://localhost:8080/login' /*`${environment.apiUrl}/login`*/,
        user,
        { observe: 'response' }
      )
      .pipe(
        map((response) => {
          user.token = response.headers.get('Authorization');
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
          return user;
        })
      );
  }

  logout() {
    localStorage.removeItem('currentUser');
  }

  loggedIn(): boolean {
    if (this.currentUserValue) {
      return true;
    }
    return false;
  }
}
