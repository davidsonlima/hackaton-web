import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurants-map',
  templateUrl: './restaurants-map.component.html',
  styleUrls: ['./restaurants-map.component.scss']
})
export class RestaurantsMapComponent implements OnInit {

  public latitude: number;
  public longitude: number;
  public zoom: number;

  constructor() { }

  ngOnInit() {
    var ctx = this;

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        ctx.latitude = position.coords.latitude;
        ctx.longitude = position.coords.longitude;
      });
    }
    this.zoom = 12;
    new google.maps.Geocoder().geocode({address: "Av. Engenheiro Richard"}, (res) => {
      console.log(res);
    })
  }

}
