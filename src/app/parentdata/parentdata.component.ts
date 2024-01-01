import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parentdata',
  templateUrl: './parentdata.component.html',
  styleUrls: ['./parentdata.component.css']
})
export class ParentdataComponent implements OnInit {
data="send data from parent"
  constructor() { }

  ngOnInit(): void {
  }

}
