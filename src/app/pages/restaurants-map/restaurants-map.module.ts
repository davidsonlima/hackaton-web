import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantsMapComponent } from './restaurants-map.component';
import { RestaurantsMapRoutingModule } from './restaurants-map-routing-module';
import { AgmCoreModule } from '@agm/core';
import { ThemeModule } from '../../@theme/theme.module';

@NgModule({
  imports: [
    ThemeModule,
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBbFIikynJgf6vke1NUrp3txCkmojCsMRw',
      libraries: ['places'],
    }),
  ],
  declarations: [
    RestaurantsMapComponent
  ],
  exports: [
    RestaurantsMapComponent
  ]
})
export class RestaurantsMapModule { }
