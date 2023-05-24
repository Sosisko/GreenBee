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
import { SearchPipe } from './services/search.pipe';


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
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    QuillModule.forRoot(),
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'ru' }],
  bootstrap: [AppComponent],
  exports: [
    SearchPipe
  ],
})
export class AppModule {}
