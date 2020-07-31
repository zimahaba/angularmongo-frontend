import { Component, OnInit } from '@angular/core';
import { EntityService } from 'src/app/service/entity.service';
import { Router } from '@angular/router';
import { Entity } from 'src/app/model/entity';
import { SpinnerOverlayService } from 'src/app/infra/spinner/spinner-overlay.service';

@Component({
  selector: 'app-entity',
  templateUrl: './entity.component.html',
  styleUrls: ['./entity.component.scss'],
})
export class EntityComponent implements OnInit {
  entityList: Entity[];

  constructor(
    private router: Router,
    private entityService: EntityService,
    private spinnerService: SpinnerOverlayService
  ) {}

  ngOnInit(): void {
    this.findEntities();
  }

  findEntities() {
    this.spinnerService.show();
    this.entityService.findEntities().subscribe((response) => {
      this.spinnerService.hide();
      console.log(response);
      this.entityList = response;
    });
  }

  goToCreate() {
    this.router.navigate(['/entity/create']);
  }

  goToRead() {
    this.router.navigate(['/entity/read/10']);
  }

  goToUpdate() {
    this.router.navigate(['/entity/update']);
  }

  goToDelete() {
    this.router.navigate(['/entity/delete']);
  }
}
