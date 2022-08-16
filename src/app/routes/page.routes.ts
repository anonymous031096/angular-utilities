import { Routes } from '@angular/router';

export const PAGE_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('../core/components/layout-home/layout-home.component').then((c) => c.LayoutHomeComponent),
    children: [
      {
        path: 'button-overview',
        loadComponent: () => import('./button-overview/button-overview.component').then((c) => c.ButtonOverviewComponent),
      },
      {
        path: 'table-overview',
        loadComponent: () => import('./table-overview/table-overview.component').then((c) => c.TableOverviewComponent),
      },
      {
        path: 'tooltip-overview',
        loadComponent: () => import('./tooltip-overview/tooltip-overview.component').then((c) => c.TooltipOverviewComponent),
      },
    ],
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.component').then((c) => c.LoginComponent),
  },
];
