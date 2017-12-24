import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';
/*
  Generated class for the MoovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MoovieProvider {
  private base_api_path: string = "https://api.themoviedb.org/3"
  constructor(public http: HttpClient) {
    console.log('Hello MoovieProvider Provider');
  }

  getLatesMovies(){
  	return this.http.get(this.base_api_path + "/movie/popular?api_key=" + this.getApiKey());
  }

  getApiKey():string{
  	return "5ef119f9daa31c65d8858c5f4c4b9383";
  }

}
