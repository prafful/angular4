import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service'


@Component({
  selector: 'app-consume-service1',
  templateUrl: './consume-service1.component.html',
  styleUrls: ['./consume-service1.component.css']
})
export class ConsumeService1Component implements OnInit {

  constructor(private ds:DataServiceService) {
    console.log(ds.myData());
    console.log(ds.newsmakers);
    ds.newsmakers.push("alien");
   }

  ngOnInit() {
  }

}
