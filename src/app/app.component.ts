import { Component } from '@angular/core';
import  {NgForm, FormBuilder, FormGroup, Validator, FormControlName, Validators, FormControl} from '@angular/forms';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  title = 'learn-angular';
  data='hello Angular code'
  num=100;
  get_name(){
   alert("simple function called")
  }
  getName(name:string,lastname:string){
alert(name);
alert(lastname); 
  }
  getData(name:string){
    console.log(name)
  }
  getData1(name:string){
    console.log(name)
  }
  getData2(name:string){
    console.log(name)
  }
   displayval="";
   getValue(val:string){
    console.log(val)
    this.displayval = val;  }
    count=0;
    counter(type:any){
      type==='add' ?this.count++:this.count--;
         
    }
  name="Kausar";
  disable=false;  
  show=true;
  number=22;
  color="red";
  vowel:string='k';
  stud=['Kausar','Shaziya','Tarannum','Huda'];
  studDetail=[
    {name:'Kausar',email:'kausar2005@gmail.com',phone:'1234509876'},
    {name:'Shaziya',email:'shaziya01@gmail.com',phone:'0123456789'},
    {name:'Tarannum',email:'tarannym05@gmail.com',phone:'0987654321'},
    {name:'Huda',email:'hidayatkhan2000@gmail.com',phone:'1234567890'},

  ]
  SD_nested=[
    {name:'Kausar',email:'kausar2005@gmail.com',phone:'1234509876',socialAcounts:['instagram','linkdin','whatsapp']},
    {name:'Shaziya',email:'shaziya01@gmail.com',phone:'0123456789',socialAcounts:['instagram','linkdin','whatsapp']},
    {name:'Tarannum',email:'tarannym05@gmail.com',phone:'0987654321',socialAcounts:['instagram','linkdin','whatsapp']},
    {name:'Huda',email:'hidayatkhan2000@gmail.com',phone:'1234567890',socialAcounts:['instagram','linkdin','whatsapp']},

  ]
color1='green'; 
fontFamily='times';
updateColor(){
  this.color1="blue";
  this.fontFamily='sans-serif';
}

selectgender:string='';
userData: any = { user: '', email: '', password: '', gender: '' };
getDetails(data:NgForm){
this.userData=data;
}

display=true;
toggle(){
this.display=!this.display
}

// Todo List
list:any[]=[];
addTask(item:string){
console.log(item);
this.list.push({id:this.list.length,name:item});
console.log(this.list);
}

removeTask(id:number){
  console.log(id);
  this.list=this.list.filter(item=>item.id!==id);
}


//paas data from parent to child
passdata=100;
updateChild(){
  this.passdata=Math.floor(Math.random()*50);
}


//reusable components
userdetail=[
  {name:'Kausar',email:'kausar@123'},
  {name:'Huda',email:'Hudakhan@2001'},
  {name:'Shaziya',email:'shaz@1234'},
  {name:'Tarranum',email:'tarannum@123'}
]


//pass data from chil to parent
Childdata='x';
updateparent(item:any){
this.Childdata=item;
}

//two way data binding
myvar:any;

//tempalte refrence variable
myvariable:any;
Refrence_value(data:any){
this.myvariable=data;
}

//basic pipes
basicpipe='Basic pipe';
today=Date();

//Advance Pipes
advancepipe='Advance Pipes in angular';
user:any={
  name:'kausar' ,age:18, phone:1234567890, email:'Kausar_25@gmail.com'
}

//Basic Script
print:any;
getdata(item:boolean | number){
if(typeof item==="number"){
  this.print =item*10;
}
else{
  this.print="true"; 
}
}

//template form
userLogin(data:string){
console.log(data);
}

//Reactive form
loginForm = new FormGroup({
  user1:new FormControl('',[Validators.required,Validators.email]),
  pass1: new FormControl('',[Validators.required,Validators.pattern('[a-zA-z0-9@]*'),Validators.minLength(8)]),
});
Login(){
  console.log(this.loginForm.value);
}
get user_validation(){
  return this.loginForm.get('user1');
}
get pass_validation(){
  return this.loginForm.get('pass1');
}

}


