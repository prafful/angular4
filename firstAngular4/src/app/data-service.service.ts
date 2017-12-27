import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataServiceService {

  newsmakers = ["keval", "lallan", "top", "khabari"];
  
  data:Array<Object>; 
  constructor(private http: Http) {}

  getRemoteData():any{
    this.http.get('https://jsonplaceholder.typicode.com/users').map(
      (response)=>response.json()
    ).subscribe(
     (data) => console.log(data)
    )
    
  }
   

  getMyData(){
    return "This data is from data service.";
  }


}
