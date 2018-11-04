import { RestaurantListModule } from './restaurant-list.module';

describe('RestaurantListModule', () => {
  let restaurantListModule: RestaurantListModule;

  beforeEach(() => {
    restaurantListModule = new RestaurantListModule();
  });

  it('should create an instance', () => {
    expect(restaurantListModule).toBeTruthy();
  });
});
