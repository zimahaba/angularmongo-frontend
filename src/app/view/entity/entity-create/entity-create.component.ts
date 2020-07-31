import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Entity } from 'src/app/model/entity';
import { FormGroup, FormBuilder } from '@angular/forms';
import { EntityService } from 'src/app/service/entity.service';

@Component({
  selector: 'app-entity-create',
  templateUrl: './entity-create.component.html',
  styleUrls: ['./entity-create.component.scss'],
})
export class EntityCreateComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private entityService: EntityService
  ) {}

  entity: Entity;
  form: FormGroup;
  creation: boolean = true;
  id: string = '';

  ngOnInit(): void {
    this.createForm();

    this.route.params.subscribe((params) => {
      this.id = params['id'];
    });

    if (this.id != undefined && this.id != '') {
      this.creation = false;
      this.entityService.find(this.id).subscribe((entity) => {
        this.entity = entity;
        this.updateForm();
      });
    }
  }

  createForm() {
    this.entity = new Entity();
    this.form = this.fb.group({
      oneString: this.fb.control(this.entity.oneString),
      oneInteger: this.fb.control(this.entity.oneInteger),
      oneLong: this.fb.control(this.entity.oneLong),
      oneDecimal: this.fb.control(this.entity.oneDecimal),
      oneDate: this.fb.control(this.entity.oneDate),
      oneTime: this.fb.control(this.entity.oneTime),
    });
  }

  updateForm() {
    this.form.controls['oneString'].setValue(this.entity.oneString);
    this.form.controls['oneInteger'].setValue(this.entity.oneInteger);
    this.form.controls['oneLong'].setValue(this.entity.oneLong);
    this.form.controls['oneDecimal'].setValue(this.entity.oneDecimal);
    this.form.controls['oneDate'].setValue(this.entity.oneDate);
    this.form.controls['oneTime'].setValue(this.entity.oneTime);
  }

  save() {
    if (this.creation) {
      this.entity = new Entity(this.form.value);
      this.entityService.saveEntity(this.entity).subscribe((entity) => {
        this.goBack();
      });
    } else {
      this.entity = new Entity(this.form.value);
      this.entity.id = this.id;
      this.entityService.updateEntity(this.entity).subscribe((entity) => {
        this.goBack();
      });
    }
  }

  goBack() {
    this.router.navigate(['/entity']);
  }
}
