import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityFreeComponent } from './entity-free.component';

describe('EntityFreeComponent', () => {
  let component: EntityFreeComponent;
  let fixture: ComponentFixture<EntityFreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntityFreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityFreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
