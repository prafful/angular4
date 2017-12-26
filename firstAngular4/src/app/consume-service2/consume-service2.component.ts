import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-consume-service2',
  templateUrl: './consume-service2.component.html',
  styleUrls: ['./consume-service2.component.css']
})
export class ConsumeService2Component implements OnInit {

  constructor(private ds:DataServiceService) {
    console.log(ds.newsmakers)
   }

  ngOnInit() {
  }

}
