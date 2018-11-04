import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';
import { RestaurantsMapComponent } from './restaurants-map/restaurants-map.component';
import { AuthGuardService } from '../services/auth-guard.service';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { RestaurantAddFoodComponent } from './restaurant-add-food/restaurant-add-food.component';
import { OngAcceptFoodComponent } from './ong-accept-food/ong-accept-food.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'restaurants-map',
      component: RestaurantsMapComponent,
    }, {
      path: 'restaurant-list',
      component: RestaurantListComponent,
    }, {
      path: 'restaurant-add-food',
      component: RestaurantAddFoodComponent,
    }, {
      path: 'ong-accept-food',
      component: OngAcceptFoodComponent,
    },{
      path: 'about',
      component: AboutComponent,
    },
    {
      path: 'dashboard',
      component: ECommerceComponent,
    }, {
      path: 'iot-dashboard',
      component: DashboardComponent,
    }, {
      path: 'ui-features',
      loadChildren: './ui-features/ui-features.module#UiFeaturesModule',
    }, {
      path: 'components',
      loadChildren: './components/components.module#ComponentsModule',
    }, {
      path: 'maps',
      loadChildren: './maps/maps.module#MapsModule',
    }, {
      path: 'charts',
      loadChildren: './charts/charts.module#ChartsModule',
    }, {
      path: 'editors',
      loadChildren: './editors/editors.module#EditorsModule',
    }, {
      path: 'forms',
      loadChildren: './forms/forms.module#FormsModule',
    }, {
      path: 'tables',
      loadChildren: './tables/tables.module#TablesModule',
    }, {
      path: 'miscellaneous',
      loadChildren: './miscellaneous/miscellaneous.module#MiscellaneousModule',
    }, {
      path: '', redirectTo: 'restaurants-map', pathMatch: 'full',
    }, {
      path: '**',
      component: NotFoundComponent,
    }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
