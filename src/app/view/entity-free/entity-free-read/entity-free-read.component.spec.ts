import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityFreeReadComponent } from './entity-free-read.component';

describe('EntityFreeReadComponent', () => {
  let component: EntityFreeReadComponent;
  let fixture: ComponentFixture<EntityFreeReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntityFreeReadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityFreeReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
