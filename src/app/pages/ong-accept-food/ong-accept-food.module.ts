import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OngAcceptFoodComponent } from './ong-accept-food.component';
import { ThemeModule } from '../../@theme/theme.module';
import { OngAcceptFoodRoutingModule } from './ong-accept-food-routing.module';

@NgModule({
  imports: [
    ThemeModule,
    CommonModule,
    OngAcceptFoodRoutingModule
  ],
  declarations: []
})
export class OngAcceptFoodModule { }