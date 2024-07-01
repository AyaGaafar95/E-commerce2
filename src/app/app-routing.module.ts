import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductsComponent } from './components/products/products.component';
import { CategriesComponent } from './components/categries/categries.component';
import { BrandsComponent } from './components/brands/brands.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { BlankLayoutComponent } from './layouts/blank-layout/blank-layout.component';
import { AuthGuard } from './components/guards/auth.guard';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { PaymentComponent } from './components/payment/payment.component';

const routes: Routes = [
  {
    path: '',
    component: BlankLayoutComponent,
    children: [
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
      { path: 'cart', component: CartComponent, canActivate: [AuthGuard] },
      {
        path: 'payment',
        component: PaymentComponent,
        canActivate: [AuthGuard],
      },

      {
        path: 'products',
        component: ProductsComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'details/:id',
        component: ProductDetailsComponent,
        canActivate: [AuthGuard],
      },

      {
        path: 'categories',
        component: CategriesComponent,
        canActivate: [AuthGuard],
      },
      { path: 'brands', component: BrandsComponent, canActivate: [AuthGuard] },
    ],
  },
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      { path: 'login', component: LoginComponent }, //auth + login = login componenet
      { path: 'register', component: RegisterComponent },
    ],
  },

  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
