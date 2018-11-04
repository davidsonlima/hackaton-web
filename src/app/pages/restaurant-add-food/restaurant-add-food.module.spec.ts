import { RestaurantAddFoodModule } from './restaurant-add-food.module';

describe('RestaurantAddFoodModule', () => {
  let restaurantAddFoodModule: RestaurantAddFoodModule;

  beforeEach(() => {
    restaurantAddFoodModule = new RestaurantAddFoodModule();
  });

  it('should create an instance', () => {
    expect(restaurantAddFoodModule).toBeTruthy();
  });
});
