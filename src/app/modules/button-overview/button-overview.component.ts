import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-overview',
  templateUrl: './button-overview.component.html',
})
export class ButtonOverviewComponent implements OnInit {
  buttonLoading = false;
  dis = true;

  constructor() {}

  ngOnInit(): void {}
}
