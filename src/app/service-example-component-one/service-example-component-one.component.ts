import { Component, OnInit } from '@angular/core';
import {UserdataService} from "../services/userdata.service";

@Component({
  selector: 'app-service-example-component-one',
  templateUrl: './service-example-component-one.component.html',
  styleUrls: ['./service-example-component-one.component.css']
})
export class ServiceExampleComponentOneComponent implements OnInit {

  user1:any;
  constructor(private userdata:UserdataService) {
    this.user1=userdata.user();
  }



  ngOnInit(): void {
  }

}
