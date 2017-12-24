import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { MoovieProvider } from '../../providers/moovie/moovie';


/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers:[
    MoovieProvider
  ]
})
export class FeedPage {
  //public user_name:string = 'Matheus Matos cod';
  public obj_feed = {
    user_name:"Matheus Matos",
    date:"October 15, 1995",
    description:"Estou criando um app incrível",
    qntd_likes:12,
    qnts_comments:5,
    time_comment:"11h ago"
  }

  public list_filmes = new Array<any>();

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private movieProvider:MoovieProvider
    ) {
  }
  /*
  public AddTwoNumbers(number_01:number, number_02:number):void{
  	alert(number_01 + number_02)
  }
  */

  ionViewDidLoad() {
    //console.log('ionViewDidLoad FeedPage');
    //this.AddTwoNumbers(10, 90)
    this.movieProvider.getLatesMovies().subscribe(
        data =>{
          this.list_filmes = data.results;
          console.log(data);
        },
      error =>{
        console.log(error);
      }
      )
  }

}
