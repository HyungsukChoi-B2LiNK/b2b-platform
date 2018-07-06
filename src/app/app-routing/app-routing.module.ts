import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginPageComponent } from '../components/login-page/login-page.component';
import { SignUpPageComponent } from '../components/sign-up-page/sign-up-page.component';
import { HomePageComponent } from '../components/home-page/home-page.component';
import { HelpDeskComponent } from '../components/help-desk/help-desk.component';
import { MemberPageComponent } from '../components/member-page/member-page.component';
import { ProductPageComponent } from '../components/product-page/product-page.component';
import { BrandPageComponent } from '../components/brand-page/brand-page.component';
import { MyinfoPageComponent } from '../components/myinfo-page/myinfo-page.component';
import { ProductDetailPageComponent } from '../components/product-detail-page/product-detail-page.component';
import { BrandProductPageComponent } from '../components/brand-product-page/brand-product-page.component';
import { TransactionListPageComponent } from '../components/transaction-list-page/transaction-list-page.component';
import { TransactionDetailPageComponent } from '../components/transaction-detail-page/transaction-detail-page.component';

const routes: Routes = [
  //common user access page
  { 
    path: 'login',
    component: LoginPageComponent
  }, 
  {
    path: 'signup',
    component: SignUpPageComponent
  },
  {
    path: 'helpdesk',
    component: HelpDeskComponent
  },

  //authenticated user access page
  {
    path: 'member',
    component: MemberPageComponent,
    children: [
      {
        path: 'home',
        component: HomePageComponent
      },
      {
        path: 'product',
        component: ProductPageComponent
      },
      {
        path: 'brand',
        component: BrandPageComponent
      },
      {
        path: 'myinfo',
        component: MyinfoPageComponent
      },
      {
        path: 'product/detail',
        component: ProductDetailPageComponent
      },
      {
        path: 'brand/product',
        component: BrandProductPageComponent
      },
      {
        path: 'transaction/list',
        component: TransactionListPageComponent
      },
      {
        path: 'transaction/detail',
        component: TransactionDetailPageComponent
      }

    ]
  }
  
]
 
@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule { }
