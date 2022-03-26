import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonOverviewComponent } from './button-overview.component';

const routes: Routes = [
  {
    path: '',
    component: ButtonOverviewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ButtonOverviewRoutingModule {}
