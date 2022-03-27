import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { DirectivesModule } from 'src/app/shared/directives/directives.module';
import { ButtonOverviewComponent } from './button-overview.component';

@NgModule({
  declarations: [ButtonOverviewComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    RouterModule.forChild([{ path: '', component: ButtonOverviewComponent }]),
    DirectivesModule,
    MatDividerModule,
  ],
})
export class ButtonOverviewModule {}
