import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-country-list',
  template: `
    <h2 class="toyota">
      country-list works!
    </h2>
  `,
  styles: [
    `.toyota{color:yellow}`
  ]
})
export class CountryListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
