import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, RouterModule } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
// import { AppRoutingModule } from './app-routing.module';
import { IndexComponent } from './index/index.component';
import { CartComponent } from './cart/cart.component';
import { ProductListComponent } from './product-list/product-list.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { MainComponent } from './main/main.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    CartComponent,
    ProductListComponent,
    UserLoginComponent,
    MainComponent,
    ProductDetailComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,  //Contain directives: ngFor, ngIf...
    IonicModule.forRoot(),  // Contains <ion-...> tags
    //AppRoutingModule
    RouterModule.forRoot([
      {path: '', redirectTo: 'index', pathMatch:'full'},
      {path: 'index', component: IndexComponent},
      {path: 'product-list', component: ProductListComponent},
      {path: 'cart', component: CartComponent},
      {path: 'user-login', component: UserLoginComponent},
      {path: 'product-detail/:pid', component: ProductDetailComponent},
      {path: '**', component: NotFoundComponent}
    ]),  //use my own route, not the default one
    FormsModule,  //ngModel
    HttpClientModule //contain httpclient
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
