import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Entity } from 'src/app/model/entity';

@Component({
  selector: 'app-entity-create',
  templateUrl: './entity-create.component.html',
  styleUrls: ['./entity-create.component.scss']
})
export class EntityCreateComponent implements OnInit {

  constructor(private router: Router) {}

  entity: Entity;

  ngOnInit(): void {
    this.entity = new Entity();
    this.entity.oneString = 'asd';
  }

  cancel() {
    this.router.navigate(['/entity']);
  }

}
