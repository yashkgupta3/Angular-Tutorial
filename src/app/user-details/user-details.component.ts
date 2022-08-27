import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  constructor() { }
// @Input() userDetailsChildVariable:Array<any>=[]; this is one of the generic way to define if the passed value was array
@Input() userDetailsChildVariable:{name:string,email:string,phone:string}={name:'',email:'',phone:''};
  ngOnInit(): void {
  }

}
