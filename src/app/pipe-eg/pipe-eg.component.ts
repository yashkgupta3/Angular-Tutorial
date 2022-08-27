import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-eg',
  templateUrl: './pipe-eg.component.html',
  styleUrls: ['./pipe-eg.component.css']
})
export class PipeEgComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  totala:string="Yash Kumar Gupta"
  today=Date();
  //alterantive of pipe
  calString= this.totala.toUpperCase();

  // Advanced pipe starts here 
  //json pipe
  user={
    name:'anil',
    age:28
  }

}
