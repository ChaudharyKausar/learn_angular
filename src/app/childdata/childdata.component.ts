import { Component, Input,OnInit } from '@angular/core';

@Component({
  selector: 'app-childdata',
  templateUrl: './childdata.component.html',
  styleUrls: ['./childdata.component.css']
})
export class ChilddataComponent implements OnInit {
@Input() send:string='';
sample="send from child to parent";
  constructor() { }

  ngOnInit(): void {
  }

}
