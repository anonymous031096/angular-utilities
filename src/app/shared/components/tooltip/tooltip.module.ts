import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TooltipComponent } from './tooltip.component';

@NgModule({
  declarations: [TooltipComponent],
  imports: [CommonModule, OverlayModule],
  exports: [TooltipComponent],
})
export class TooltipModule {}
