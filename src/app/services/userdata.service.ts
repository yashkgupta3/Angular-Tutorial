import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor() { }

  user(){
    return [
      {name:'Anil',age:28,email:'anil@test.com'},
      {name:'Sam',age:38,email:'Sam@test.com'},
      {name:'peter',age:58,email:'peter@test.com'},

    ]
  }

}
