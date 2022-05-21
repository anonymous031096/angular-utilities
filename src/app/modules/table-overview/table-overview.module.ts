import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { TableOverviewComponent } from './table-overview.component';

@NgModule({
  declarations: [TableOverviewComponent],
  imports: [CommonModule, FormsModule, MatTableModule, RouterModule.forChild([{ path: '', component: TableOverviewComponent }])],
})
export class TableOverviewModule {}
