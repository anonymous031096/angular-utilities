import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LayoutHomeComponent } from './components/layout-home/layout-home.component';

@NgModule({
  declarations: [LayoutHomeComponent],
  imports: [CommonModule, MatButtonModule, MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule],
  exports: [LayoutHomeComponent],
})
export class CoreModule {}
