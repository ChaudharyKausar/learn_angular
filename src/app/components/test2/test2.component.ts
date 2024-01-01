import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test2',
  template: `
    <p class="custome">
      test2 works!
    </p>
    <h1 class="custome1">heyyyy</h1>
    <!-- <p>Child Routing</p>
    <a routerLink="components2/test4">test4</a>
    <div>
    <router-outlet></router-outlet></div> -->

  `,
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
