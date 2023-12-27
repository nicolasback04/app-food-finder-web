import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'notifications-association',
    data: {
      screen: 'FACTGENASOCIANOTI',
      title: 'Asociación de Notificaciones',
    },
    loadChildren: async () =>
      (
        await import(
          './restaurant/restaurant.module'
        )
      ).RestaurantModule,
  },

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class GeneralProcessRoutingModule { }
