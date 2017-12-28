import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';

import { SearchFilterPipe } from '.././search-filter.pipe';

import { UserInfo } from '.././user-info';
import { Observable } from 'rxjs/Observable';



@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {

  promiseUserInfo: Promise<UserInfo[]>;
  userInfo: UserInfo[];

  observableUserInfo: Observable<UserInfo[]>;

  

  constructor(private usehttp: DataServiceService) { }

  ngOnInit() {

    this.getData();
  }

  //getData implementation in case of promise
  /*
  getData(){
    this.promiseUserInfo = this.usehttp.getRemoteData();
    this.promiseUserInfo.then(
      userInfo => this.userInfo = userInfo
    );

  }
  */

  //getData implementation in case of observable
  getData(){
    this.observableUserInfo = this.usehttp.getRemoteData();
    this.observableUserInfo.subscribe(
      userInfo => this.userInfo = userInfo
    );


  }
  

}
