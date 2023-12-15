import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'pages',
    loadChildren: async () =>
      (await import('./pages/pages.module')).PagesModule,
  },
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full',
  },
  {
    path: '404-not-found',
    pathMatch: 'full',
    loadChildren: async () =>
      (await import('./pages/errors/error-404/error-404.module'))
        .Error404Module,
    data: { title: 'Página no Encontrada' },
  },
  { path: '**', redirectTo: '404-not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
