import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { LayoutHomeComponent } from './components/layout-home/layout-home.component';

@NgModule({
  declarations: [LayoutHomeComponent],
  imports: [CommonModule, MatButtonModule, MatRippleModule, MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule, RouterModule],
  exports: [LayoutHomeComponent],
})
export class CoreModule {}
