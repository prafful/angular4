import { Injectable } from '@angular/core';

@Injectable()
export class DataServiceService {

  newsmakers = ["keval", "lallan", "top", "khabari"];

  constructor() { }

  myData(){
    return "This data is from service.";
  }


}
