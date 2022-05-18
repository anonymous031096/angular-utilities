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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
