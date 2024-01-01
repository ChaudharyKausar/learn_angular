import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-test5',
  templateUrl: './test5.component.html',
  styleUrls: ['./test5.component.css']
})
export class Test5Component implements OnInit {

  constructor() { }
  @Input() item1=0;
    ngOnInit(): void {
  }

}
