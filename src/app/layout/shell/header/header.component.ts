import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ab-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  title = 'angular-basic';

  constructor() {}

  ngOnInit(): void {}
}
