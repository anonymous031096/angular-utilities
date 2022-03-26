import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout-home',
  templateUrl: './layout-home.component.html',
  styleUrls: ['./layout-home.component.scss'],
  host: {
    class: 'w-screen h-screen flex flex-col',
  },
})
export class LayoutHomeComponent implements OnInit {
  typesOfShoes: string[] = ['Buttons'];

  constructor() {}

  ngOnInit(): void {}
}
