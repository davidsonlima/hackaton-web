import { RestaurantMapsModule } from './restaurant-maps.module';

describe('RestaurantMapsModule', () => {
  let restaurantMapsModule: RestaurantMapsModule;

  beforeEach(() => {
    restaurantMapsModule = new RestaurantMapsModule();
  });

  it('should create an instance', () => {
    expect(restaurantMapsModule).toBeTruthy();
  });
});
