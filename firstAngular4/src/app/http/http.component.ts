import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';


@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {

  

  constructor(private usehttp: DataServiceService) { }

  ngOnInit() {

    console.log(this.usehttp.getRemoteData());
    

  }

}
