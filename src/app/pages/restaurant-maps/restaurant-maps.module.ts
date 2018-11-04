import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantMapsComponent } from './restaurant-maps.component';
import { RestaurantMapsRoutingModule } from './restaurant-maps-routing.module';

@NgModule({
  imports: [
    CommonModule,
    RestaurantMapsRoutingModule
  ],
  declarations: [
    RestaurantMapsComponent
  ]
})
export class RestaurantMapsModule { }
