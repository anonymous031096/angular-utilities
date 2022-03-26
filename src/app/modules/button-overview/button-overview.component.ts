import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-overview',
  templateUrl: './button-overview.component.html',
  styleUrls: ['./button-overview.component.scss'],
})
export class ButtonOverviewComponent implements OnInit {
  buttonLoading = false;
  dis = true;

  constructor() {}

  ngOnInit(): void {}
}
