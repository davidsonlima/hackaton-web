import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantListComponent } from './restaurant-list.component';
import { RestaurantListRoutingModule } from './restaurant-list-routing.module';

@NgModule({
  imports: [
    CommonModule,
    RestaurantListRoutingModule
  ],
  declarations: [
    RestaurantListComponent
  ],
  exports: [
    RestaurantListComponent
  ]
})
export class RestaurantListModule { }
