import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


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
      firstName: new FormControl('', Validators.compose([
          Validators.required, 
          Validators.minLength(4),
          Validators.pattern('[a-z/A-Z]')
        ])),
      lastName: new FormControl(''),
      hobby: new FormControl('')
  });

  }

 




}
