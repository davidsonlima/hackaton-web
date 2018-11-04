import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestaurantListComponent } from '../restaurant-list/restaurant-list.component';

const routes: Routes = [{
  path: 'restaurants-map',
  component: RestaurantListComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestaurantListRoutingModule { }

export const routedComponents = [
  RestaurantListComponent,
];
