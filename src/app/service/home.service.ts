import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private http: HttpClient) {}

  getHomeMessage() {
    return this.http.get('http://localhost:8080/home', {
      responseType: 'text',
    });
  }
}
