import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../../services/restaurant.service';
import { Restaurant } from '../../model/restaurant';

@Component({
  selector: 'app-restaurants-map',
  templateUrl: './restaurants-map.component.html',
  styleUrls: ['./restaurants-map.component.scss']
})
export class RestaurantsMapComponent implements OnInit {

  public latitude: number;
  public longitude: number;
  public zoom: number;
  public restaurants: Array<Restaurant>;

  constructor(private restaurantService : RestaurantService) { }

  ngOnInit() {
    var ctx = this;
    
    this.restaurantService.listAll((restaurantList) => {
      this.restaurants = restaurantList;
      console.log(this.restaurants);
    });

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        ctx.latitude = position.coords.latitude;
        ctx.longitude = position.coords.longitude;
      });
    }
    this.zoom = 12;
  }

}
