import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipOverviewComponent } from './tooltip-overview.component';
import { RouterModule } from '@angular/router';
import { TooltipModule } from 'src/app/shared/components/tooltip/tooltip.module';

@NgModule({
  declarations: [TooltipOverviewComponent],
  imports: [CommonModule, TooltipModule, RouterModule.forChild([{ path: '', component: TooltipOverviewComponent }])],
})
export class TooltipOverviewModule {}
