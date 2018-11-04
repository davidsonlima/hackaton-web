import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestaurantAddFoodComponent } from './restaurant-add-food.component';

const routes: Routes = [{
  path: 'restaurant-add-food',
  component: RestaurantAddFoodComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestaurantAddFoodRoutingModule { }

export const routedComponents = [
  RestaurantAddFoodComponent,
];