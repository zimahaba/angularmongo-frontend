import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityFreeCreateComponent } from './entity-free-create.component';

describe('EntityFreeCreateComponent', () => {
  let component: EntityFreeCreateComponent;
  let fixture: ComponentFixture<EntityFreeCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntityFreeCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityFreeCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
