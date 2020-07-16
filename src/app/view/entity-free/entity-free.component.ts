import { Component, OnInit } from '@angular/core';
import { EntityFreeService } from 'src/app/service/entity-free.service';

@Component({
  selector: 'app-entity-free',
  templateUrl: './entity-free.component.html',
  styleUrls: ['./entity-free.component.scss'],
})
export class EntityFreeComponent implements OnInit {
  entityList;

  constructor(private entityFreeService: EntityFreeService) {}

  ngOnInit(): void {
    this.entityFreeService.findEntities().subscribe((response) => {
      console.log(response);
      this.entityList = response;
    });
  }
}
