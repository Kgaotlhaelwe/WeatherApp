import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { LoadingController } from 'ionic-angular';


  

  import { WeatherService} from '../../app/Service/WeatherService.service' ;
  //import {Weather} from '../../app/wetherobj'
  import {SecondpagePage} from '../secondpage/secondpage';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html' ,
  providers :[WeatherService]
})
export class HomePage {
  cityName:string;

  img ;
  icon ;


  name="kabelo" ;

  constructor(public navCtrl: NavController ,private WeatherService: WeatherService , public loadingCtrl: LoadingController) {

  }

  getWeather(){
    
   // alert(this.cityName)

   // this.temp = (this.temp - 273.15).toFixed() + "°c";

    this.WeatherService.getWeather(this.cityName).then((data:any)=>{
    
      this.icon=data.weather[0].icon ;
      let city=data.name;
      let temp = Math.round(data.main.temp)+ "°c";  
      let condition =data.weather[0].description ;
      let humidity=data.main.humidity + "%";
     
      if (this.icon === "01d" ) {
        this.img = '../../assets/imgs/sun.png';
      
        console.log(this.img + "2");

      } else if (this.icon === "10d") {
        this.img = '../../assets/imgs/rain.png';
       
        console.log(this.img + "2");

      } else if (this.icon === "02d") {
        this.img = '../../assets/imgs/clouds.png';
       
        console.log(this.img + "4");
      } else if (this.icon === "50d") {
        this.img = '../../assets//imgs/misty.png';
       
        console.log(this.img + "5");
      } else if (this.icon === "04d") {
        this.img = '../../assets//imgs//broken clouds.PNG';
        // alert('10')
        console.log(this.img + "3");
      } else if (this.icon === "09d") {
        this.img = '../../assets/imgs/09d.png';
        // alert('10')
        console.log(this.img + "3");
      }

      

      let obj =new Weather (city ,condition ,temp , this.img ,humidity ) ;
      let a:any =obj ;
      arr.push(a) ;

      
    
    
  

      this.navCtrl.push(SecondpagePage );
      const loader = this.loadingCtrl.create({
        content: "YOU WILL GET THE WEATHER IN SECONDSS...",
        duration: 3000
      });
      loader.present();
      
 

    })

}

}

export class Weather {
    city:string ;
   condition :string ;
   temp :string ;
   icon:any ;
   humidity:any ;

   constructor( city:string,  condition :string ,  temp :string , icon ,humidity) {
       this.city=city;
       this.condition=condition;
       this.temp =temp;
       this.icon=icon ;
       this.humidity=humidity;
   }
}



var arr = new Array() ;

export default arr ;


