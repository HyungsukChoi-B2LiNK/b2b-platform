//angular built in
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//app basic setting
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';

//page components
import { LoginPageComponent } from './components/login-page/login-page.component';
import { SignUpPageComponent } from './components/sign-up-page/sign-up-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { HelpDeskComponent } from './components/help-desk/help-desk.component';
import { MemberPageComponent } from './components/member-page/member-page.component';
import { ProductPageComponent } from './components/product-page/product-page.component';
import { BrandPageComponent } from './components/brand-page/brand-page.component';
import { MyinfoPageComponent } from './components/myinfo-page/myinfo-page.component';
import { ProductDetailPageComponent } from './components/product-detail-page/product-detail-page.component';
import { BrandProductPageComponent } from './components/brand-product-page/brand-product-page.component';
import { TransactionListPageComponent } from './components/transaction-list-page/transaction-list-page.component';
import { TransactionDetailPageComponent } from './components/transaction-detail-page/transaction-detail-page.component';

//reuse components
import { CurationListComponent } from './components/curation-list/curation-list.component';
import { HwahaeListComponent } from './components/hwahae-list/hwahae-list.component';
import { FilterConditionComponent } from './components/filter-condition/filter-condition.component';
import { SelectedConditionComponent } from './components/selected-condition/selected-condition.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ServiceHeaderComponent } from './components/service-header/service-header.component';

//services
import { HttpGatewayService } from './services/http-gateway.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    SignUpPageComponent,
    CurationListComponent,
    HwahaeListComponent,
    HomePageComponent,
    HelpDeskComponent,
    MemberPageComponent,
    ProductPageComponent,
    BrandPageComponent,
    MyinfoPageComponent,
    ProductDetailPageComponent,
    BrandProductPageComponent,
    TransactionListPageComponent,
    TransactionDetailPageComponent,
    FilterConditionComponent,
    SelectedConditionComponent,
    ProductCardComponent,
    ServiceHeaderComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [
    HttpGatewayService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
