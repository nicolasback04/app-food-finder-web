import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'general-processes',
    loadChildren: async () =>
      (await import('./general-process/general-process.module'))
        .GeneralProcessModule,
  },
  { path: '**', redirectTo: '404-not-found' },
];

export const pageRoutes = routes;
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
