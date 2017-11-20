import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./components/login/login.component";
import {BuyComponent} from "./components/buy/buy.component";
import {SellComponent} from "./components/sell/sell.component";
import {HomepageComponent} from "./components/homepage/homepage.component";
import {CartComponent} from "./components/cart/cart.component";
import {ProfileComponent} from "./components/profile/profile.component";
import {SignupComponent} from "./components/signup/signup.component";
import {AdminComponent} from "./components/admin/admin.component";

const routes: Routes = [
  // {path: 'home', component: HomepageComponent},
  // {path: 'employee', component: EmployeeComponent},
  // {path: 'reimbursement', component: ReimbursementComponent},
  // {path: 'reimbursement/:id', component: ReimbursementComponent},
  // {path: 'profile', component: ProfileComponent},
  // {path: 'update-info', component: UpdateInfoComponent},
  // {path: 'login', component: LoginComponent},
  {path: 'buy', component: BuyComponent},
  {path: 'sell', component: SellComponent},
  {path: 'homepage', component: HomepageComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'cart', component: CartComponent},
  {path: 'logout', redirectTo: '/', pathMatch: 'full'},
  {path: '', component: LoginComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
