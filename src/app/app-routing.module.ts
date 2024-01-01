import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './components/test/test.component';
import { Test1Component } from './components/test1/test1.component';
import { Test2Component } from './components/test2/test2.component';
import { Test4Component } from './components2/test4/test4.component';
import{Test5Component} from './components2/test5/test5.component';
import {NoPageComponent} from './no-page/no-page.component'

const routes: Routes = [
  {path:"components/test",component:TestComponent},
  {path:"components/test1",component:Test1Component},
  {path:"components/test2",component:Test2Component, children:[
    {path:"components2/test4",component:Test4Component},  ]},
    {path:"**" ,component:NoPageComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
