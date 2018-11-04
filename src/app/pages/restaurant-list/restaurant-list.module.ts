import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantListComponent } from './restaurant-list.component';
import { RestaurantListRoutingModule } from './restaurant-list-routing.module';
import { ThemeModule } from '../../@theme/theme.module';

@NgModule({
  imports: [
    ThemeModule,
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
