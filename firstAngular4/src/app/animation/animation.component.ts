import { Component, OnInit } from '@angular/core';
import { trigger, state, transition, animate, style } from '@angular/animations'; 

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css'],
  animations:[
    trigger('growUpAnimation', [
      state('kid', style({
        transform:'scale(1)',
        color:'pink'
      })),
      state('adult', style({
        transform:'scale(3)',
        color:'brown'
      })),
      transition('kid <=>  adult', animate('1000ms ease-in') )
    ])

  ]
})
export class AnimationComponent implements OnInit {

  myState:String = 'kid';

  constructor() { }

  ngOnInit() {
  }

  growUp(){
    this.myState = this.myState == 'kid'?'adult':'kid';
  }

}
