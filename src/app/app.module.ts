import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './components/test/test.component';
import { Test1Component } from './components/test1/test1.component';
import { Test2Component } from './components/test2/test2.component';
import { Test3Component } from './components/test3/test3.component';
import { Test5Component } from './components2/test5/test5.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import { UserdetailComponent } from './userdetail/userdetail.component';
import { ChildComponent } from './child/child.component';
import { CustomePipePipe } from './PIPES/custome-pipe.pipe';
import { Dir1Directive } from './dir1.directive';
import { NoPageComponent } from './no-page/no-page.component';
import { ParentdataComponent } from './parentdata/parentdata.component';
import { ChilddataComponent } from './childdata/childdata.component';




@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    Test1Component,
    Test2Component,
    Test5Component,
    UserdetailComponent,
    ChildComponent,
    CustomePipePipe,
    Dir1Directive,
    NoPageComponent,
    ParentdataComponent,
    ChilddataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Test3Component,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
