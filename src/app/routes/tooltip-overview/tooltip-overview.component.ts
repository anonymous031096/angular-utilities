import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TooltipModule } from 'src/app/shared/modules/tooltip/tooltip.module';

@Component({
  selector: 'app-tooltip-overview',
  standalone: true,
  imports: [CommonModule, MatButtonModule, TooltipModule, MatTooltipModule],
  templateUrl: './tooltip-overview.component.html',
  styleUrls: ['./tooltip-overview.component.scss'],
})
export class TooltipOverviewComponent implements OnInit {
  @ViewChild(ElementRef) target!: ElementRef;
  constructor(private _el: ElementRef) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.target.nativeElement.scrollIntoView();
    }, 1000);
    
  }
}
