import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestaurantShowFoodComponent } from './restaurant-show-food.component';

const routes: Routes = [{
  path: 'restaurant-list',
  component: RestaurantShowFoodComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestaurantShowFoodRoutingModule { }

export const routedComponents = [
  RestaurantShowFoodComponent,
];
