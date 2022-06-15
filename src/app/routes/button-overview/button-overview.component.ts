import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { ButtonLoadingDirective } from 'src/app/shared/directives/button-loading.directive';

@Component({
  selector: 'app-button-overview',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, ButtonLoadingDirective, MatDividerModule],
  templateUrl: './button-overview.component.html',
  styleUrls: ['./button-overview.component.scss'],
})
export class ButtonOverviewComponent implements OnInit {
  buttonLoading = false;

  constructor() {}

  ngOnInit(): void {}
}
