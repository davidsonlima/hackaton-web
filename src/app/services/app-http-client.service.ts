import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppHttpClientService {

  readonly SERVER_URL = "http://localhost";
  readonly SERVER_PORT = "8080";

  constructor(private http: HttpClient) { }

  public post(url : string, json : any, callback : any) {
      this.http.post(this.buildUrl(url), json).subscribe(x => {
        console.log("Resposta post: ");
        console.log(x);
        typeof callback === "function" && callback(x);
      })
  }
  
  public get(url : string, callback : any) {
    this.http.get(this.buildUrl(url)).subscribe(x => {
      console.log("Resposta get: ");
      console.log(x);
      typeof callback === "function" && callback(x);
    })
  }

  private buildUrl(url : string) : string {
    return this.SERVER_URL + ":" + this.SERVER_PORT + "/" + url;
  }
}
