import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ItemsComponent } from './items/items.component';
import { OrdersComponent } from './orders/orders.component';

const routes: Routes = [
  {path:"",component:ItemsComponent},
  {path:"cart",component:CartComponent},
  {path:"orders",component:OrdersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
