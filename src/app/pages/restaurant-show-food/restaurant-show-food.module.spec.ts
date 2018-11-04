import { RestaurantShowFoodModule } from './restaurant-show-food.module';

describe('RestaurantShowFoodModule', () => {
  let restaurantShowFoodModule: RestaurantShowFoodModule;

  beforeEach(() => {
    restaurantShowFoodModule = new RestaurantShowFoodModule();
  });

  it('should create an instance', () => {
    expect(restaurantShowFoodModule).toBeTruthy();
  });
});
