import { Component, OnInit } from '@angular/core';
import { Entity } from 'src/app/model/entity';
import { EntityService } from 'src/app/service/entity.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-entity-read',
  templateUrl: './entity-read.component.html',
  styleUrls: ['./entity-read.component.scss'],
})
export class EntityReadComponent implements OnInit {
  entity: Entity;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private entityService: EntityService
  ) {}

  ngOnInit(): void {
    this.entity = new Entity();

    let id = '';
    this.route.params.subscribe((params) => {
      id = params['id'];
    });

    this.entityService.find(id).subscribe((entity) => {
      this.entity = entity;
    });
  }

  goBack() {
    this.router.navigate(['/entity']);
  }
}
