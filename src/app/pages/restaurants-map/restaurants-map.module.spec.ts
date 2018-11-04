import { RestaurantsMapModule } from './restaurants-map.module';

describe('RestaurantsMapModule', () => {
  let restaurantsMapModule: RestaurantsMapModule;

  beforeEach(() => {
    restaurantsMapModule = new RestaurantsMapModule();
  });

  it('should create an instance', () => {
    expect(restaurantsMapModule).toBeTruthy();
  });
});
