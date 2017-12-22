import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
})
export class FeedPage {
  public user_name:string = 'Matheus Matos cod';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public AddTwoNumbers(number_01:number, number_02:number):void{
  	alert(number_01 + number_02)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedPage');
    //this.AddTwoNumbers(10, 90)
  }

}
