import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OngAcceptFoodComponent } from './ong-accept-food.component';

describe('OngAcceptFoodComponent', () => {
  let component: OngAcceptFoodComponent;
  let fixture: ComponentFixture<OngAcceptFoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OngAcceptFoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OngAcceptFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
