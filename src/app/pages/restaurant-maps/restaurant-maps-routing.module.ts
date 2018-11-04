import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestaurantMapsComponent } from './restaurant-maps.component';

const routes: Routes = [{
  path: 'rdr',
  component: RestaurantMapsComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestaurantMapsRoutingModule { }

export const routedComponents = [
  RestaurantMapsComponent,
];
