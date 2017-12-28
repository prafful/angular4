import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  myName = "Elder Angular 1.x"

  constructor() { }

  ngOnInit() {
  }

  childClick(e){
    console.log(e);
    this.myName = e;
  }
  


}
