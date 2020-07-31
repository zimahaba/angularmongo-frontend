import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EntityService } from 'src/app/service/entity.service';
import { Entity } from 'src/app/model/entity';

@Component({
  selector: 'app-entity-delete',
  templateUrl: './entity-delete.component.html',
  styleUrls: ['./entity-delete.component.scss'],
})
export class EntityDeleteComponent implements OnInit {
  entity: Entity;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private entityService: EntityService
  ) {}

  ngOnInit(): void {
    let id = '';
    this.route.params.subscribe((params) => {
      id = params['id'];
    });

    this.entityService.find(id).subscribe((entity) => {
      this.entity = entity;
    });
  }

  delete() {
    this.entityService
      .deleteEntity(this.entity)
      .subscribe((response) => this.goBack());
  }

  goBack() {
    this.router.navigate(['/entity']);
  }
}
