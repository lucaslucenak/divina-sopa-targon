import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeliveryComponent } from './pages/delivery/delivery.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {path: 'delivery', component: DeliveryComponent},
  {path: '', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
