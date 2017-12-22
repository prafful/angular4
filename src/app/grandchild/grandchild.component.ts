import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-grandchild',
  templateUrl: './grandchild.component.html',
  styleUrls: ['./grandchild.component.css']
})
export class GrandchildComponent implements OnInit {

  name = 'Prafful Daga';
  age = 25;
  birthday = new Date(); 
  amount = 500;

  allLearners = [{id:'1', name:'prasad'}, 
                  {id:'2', name:'pradeep'},
                  {id:'3', name:'kavya'},
                  {id:'4', name:'malini'},
                  {id:'5', name:'devi'},
                  {id:'6', name:'lallan'}
                ];

  constructor() { }

  ngOnInit() {
  }

  callMe = function(received){
    console.log(this.allLearners[received]);
  }

}
