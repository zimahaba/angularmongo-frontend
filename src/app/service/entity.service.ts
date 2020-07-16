import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Entity } from '../model/entity';

@Injectable({
  providedIn: 'root'
})
export class EntityService {

  constructor(private http: HttpClient) {}

  findEntities(): Observable<Entity[]> {
    return this.http.get<Entity[]>('http://localhost:8080/entity');
  }

  find(id: string): Observable<Entity> {
    return this.http.get<Entity>(`http://localhost:8080/entity/${id}`);
  }

  saveEntity(entity: Entity): Observable<Entity> {
    return this.http.post<Entity>('http://localhost:8080/entity', entity);
  }
}
