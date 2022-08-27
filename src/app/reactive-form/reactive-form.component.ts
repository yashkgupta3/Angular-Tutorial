import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  loginForm=new FormGroup({
    user:new FormControl('yash gupta',[Validators.required,Validators.email,Validators.pattern('[a-zA-Z]+$@.')]),
    password:new FormControl('1q2w3e',[Validators.required,Validators.minLength(5)])
  })

  loginUser(){
    console.log(this.loginForm.value);
  }

  get userX(){
    return this.loginForm.get('user');
  }

  get passwordVariable(){
    return this.loginForm.get('password');
  }

}
