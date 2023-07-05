import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MainLayoutComponent } from './shared/main-layout/main-layout.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { ProductsCollectionPageComponent } from './products-collection-page/products-collection-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuillModule } from 'ngx-quill';
import { HttpClientModule } from '@angular/common/http';
import { ProductComponent } from './product/product.component';
import { PipesModule } from './pipes/pipes.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatGridListModule } from '@angular/material/grid-list';
import { AlertComponent } from './shared/alert/alert.component';
import { CartPagePrewievComponent } from './cart-page-prewiev/cart-page-prewiev.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { DialogOfProductComponent } from './shared/dialog-of-product/dialog-of-product.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { DialogAddCartComponent } from './shared/dialog-add-cart/dialog-add-cart.component';
import { MatSliderModule } from '@angular/material/slider';


registerLocaleData(localeRu, 'ru');
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomePageComponent,
    MainLayoutComponent,
    CartPageComponent,
    ProductPageComponent,
    ProductsCollectionPageComponent,
    ProductComponent,
    CartPagePrewievComponent,
    DialogOfProductComponent,
    DialogAddCartComponent,

  ],

  imports: [
  AlertComponent,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    PipesModule,
    FontAwesomeModule,
    MatGridListModule,
    NgxPaginationModule,
    MatDialogModule,
    MatButtonModule,
    MatSliderModule,
    QuillModule.forRoot(),
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'ru' }],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {}
