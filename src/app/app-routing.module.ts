import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'button-overview',
    loadChildren: () => import('./modules/button-overview/button-overview.module').then((m) => m.ButtonOverviewModule),
  },
  {
    path: 'table-overview',
    loadChildren: () => import('./modules/table-overview/table-overview.module').then((m) => m.TableOverviewModule),
  },
  {
    path: 'tooltip-overview',
    loadChildren: () => import('./modules/tooltip-overview/tooltip-overview.module').then((m) => m.TooltipOverviewModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
