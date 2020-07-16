import { Component, OnInit } from '@angular/core';
import { EntityFreeService } from 'src/app/service/entity-free.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entity-free',
  templateUrl: './entity-free.component.html',
  styleUrls: ['./entity-free.component.scss'],
})
export class EntityFreeComponent implements OnInit {
  entityList;

  constructor(
    private router: Router,
    private entityFreeService: EntityFreeService
  ) {}

  ngOnInit(): void {
    this.entityFreeService.findEntities().subscribe((response) => {
      console.log(response);
      this.entityList = response;
    });
  }

  goToCreate() {
    this.router.navigate(['/entityfree/create']);
  }

  goToRead() {
    this.router.navigate(['/entityfree/read']);
  }

  goToUpdate() {
    this.router.navigate(['/entityfree/update']);
  }

  goToDelete() {
    this.router.navigate(['/entityfree/delete']);
  }
}
