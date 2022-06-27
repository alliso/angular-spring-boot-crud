import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss']
})
export class TopMenuComponent implements OnInit {

  selectedRoute: string = "books";
  
  constructor() { }

  ngOnInit(): void {
  }

  changeActive(route: string): void {
    this.selectedRoute = route;
  }

}
