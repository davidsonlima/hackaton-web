import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantsMapComponent } from './restaurants-map.component';
import { RestaurantsMapRoutingModule } from './restaurants-map-routing-module';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    RestaurantsMapComponent
  ],
  exports: [
    RestaurantsMapComponent
  ]
})
export class RestaurantsMapModule { }
