import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { TableOverviewComponent } from './table-overview.component';

@NgModule({
  declarations: [TableOverviewComponent],
  imports: [CommonModule, MatTableModule, RouterModule.forChild([{ path: '', component: TableOverviewComponent }])],
})
export class TableOverviewModule {}
