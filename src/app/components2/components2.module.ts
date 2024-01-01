import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Components2RoutingModule } from './components2-routing.module';
import { Test4Component } from './test4/test4.component';
import { Test5Component } from './test5/test5.component';


@NgModule({
  declarations: [
    Test4Component,
    Test5Component
  ],
  imports: [
    CommonModule,
    Components2RoutingModule
  ]
})
export class Components2Module { }
