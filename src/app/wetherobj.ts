export class Weather {
    city:string ;
     condition :string ;
     temp :string ;
     icon:any ;
     humidity :any ;

     constructor( city:string,  condition :string ,  temp :string , icon ,humidity) {
         this.city=city;
         this.condition=condition;
         this.temp =temp;
         this.icon=icon ;
         this.humidity=humidity;
     }
}