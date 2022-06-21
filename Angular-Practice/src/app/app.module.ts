import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PracticeComponent1Component } from './practice-component1/practice-component1.component';
import { PracticeComponent2Component } from './practice-component2/practice-component2.component';
import { CustomDirectiveDirective } from './custom-directive.directive';
import { TodolistComponent } from './todolist/todolist.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { GenderPipe } from './gender.pipe';
import { ZzmmPipe } from './zzmm.pipe';
import { ProductManagementComponent } from './product-management/product-management.component';
import { HttpClientModule } from '@angular/common/http';
import { LoadProductsComponent } from './load-products/load-products.component';
import { ParentBlogComponent } from './parent-blog/parent-blog.component';
import { Chlid1ModifyComponent } from './chlid1-modify/chlid1-modify.component';
import { Chlid2PhotoComponent } from './chlid2-photo/chlid2-photo.component';
import { RouteIndexComponent } from './route-index/route-index.component';
import { RouteProductListComponent } from './route-product-list/route-product-list.component';
import { RouteProductDetailComponent } from './route-product-detail/route-product-detail.component';
import { RouteUserCenterComponent } from './route-user-center/route-user-center.component';
import { RouterModule } from '@angular/router';
import { RouteNotFoundComponent } from './route-not-found/route-not-found.component';
import { RouteAvatarComponent } from './route-avatar/route-avatar.component';
import { RouteSecurityComponent } from './route-security/route-security.component';
import { RouteInfoComponent } from './route-info/route-info.component';
@NgModule({
  declarations: [
    AppComponent,
    PracticeComponent1Component,
    PracticeComponent2Component,
    CustomDirectiveDirective,
    TodolistComponent,
    EmployeelistComponent,
    GenderPipe,
    ZzmmPipe,
    ProductManagementComponent,
    LoadProductsComponent,
    ParentBlogComponent,
    Chlid1ModifyComponent,
    Chlid2PhotoComponent,
    RouteIndexComponent,
    RouteProductListComponent,
    RouteProductDetailComponent,
    RouteUserCenterComponent,
    RouteNotFoundComponent,
    RouteAvatarComponent,
    RouteSecurityComponent,
    RouteInfoComponent,
  ],
  // use ngModule must import FormsModule first
  imports: [BrowserModule, FormsModule, HttpClientModule,
    RouterModule.forRoot([
      { path:'', redirectTo: 'index', pathMatch:'full'  },
      { path: 'index',component: RouteIndexComponent },
      { path: 'plist', component: RouteProductListComponent},
      { path: 'pdetail/:lid', component: RouteProductDetailComponent },
      { 
        path: 'ucenter', 
        component: RouteUserCenterComponent,
        children: [ // second level route
          {path:'', component: RouteInfoComponent},
          {path:'info', component: RouteInfoComponent},
          {path:'avatar', component: RouteAvatarComponent},
          {path:'security', component: RouteSecurityComponent}
        ] 
      },
      // ** => match any path, must be last position
      { path: '**', component: RouteNotFoundComponent}
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
