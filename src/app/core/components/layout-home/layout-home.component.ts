import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-layout-home',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatRippleModule, MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule, RouterModule],
  templateUrl: './layout-home.component.html',
  styleUrls: ['./layout-home.component.scss'],
  host: {
    class: 'w-screen h-screen flex flex-col',
  },
})
export class LayoutHomeComponent {}
