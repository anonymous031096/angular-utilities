import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ButtonOverviewRoutingModule } from './button-overview-routing.module';
import { ButtonOverviewComponent } from './button-overview.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoadingDirective } from './loading.directive';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [ButtonOverviewComponent, LoadingDirective],
  imports: [CommonModule, MatButtonModule, MatIconModule, ButtonOverviewRoutingModule, MatProgressSpinnerModule, MatDividerModule],
})
export class ButtonOverviewModule {}
