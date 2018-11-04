import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantShowFoodComponent } from './restaurant-show-food.component';

describe('RestaurantShowFoodComponent', () => {
  let component: RestaurantShowFoodComponent;
  let fixture: ComponentFixture<RestaurantShowFoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantShowFoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantShowFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
