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
          Validators.minLength(4)
          
        ])),
      lastName: new FormControl('', this.lastNameValidator),
      hobby: new FormControl('')
  });

  }

 lastNameValidator(control){
   if(control.value.length < 3) {
      return {'lastName':true};
   }
 }




}
