import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styles: [
    '.custom{color:red}']
})
export class Test1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
