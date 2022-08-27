import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list-inline',
  templateUrl: './user-list-inline.component.html',
  styles: [
    `.custom{color:blue}`
  ]
})
export class UserListInlineComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
