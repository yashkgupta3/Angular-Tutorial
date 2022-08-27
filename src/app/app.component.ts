import { Component } from '@angular/core';
import {Form, NgForm} from '@angular/forms'
import { MatCheckboxChange } from '@angular/material/checkbox';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = ' tatti ';
  data = "code step by step";
  integerValue=3;
  getValue(){
    return "abe ye toh function se return hua aaaa  aaa";
  }
  getValue2(){
    return 2+2;
  }
  getName(){
    console.log("are bsdka");
    alert("function k call kar be bsdk");
    return "lund le lo muh me";
  }
  // getSirName(name:any){
    getSirName(name:String){
    // console.log("are bsdka");
    alert(name);
    return "lund le lo muh me";
  }

getData(){
  console.log("function called");
  alert("function k maa ki chut");
}
getloda(str:String){
  console.log(str);
}
displayVal:string = 'this is string with defined data type';
getBhalue(str:string){
  console.warn(str);
  this.displayVal=str;
}

// counter
count =0;
counter(str:string){
  if(str=='++')this.count++;
  else this.count--;

// str==='++'?this.count++:this.count--;
}

Styleing='This is just a random style text'
// property binding from below
disable=false;
input_name="user-input";

// if else in angular
showKiValue=false;
showStringKiValue='loda'

// multiple if else from below
colorValue="green";

// switch case from here
colorValueForSwitchCase="blues"

//loop in angular
users=['Anil','Sam','Peter'];
userDetails=[
  {name:'Anil',email:'AnilLoda@gmail.com',phone:'1234567890'},
  {name:'Peter',email:'Peter@gmail.com',phone:'8512345654160'},
  {name:'Sam',email:'Sam@gmail.com',phone:'921234567890'}
];

// nested Loop in angular or multi-directinal array in angular
userDetails2=[
  {name:'Anil',email:'AnilLoda@gmail.com',phone:'1234567890',socialAccounts:['facebook','linkedin','insta']},
  {name:'Peter',email:'Peter@gmail.com',phone:'8512345654160',socialAccounts:['tinder','bumble']},
  {name:'Sam',email:'Sam@gmail.com',phone:'921234567890'}
];

//dynamic binding start from here

dynamicFont='large';
dynamicColor='red';
dynamicBgColor='green';
updateDynamicParam(fontSize:string,dynamicColor:string,dynamicBgColor:string){
  this.dynamicFont=fontSize;
  console.log(fontSize)
  this.dynamicColor=dynamicColor;
  this.dynamicBgColor=dynamicBgColor;
}

// headers start from here

//forms start here
//we can define the data type of the data to any but if you want to explicitly define the data type you can follow below
dataForm:any={};
getFormData(data:NgForm){
  console.log(data)
  this.dataForm=data;
}

// toggle element start here 
showHeading=false;
toggleHeading(){
  this.showHeading=!this.showHeading;
}

// <!-- boot strap starts from here -->

// <!-- material ui starts form here -->
// material ui used to give rich look to the website and bootstrap make our website responsive
parentData='Value defined in parent';
UpdateChildValue(){
  this.parentData=Math.random()+""
  Math.floor(Math.random()*10);//just the wat to get integer value
}

// #27 reusable component starts here 
// useing the variable already defined above

// <!-- Send data child to parent -->
// <!-- using child2 component -->
dataVariableInparent='X'
thisFunctionWouldbePassedFromParentToChildAndIsDefinedInParent(datachild2:string){
  console.log("data is ",datachild2)
  this.dataVariableInparent=datachild2;
}
// two way binding starts here
namePropertyVariable:any;


// Template reference variable starts here
// basically id to html component is the template referece variable
getValueTemplateRefenceVariable(templateReferenceVariable:HTMLInputElement){ // we could also use general HTMLElement
  console.log(templateReferenceVariable);
  console.log(templateReferenceVariable.name);
  console.log(templateReferenceVariable.placeholder);
}

//basic of type script

// basic datatype in typescript
// number 
// string
// boolean
// any
// define two type
// below function param can be a number or a boolean both are accepted
chuiyaFunction(maal: number | boolean){
  if(typeof maal ==="number"){
    console.log("its a number")
  }else{
    console.log("its s boolean");
  }
}
// whenever we initialize the variable, we don't need to define its data type
// let say we are receiving any object then how we wooould be defining param in the function
chutiyaFunction2(item:{name:string,phm:number}){
console.log(item.name);
}
item:string[]=["hellow","yash"];

//pipes
// use of pipe - they are only used in html file 
//changing the data format -  eg date,string,(capital small) , curency,locale etc
// making custome pipe starts here 
// forms starts here
userLogin(formVariable:Form){
  console.log(formVariable);
}
userLogin2(formVariable:any){
  console.log(formVariable);
}
// template driven forms validations starts here 


}


