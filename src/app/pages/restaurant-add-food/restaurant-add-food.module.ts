import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantAddFoodComponent } from './restaurant-add-food.component';
import { ThemeModule } from '../../@theme/theme.module';
import { RestaurantAddFoodRoutingModule } from './restaurant-add-food-routing.module';

@NgModule({
  imports: [
    ThemeModule,
    CommonModule,
    RestaurantAddFoodRoutingModule
  ],
  declarations: [
    RestaurantAddFoodComponent,
  ]
})
export class RestaurantAddFoodModule { }
