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
  selected: string;

  constructor(
    private router: Router,
    private entityService: EntityService,
    private spinnerService: SpinnerOverlayService
  ) {}

  ngOnInit(): void {
    this.findEntities();
  }

  findEntities() {
    this.entityService.findEntities().subscribe((response) => {
      this.entityList = response;
    });
  }

  goToCreate() {
    this.router.navigate(['/entity/create']);
  }

  goToRead() {
    if (this.selected == null || this.selected == undefined) {
      alert('choose');
      return;
    }
    this.router.navigate(['/entity/read/' + this.selected]);
  }

  goToUpdate() {
    if (this.selected == null || this.selected == undefined) {
      alert('choose');
      return;
    }
    this.router.navigate(['/entity/update/' + this.selected]);
  }

  goToDelete() {
    if (this.selected == null || this.selected == undefined) {
      alert('choose');
      return;
    }
    this.router.navigate(['/entity/delete/' + this.selected]);
  }
}
