import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './shared/admin-layout/admin-layout.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AddPageComponent } from './add-page/add-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditPageComponent } from './edit-page/edit-page.component';
import { OrdersPageComponent } from './orders-page/orders-page.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from '../services/auth.guard';
import { ProductsService } from '../services/products.service';
import { QuillModule } from 'ngx-quill';
import { PipesModule } from '../pipes/pipes.module';
import { AlertComponent } from '../shared/alert/alert.component';

@NgModule({
  declarations: [
    AdminLayoutComponent,
    LoginPageComponent,
    AddPageComponent,
    DashboardComponent,
    EditPageComponent,
    OrdersPageComponent,
    AdminHeaderComponent,
  ],
  providers: [AuthService, AuthGuard, ProductsService],
  exports: [],
  imports: [
    AlertComponent,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    PipesModule,
    QuillModule.forRoot(),
    RouterModule.forChild([
      {
        path: '',
        component: AdminLayoutComponent,
        children: [
          { path: '', redirectTo: '/admin/login', pathMatch: 'full' },
          { path: 'login', component: LoginPageComponent },
          {
            path: 'dashboard',
            component: DashboardComponent,
            canActivate: [AuthGuard],
          },
          {
            path: 'add',
            component: AddPageComponent,
            canActivate: [AuthGuard],
          },
          {
            path: 'orders',
            component: OrdersPageComponent,
            canActivate: [AuthGuard],
          },
          {
            path: 'product/:id/edit',
            component: EditPageComponent,
            canActivate: [AuthGuard],
          },
        ],
      },
    ]),
  ],
})
export class AdminModule {}
