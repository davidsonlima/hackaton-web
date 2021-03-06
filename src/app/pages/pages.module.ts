import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { AuthRedirectComponent } from './auth-redirect/auth-redirect.component';
import { AuthRedirectModule } from './auth-redirect/auth-redirect.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LoginModule } from './login/login.module';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { RestaurantsMapComponent } from './restaurants-map/restaurants-map.component';
import { RestaurantsMapModule } from './restaurants-map/restaurants-map.module';
import { RestaurantListModule } from './restaurant-list/restaurant-list.module';
import { FormsModule } from './forms/forms.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RestaurantAddFoodComponent } from './restaurant-add-food/restaurant-add-food.component';
import { RestaurantAddFoodModule } from './restaurant-add-food/restaurant-add-food.module';
import { OngAcceptFoodComponent } from './ong-accept-food/ong-accept-food.component';
import { OngAcceptFoodModule } from './ong-accept-food/ong-accept-food.module';
import { AboutComponent } from './about/about.component';
import { AboutModule } from './about/about.module';
import { RestaurantShowFoodComponent } from './restaurant-show-food/restaurant-show-food.component';
import { RestaurantShowFoodModule } from './restaurant-show-food/restaurant-show-food.module';

const PAGES_COMPONENTS = [
  PagesComponent,
];

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    DashboardModule,
    ECommerceModule,
    MiscellaneousModule,
    RestaurantsMapModule,
    RestaurantListModule,
    RestaurantAddFoodModule,
    RestaurantShowFoodModule,
    OngAcceptFoodModule,
    AboutModule,
    LoginModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    ...PAGES_COMPONENTS,
    OngAcceptFoodComponent,
    AboutComponent,
    RestaurantShowFoodComponent
  ],
})
export class PagesModule {
}
