import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurants-map',
  templateUrl: './restaurants-map.component.html',
  styleUrls: ['./restaurants-map.component.scss']
})
export class RestaurantsMapComponent implements OnInit {

  public latitude : number;
  public longitude : number;
  public zoom : number;

  constructor() { }

  ngOnInit() {
    this.latitude = 51.678418;
    this.longitude = 7.809007;
    this.zoom = 12;
  }

}
