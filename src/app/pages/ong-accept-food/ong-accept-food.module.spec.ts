import { OngAcceptFoodModule } from './ong-accept-food.module';

describe('OngAcceptFoodModule', () => {
  let ongAcceptFoodModule: OngAcceptFoodModule;

  beforeEach(() => {
    ongAcceptFoodModule = new OngAcceptFoodModule();
  });

  it('should create an instance', () => {
    expect(ongAcceptFoodModule).toBeTruthy();
  });
});
