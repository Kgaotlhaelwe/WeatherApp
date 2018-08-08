//import { Injectable } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { Geolocation } from '@ionic-native/geolocation';
import { Observable } from 'rxjs';

//import './rxjs-operators';
import { map } from "rxjs/operators";


import 'rxjs/Rx';




@Injectable()

export class WeatherService {
    apiKey ='2dabf56320ec35df6617929921e1fe7c' ;

   // url ='http://api.openweathermap.org/data/2.5/weather?q=' ;


    constructor( public http: HttpClient){

    }


    getWeather(cityname)  {
      

      

      let apikey = 'http://api.openweathermap.org/data/2.5/weather?q='+ cityname + ',' +'southafrica&units=metric&APPID=7fabf2d1ab43bc74376c02dfef03173d' ;
      return new Promise ((resolve, reject) => {
        this.http.get(apikey ).subscribe(data =>{
           resolve(data);
        })
      
      
     });
    }

}