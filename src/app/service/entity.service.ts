import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Entity } from '../model/entity';

@Injectable({
  providedIn: 'root'
})
export class EntityService {

  constructor(private http: HttpClient) {}

  findEntities(): Observable<Entity[]> {
    return this.http.get<Entity[]>('http://localhost:8080/entity');
  }
}
