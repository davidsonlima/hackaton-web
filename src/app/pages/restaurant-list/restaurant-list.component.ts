import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.scss']
})
export class RestaurantListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  d = [false, false, false, false, false]

  click(x : number) {
    this.d[x] = true;
  }

}
