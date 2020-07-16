import { Component, OnInit } from '@angular/core';
import { EntityService } from 'src/app/service/entity.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entity',
  templateUrl: './entity.component.html',
  styleUrls: ['./entity.component.scss']
})
export class EntityComponent implements OnInit {

  entityList;

  constructor(
    private router: Router,
    private entityService: EntityService
  ) {}

  ngOnInit(): void {
    this.entityService.findEntities().subscribe((response) => {
      console.log(response);
      this.entityList = response;
    });
  }

  goToCreate() {
    this.router.navigate(['/entity/create']);
  }

  goToRead() {
    this.router.navigate(['/entity/read']);
  }

  goToUpdate() {
    this.router.navigate(['/entity/update']);
  }

  goToDelete() {
    this.router.navigate(['/entity/delete']);
  }

}
