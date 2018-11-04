import { Injectable } from '@angular/core';
import { AppHttpClientService } from './app-http-client.service';
import { Restaurant } from '../model/restaurant';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private appHttpClient : AppHttpClientService) { }

  listAll(callback : any) {
    this.appHttpClient.get("restaurant/list", callback);
  }
}
