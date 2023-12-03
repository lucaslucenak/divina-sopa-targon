import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeliveryComponent } from './pages/delivery/delivery.component';
import { LoginComponent } from './pages/login/login.component';
import { authenticationGuard } from './guards/authentication.guard';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { OrderDetailComponent } from './pages/order-detail/order-detail.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'delivery', component: DeliveryComponent, canMatch: [authenticationGuard]},
  {path: 'delivery/order-detail/:orderId', component: OrderDetailComponent, canMatch: [authenticationGuard]},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
