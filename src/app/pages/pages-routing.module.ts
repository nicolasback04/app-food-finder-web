import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'general-processes',
    loadChildren: async () =>
      (await import('./general-processes/general-process.module'))
        .GeneralProcessModule,
  },
  {
    path: '404-not-found',
    pathMatch: 'full',
    loadChildren: async () =>
      (await import('../pages/errors/error-404/error-404.module'))
        .Error404Module,
  },
  { path: '**', redirectTo: '404-not-found' },
];

export const pageRoutes = routes;
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
