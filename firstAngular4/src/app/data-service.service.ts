import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { UserInfo } from './user-info';

import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataServiceService {

  newsmakers = ["keval", "lallan", "top", "khabari"];
  
  data:Array<Object>; 
  constructor(private http: Http) {}
//Promise implementation
/*  getRemoteData():Promise<UserInfo[]>{
    /*this.http.get('https://jsonplaceholder.typicode.com/users').map(
      (response)=>response.json()
    ).subscribe(
     (data) => console.log(data)
    )
    */
/*
    return this.http.get('https://jsonplaceholder.typicode.com/users')
                    .toPromise()
                    .then(response => response.json() as UserInfo[])
    
}
*/
//Observable implementation
getRemoteData():Observable<UserInfo[]>{
    return this.http.get('https://jsonplaceholder.typicode.com/users')
                    .map(response => response.json() as UserInfo[])

}
   

  getMyData(){
    return "This data is from data service.";
  }


}
