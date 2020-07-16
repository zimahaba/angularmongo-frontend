import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Entity } from 'src/app/model/entity';
import { FormGroup, FormBuilder } from '@angular/forms';
import { EntityService } from 'src/app/service/entity.service';

@Component({
  selector: 'app-entity-create',
  templateUrl: './entity-create.component.html',
  styleUrls: ['./entity-create.component.scss']
})
export class EntityCreateComponent implements OnInit {

  constructor(private router: Router, private fb: FormBuilder, private entityService: EntityService) {}

  entity: Entity;
  form: FormGroup;

  ngOnInit(): void {
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

  save() {
    this.entity = new Entity(this.form.value);
    this.entityService.saveEntity(this.entity).subscribe(entity => {
      this.router.navigate(['/entity']);
    });
  }

  cancel() {
    this.router.navigate(['/entity']);
  }

}
