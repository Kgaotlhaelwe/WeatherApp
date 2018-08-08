import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import arr from '../home/home' ;

/**
 * Generated class for the SecondpagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-secondpage',
  templateUrl: 'secondpage.html',
})
export class SecondpagePage {
 
  city =arr[0].city ;

  name = this.navParams.get('data')

  temp=arr[0].temp ;
  condition=arr[0].condition;
  icon =arr[0].icon ;
  humidity=arr[0].humidity;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
   // name = navParams.get('data')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SecondpagePage');
      console.log(this.icon);
      console.log(name);


  }

}
