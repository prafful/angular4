import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-modelform',
  templateUrl: './modelform.component.html',
  styleUrls: ['./modelform.component.css']
})
export class ModelformComponent implements OnInit {

  myForm;

  constructor() { }

  doSubmission = function(user){
    console.log(user);
  }

  ngOnInit(){
    this.myForm = new FormGroup({
      firstName: new FormControl('Prafful'),
      lastName: new FormControl('Daga'),
      hobby: new FormControl('driving')
  });

  }

}
