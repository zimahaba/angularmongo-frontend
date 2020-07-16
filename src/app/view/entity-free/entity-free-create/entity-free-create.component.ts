import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Entity } from 'src/app/model/entity';

@Component({
  selector: 'app-entity-free-create',
  templateUrl: './entity-free-create.component.html',
  styleUrls: ['./entity-free-create.component.scss'],
})
export class EntityFreeCreateComponent implements OnInit {
  constructor(private router: Router) {}

  entity: Entity;

  ngOnInit(): void {
    this.entity = new Entity();
    this.entity.oneString = 'asd';
  }

  cancel() {
    this.router.navigate(['/entityfree']);
  }
}
