import { Component, OnInit } from '@angular/core';
import {UserdataService} from "../services/userdata.service";

@Component({
  selector: 'app-service-example-component-two',
  templateUrl: './service-example-component-two.component.html',
  styleUrls: ['./service-example-component-two.component.css']
})
export class ServiceExampleComponentTwoComponent implements OnInit {

  user2:any;
  constructor(private userdata:UserdataService) {
    this.user2=userdata.user();
  }

  ngOnInit(): void {
  }

}
