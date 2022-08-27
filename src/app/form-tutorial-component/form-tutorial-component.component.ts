import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-tutorial-component',
  templateUrl: './form-tutorial-component.component.html',
  styleUrls: ['./form-tutorial-component.component.css']
})
export class FormTutorialComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

userData={
  email:"yash.guta@hs.com",
  password:"harlo"
}

  onSubmit(data:any){
    console.log(data);
    }

}
