import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityFreeDeleteComponent } from './entity-free-delete.component';

describe('EntityFreeDeleteComponent', () => {
  let component: EntityFreeDeleteComponent;
  let fixture: ComponentFixture<EntityFreeDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntityFreeDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityFreeDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
