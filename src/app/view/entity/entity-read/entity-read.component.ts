import { Component, OnInit } from '@angular/core';
import { Entity } from 'src/app/model/entity';
import { EntityService } from 'src/app/service/entity.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-entity-read',
  templateUrl: './entity-read.component.html',
  styleUrls: ['./entity-read.component.scss']
})
export class EntityReadComponent implements OnInit {

  constructor(private route: ActivatedRoute, private entityService: EntityService) { }

  entity: Entity;

  ngOnInit(): void {
    let id = '';
    this.route.params.subscribe(params => {
      id = params['id'];
    });

    console.log(id);
    this.entityService.find(id).subscribe(entity => {
      this.entity = entity;
    })
  }

}
