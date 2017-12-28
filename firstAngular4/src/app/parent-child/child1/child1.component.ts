import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  @Input() myName;

  @Output() sendToParent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  iAmClicked(e){
    this.sendToParent.emit(e);
  }

}
