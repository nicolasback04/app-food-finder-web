import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'restaurant',
    data: {
      title: 'Restaurantes',
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
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GeneralProcessRoutingModule { }
