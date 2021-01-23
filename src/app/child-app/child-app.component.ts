import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-app',
  templateUrl: './child-app.component.html',
  styleUrls: ['./child-app.component.css']
})
export class ChildAppComponent implements OnInit {

  @Input() childMessage: string;


  constructor() { }

  ngOnInit() {
  }

}
