import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantAddFoodComponent } from './restaurant-add-food.component';

describe('RestaurantAddFoodComponent', () => {
  let component: RestaurantAddFoodComponent;
  let fixture: ComponentFixture<RestaurantAddFoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantAddFoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantAddFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
