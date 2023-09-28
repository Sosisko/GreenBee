"use strict";
(self["webpackChunkangular_greenbee"] = self["webpackChunkangular_greenbee"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-page/home-page.component */ 5079);
/* harmony import */ var _shared_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/main-layout/main-layout.component */ 1899);
/* harmony import */ var _cart_page_cart_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cart-page/cart-page.component */ 516);
/* harmony import */ var _products_collection_page_products_collection_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./products-collection-page/products-collection-page.component */ 3496);
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product/product.component */ 7695);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);








const routes = [{
  path: '',
  component: _shared_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_1__.MainLayoutComponent,
  children: [{
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  }, {
    path: '',
    component: _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_0__.HomePageComponent
  }, {
    path: 'product/:id',
    component: _product_product_component__WEBPACK_IMPORTED_MODULE_4__.ProductComponent
  }, {
    path: 'products-collection',
    component: _products_collection_page_products_collection_page_component__WEBPACK_IMPORTED_MODULE_3__.ProductsCollectionPageComponent
  }, {
    path: 'cart',
    component: _cart_page_cart_page_component__WEBPACK_IMPORTED_MODULE_2__.CartPageComponent
  }]
}, {
  path: 'admin',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_admin_admin_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./admin/admin.module */ 7095)).then(m => m.AdminModule)
}];
class AppRoutingModule {}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
};
AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
});
AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
  });
})();

/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


class AppComponent {}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)();
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 1,
  vars: 0,
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_common_locales_ru__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/locales/ru */ 7954);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/header/header.component */ 3646);
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-page/home-page.component */ 5079);
/* harmony import */ var _cart_page_cart_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cart-page/cart-page.component */ 516);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _shared_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/main-layout/main-layout.component */ 1899);
/* harmony import */ var _product_page_product_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product-page/product-page.component */ 2170);
/* harmony import */ var _products_collection_page_products_collection_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./products-collection-page/products-collection-page.component */ 3496);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ngx-quill */ 3115);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./product/product.component */ 7695);
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pipes/pipes.module */ 5503);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 9200);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/grid-list */ 2642);
/* harmony import */ var _shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/alert/alert.component */ 8549);
/* harmony import */ var _cart_page_prewiev_cart_page_prewiev_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./cart-page-prewiev/cart-page-prewiev.component */ 4353);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ngx-pagination */ 2302);
/* harmony import */ var _shared_dialog_of_product_dialog_of_product_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/dialog-of-product/dialog-of-product.component */ 4997);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _shared_dialog_add_cart_dialog_add_cart_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/dialog-add-cart/dialog-add-cart.component */ 51);
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/slider */ 5682);































(0,_angular_common__WEBPACK_IMPORTED_MODULE_14__.registerLocaleData)(_angular_common_locales_ru__WEBPACK_IMPORTED_MODULE_15__["default"], 'ru');
class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineInjector"]({
  providers: [{
    provide: _angular_core__WEBPACK_IMPORTED_MODULE_16__.LOCALE_ID,
    useValue: 'ru'
  }],
  imports: [_shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_10__.AlertComponent, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__.BrowserAnimationsModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__.MatIconModule, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.ReactiveFormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_21__.HttpClientModule, _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_9__.PipesModule, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_22__.FontAwesomeModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_23__.MatGridListModule, ngx_pagination__WEBPACK_IMPORTED_MODULE_24__.NgxPaginationModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_25__.MatDialogModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_26__.MatButtonModule, _angular_material_slider__WEBPACK_IMPORTED_MODULE_27__.MatSliderModule, ngx_quill__WEBPACK_IMPORTED_MODULE_28__.QuillModule.forRoot()]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent, _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__.HomePageComponent, _shared_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_5__.MainLayoutComponent, _cart_page_cart_page_component__WEBPACK_IMPORTED_MODULE_4__.CartPageComponent, _product_page_product_page_component__WEBPACK_IMPORTED_MODULE_6__.ProductPageComponent, _products_collection_page_products_collection_page_component__WEBPACK_IMPORTED_MODULE_7__.ProductsCollectionPageComponent, _product_product_component__WEBPACK_IMPORTED_MODULE_8__.ProductComponent, _cart_page_prewiev_cart_page_prewiev_component__WEBPACK_IMPORTED_MODULE_11__.CartPagePrewievComponent, _shared_dialog_of_product_dialog_of_product_component__WEBPACK_IMPORTED_MODULE_12__.DialogOfProductComponent, _shared_dialog_add_cart_dialog_add_cart_component__WEBPACK_IMPORTED_MODULE_13__.DialogAddCartComponent],
    imports: [_shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_10__.AlertComponent, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__.BrowserAnimationsModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__.MatIconModule, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.ReactiveFormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_21__.HttpClientModule, _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_9__.PipesModule, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_22__.FontAwesomeModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_23__.MatGridListModule, ngx_pagination__WEBPACK_IMPORTED_MODULE_24__.NgxPaginationModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_25__.MatDialogModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_26__.MatButtonModule, _angular_material_slider__WEBPACK_IMPORTED_MODULE_27__.MatSliderModule, ngx_quill__WEBPACK_IMPORTED_MODULE_28__.QuillModule]
  });
})();

/***/ }),

/***/ 4353:
/*!******************************************************************!*\
  !*** ./src/app/cart-page-prewiev/cart-page-prewiev.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartPagePrewievComponent": () => (/* binding */ CartPagePrewievComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/cart.service */ 910);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-quill */ 3115);






function CartPagePrewievComponent_li_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 5)(1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "quill-view-html", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 8)(4, "div")(5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p")(10, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CartPagePrewievComponent_li_2_Template_button_click_13_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);
      const product_r1 = restoredCtx.$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.onRemoveFromCart(product_r1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "delete_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const product_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("content", product_r1.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", product_r1.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](product_r1.options ? "(" + product_r1.options.measureQantity + product_r1.options.measureValue + ")" : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](12, 5, product_r1.price), " x ", product_r1.quantity, "");
  }
}
class CartPagePrewievComponent {
  constructor(cartService) {
    this.cartService = cartService;
    this.cartProducts = [];
  }
  ngOnInit() {
    this.cartProducts = this.cartService.cartProducts;
    this.cartService.totalPrice$.subscribe(totalPrice => {
      this.totalPrice = totalPrice;
    });
  }
  onRemoveFromCart(product) {
    this.cartService.removeProductFromCart(product);
  }
}
CartPagePrewievComponent.ɵfac = function CartPagePrewievComponent_Factory(t) {
  return new (t || CartPagePrewievComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_cart_service__WEBPACK_IMPORTED_MODULE_0__.CartService));
};
CartPagePrewievComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: CartPagePrewievComponent,
  selectors: [["app-cart-page-prewiev"]],
  decls: 12,
  vars: 4,
  consts: [[1, "wrapper"], ["class", "product", 4, "ngFor", "ngForOf"], [1, "cart-prewiev-footer"], [1, "cart-total-price"], ["routerLink", "/cart", 1, "btn-into-cart"], [1, "product"], [1, "products-item", "img"], [3, "content"], [1, "flex"], [1, "del-btn", 3, "click"]],
  template: function CartPagePrewievComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "ul");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CartPagePrewievComponent_li_2_Template, 16, 7, "li", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2)(4, "div", 3)(5, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\u0421\u0443\u043C\u043C\u0430:");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "currency");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "\u0412 \u043A\u043E\u0440\u0437\u0438\u043D\u0443");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.cartProducts);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 2, ctx.totalPrice));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon, ngx_quill__WEBPACK_IMPORTED_MODULE_5__.QuillViewHTMLComponent, _angular_common__WEBPACK_IMPORTED_MODULE_2__.CurrencyPipe],
  styles: [".wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.35);\n  border-radius: 3px;\n  max-height: 550px;\n  overflow-y: scroll;\n}\n.wrapper[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  padding: 0 20px;\n  margin: 0 auto;\n}\n.wrapper[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 10px;\n  background-color: #f0f0f0;\n  border-radius: 5px;\n  height: 200px;\n}\n.wrapper[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #78b144;\n  border-radius: 5px;\n}\n\n.flex[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.flex[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #909090;\n  font-weight: 500;\n}\n\n.product[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: start;\n  margin: 0;\n  padding: 20px 0;\n  border-bottom: 1px dashed rgba(0, 0, 0, 0.2);\n}\n\n.img[_ngcontent-%COMP%] {\n  width: 60px;\n  margin-right: 35px;\n  border: 1px solid #e6e6e6;\n  border-radius: 5px;\n}\n\n.del-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  left: -10px;\n  border: none;\n  border-radius: 100%;\n  padding: 1px 3px;\n  cursor: pointer;\n  color: #8f8f8f;\n}\n.del-btn[_ngcontent-%COMP%]:hover {\n  background: #0d7a52;\n  color: #fff;\n}\n.del-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  transform: scale(0.7);\n  line-height: 1.2;\n}\n\n.cart-prewiev-footer[_ngcontent-%COMP%] {\n  padding: 20px;\n  background-color: #fff;\n  position: sticky;\n  bottom: 0;\n  box-shadow: 2px -7px 15px 4px rgba(0, 0, 0, 0.1);\n}\n\n.cart-total-price[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 1.1rem;\n  color: #222;\n  font-weight: 900;\n  text-transform: uppercase;\n}\n\n.btn-into-cart[_ngcontent-%COMP%] {\n  background: #ececec;\n  color: #222;\n  border: none;\n  border-radius: 3px;\n  text-align: center;\n  height: 44px;\n  width: 100%;\n  cursor: pointer;\n  transition: 0.2s ease-in-out;\n}\n.btn-into-cart[_ngcontent-%COMP%]:hover {\n  background: #0d7a52;\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY2FydC1wYWdlLXByZXdpZXYvY2FydC1wYWdlLXByZXdpZXYuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLDBDQUFBO0VBQ0Esa0JBQUE7RUFLQSxpQkFBQTtFQUNBLGtCQUFBO0FBSEY7QUFGRTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FBSUo7QUFBRTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQUVKO0FBQUU7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0FBRUo7O0FBRUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUFDRjtBQUFFO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUVKOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsNENBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBRUY7QUFERTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtBQUdKO0FBQUU7RUFDRSxxQkFBQTtFQUNBLGdCQUFBO0FBRUo7O0FBRUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxnREFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSw0QkFBQTtBQUNGO0FBQUU7RUFDRSxtQkFBQTtFQUNBLFdBQUE7QUFFSiIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMzUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICB1bCB7XHJcbiAgICBwYWRkaW5nOiAwIDIwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICB9XHJcbiAgbWF4LWhlaWdodDogNTUwcHg7XHJcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIHdpZHRoOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZjBmMGYwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICB9XHJcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgYmFja2dyb3VuZDogIzc4YjE0NDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG59XHJcblxyXG4uZmxleCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHA+c3BhbntcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIGNvbG9yOiAjOTA5MDkwO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB9XHJcbn1cclxuXHJcbi5wcm9kdWN0IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDIwcHggMDtcclxuICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxufVxyXG5cclxuLmltZyB7XHJcbiAgd2lkdGg6IDYwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAzNXB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNmU2ZTY7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcbi5kZWwtYnRuIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAxMHB4O1xyXG4gIGxlZnQ6IC0xMHB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDFweCAzcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGNvbG9yOiAjOGY4ZjhmO1xyXG4gICY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogIzBkN2E1MjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gIH1cclxuXHJcbiAgbWF0LWljb24ge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjcpO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMjtcclxuICB9XHJcbn1cclxuXHJcbi5jYXJ0LXByZXdpZXYtZm9vdGVyIHtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgcG9zaXRpb246IHN0aWNreTtcclxuICBib3R0b206IDA7XHJcbiAgYm94LXNoYWRvdzogMnB4IC03cHggMTVweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG59XHJcblxyXG4uY2FydC10b3RhbC1wcmljZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgY29sb3I6ICMyMjI7XHJcbiAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG4uYnRuLWludG8tY2FydCB7XHJcbiAgYmFja2dyb3VuZDogI2VjZWNlYztcclxuICBjb2xvcjogIzIyMjtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBoZWlnaHQ6IDQ0cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IC4ycyBlYXNlLWluLW91dDtcclxuICAmOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICMwZDdhNTI7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 516:
/*!**************************************************!*\
  !*** ./src/app/cart-page/cart-page.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartPageComponent": () => (/* binding */ CartPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/cart.service */ 910);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/grid-list */ 2642);
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-quill */ 3115);








function CartPageComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u041A\u043E\u0440\u0437\u0438\u043D\u0430 \u043F\u0443\u0441\u0442\u0430");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u0432 \u043C\u0430\u0433\u0430\u0437\u0438\u043D");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function CartPageComponent_div_3_mat_grid_list_14_b_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const product_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, product_r4.price * product_r4.quantity));
  }
}
function CartPageComponent_div_3_mat_grid_list_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-grid-list", 19)(1, "mat-grid-tile", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "quill-view-html", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 21)(4, "mat-grid-tile", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-grid-tile", 9)(7, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-grid-tile", 23)(13, "div", 24)(14, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CartPageComponent_div_3_mat_grid_list_14_Template_button_click_14_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);
      const product_r4 = restoredCtx.$implicit;
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r7.decreaseQuantity(product_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CartPageComponent_div_3_mat_grid_list_14_Template_input_ngModelChange_17_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);
      const product_r4 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](product_r4.quantity = $event);
    })("ngModelChange", function CartPageComponent_div_3_mat_grid_list_14_Template_input_ngModelChange_17_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r10.updateTotal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CartPageComponent_div_3_mat_grid_list_14_Template_button_click_18_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);
      const product_r4 = restoredCtx.$implicit;
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r11.increaseQuantity(product_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "mat-grid-tile", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, CartPageComponent_div_3_mat_grid_list_14_b_22_Template, 3, 3, "b", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "mat-grid-tile", 10)(24, "mat-icon", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CartPageComponent_div_3_mat_grid_list_14_Template_mat_icon_click_24_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);
      const product_r4 = restoredCtx.$implicit;
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r12.onRemoveFromCart(product_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const product_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("content", product_r4.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", product_r4.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 6, product_r4.price), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](product_r4.options ? "(" + product_r4.options.measureQantity + product_r4.options.measureValue + ")" : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", product_r4.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", product_r4.quantity);
  }
}
function CartPageComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5)(1, "div", 6)(2, "h2", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\u041A\u043E\u0440\u0437\u0438\u043D\u0430 \u043F\u043E\u043A\u0443\u043F\u043E\u043A");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-grid-list", 8)(5, "mat-grid-tile", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\u041F\u0440\u043E\u0434\u0443\u043A\u0442");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-grid-tile", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "\u0426\u0435\u043D\u0430");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-grid-tile", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "\u041A\u043E\u043B-\u0432\u043E");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-grid-tile", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "\u0421\u0443\u043C\u043C\u0430");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "mat-grid-tile", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, CartPageComponent_div_3_mat_grid_list_14_Template, 25, 8, "mat-grid-list", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " \u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C \u043F\u043E\u043A\u0443\u043F\u043A\u0438 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 12)(18, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, " \u0423 \u0432\u0430\u0441 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " \u0442\u043E\u0432\u0430\u0440\u043E\u0432 \u0432 \u043A\u043E\u0440\u0437\u0438\u043D\u0435 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 14)(24, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, " \u0421\u0443\u043C\u043C\u0430 \u0432\u0441\u0435\u0445 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u043E\u0432: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](28, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, " \u0421\u0443\u043C\u043C\u0430 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "\u0411\u0415\u0421\u041F\u041B\u0410\u0422\u041D\u041E");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, " \u041E\u0431\u0449\u0430\u044F \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](37, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u043A \u043E\u043F\u043B\u0430\u0442\u0435");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.cartProducts);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.totalQuantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](28, 4, ctx_r2.totalPrice));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](37, 6, ctx_r2.totalPrice));
  }
}
class CartPageComponent {
  constructor(cartService) {
    this.cartService = cartService;
    this.cartProducts = [];
    this.sumProduct = 0;
  }
  updateQuantity(product, newQuantity) {
    this.cartService.updateQuantity(product, newQuantity);
    this.updateTotal();
  }
  decreaseQuantity(product) {
    if (product.quantity !== undefined && product.quantity > 1) {
      product.quantity--;
      this.updateQuantity(product, product.quantity);
    }
  }
  increaseQuantity(product) {
    if (product.quantity !== undefined) {
      product.quantity++;
      this.updateQuantity(product, product.quantity);
    }
  }
  ngOnInit() {
    this.cartProducts = this.cartService.cartProducts;
    console.log(this.cartProducts);
    this.updateTotal();
  }
  updateTotal() {
    this.pSub = this.cartService.totalPrice$.subscribe(totalPrice => {
      this.totalPrice = totalPrice;
    });
    this.qSub = this.cartService.totalQuantity$.subscribe(totalQuantity => {
      this.totalQuantity = totalQuantity;
    });
  }
  onRemoveFromCart(product) {
    this.cartService.removeProductFromCart(product);
    this.updateTotal();
  }
  ngOnDestroy() {
    if (this.pSub) {
      this.pSub.unsubscribe();
    }
    if (this.qSub) {
      this.qSub.unsubscribe();
    }
  }
}
CartPageComponent.ɵfac = function CartPageComponent_Factory(t) {
  return new (t || CartPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_cart_service__WEBPACK_IMPORTED_MODULE_0__.CartService));
};
CartPageComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: CartPageComponent,
  selectors: [["app-cart-page"]],
  decls: 4,
  vars: 2,
  consts: [[1, "container"], ["empty", ""], ["class", "cart-wrapper", 4, "ngIf", "ngIfElse"], [1, "empty-cart-title"], ["routerLink", "/", 1, "btn-back-to-shop"], [1, "cart-wrapper"], [1, "cart-content"], [1, "cart-title"], ["mat-grid-tile-header", "", "cols", "9", "rowHeight", "2:1", 1, "cart-overview-header"], ["colspan", "2"], ["colspan", "1"], ["class", "product-item", "cols", "9", "rowHeight", "1:1", 4, "ngFor", "ngForOf"], [1, "cart-total-content"], [1, "cart-total-content--title"], [1, "group-price"], [1, "cart-total-product-price"], [1, "cart-total--shipping"], [1, "cart-total-price"], [1, "btn-checkout"], ["cols", "9", "rowHeight", "1:1", 1, "product-item"], [1, "img", 3, "content"], [1, "product-title"], [1, "product-measure-qantity"], ["colspan", "2", 1, "quantity"], [1, "input-group"], [1, "btn-dec", 3, "click"], ["type", "number", "oninput", "if(this.value < 1) this.value = 1", 3, "ngModel", "ngModelChange"], [1, "btn-inc", 3, "click"], ["colspan", "2", 1, "product-sum"], [4, "ngIf"], ["fontIcon", "delete_outline", 1, "btn", "btn-del", 3, "click"]],
  template: function CartPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CartPageComponent_ng_template_1_Template, 4, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, CartPageComponent_div_3_Template, 40, 8, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.cartProducts.length > 0)("ngIfElse", _r0);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__.MatGridList, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__.MatGridTile, ngx_quill__WEBPACK_IMPORTED_MODULE_7__.QuillViewHTMLComponent, _angular_common__WEBPACK_IMPORTED_MODULE_2__.CurrencyPipe],
  styles: [".cart-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  margin-top: 40px;\n  align-items: flex-start;\n}\n\n.product-sum[_ngcontent-%COMP%] {\n  color: #c64e4e;\n}\n\n.cart-total-content[_ngcontent-%COMP%] {\n  border: 1px solid #e9e9e9;\n  margin-left: 20px;\n  width: 30%;\n  padding: 0 20px;\n  color: #666;\n  position: sticky;\n  top: 15px;\n}\n\n.cart-total-content--title[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  text-align: center;\n  font-weight: 900;\n  text-transform: uppercase;\n  border-bottom: 1px solid #e9e9e9;\n  padding: 25px 0;\n}\n.cart-total-content--title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #0049f2;\n}\n\n.group-price[_ngcontent-%COMP%] {\n  padding: 20px 0;\n  border-bottom: 1px solid #222;\n}\n.group-price[_ngcontent-%COMP%]   .cart-total-product-price[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  display: flex;\n  justify-content: space-between;\n}\n.group-price[_ngcontent-%COMP%]   .cart-total-product-price[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 900;\n}\n.group-price[_ngcontent-%COMP%]   .cart-total--shipping[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.group-price[_ngcontent-%COMP%]   .cart-total--shipping[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 900;\n}\n\n.cart-total-price[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 30px 0;\n  text-transform: uppercase;\n  font-size: 1.2rem;\n  font-weight: 900;\n  color: #222;\n}\n\n.btn-checkout[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n  background: #424242;\n  color: #fff;\n  font-weight: 700;\n  width: 100%;\n  height: 50px;\n  line-height: 50px;\n  text-align: center;\n  border-radius: 3px;\n  border: none;\n  cursor: pointer;\n  transition: 0.2s ease-in-out;\n}\n.btn-checkout[_ngcontent-%COMP%]:hover {\n  background: #0d7a52;\n}\n\n.cart-content[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  width: 70%;\n}\n\n.cart-title[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n}\n\n.img[_ngcontent-%COMP%] {\n  margin-right: 20px;\n}\n\n.cart-overview-header[_ngcontent-%COMP%] {\n  border-top: 1px solid #e9e9e9;\n  border-bottom: 1px solid #e9e9e9;\n}\n\n.product-item[_ngcontent-%COMP%] {\n  border-bottom: 1px dashed rgba(0, 0, 0, 0.2);\n}\n\n.btn-del[_ngcontent-%COMP%] {\n  font-size: 20px;\n  cursor: pointer;\n}\n.btn-del[_ngcontent-%COMP%]:hover {\n  color: #78b144;\n}\n\ninput[type=number][_ngcontent-%COMP%]::-webkit-outer-spin-button, input[type=number][_ngcontent-%COMP%]::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n}\n\ninput[type=number][_ngcontent-%COMP%], input[type=number][_ngcontent-%COMP%]:hover, input[type=number][_ngcontent-%COMP%]:focus {\n  -webkit-appearance: none;\n          appearance: none;\n  -moz-appearance: textfield;\n}\n\n.input-group[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.input-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  max-width: 50px;\n  color: #444;\n  height: 40px;\n  font-size: 14px;\n  border: 1px solid #ebebeb;\n  background-color: #f6f6f6;\n  text-align: center;\n  border-radius: 3px;\n  position: relative;\n  outline: none;\n}\n.input-group[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 40px;\n  border: 1px solid #ebebeb;\n  color: #989898;\n  background-color: #fff;\n  line-height: 1;\n  cursor: pointer;\n}\n.input-group[_ngcontent-%COMP%]   .btn-dec[_ngcontent-%COMP%] {\n  left: 30px;\n}\n.input-group[_ngcontent-%COMP%]   .btn-inc[_ngcontent-%COMP%] {\n  right: 28px;\n}\n\n.btn-back-to-shop[_ngcontent-%COMP%] {\n  padding: 0 20px;\n  margin: 30px 0;\n  background: #eee;\n  color: #222;\n  font-weight: 700;\n  height: 50px;\n  line-height: 50px;\n  text-align: center;\n  border-radius: 3px;\n  border: none;\n  cursor: pointer;\n  transition: 0.2s ease-in-out;\n}\n.btn-back-to-shop[_ngcontent-%COMP%]:hover {\n  background: #0d7a52;\n  color: #fff;\n}\n\n.product-title[_ngcontent-%COMP%] {\n  word-break: break-all;\n  text-align: center;\n}\n\n.product-measure-qantity[_ngcontent-%COMP%] {\n  margin-left: 5px;\n  font-size: 11px;\n  color: #909090;\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY2FydC1wYWdlL2NhcnQtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGdDQUFBO0VBQ0EsZUFBQTtBQUNGO0FBQUU7RUFDRSxjQUFBO0FBRUo7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsNkJBQUE7QUFDRjtBQUFFO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7QUFFSjtBQURJO0VBQ0UsZ0JBQUE7QUFHTjtBQUFFO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0FBRUo7QUFESTtFQUNFLGdCQUFBO0FBR047O0FBRUE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSw0QkFBQTtBQUNGO0FBQUU7RUFDRSxtQkFBQTtBQUVKOztBQUVBO0VBQ0UsY0FBQTtFQUNBLFVBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0FBQ0Y7O0FBRUE7RUFFRSxrQkFBQTtBQUFGOztBQUdBO0VBQ0UsNkJBQUE7RUFDQSxnQ0FBQTtBQUFGOztBQUdBO0VBQ0UsNENBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxlQUFBO0FBQUY7QUFDRTtFQUNFLGNBQUE7QUFDSjs7QUFHQTs7RUFFRSx3QkFBQTtBQUFGOztBQUdBOzs7RUFHRSx3QkFBQTtVQUFBLGdCQUFBO0VBQ0EsMEJBQUE7QUFBRjs7QUFHQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQUFGO0FBRUU7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUFBSjtBQUVFO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQUFKO0FBR0U7RUFDRSxVQUFBO0FBREo7QUFHRTtFQUNFLFdBQUE7QUFESjs7QUFLQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSw0QkFBQTtBQUZGO0FBR0U7RUFDRSxtQkFBQTtFQUNBLFdBQUE7QUFESjs7QUFLQTtFQUdFLHFCQUFBO0VBQ0Esa0JBQUE7QUFKRjs7QUFNQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUhGIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcnQtd3JhcHBlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG59XHJcblxyXG4ucHJvZHVjdC1zdW0ge1xyXG4gIGNvbG9yOiAjYzY0ZTRlO1xyXG59XHJcblxyXG4uY2FydC10b3RhbC1jb250ZW50IHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZTllOWU5O1xyXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gIHdpZHRoOiAzMCU7XHJcbiAgcGFkZGluZzogMCAyMHB4O1xyXG4gIGNvbG9yOiAjNjY2O1xyXG4gIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgdG9wOiAxNXB4O1xyXG59XHJcblxyXG4uY2FydC10b3RhbC1jb250ZW50LS10aXRsZSB7XHJcbiAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U5ZTllOTtcclxuICBwYWRkaW5nOiAyNXB4IDA7XHJcbiAgc3BhbiB7XHJcbiAgICBjb2xvcjogIzAwNDlmMjtcclxuICB9XHJcbn1cclxuXHJcbi5ncm91cC1wcmljZSB7XHJcbiAgcGFkZGluZzogMjBweCAwO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMjIyO1xyXG4gIC5jYXJ0LXRvdGFsLXByb2R1Y3QtcHJpY2Uge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBzcGFuIHtcclxuICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgIH1cclxuICB9XHJcbiAgLmNhcnQtdG90YWwtLXNoaXBwaW5nIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBzcGFuIHtcclxuICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5jYXJ0LXRvdGFsLXByaWNlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBwYWRkaW5nOiAzMHB4IDA7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxuICBmb250LXdlaWdodDogOTAwO1xyXG4gIGNvbG9yOiAjMjIyO1xyXG59XHJcblxyXG4uYnRuLWNoZWNrb3V0IHtcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gIGJhY2tncm91bmQ6ICM0MjQyNDI7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMGQ3YTUyO1xyXG4gIH1cclxufVxyXG5cclxuLmNhcnQtY29udGVudCB7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgd2lkdGg6IDcwJTtcclxufVxyXG5cclxuLmNhcnQtdGl0bGUge1xyXG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbn1cclxuXHJcbi5pbWcge1xyXG4gIC8vIG1heC13aWR0aDogNTBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi5jYXJ0LW92ZXJ2aWV3LWhlYWRlciB7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlOWU5ZTk7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlOWU5ZTk7XHJcbn1cclxuXHJcbi5wcm9kdWN0LWl0ZW0ge1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG59XHJcblxyXG4uYnRuLWRlbCB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICAmOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjNzhiMTQ0O1xyXG4gIH1cclxufVxyXG5cclxuaW5wdXRbdHlwZT1cIm51bWJlclwiXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbixcclxuaW5wdXRbdHlwZT1cIm51bWJlclwiXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiB7XHJcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lOyAvLyBZZWFoLCB5ZWFoIGV2ZXJ5Ym9keSB3cml0ZSBhYm91dCBpdFxyXG59XHJcblxyXG5pbnB1dFt0eXBlPVwibnVtYmVyXCJdLFxyXG5pbnB1dFt0eXBlPVwibnVtYmVyXCJdOmhvdmVyLFxyXG5pbnB1dFt0eXBlPVwibnVtYmVyXCJdOmZvY3VzIHtcclxuICBhcHBlYXJhbmNlOiBub25lO1xyXG4gIC1tb3otYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xyXG59XHJcblxyXG4uaW5wdXQtZ3JvdXAge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAvLyBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgaW5wdXQge1xyXG4gICAgbWF4LXdpZHRoOiA1MHB4O1xyXG4gICAgY29sb3I6ICM0NDQ7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZWJlYmViO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgfVxyXG4gIGJ1dHRvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZWJlYmViO1xyXG4gICAgY29sb3I6ICM5ODk4OTg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG5cclxuICAuYnRuLWRlYyB7XHJcbiAgICBsZWZ0OiAzMHB4O1xyXG4gIH1cclxuICAuYnRuLWluYyB7XHJcbiAgICByaWdodDogMjhweDtcclxuICB9XHJcbn1cclxuXHJcbi5idG4tYmFjay10by1zaG9wIHtcclxuICBwYWRkaW5nOiAwIDIwcHg7XHJcbiAgbWFyZ2luOiAzMHB4IDA7XHJcbiAgYmFja2dyb3VuZDogI2VlZTtcclxuICBjb2xvcjogIzIyMjtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGhlaWdodDogNTBweDtcclxuICBsaW5lLWhlaWdodDogNTBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcclxuICAmOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICMwZDdhNTI7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICB9XHJcbn1cclxuXHJcbi5wcm9kdWN0LXRpdGxlIHtcclxuICAvLyB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XHJcbiAgLy8gd29yZC13cmFwOmJyZWFrLXdvcmQ7XHJcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ucHJvZHVjdC1tZWFzdXJlLXFhbnRpdHkge1xyXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgZm9udC1zaXplOiAxMXB4O1xyXG4gIGNvbG9yOiAjOTA5MDkwO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 3646:
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/cart.service */ 910);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _cart_page_prewiev_cart_page_prewiev_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../cart-page-prewiev/cart-page-prewiev.component */ 4353);






function HeaderComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 13)(1, "app-cart-page-prewiev", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mouseleave", function HeaderComponent_div_19_Template_app_cart_page_prewiev_mouseleave_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.showCartPreview = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
const _c0 = function () {
  return ["/"];
};
const _c1 = function () {
  return {
    exact: true
  };
};
const _c2 = function () {
  return ["/products-collection"];
};
const _c3 = function () {
  return ["/cart"];
};
class HeaderComponent {
  constructor(cartService) {
    this.cartService = cartService;
    this.productCount = 0;
    this.showCartPreview = false;
  }
  ngOnInit() {
    this.cartProduct = this.cartService.cartProducts;
    this.productCountSubscription = this.cartService.getProductCountObservable().subscribe(count => {
      this.productCount = count;
    });
  }
  ngOnDestroy() {
    this.productCountSubscription.unsubscribe();
  }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
  return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_0__.CartService));
};
HeaderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: HeaderComponent,
  selectors: [["app-header"]],
  decls: 20,
  vars: 12,
  consts: [[1, "header"], [1, "container"], [1, "header-wrapper"], [1, "icon-logo"], [3, "routerLink"], ["src", "../../../assets/images/logo.png", "alt", "logo"], [1, "center-menu"], ["routerLinkActive", "active", 3, "routerLink", "routerLinkActiveOptions"], ["routerLinkActive", "active", 3, "routerLink"], [1, "right-menu", 3, "mouseenter"], ["fontIcon", "shopping_cart"], [1, "cart-products-count"], ["class", "cart-prewiev", 4, "ngIf"], [1, "cart-prewiev"], [3, "mouseleave"]],
  template: function HeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "img", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "nav", 6)(7, "ul")(8, "li")(9, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "\u0413\u043B\u0430\u0432\u043D\u0430\u044F");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "li")(12, "a", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "\u041D\u0430\u0448\u0438 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u044B");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mouseenter", function HeaderComponent_Template_div_mouseenter_14_listener() {
        return ctx.showCartPreview =  true && ctx.cartProduct.length > 0;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "mat-icon", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, HeaderComponent_div_19_Template, 2, 0, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](7, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](8, _c0))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](9, _c1));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](10, _c2));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](11, _c3));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.productCount);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showCartPreview);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkActive, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon, _cart_page_prewiev_cart_page_prewiev_component__WEBPACK_IMPORTED_MODULE_1__.CartPagePrewievComponent],
  styles: [".header[_ngcontent-%COMP%] {\n  background: #0d7a52;\n}\n\n.header-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.center-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  padding: 15px;\n  margin: 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.center-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n}\n.center-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 13px;\n  padding: 15.5px 10px;\n  color: #fff;\n  font-weight: 600;\n}\n.center-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #78b144;\n}\n.center-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  color: #78b144;\n}\n\n.right-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n.right-menu[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.cart-products-count[_ngcontent-%COMP%] {\n  position: absolute;\n  padding: 3px 6px;\n  background-color: #78b144;\n  border-radius: 68%;\n  font-size: 11px;\n  line-height: normal;\n  top: 2px;\n  right: -9px;\n}\n\n.cart-prewiev[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 40px;\n  right: 0;\n  width: 300px;\n  min-height: 100%;\n  z-index: 100;\n  background: #fff;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBR0U7RUFDRSxhQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBQUo7QUFFRTtFQUNFLHlCQUFBO0FBQUo7QUFFSTtFQUNFLGVBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQUFOO0FBQ007RUFDRSxjQUFBO0FBQ1I7QUFFSTtFQUNFLGNBQUE7QUFBTjs7QUFNRTtFQUNFLFdBQUE7QUFISjs7QUFPQTtFQUNFLGtCQUFBO0FBSkY7O0FBT0E7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0FBSkY7O0FBT0E7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBSkYiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyIHtcclxuICBiYWNrZ3JvdW5kOiAjMGQ3YTUyO1xyXG59XHJcblxyXG4uaGVhZGVyLXdyYXBwZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jZW50ZXItbWVudSB7XHJcbiAgdWwge1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuICBsaSB7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5cclxuICAgIGEge1xyXG4gICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgIHBhZGRpbmc6IDE1LjVweCAxMHB4O1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6ICM3OGIxNDQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGEuYWN0aXZlIHtcclxuICAgICAgY29sb3I6ICM3OGIxNDQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ucmlnaHQtbWVudSB7XHJcbiAgYSB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICB9XHJcbn1cclxuXHJcbi5yaWdodC1tZW51IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5jYXJ0LXByb2R1Y3RzLWNvdW50IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcGFkZGluZzogM3B4IDZweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzhiMTQ0O1xyXG4gIGJvcmRlci1yYWRpdXM6IDY4JTtcclxuICBmb250LXNpemU6IDExcHg7XHJcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICB0b3A6IDJweDtcclxuICByaWdodDogLTlweDtcclxufVxyXG5cclxuLmNhcnQtcHJld2lldiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNDBweDtcclxuICByaWdodDogMDtcclxuICB3aWR0aDogMzAwcHg7XHJcbiAgbWluLWhlaWdodDogMTAwJTtcclxuICB6LWluZGV4OiAxMDA7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 5079:
/*!**************************************************!*\
  !*** ./src/app/home-page/home-page.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageComponent": () => (/* binding */ HomePageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/products.service */ 9531);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-pagination */ 2302);
/* harmony import */ var _product_page_product_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../product-page/product-page.component */ 2170);
/* harmony import */ var _pipes_search_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pipes/search.pipe */ 2080);
/* harmony import */ var _pipes_sort_of_category_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pipes/sort-of-category.pipe */ 1086);









function HomePageComponent_div_32_app_product_page_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-product-page", 16);
  }
  if (rf & 2) {
    const product_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("product", product_r6);
  }
}
const _c0 = function (a1) {
  return {
    itemsPerPage: 8,
    currentPage: a1
  };
};
function HomePageComponent_div_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, HomePageComponent_div_32_app_product_page_1_Template, 1, 1, "app-product-page", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "paginate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "sortOfCategory");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const products_r4 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](2, 1, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](3, 4, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](4, 7, products_r4, ctx_r0.productName), ctx_r0.productsService.category), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](10, _c0, ctx_r0.p)));
  }
}
function HomePageComponent_pagination_controls_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "pagination-controls", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("pageChange", function HomePageComponent_pagination_controls_34_Template_pagination_controls_pageChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r8.p = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function HomePageComponent_ng_template_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](0, "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u043E\u0432...");
  }
}
class HomePageComponent {
  constructor(productsService, router) {
    this.productsService = productsService;
    this.router = router;
    this.category = 'All';
    this.p = 1;
    this.collection = this.products$;
  }
  ngOnInit() {
    this.products$ = this.productsService.getAll();
    this.productsService.setCategory(this.category); //При переключении страницы, чтобы возвращалось в категорию All
  }

  setCat(category) {
    this.category = category;
    this.productsService.setCategory(this.category);
    this.p = 1;
  }
}
HomePageComponent.ɵfac = function HomePageComponent_Factory(t) {
  return new (t || HomePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_products_service__WEBPACK_IMPORTED_MODULE_0__.ProductsService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router));
};
HomePageComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: HomePageComponent,
  selectors: [["app-home-page"]],
  decls: 39,
  vars: 16,
  consts: [[1, "container"], [1, "category-list"], [3, "click"], [1, "img-cate"], ["src", "../../assets/images/icons/all.jpeg", "alt", "all"], [1, "title-cate"], ["src", "../../assets/images/icons/fru.jpg", "alt", "Fruits"], ["src", "../../assets/images/icons/veg.jpg", "alt", "Vegetable"], ["src", "../../assets/images/icons/jus.jpg", "alt", "Juices"], [1, "search-input-wrapper"], ["type", "text", "placeholder", "\u041D\u0430\u0439\u0442\u0438 \u043F\u0440\u043E\u0434\u0443\u043A\u0442...", 1, "search-input", 3, "ngModel", "ngModelChange"], ["class", "products-list", 4, "ngIf", "ngIfElse"], ["class", "pagination", 3, "pageChange", 4, "ngIf"], ["loading", ""], [1, "products-list"], ["class", "producst-list--item", 3, "product", 4, "ngFor", "ngForOf"], [1, "producst-list--item", 3, "product"], [1, "pagination", 3, "pageChange"]],
  template: function HomePageComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "\u041E\u0442\u043A\u0440\u043E\u0439\u0442\u0435 \u0434\u043B\u044F \u0441\u0435\u0431\u044F \u043D\u0430\u0448\u0438 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u044B");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "\u0422\u043E\u043B\u044C\u043A\u043E \u0441\u0432\u0435\u0436\u0438\u0435 \u0438 \u043D\u0430\u0442\u0443\u0440\u0430\u043B\u044C\u043D\u044B\u0435 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u044B !");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 0)(5, "ul", 1)(6, "li")(7, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HomePageComponent_Template_a_click_7_listener() {
        return ctx.setCat("All");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "img", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "\u0412\u0441\u0435 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u044B");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "li")(13, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HomePageComponent_Template_a_click_13_listener() {
        return ctx.setCat("Fruits");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "img", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "\u0424\u0440\u0443\u043A\u0442\u044B");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "li")(19, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HomePageComponent_Template_a_click_19_listener() {
        return ctx.setCat("Vegetable");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](21, "img", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "\u041E\u0432\u043E\u0449\u0438");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "li")(25, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HomePageComponent_Template_a_click_25_listener() {
        return ctx.setCat("Juices");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](27, "img", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, "\u0421\u043E\u043A\u0438");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "div", 9)(31, "input", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function HomePageComponent_Template_input_ngModelChange_31_listener($event) {
        return ctx.productName = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](32, HomePageComponent_div_32_Template, 5, 12, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](33, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](34, HomePageComponent_pagination_controls_34_Template, 1, 0, "pagination-controls", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](35, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](36, HomePageComponent_ng_template_36_Template, 1, 0, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](38, "router-outlet");
    }
    if (rf & 2) {
      const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](37);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("active", !ctx.category || ctx.category == "All");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("active", ctx.category == "Fruits");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("active", ctx.category == "Vegetable");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("active", ctx.category == "Juices");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.productName);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](33, 12, ctx.products$))("ngIfElse", _r2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](35, 14, ctx.products$));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterOutlet, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, ngx_pagination__WEBPACK_IMPORTED_MODULE_8__.PaginationControlsComponent, _product_page_product_page_component__WEBPACK_IMPORTED_MODULE_1__.ProductPageComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.AsyncPipe, _pipes_search_pipe__WEBPACK_IMPORTED_MODULE_2__.SearchPipe, _pipes_sort_of_category_pipe__WEBPACK_IMPORTED_MODULE_3__.SortOfCategoryPipe, ngx_pagination__WEBPACK_IMPORTED_MODULE_8__.PaginatePipe],
  styles: [".search-input-wrapper[_ngcontent-%COMP%] {\n  margin: 20px 0;\n  text-align: right;\n}\n\n.search-input[_ngcontent-%COMP%] {\n  width: 300px;\n  padding: 5px;\n  border: none;\n}\n\n.search-input[_ngcontent-%COMP%]:focus {\n  outline-color: darkgreen;\n}\n\nh1[_ngcontent-%COMP%] {\n  font-family: Poppins, sans-serif;\n  text-align: center;\n  font-weight: 700;\n  color: #222;\n  margin-top: 40px;\n}\n\np[_ngcontent-%COMP%] {\n  font-family: Poppins, sans-serif;\n  color: #666;\n  text-align: center;\n  font-weight: 400;\n}\n\n.products-list[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 20px;\n}\n\n.producst-list--item[_ngcontent-%COMP%] {\n  position: relative;\n  border: 1px solid #eaeaea;\n  padding: 1rem;\n  text-align: center;\n  border-radius: 8px;\n  background: #fff;\n  flex-basis: calc(25% - 20px);\n}\n\n.producst-list--item[_ngcontent-%COMP%]:hover {\n  border: none;\n  box-shadow: 5px 6px 15px 0 rgba(0, 0, 0, 0.1);\n  border: 1px solid transparent;\n}\n\n.category-list[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 60px;\n  border-bottom: 1px solid #eee;\n  padding-left: 0;\n}\n.category-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  text-align: center;\n  position: relative;\n  filter: grayscale(1);\n  cursor: pointer;\n  padding: 5px 0 15px 0;\n}\n.category-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .title-cate[_ngcontent-%COMP%] {\n  color: #666;\n  padding-top: 13px;\n  font-family: \"Poppins\", sans-serif;\n}\n.category-list[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%] {\n  filter: grayscale(0);\n}\n.category-list[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   .title-cate[_ngcontent-%COMP%] {\n  color: #78b144;\n}\n.category-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  filter: grayscale(0);\n}\n.category-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   .title-cate[_ngcontent-%COMP%] {\n  color: #78b144;\n}\n.category-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover::after {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 3px;\n  background: #78b144;\n  left: 0;\n  bottom: -2px;\n}\n.category-list[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 3px;\n  background: #78b144;\n  left: 0;\n  bottom: -2px;\n}\n\n.img-cate[_ngcontent-%COMP%] {\n  min-height: 36px;\n}\n.img-cate[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  vertical-align: middle;\n  max-width: 32px;\n}\n\n.pagination[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.pagination[_ngcontent-%COMP%]     .ngx-pagination li.ng-star-inserted {\n  margin-right: 10px;\n}\n\n.pagination[_ngcontent-%COMP%]     .ngx-pagination a {\n  border-radius: 5px;\n}\n\n.pagination[_ngcontent-%COMP%]     .ngx-pagination .current {\n  background: #0d7a52;\n  border-radius: 5px;\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaG9tZS1wYWdlL2hvbWUtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUNBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBRUY7O0FBQ0E7RUFDRSx3QkFBQTtBQUVGOztBQUNBO0VBQ0UsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBRUY7O0FBQ0E7RUFDRSxnQ0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBRUY7O0FBQUE7RUFDRSxhQUFBO0VBRUEsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtBQUVGOztBQUNBO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtFQUVBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtBQUNGOztBQUNBO0VBQ0UsWUFBQTtFQUNBLDZDQUFBO0VBQ0EsNkJBQUE7QUFFRjs7QUFDQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsU0FBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtBQUVGO0FBQUU7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7QUFFSjtBQURJO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0NBQUE7QUFHTjtBQURJO0VBQ0Usb0JBQUE7QUFHTjtBQUZNO0VBQ0UsY0FBQTtBQUlSO0FBREk7RUFDRSxvQkFBQTtBQUdOO0FBRk07RUFDRSxjQUFBO0FBSVI7QUFESTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtBQUdOO0FBQUk7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7QUFFTjs7QUFFQTtFQUNFLGdCQUFBO0FBQ0Y7QUFBRTtFQUNFLHNCQUFBO0VBQ0EsZUFBQTtBQUVKOztBQUVBO0VBQ0Usa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VhcmNoLWlucHV0LXdyYXBwZXIge1xyXG4gIG1hcmdpbjogMjBweCAwO1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcbi5zZWFyY2gtaW5wdXQge1xyXG4gIHdpZHRoOiAzMDBweDtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4uc2VhcmNoLWlucHV0OmZvY3VzIHtcclxuICBvdXRsaW5lLWNvbG9yOiBkYXJrZ3JlZW47XHJcbn1cclxuXHJcbmgxIHtcclxuICBmb250LWZhbWlseTogUG9wcGlucywgc2Fucy1zZXJpZjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBjb2xvcjogIzIyMjtcclxuICBtYXJnaW4tdG9wOiA0MHB4O1xyXG59XHJcblxyXG5wIHtcclxuICBmb250LWZhbWlseTogUG9wcGlucywgc2Fucy1zZXJpZjtcclxuICBjb2xvcjogIzY2NjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG4ucHJvZHVjdHMtbGlzdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICAvL2p1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBnYXA6IDIwcHg7XHJcbn1cclxuXHJcbi5wcm9kdWNzdC1saXN0LS1pdGVtIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2VhZWFlYTtcclxuICAvL21heC13aWR0aDogMjMlO1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGZsZXgtYmFzaXM6IGNhbGMoMjUlIC0gMjBweCk7XHJcbn1cclxuLnByb2R1Y3N0LWxpc3QtLWl0ZW06aG92ZXIge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3gtc2hhZG93OiA1cHggNnB4IDE1cHggMCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5jYXRlZ29yeS1saXN0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZ2FwOiA2MHB4O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlO1xyXG4gIHBhZGRpbmctbGVmdDogMDtcclxuXHJcbiAgbGkge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZmlsdGVyOiBncmF5c2NhbGUoMSk7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBwYWRkaW5nOiA1cHggMCAxNXB4IDA7XHJcbiAgICAudGl0bGUtY2F0ZSB7XHJcbiAgICAgIGNvbG9yOiAjNjY2O1xyXG4gICAgICBwYWRkaW5nLXRvcDogMTNweDtcclxuICAgICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgfVxyXG4gICAgJi5hY3RpdmUge1xyXG4gICAgICBmaWx0ZXI6IGdyYXlzY2FsZSgwKTtcclxuICAgICAgLnRpdGxlLWNhdGUge1xyXG4gICAgICAgIGNvbG9yOiAjNzhiMTQ0O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgZmlsdGVyOiBncmF5c2NhbGUoMCk7XHJcbiAgICAgIC50aXRsZS1jYXRlIHtcclxuICAgICAgICBjb2xvcjogIzc4YjE0NDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJjpob3Zlcjo6YWZ0ZXIge1xyXG4gICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDNweDtcclxuICAgICAgYmFja2dyb3VuZDogIzc4YjE0NDtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgYm90dG9tOiAtMnB4O1xyXG4gICAgfVxyXG5cclxuICAgICYuYWN0aXZlOjphZnRlciB7XHJcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogM3B4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjNzhiMTQ0O1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICBib3R0b206IC0ycHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi5pbWctY2F0ZSB7XHJcbiAgbWluLWhlaWdodDogMzZweDtcclxuICBpbWcge1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIG1heC13aWR0aDogMzJweDtcclxuICB9XHJcbn1cclxuXHJcbi5wYWdpbmF0aW9uIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5wYWdpbmF0aW9uIDo6bmctZGVlcCAubmd4LXBhZ2luYXRpb24gbGkubmctc3Rhci1pbnNlcnRlZCB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4ucGFnaW5hdGlvbiA6Om5nLWRlZXAgLm5neC1wYWdpbmF0aW9uIGEge1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuLnBhZ2luYXRpb24gOjpuZy1kZWVwIC5uZ3gtcGFnaW5hdGlvbiAuY3VycmVudCB7XHJcbiAgYmFja2dyb3VuZDogIzBkN2E1MjtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 5503:
/*!***************************************!*\
  !*** ./src/app/pipes/pipes.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PipesModule": () => (/* binding */ PipesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _search_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search.pipe */ 2080);
/* harmony import */ var _sort_of_category_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sort-of-category.pipe */ 1086);
/* harmony import */ var _sort_of_order_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sort-of-order.pipe */ 9422);
/* harmony import */ var _sort_of_category_product_collection_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sort-of-category-product-collection.pipe */ 7699);
/* harmony import */ var _sort_of_measure_product_collection_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sort-of-measure-product-collection.pipe */ 1881);
/* harmony import */ var _sort_of_price_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sort-of-price.pipe */ 7611);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);








class PipesModule {}
PipesModule.ɵfac = function PipesModule_Factory(t) {
  return new (t || PipesModule)();
};
PipesModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
  type: PipesModule
});
PipesModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](PipesModule, {
    declarations: [_search_pipe__WEBPACK_IMPORTED_MODULE_0__.SearchPipe, _sort_of_category_pipe__WEBPACK_IMPORTED_MODULE_1__.SortOfCategoryPipe, _sort_of_order_pipe__WEBPACK_IMPORTED_MODULE_2__.SortOfOrder, _sort_of_category_product_collection_pipe__WEBPACK_IMPORTED_MODULE_3__.SortOfCategoryProductCollectionPipe, _sort_of_measure_product_collection_pipe__WEBPACK_IMPORTED_MODULE_4__.SortOfMeasureProductCollectionPipe, _sort_of_price_pipe__WEBPACK_IMPORTED_MODULE_5__.SortOfPricePipe],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule],
    exports: [_search_pipe__WEBPACK_IMPORTED_MODULE_0__.SearchPipe, _sort_of_category_pipe__WEBPACK_IMPORTED_MODULE_1__.SortOfCategoryPipe, _sort_of_order_pipe__WEBPACK_IMPORTED_MODULE_2__.SortOfOrder, _sort_of_category_product_collection_pipe__WEBPACK_IMPORTED_MODULE_3__.SortOfCategoryProductCollectionPipe, _sort_of_measure_product_collection_pipe__WEBPACK_IMPORTED_MODULE_4__.SortOfMeasureProductCollectionPipe, _sort_of_price_pipe__WEBPACK_IMPORTED_MODULE_5__.SortOfPricePipe]
  });
})();

/***/ }),

/***/ 2080:
/*!**************************************!*\
  !*** ./src/app/pipes/search.pipe.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchPipe": () => (/* binding */ SearchPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class SearchPipe {
  transform(products, productName = '') {
    if (!productName.trim()) {
      return products;
    }
    return products.filter(product => {
      return product.title.toLocaleLowerCase().includes(productName.trim().toLocaleLowerCase());
    });
  }
}
SearchPipe.ɵfac = function SearchPipe_Factory(t) {
  return new (t || SearchPipe)();
};
SearchPipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
  name: "search",
  type: SearchPipe,
  pure: true
});

/***/ }),

/***/ 7699:
/*!*******************************************************************!*\
  !*** ./src/app/pipes/sort-of-category-product-collection.pipe.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SortOfCategoryProductCollectionPipe": () => (/* binding */ SortOfCategoryProductCollectionPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class SortOfCategoryProductCollectionPipe {
  transform(products, categoryFilters) {
    let result = [];
    if (!categoryFilters || categoryFilters.length === 0) {
      return products;
    } else {
      result = products.filter(product => categoryFilters.includes(product.category));
    }
    return result;
  }
}
SortOfCategoryProductCollectionPipe.ɵfac = function SortOfCategoryProductCollectionPipe_Factory(t) {
  return new (t || SortOfCategoryProductCollectionPipe)();
};
SortOfCategoryProductCollectionPipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
  name: "sortOfCategoryProductCollection",
  type: SortOfCategoryProductCollectionPipe,
  pure: true
});

/***/ }),

/***/ 1086:
/*!************************************************!*\
  !*** ./src/app/pipes/sort-of-category.pipe.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SortOfCategoryPipe": () => (/* binding */ SortOfCategoryPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class SortOfCategoryPipe {
  transform(products, category = '') {
    if (!category || category === 'All') {
      return products;
    }
    return products.filter(product => {
      return product.category == category;
    });
  }
}
SortOfCategoryPipe.ɵfac = function SortOfCategoryPipe_Factory(t) {
  return new (t || SortOfCategoryPipe)();
};
SortOfCategoryPipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
  name: "sortOfCategory",
  type: SortOfCategoryPipe,
  pure: true
});

/***/ }),

/***/ 1881:
/*!******************************************************************!*\
  !*** ./src/app/pipes/sort-of-measure-product-collection.pipe.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SortOfMeasureProductCollectionPipe": () => (/* binding */ SortOfMeasureProductCollectionPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class SortOfMeasureProductCollectionPipe {
  transform(products, measureFilters) {
    let result = [];
    if (!measureFilters || measureFilters.length === 0) {
      return products;
    } else {
      result = products.filter(product => {
        // Check if `product.options` exists and has at least one item
        return product.options && product.options.length > 0 && product.options.some(option => measureFilters.includes(option.measureQantity + option.measureValue));
      });
    }
    console.log(result);
    return result;
  }
}
SortOfMeasureProductCollectionPipe.ɵfac = function SortOfMeasureProductCollectionPipe_Factory(t) {
  return new (t || SortOfMeasureProductCollectionPipe)();
};
SortOfMeasureProductCollectionPipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
  name: "sortOfMeasureProductCollection",
  type: SortOfMeasureProductCollectionPipe,
  pure: true
});

/***/ }),

/***/ 9422:
/*!*********************************************!*\
  !*** ./src/app/pipes/sort-of-order.pipe.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SortOfOrder": () => (/* binding */ SortOfOrder)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class SortOfOrder {
  transform(products, selectedOption) {
    if (products && selectedOption && products.length > 0) {
      switch (selectedOption) {
        case 'titleAsc':
          products.sort((prd1, prd2) => prd1.title < prd2.title ? -1 : 1);
          break;
        case 'titleDesc':
          products.sort((prd1, prd2) => prd1.title > prd2.title ? -1 : 1);
          break;
        case 'priceAsc':
          products.sort((prd1, prd2) => prd1.price < prd2.price ? -1 : 1);
          break;
        case 'priceDesc':
          products.sort((prd1, prd2) => prd1.price > prd2.price ? -1 : 1);
          break;
        default:
          products.sort((prd1, prd2) => prd1.id < prd2.id ? -1 : 1);
      }
    }
    return products;
  }
}
SortOfOrder.ɵfac = function SortOfOrder_Factory(t) {
  return new (t || SortOfOrder)();
};
SortOfOrder.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
  name: "sortOfOrder",
  type: SortOfOrder,
  pure: true
});

/***/ }),

/***/ 7611:
/*!*********************************************!*\
  !*** ./src/app/pipes/sort-of-price.pipe.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SortOfPricePipe": () => (/* binding */ SortOfPricePipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class SortOfPricePipe {
  transform(products, minPrice = 0, maxPrice = 0) {
    return products.filter(product => {
      return product.price <= maxPrice && product.price >= minPrice;
    });
  }
}
SortOfPricePipe.ɵfac = function SortOfPricePipe_Factory(t) {
  return new (t || SortOfPricePipe)();
};
SortOfPricePipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
  name: "sortOfPrice",
  type: SortOfPricePipe,
  pure: true
});

/***/ }),

/***/ 2170:
/*!********************************************************!*\
  !*** ./src/app/product-page/product-page.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductPageComponent": () => (/* binding */ ProductPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/animations */ 4851);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _shared_dialog_of_product_dialog_of_product_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/dialog-of-product/dialog-of-product.component */ 4997);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/cart.service */ 910);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-quill */ 3115);










function ProductPageComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 15)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("-", ctx_r0.discountProcent, "%");
  }
}
function ProductPageComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 16)(1, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProductPageComponent_div_4_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r8.openDialog(ctx_r8.product));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button")(5, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "favorite_border");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@btnOne", ctx_r1.btnState);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@btnTwo", ctx_r1.btnState);
  }
}
function ProductPageComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, +ctx_r2.product.price * +ctx_r2.product.discount), " ");
  }
}
function ProductPageComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r3.product.description);
  }
}
function ProductPageComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProductPageComponent_div_16_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r10.openDialog(ctx_r10.product));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "mat-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u043E\u043F\u0446\u0438\u0438");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r4.fullView ? "active" : "");
  }
}
function ProductPageComponent_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProductPageComponent_ng_template_17_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r12.onAddToCart(ctx_r12.product));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "mat-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0432 \u043A\u043E\u0440\u0437\u0438\u043D\u0443");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r6.fullView ? "active" : "");
  }
}
function ProductPageComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 23)(1, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProductPageComponent_div_19_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r15);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r14.openDialog(ctx_r14.product));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button")(5, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "favorite_border");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
}
const _c0 = function (a1) {
  return ["/product", a1];
};
class ProductPageComponent {
  animate() {
    this.btnState = this.btnState === 'end' ? 'start' : 'end';
  }
  constructor(cartService, dialog) {
    this.cartService = cartService;
    this.dialog = dialog;
    this.btnState = 'start';
    this.discountProcent = 0;
    this.quantity = 1;
  }
  ngOnInit() {
    if (this.product && this.product.discount) {
      this.discountProcent = Math.trunc(+this.product.discount * 100 - 100);
    }
  }
  onAddToCart(product) {
    product.quantity = this.quantity;
    this.cartService.addProductToCart(product);
    this.quantity = 1;
  }
  openDialog(product) {
    const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogConfig();
    dialogConfig.data = product; // передаем product в data
    this.dialog.open(_shared_dialog_of_product_dialog_of_product_component__WEBPACK_IMPORTED_MODULE_0__.DialogOfProductComponent, dialogConfig);
  }
}
ProductPageComponent.ɵfac = function ProductPageComponent_Factory(t) {
  return new (t || ProductPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_cart_service__WEBPACK_IMPORTED_MODULE_1__.CartService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialog));
};
ProductPageComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: ProductPageComponent,
  selectors: [["app-product-page"]],
  inputs: {
    product: "product",
    fullView: "fullView"
  },
  decls: 20,
  vars: 20,
  consts: [["class", "bage", 4, "ngIf"], [1, "image", 3, "ngClass", "mouseenter", "mouseleave"], [3, "routerLink"], ["styles", "padding: 0", 3, "content"], ["class", "btn-group", 4, "ngIf"], [1, "right-side-content", 3, "ngClass"], [1, "product-title"], [1, "price"], [1, "product-price"], ["class", "regular-price", 4, "ngIf"], ["class", "description", 4, "ngIf"], [1, "btn-group-full-view"], [4, "ngIf", "ngIfElse"], ["whithoutOptions", ""], ["class", "btn-group-param", 4, "ngIf"], [1, "bage"], [1, "btn-group"], [3, "click"], [1, "regular-price"], [1, "description"], [1, "btn-add-cart", 3, "ngClass", "click"], ["fontIcon", "done"], ["fontIcon", "local_mall"], [1, "btn-group-param"]],
  template: function ProductPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ProductPageComponent_div_0_Template, 3, 1, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mouseenter", function ProductPageComponent_Template_div_mouseenter_1_listener() {
        return ctx.animate();
      })("mouseleave", function ProductPageComponent_Template_div_mouseleave_1_listener() {
        return ctx.animate();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "quill-view-html", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, ProductPageComponent_div_4_Template, 7, 2, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5)(6, "div", 6)(7, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 7)(10, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](12, "currency");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, ProductPageComponent_div_13_Template, 3, 3, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, ProductPageComponent_div_14_Template, 2, 1, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, ProductPageComponent_div_16_Template, 5, 1, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, ProductPageComponent_ng_template_17_Template, 4, 1, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, ProductPageComponent_div_19_Template, 7, 0, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.discountProcent);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx.fullView ? "active" : "");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](16, _c0, ctx.product.id));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("content", ctx.product.image);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.fullView);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx.fullView ? "active" : "");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](18, _c0, ctx.product.id));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.product.title);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](12, 14, ctx.product.price));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.product.discount);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.fullView);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.product.options)("ngIfElse", _r5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.fullView);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon, ngx_quill__WEBPACK_IMPORTED_MODULE_7__.QuillViewHTMLComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.CurrencyPipe],
  styles: [".bage[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  z-index: 2;\n}\n.bage[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  background-color: #e85b40;\n  color: #fff;\n  padding: 5px 15px;\n  border-top-right-radius: 10px;\n  border-bottom-left-radius: 10px;\n  font-size: 11px;\n}\n\na[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.image[_ngcontent-%COMP%] {\n  position: relative;\n}\n.image.active[_ngcontent-%COMP%] {\n  max-width: 261px;\n}\n\n.btn-group[_ngcontent-%COMP%] {\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 5px;\n  width: 100%;\n  bottom: 10px;\n}\n.btn-group[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 100%;\n  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.15);\n  border: none;\n  font-size: 0;\n  width: 40px;\n  height: 40px;\n  color: #bdbdbd;\n  cursor: pointer;\n  transition: all 0.3s linear;\n}\n.btn-group[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  transform: scale(0.7);\n}\n.btn-group[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  background-color: #78b144;\n  transition: all 0.3s linear;\n}\n\n.btn-group-full-view[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n  align-items: center;\n  justify-content: center;\n}\n.btn-group-full-view[_ngcontent-%COMP%]   .btn-group-param[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  background: #fff;\n  border-radius: 100%;\n  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.15);\n  border: none;\n  font-size: 0;\n  width: 40px;\n  height: 40px;\n  color: #bdbdbd;\n  cursor: pointer;\n  transition: all 0.3s linear;\n}\n.btn-group-full-view[_ngcontent-%COMP%]   .btn-group-param[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  transform: scale(0.7);\n}\n.btn-group-full-view[_ngcontent-%COMP%]   .btn-group-param[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  background-color: #78b144;\n  transition: all 0.3s linear;\n}\n\n.right-side-content.active[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: start;\n}\n\n.description[_ngcontent-%COMP%] {\n  text-align: start;\n  margin-bottom: 30px;\n}\n\n.product-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-family: \"Wix Madefor Display\", sans-serif;\n  padding: 10px 0;\n}\n\n.product-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #444;\n  display: inline-block;\n}\n\n.product-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #0d7a52;\n  text-decoration: none;\n}\n\n.price[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.price[_ngcontent-%COMP%]   .product-price[_ngcontent-%COMP%] {\n  display: inline;\n  font-weight: 700;\n  padding: 10px 0;\n  padding-bottom: 20px;\n}\n.price[_ngcontent-%COMP%]   .regular-price[_ngcontent-%COMP%] {\n  display: inline;\n  margin-left: 10px;\n  color: #acacac;\n  text-decoration: line-through;\n  font-weight: 500;\n}\n\n.btn-add-cart[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  text-transform: uppercase;\n  font-size: 12px;\n  font-weight: 900;\n  text-align: center;\n  background-color: #f0f0f0;\n  padding: 10px 30px;\n  border: none;\n  border-radius: 40px;\n  transition: all 0.3s ease-in-out;\n  cursor: pointer;\n  width: 100%;\n}\n.btn-add-cart.active[_ngcontent-%COMP%] {\n  min-width: 230px;\n  max-width: 230px;\n}\n\n.btn-add-cart[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 19px;\n  margin-right: 10px;\n  line-height: 1.3;\n}\n\n.btn-add-cart[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  line-height: 1;\n}\n\n.btn-add-cart[_ngcontent-%COMP%]:hover {\n  background-color: #0d7a52;\n  color: #f0f0f0;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcHJvZHVjdC1wYWdlL3Byb2R1Y3QtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0FBQ0Y7QUFBRTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsNkJBQUE7RUFDQSwrQkFBQTtFQUNBLGVBQUE7QUFFSjs7QUFFQTtFQUNFLGVBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0FBQ0Y7QUFBRTtFQUNFLGdCQUFBO0FBRUo7O0FBQ0E7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBRUY7QUFBRTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5Q0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLDJCQUFBO0FBRUo7QUFESTtFQUNFLHFCQUFBO0FBR047QUFESTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtFQUNBLDJCQUFBO0FBR047O0FBRUE7RUFDRSxhQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFDRjtBQUNJO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUNBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSwyQkFBQTtBQUNOO0FBQU07RUFDRSxxQkFBQTtBQUVSO0FBQU07RUFDRSxXQUFBO0VBQ0EseUJBQUE7RUFDQSwyQkFBQTtBQUVSOztBQUtFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUFGSjs7QUFNQTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7QUFIRjs7QUFNQTtFQUNFLGdCQUFBO0VBQ0EsOENBQUE7RUFDQSxlQUFBO0FBSEY7O0FBTUE7RUFDRSxXQUFBO0VBQ0EscUJBQUE7QUFIRjs7QUFNQTtFQUNFLGNBQUE7RUFDQSxxQkFBQTtBQUhGOztBQU1BO0VBQ0UsbUJBQUE7QUFIRjtBQUlFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0FBRko7QUFJRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0FBRko7O0FBTUE7RUFDRSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGdDQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFIRjtBQUlFO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBQUZKOztBQU1BO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFIRjs7QUFNQTtFQUNFLGNBQUE7QUFIRjs7QUFNQTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtBQUhGIiwic291cmNlc0NvbnRlbnQiOlsiLmJhZ2Uge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDEwcHg7XHJcbiAgbGVmdDogMTBweDtcclxuICB6LWluZGV4OiAyO1xyXG4gIHNwYW4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U4NWI0MDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgcGFkZGluZzogNXB4IDE1cHg7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgfVxyXG59XHJcblxyXG5hIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5pbWFnZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICYuYWN0aXZlIHtcclxuICAgIG1heC13aWR0aDogMjYxcHg7XHJcbiAgfVxyXG59XHJcbi5idG4tZ3JvdXAge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZ2FwOiA1cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm90dG9tOiAxMHB4O1xyXG5cclxuICBidXR0b24ge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMDtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgY29sb3I6ICNiZGJkYmQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBsaW5lYXI7XHJcbiAgICBtYXQtaWNvbiB7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC43KTtcclxuICAgIH1cclxuICAgICY6aG92ZXIge1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzc4YjE0NDtcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgbGluZWFyO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmJ0bi1ncm91cC1mdWxsLXZpZXcge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ2FwOiAyMHB4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgLmJ0bi1ncm91cC1wYXJhbSB7XHJcbiAgICBidXR0b24ge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgMCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG4gICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgIGZvbnQtc2l6ZTogMDtcclxuICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgY29sb3I6ICNiZGJkYmQ7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgbGluZWFyO1xyXG4gICAgICBtYXQtaWNvbiB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjcpO1xyXG4gICAgICB9XHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM3OGIxNDQ7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgbGluZWFyO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ucmlnaHQtc2lkZS1jb250ZW50IHtcclxuICAmLmFjdGl2ZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcclxuICB9XHJcbn1cclxuXHJcbi5kZXNjcmlwdGlvbiB7XHJcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuLnByb2R1Y3QtdGl0bGUge1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZm9udC1mYW1pbHk6IFwiV2l4IE1hZGVmb3IgRGlzcGxheVwiLCBzYW5zLXNlcmlmO1xyXG4gIHBhZGRpbmc6IDEwcHggMDtcclxufVxyXG5cclxuLnByb2R1Y3QtdGl0bGUgYSB7XHJcbiAgY29sb3I6ICM0NDQ7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4ucHJvZHVjdC10aXRsZSBhOmhvdmVyIHtcclxuICBjb2xvcjogIzBkN2E1MjtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5wcmljZSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAucHJvZHVjdC1wcmljZSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgcGFkZGluZzogMTBweCAwO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgfVxyXG4gIC5yZWd1bGFyLXByaWNlIHtcclxuICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgY29sb3I6ICNhY2FjYWM7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgfVxyXG59XHJcblxyXG4uYnRuLWFkZC1jYXJ0IHtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XHJcbiAgcGFkZGluZzogMTBweCAzMHB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiA0MHB4O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICAmLmFjdGl2ZSB7XHJcbiAgICBtaW4td2lkdGg6IDIzMHB4O1xyXG4gICAgbWF4LXdpZHRoOiAyMzBweDtcclxuICB9XHJcbn1cclxuXHJcbi5idG4tYWRkLWNhcnQgbWF0LWljb24ge1xyXG4gIGZvbnQtc2l6ZTogMTlweDtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDEuMztcclxufVxyXG5cclxuLmJ0bi1hZGQtY2FydCBzcGFuIHtcclxuICBsaW5lLWhlaWdodDogMTtcclxufVxyXG5cclxuLmJ0bi1hZGQtY2FydDpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBkN2E1MjtcclxuICBjb2xvcjogI2YwZjBmMDtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
  data: {
    animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.trigger)('btnOne', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.state)('start', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({
      opacity: 0,
      transform: 'translateY(-40px)'
    })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.state)('end', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({
      opacity: 1,
      transform: 'translateY(0)'
    })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.transition)('start <=> end', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.animate)('0.3s ease-in-out')])]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.trigger)('btnTwo', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.state)('start', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({
      opacity: 0,
      transform: 'translateY(-40px)'
    })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.state)('end', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({
      opacity: 1,
      transform: 'translateY(0)'
    })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.transition)('start <=> end', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.animate)('0.4s ease-in-out')])])]
  }
});

/***/ }),

/***/ 7695:
/*!**********************************************!*\
  !*** ./src/app/product/product.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductComponent": () => (/* binding */ ProductComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 2673);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/products.service */ 9531);
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/cart.service */ 910);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-quill */ 3115);









function ProductComponent_div_0_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 29)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("-", ctx_r2.discountProcent, "%");
  }
}
function ProductComponent_div_0_span_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, ctx_r3.measurePrice));
  }
}
function ProductComponent_div_0_ng_template_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const product_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, product_r1.price));
  }
}
function ProductComponent_div_0_div_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u0415\u0421\u0422\u042C \u041E\u041F\u0426\u0418\u0418!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ProductComponent_div_0_ng_template_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0, "\u041D\u0415\u0422 \u041E\u041F\u0426\u0418\u0419!");
  }
}
function ProductComponent_div_0_li_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li")(1, "div", 30)(2, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ProductComponent_div_0_li_34_Template_input_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r12.measureQantity = $event);
    })("change", function ProductComponent_div_0_li_34_Template_input_change_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13);
      const option_r11 = restoredCtx.$implicit;
      const product_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().ngIf;
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r14.onChange(option_r11, product_r1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const option_r11 = ctx.$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r9.measureQantity)("value", option_r11.measureQantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", option_r11.measureQantity, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](option_r11.measureValue);
  }
}
function ProductComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "\u041D\u0430\u0437\u0430\u0434");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 3)(7, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, ProductComponent_div_0_div_8_Template, 3, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "quill-view-html", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 9)(12, "div", 10)(13, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 11)(16, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 12)(21, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, ProductComponent_div_0_span_24_Template, 3, 3, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](25, ProductComponent_div_0_ng_template_25_Template, 3, 3, "ng-template", null, 15, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](29, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](30, ProductComponent_div_0_div_30_Template, 2, 0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](31, ProductComponent_div_0_ng_template_31_Template, 1, 0, "ng-template", null, 17, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "ul", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](34, ProductComponent_div_0_li_34_Template, 7, 4, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 20)(36, "div", 21)(37, "div", 22)(38, "div")(39, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "\u041A\u043E\u043B-\u0432\u043E:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProductComponent_div_0_Template_button_click_41_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r17);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r16.decreaseQuantity());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ProductComponent_div_0_Template_input_ngModelChange_44_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r17);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r18.quantity = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProductComponent_div_0_Template_button_click_45_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r17);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r19.increaseQuantity());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "div")(49, "button", 27)(50, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, "favorite_border");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, "\u0412 \u0441\u043F\u0438\u0441\u043E\u043A \u0436\u0435\u043B\u0430\u0435\u043C\u043E\u0433\u043E ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "div")(54, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProductComponent_div_0_Template_button_click_54_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r17);
      const product_r1 = restoredCtx.ngIf;
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r20.addProduct(product_r1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, " \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0432 \u043A\u043E\u0440\u0437\u0438\u043D\u0443 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
  }
  if (rf & 2) {
    const product_r1 = ctx.ngIf;
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](26);
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](32);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.discountProcent);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("content", product_r1.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](product_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](product_r1.category === "Fruits" ? "\u0424\u0440\u0443\u043A\u0442\u044B" : product_r1.category === "Vegetable" ? "\u041E\u0432\u043E\u0449\u0438" : product_r1.category === "Juices" ? "\u0421\u043E\u043A\u0438" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](product_r1.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.measurePrice)("ngIfElse", _r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](29, 12, ctx_r0.regularPrice));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", product_r1.options)("ngIfElse", _r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", product_r1.options);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r0.quantity);
  }
}
class ProductComponent {
  constructor(productsService, cartService, route) {
    this.productsService = productsService;
    this.cartService = cartService;
    this.route = route;
    this.quantity = 1;
    this.measurePrice = null;
    this.regularPrice = 0;
    this.discountProcent = 0;
  }
  ngOnInit() {
    this.product$ = this.route.params.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.switchMap)(params => {
      return this.productsService.getById(params['id']);
    }));
    //Таким образом, при получении данных о продукте из сервиса,
    //переменная "selectedOption" будет установлена равной значению
    //первого элемента массива "product.option", а также переменная "price"
    //будет установлена равной цене первого элемента массива "product.option".
    //Это позволит активировать первый инпут по умолчанию и отображать соответствующую цену.
    this.product$.subscribe(product => {
      if (product.options) {
        this.measureQantity = product.options[0].measureQantity;
        this.measurePrice = product.options[0].measurePrice;
        this.selectedOptions = {
          measurePrice: product.options[0].measurePrice,
          measureQantity: product.options[0].measureQantity,
          measureValue: product.options[0].measureValue
        };
        if (this.measurePrice) {
          this.regularPrice = this.measurePrice * product.discount;
        }
        console.log(this.selectedOptions);
      }
      this.regularPrice = product.price * product.discount;
      this.discountProcent = Math.trunc(+product.discount * 100 - 100);
    });
  }
  onChange(option, product) {
    this.measurePrice = option.measurePrice;
    this.selectedOptions = option;
    console.log(this.selectedOptions);
    if (this.measurePrice !== null && product.discount !== undefined) {
      this.regularPrice = this.measurePrice * +product.discount;
    }
  }
  decreaseQuantity() {
    if (this.quantity !== undefined && this.quantity > 1) {
      this.quantity--;
    }
  }
  increaseQuantity() {
    if (this.quantity !== undefined) {
      this.quantity++;
    }
  }
  // Создается новый объект cartProduct, который содержит все свойства продукта,
  // а также выбранную цену this.measurePrice и количество this.quantity.
  // Затем этот объект передается в метод addProductToCart сервиса корзины.
  addProduct(product) {
    const cartProduct = {
      ...product,
      options: this.selectedOptions,
      price: this.measurePrice ? this.measurePrice : product.price,
      quantity: this.quantity
    };
    console.log(cartProduct);
    this.cartService.addProductToCart(cartProduct);
    this.quantity = 1;
  }
}
ProductComponent.ɵfac = function ProductComponent_Factory(t) {
  return new (t || ProductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_products_service__WEBPACK_IMPORTED_MODULE_0__.ProductsService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_cart_service__WEBPACK_IMPORTED_MODULE_1__.CartService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute));
};
ProductComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: ProductComponent,
  selectors: [["app-product"]],
  decls: 2,
  vars: 3,
  consts: [[4, "ngIf"], [1, "product"], [1, "breadcrumb"], [1, "container"], ["routerLink", "/", 1, "btn-back"], [1, "content-wrapper"], ["class", "bage", 4, "ngIf"], [1, "image"], ["styles", "padding: 0", 3, "content"], [1, "content"], [1, "title"], [1, "categories"], [1, "description"], [1, "price"], [4, "ngIf", "ngIfElse"], ["productPrice", ""], [1, "regular-price"], ["nonOption", ""], [1, "option-wrapper"], [4, "ngFor", "ngForOf"], [1, "product-add-to-cart"], [1, "product-quantity"], [1, "input-group"], [1, "input-label"], [1, "btn-dec", 3, "click"], ["type", "number", "oninput", "if(this.value < 1) this.value = 1", 3, "ngModel", "ngModelChange"], [1, "btn-inc", 3, "click"], [1, "addToWishlist"], [1, "btn-add-to-cart", 3, "click"], [1, "bage"], [1, "input-options"], ["type", "radio", 3, "ngModel", "value", "ngModelChange", "change"], [1, "option-quantity"]],
  template: function ProductComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ProductComponent_div_0_Template, 56, 14, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "async");
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 1, ctx.product$));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, ngx_quill__WEBPACK_IMPORTED_MODULE_8__.QuillViewHTMLComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_5__.CurrencyPipe],
  styles: [".breadcrumb[_ngcontent-%COMP%] {\n  background: #ededed;\n  padding: 10px 0;\n  margin-bottom: 80px;\n}\n\n.btn-back[_ngcontent-%COMP%] {\n  padding: 5px 10px;\n  border-radius: 5px;\n  border: none;\n  background-color: #0d7a52;\n  color: #fff;\n  cursor: pointer;\n}\n\n.content-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  gap: 40px;\n}\n\n.bage[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  z-index: 2;\n}\n.bage[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  background-color: #e85b40;\n  color: #fff;\n  padding: 5px 15px;\n  border-top-right-radius: 10px;\n  border-bottom-left-radius: 10px;\n  font-size: 11px;\n}\n\n.image[_ngcontent-%COMP%], .content[_ngcontent-%COMP%] {\n  flex: 1 1 50%;\n}\n\n.content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.categories[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-right: 50px;\n}\n\n.categories[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #666;\n  font-weight: 600;\n  font-size: 12px;\n}\n\n.price[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 3rem;\n  font-weight: 800;\n  color: #0d7a52;\n  line-height: 1;\n  margin-bottom: 40px;\n}\n.price[_ngcontent-%COMP%]   .regular-price[_ngcontent-%COMP%] {\n  margin-left: 40px;\n  font-size: 2rem;\n  color: #acacac;\n  text-decoration: line-through;\n  font-weight: 700;\n}\n\n.description[_ngcontent-%COMP%] {\n  margin: 25px 0;\n  color: #666;\n}\n\n.input-label[_ngcontent-%COMP%] {\n  color: #444;\n  text-transform: uppercase;\n  font-weight: 700;\n  font-size: 10px;\n  margin-bottom: 10px;\n  display: inline-block;\n}\n\n.product-quantity[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  margin-bottom: 40px;\n}\n\n.addToWishlist[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-left: 60px;\n  background-color: #f6f6f6;\n  border: 1px solid #ebebeb;\n  height: 40px;\n  line-height: 37px;\n  padding: 0 25px 0 15px;\n  border-radius: 3px;\n  margin-left: 60px;\n  font-size: 10px;\n  font-weight: 700;\n  color: #666;\n  text-transform: uppercase;\n  cursor: pointer;\n  transition: 0.2s ease-in-out;\n}\n.addToWishlist[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  transform: scale(0.6);\n  color: #0d7a52;\n}\n.addToWishlist[_ngcontent-%COMP%]:hover {\n  background-color: #0d7a52;\n  color: #fff;\n}\n.addToWishlist[_ngcontent-%COMP%]:hover   mat-icon[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\ninput[type=number][_ngcontent-%COMP%]::-webkit-outer-spin-button, input[type=number][_ngcontent-%COMP%]::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n}\n\ninput[type=number][_ngcontent-%COMP%], input[type=number][_ngcontent-%COMP%]:hover, input[type=number][_ngcontent-%COMP%]:focus {\n  -webkit-appearance: none;\n          appearance: none;\n  -moz-appearance: textfield;\n}\n\n.input-group[_ngcontent-%COMP%] {\n  width: 100px;\n  position: relative;\n  max-width: 200px;\n}\n.input-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  max-width: 50px;\n  margin-left: 37px;\n  color: #444;\n  height: 40px;\n  font-size: 14px;\n  border: 1px solid #ebebeb;\n  background-color: #f6f6f6;\n  text-align: center;\n  border-radius: 3px;\n  position: relative;\n  outline: none;\n}\n.input-group[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 40px;\n  border: 1px solid #ebebeb;\n  color: #989898;\n  background-color: #fff;\n  line-height: 1;\n  cursor: pointer;\n}\n.input-group[_ngcontent-%COMP%]   .btn-dec[_ngcontent-%COMP%] {\n  left: 0;\n}\n.input-group[_ngcontent-%COMP%]   .btn-inc[_ngcontent-%COMP%] {\n  right: -24px;\n}\n\n.btn-add-to-cart[_ngcontent-%COMP%] {\n  padding: 0 24px;\n  color: #fff;\n  font-size: 0.7rem;\n  font-weight: 800;\n  height: 50px;\n  line-height: 50px;\n  text-transform: uppercase;\n  font-family: \"Poppins\", sans-serif;\n  border: none;\n  width: 100%;\n  overflow: hidden;\n  border-radius: 50px;\n  background-color: #0d7a52;\n  cursor: pointer;\n  transition: 0.2s ease-in-out;\n}\n.btn-add-to-cart[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  background: #78b144;\n}\n\ninput[type=radio][_ngcontent-%COMP%] {\n  cursor: pointer;\n  -webkit-appearance: none;\n          appearance: none;\n  border: 1px solid #ebebeb;\n  padding: 0 7px;\n  width: 34px;\n  height: 34px;\n  outline: none;\n  border-width: 1px;\n  border-radius: 3px;\n}\n\ninput[type=radio][_ngcontent-%COMP%]:hover {\n  border-color: #000;\n  border-width: 3px;\n}\n\ninput[type=radio][_ngcontent-%COMP%]:checked {\n  border-color: #000;\n  border-width: 3px;\n}\n\n.input-options[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -7px;\n}\n\n.option-quantity[_ngcontent-%COMP%] {\n  font-size: 10px;\n}\n\n.option-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  padding-left: 0;\n  display: flex;\n  gap: 10px;\n}\n.option-wrapper[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcHJvZHVjdC9wcm9kdWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7QUFDRjtBQUFFO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSw2QkFBQTtFQUNBLCtCQUFBO0VBQ0EsZUFBQTtBQUVKOztBQUVBOztFQUVFLGFBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtBQUNGOztBQUNBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUVGOztBQUNBO0VBQ0Usa0NBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FBRUY7QUFERTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0FBR0o7O0FBQ0E7RUFDRSxjQUFBO0VBQ0EsV0FBQTtBQUVGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSw0QkFBQTtBQUNGO0FBQ0U7RUFDRSxxQkFBQTtFQUNBLGNBQUE7QUFDSjtBQUNFO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0FBQ0o7QUFBSTtFQUNFLFdBQUE7QUFFTjs7QUFHQTs7RUFFRSx3QkFBQTtBQUFGOztBQUdBOzs7RUFHRSx3QkFBQTtVQUFBLGdCQUFBO0VBQ0EsMEJBQUE7QUFBRjs7QUFHQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBQUY7QUFFRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FBQUo7QUFFRTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFBSjtBQUdFO0VBQ0UsT0FBQTtBQURKO0FBR0U7RUFDRSxZQUFBO0FBREo7O0FBS0E7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtDQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsNEJBQUE7QUFGRjtBQUdFO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0FBREo7O0FBSUE7RUFDRSxlQUFBO0VBQ0Esd0JBQUE7VUFBQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFERjs7QUFJQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7QUFERjs7QUFHQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7QUFBRjs7QUFJQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtBQURGOztBQUdBO0VBQ0UsZUFBQTtBQUFGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7QUFDRjtBQUFFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUVKIiwic291cmNlc0NvbnRlbnQiOlsiLmJyZWFkY3J1bWIge1xyXG4gIGJhY2tncm91bmQ6ICNlZGVkZWQ7XHJcbiAgcGFkZGluZzogMTBweCAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDgwcHg7XHJcbn1cclxuXHJcbi5idG4tYmFjayB7XHJcbiAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGQ3YTUyO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmNvbnRlbnQtd3JhcHBlciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ2FwOiA0MHB4O1xyXG59XHJcblxyXG4uYmFnZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMTBweDtcclxuICBsZWZ0OiAxMHB4O1xyXG4gIHotaW5kZXg6IDI7XHJcbiAgc3BhbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTg1YjQwO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiA1cHggMTVweDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICB9XHJcbn1cclxuXHJcbi5pbWFnZSxcclxuLmNvbnRlbnQge1xyXG4gIGZsZXg6IDEgMSA1MCU7XHJcbn1cclxuXHJcbi5jb250ZW50IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4uY2F0ZWdvcmllcyBzcGFuIHtcclxuICBtYXJnaW4tcmlnaHQ6IDUwcHg7XHJcbn1cclxuLmNhdGVnb3JpZXMgc21hbGwge1xyXG4gIGNvbG9yOiAjNjY2O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4ucHJpY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDNyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICBjb2xvcjogIzBkN2E1MjtcclxuICBsaW5lLWhlaWdodDogMTtcclxuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gIC5yZWd1bGFyLXByaWNlIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgY29sb3I6ICNhY2FjYWM7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgfVxyXG59XHJcblxyXG4uZGVzY3JpcHRpb24ge1xyXG4gIG1hcmdpbjogMjVweCAwO1xyXG4gIGNvbG9yOiAjNjY2O1xyXG59XHJcblxyXG5cclxuLmlucHV0LWxhYmVsIHtcclxuICBjb2xvcjogIzQ0NDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4ucHJvZHVjdC1xdWFudGl0eSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxufVxyXG5cclxuLmFkZFRvV2lzaGxpc3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tbGVmdDogNjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlYmViZWI7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAzN3B4O1xyXG4gIHBhZGRpbmc6IDAgMjVweCAwIDE1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIG1hcmdpbi1sZWZ0OiA2MHB4O1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGNvbG9yOiAjNjY2O1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XHJcblxyXG4gIG1hdC1pY29uIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC42KTtcclxuICAgIGNvbG9yOiAjMGQ3YTUyO1xyXG4gIH1cclxuICAmOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwZDdhNTI7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIG1hdC1pY29uIHtcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5pbnB1dFt0eXBlPVwibnVtYmVyXCJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uLFxyXG5pbnB1dFt0eXBlPVwibnVtYmVyXCJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uIHtcclxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7IC8vIFllYWgsIHllYWggZXZlcnlib2R5IHdyaXRlIGFib3V0IGl0XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJudW1iZXJcIl0sXHJcbmlucHV0W3R5cGU9XCJudW1iZXJcIl06aG92ZXIsXHJcbmlucHV0W3R5cGU9XCJudW1iZXJcIl06Zm9jdXMge1xyXG4gIGFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgLW1vei1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XHJcbn1cclxuXHJcbi5pbnB1dC1ncm91cCB7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXgtd2lkdGg6IDIwMHB4O1xyXG5cclxuICBpbnB1dCB7XHJcbiAgICBtYXgtd2lkdGg6IDUwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMzdweDtcclxuICAgIGNvbG9yOiAjNDQ0O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ViZWJlYjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gIH1cclxuICBidXR0b24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ViZWJlYjtcclxuICAgIGNvbG9yOiAjOTg5ODk4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuXHJcbiAgLmJ0bi1kZWMge1xyXG4gICAgbGVmdDogMDtcclxuICB9XHJcbiAgLmJ0bi1pbmMge1xyXG4gICAgcmlnaHQ6IC0yNHB4O1xyXG4gIH1cclxufVxyXG5cclxuLmJ0bi1hZGQtdG8tY2FydCB7XHJcbiAgcGFkZGluZzogMCAyNHB4O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGZvbnQtc2l6ZTogMC43cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiA1MHB4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBkN2E1MjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcclxuICAmOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZDogIzc4YjE0NDtcclxuICB9XHJcbn1cclxuaW5wdXRbdHlwZT1cInJhZGlvXCJdIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYXBwZWFyYW5jZTogbm9uZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZWJlYmViO1xyXG4gIHBhZGRpbmc6IDAgN3B4O1xyXG4gIHdpZHRoOiAzNHB4O1xyXG4gIGhlaWdodDogMzRweDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJvcmRlci13aWR0aDogMXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cInJhZGlvXCJdOmhvdmVyIHtcclxuICBib3JkZXItY29sb3I6ICMwMDA7XHJcbiAgYm9yZGVyLXdpZHRoOiAzcHg7XHJcbn1cclxuaW5wdXRbdHlwZT1cInJhZGlvXCJdOmNoZWNrZWR7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMDAwO1xyXG4gIGJvcmRlci13aWR0aDogM3B4O1xyXG59XHJcblxyXG5cclxuLmlucHV0LW9wdGlvbnMge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IC03cHg7XHJcbn1cclxuLm9wdGlvbi1xdWFudGl0eSB7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG59XHJcbi5vcHRpb24td3JhcHBlciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHBhZGRpbmctbGVmdDogMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogMTBweDtcclxuICBsaSB7XHJcbiAgICB3aWR0aDogMzRweDtcclxuICAgIGhlaWdodDogMzRweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 3496:
/*!********************************************************************************!*\
  !*** ./src/app/products-collection-page/products-collection-page.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductsCollectionPageComponent": () => (/* binding */ ProductsCollectionPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/products.service */ 9531);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/slider */ 5682);
/* harmony import */ var _product_page_product_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../product-page/product-page.component */ 2170);
/* harmony import */ var _pipes_sort_of_order_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pipes/sort-of-order.pipe */ 9422);
/* harmony import */ var _pipes_sort_of_category_product_collection_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pipes/sort-of-category-product-collection.pipe */ 7699);
/* harmony import */ var _pipes_sort_of_measure_product_collection_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pipes/sort-of-measure-product-collection.pipe */ 1881);
/* harmony import */ var _pipes_sort_of_price_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pipes/sort-of-price.pipe */ 7611);











function ProductsCollectionPageComponent_div_111_app_product_page_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-product-page", 57);
  }
  if (rf & 2) {
    const product_r5 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx_r4.fullView ? "active" : "")("product", product_r5)("fullView", ctx_r4.fullView);
  }
}
function ProductsCollectionPageComponent_div_111_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ProductsCollectionPageComponent_div_111_app_product_page_1_Template, 1, 3, "app-product-page", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "sortOfOrder");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "sortOfPrice");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](4, "sortOfMeasureProductCollection");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "sortOfCategoryProductCollection");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const products_r3 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](2, 1, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind3"](3, 4, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](4, 8, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](5, 11, products_r3, ctx_r0.categoryFilters), ctx_r0.measureFilters), ctx_r0.minPrice, ctx_r0.maxPrice), ctx_r0.selectedOption));
  }
}
function ProductsCollectionPageComponent_ng_template_113_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](0, "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u043E\u0432...");
  }
}
class ProductsCollectionPageComponent {
  constructor(productsService) {
    this.productsService = productsService;
    this.selectedOption = 'default';
    this.boxView = false;
    this.fullView = true;
    this.categoryFilters = [];
    this.measureFilters = [];
    this.minPrice = 0;
    this.maxPrice = 0;
  }
  ngOnInit() {
    this.products$ = this.productsService.getAll();
    this.products$.subscribe(products => {
      this.products = products;
      console.log(this.products);
      const pricesOfProductsArray = this.products.map(product => product.price);
      this.maxPriceOfProductsArray = Math.max(...pricesOfProductsArray);
      console.log(this.maxPriceOfProductsArray);
      this.maxPrice = this.maxPriceOfProductsArray;
      this.minPriceOfProductsArray = Math.min(...pricesOfProductsArray);
      console.log(this.minPriceOfProductsArray);
      this.minPrice = this.minPriceOfProductsArray;
    });
  }
  onBoxView() {
    this.boxView = true;
    this.fullView = false;
  }
  onFullView() {
    this.boxView = false;
    this.fullView = true;
  }
  onOptionChange(selectedOption) {
    this.selectedOption = selectedOption;
  }
  onCategoryChange(event, category) {
    if (event.target.checked) {
      this.categoryFilters = [...this.categoryFilters, category]; //Если присваивать без spread, то pipe не чувствует первое изменение массива
    } else {
      this.categoryFilters = this.categoryFilters.filter(c => c !== category);
    }
    console.log(this.categoryFilters);
  }
  onMeasureValueChange(event, measure) {
    if (event.target.checked) {
      this.measureFilters = [...this.measureFilters, measure]; //Если присваивать без spread, то pipe не чувствует первое изменение массива
    } else {
      this.measureFilters = this.measureFilters.filter(c => c !== measure);
    }
    console.log(this.measureFilters);
  }
  onMinPriceValueChange(minPrice) {
    this.minPrice = minPrice;
    console.log('от', this.minPrice);
  }
  onMaxPriceValueChange(maxPrice) {
    this.maxPrice = maxPrice;
    console.log('до', this.maxPrice);
  }
}
ProductsCollectionPageComponent.ɵfac = function ProductsCollectionPageComponent_Factory(t) {
  return new (t || ProductsCollectionPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_products_service__WEBPACK_IMPORTED_MODULE_0__.ProductsService));
};
ProductsCollectionPageComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: ProductsCollectionPageComponent,
  selectors: [["app-products-collection-page"]],
  outputs: {
    boxView: "boxView",
    fullView: "fullView"
  },
  decls: 115,
  vars: 17,
  consts: [[1, "container"], [1, "collection-wrapper"], [1, "left-side"], [1, "left-side-title"], [1, "left-side-filters-wrapper"], [1, "cat-filter"], [1, "cat-filter-list"], ["type", "checkbox", "id", "fruits", "value", "Fruits", 3, "change"], ["for", "fruits"], ["type", "checkbox", "id", "vegetable", "value", "Vegetable", 3, "change"], ["for", "vegetable"], ["type", "checkbox", "id", "juices", "value", "Juices", 3, "change"], ["for", "juices"], [1, "size-filter"], [1, "size-filter-list"], ["type", "checkbox", "id", "1l", "name", "1l", 3, "change"], ["for", "1l"], ["type", "checkbox", "id", "2l", "name", "2l", 3, "change"], ["for", "2l"], ["type", "checkbox", "id", "5l", "name", "5l", 3, "change"], ["for", "5l"], ["type", "checkbox", "id", "10l", "name", "10l", 3, "change"], ["for", "10l"], ["type", "checkbox", "id", "20l", "name", "20l", 3, "change"], ["for", "20l"], ["type", "checkbox", "id", "1kg", "name", "1kg", 3, "change"], ["for", "1kg"], ["type", "checkbox", "id", "2kg", "name", "2kg", 3, "change"], ["for", "2kg"], ["type", "checkbox", "id", "5kg", "name", "5kg", 3, "change"], ["for", "5kg"], ["type", "checkbox", "id", "10kg", "name", "10kg", 3, "change"], ["for", "10kg"], ["type", "checkbox", "id", "20kg", "name", "20kg", 3, "change"], ["for", "20kg"], [1, "price-filter"], ["discrete", "", 3, "min", "max"], ["matSliderStartThumb", "", 3, "ngModel", "ngModelChange"], ["matSliderEndThumb", "", 3, "ngModel", "ngModelChange"], [1, "right-side"], [1, "filters-wrapper"], [1, "filters-head"], [1, "left-side-filters-head"], [1, "view-type-btn"], [3, "ngClass", "click"], [1, "select-filters-wrapper"], [1, "custom-select", 3, "ngModel", "ngModelChange"], ["value", "default"], ["value", "titleAsc"], ["value", "titleDesc"], ["value", "priceAsc"], ["value", "priceDesc"], [1, "custom-arrow"], ["class", "products-list", 4, "ngIf", "ngIfElse"], ["loading", ""], [1, "products-list"], ["class", "producst-list--item", 3, "ngClass", "product", "fullView", 4, "ngFor", "ngForOf"], [1, "producst-list--item", 3, "ngClass", "product", "fullView"]],
  template: function ProductsCollectionPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "\u0424\u0438\u043B\u044C\u0442\u0440\u043E\u0432\u0430\u0442\u044C \u043F\u043E");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 4)(7, "div", 5)(8, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F\u043C");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "ul", 6)(11, "li")(12, "input", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function ProductsCollectionPageComponent_Template_input_change_12_listener($event) {
        return ctx.onCategoryChange($event, "Fruits");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "label", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "\u0424\u0440\u0443\u043A\u0442\u044B");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "li")(16, "input", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function ProductsCollectionPageComponent_Template_input_change_16_listener($event) {
        return ctx.onCategoryChange($event, "Vegetable");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "label", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "\u041E\u0432\u043E\u0449\u0438");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "li")(20, "input", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function ProductsCollectionPageComponent_Template_input_change_20_listener($event) {
        return ctx.onCategoryChange($event, "Juices");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "label", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22, "\u0421\u043E\u043A\u0438");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "div", 13)(24, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25, "\u0420\u0430\u0437\u043C\u0435\u0440\u0443");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "ul", 14)(27, "li")(28, "input", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function ProductsCollectionPageComponent_Template_input_change_28_listener($event) {
        return ctx.onMeasureValueChange($event, "1L");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "label", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](30, "1L");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "li")(32, "input", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function ProductsCollectionPageComponent_Template_input_change_32_listener($event) {
        return ctx.onMeasureValueChange($event, "2L");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "label", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](34, "2L");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "li")(36, "input", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function ProductsCollectionPageComponent_Template_input_change_36_listener($event) {
        return ctx.onMeasureValueChange($event, "5L");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "label", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](38, "5L");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "li")(40, "input", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function ProductsCollectionPageComponent_Template_input_change_40_listener($event) {
        return ctx.onMeasureValueChange($event, "10L");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](41, "label", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](42, "10L");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](43, "li")(44, "input", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function ProductsCollectionPageComponent_Template_input_change_44_listener($event) {
        return ctx.onMeasureValueChange($event, "20L");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](45, "label", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](46, "20L");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](47, "li")(48, "input", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function ProductsCollectionPageComponent_Template_input_change_48_listener($event) {
        return ctx.onMeasureValueChange($event, "1Kg");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](49, "label", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](50, "1Kg");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](51, "li")(52, "input", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function ProductsCollectionPageComponent_Template_input_change_52_listener($event) {
        return ctx.onMeasureValueChange($event, "2Kg");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](53, "label", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](54, "2Kg");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](55, "li")(56, "input", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function ProductsCollectionPageComponent_Template_input_change_56_listener($event) {
        return ctx.onMeasureValueChange($event, "5Kg");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](57, "label", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](58, "5Kg");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](59, "li")(60, "input", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function ProductsCollectionPageComponent_Template_input_change_60_listener($event) {
        return ctx.onMeasureValueChange($event, "10Kg");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](61, "label", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](62, "10Kg");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](63, "li")(64, "input", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function ProductsCollectionPageComponent_Template_input_change_64_listener($event) {
        return ctx.onMeasureValueChange($event, "20Kg");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](65, "label", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](66, "20Kg");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](67, "div", 35)(68, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](69, "\u0426\u0435\u043D\u0435");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](70, "mat-slider", 36)(71, "input", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function ProductsCollectionPageComponent_Template_input_ngModelChange_71_listener($event) {
        return ctx.minPrice = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](72, "input", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function ProductsCollectionPageComponent_Template_input_ngModelChange_72_listener($event) {
        return ctx.maxPrice = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](73, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](74, " \u041E\u0442");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](75, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](76);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](77, "currency");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](78, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](79, " \u0414\u043E");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](80, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](81);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](82, "currency");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](83, "div", 39)(84, "div", 40)(85, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](86, "Greenbee");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](87, "div", 41)(88, "div", 42)(89, "div", 43)(90, "button", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ProductsCollectionPageComponent_Template_button_click_90_listener() {
        return ctx.onBoxView();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](91, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](92, "apps");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](93, "button", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ProductsCollectionPageComponent_Template_button_click_93_listener() {
        return ctx.onFullView();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](94, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](95, "menu");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](96, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](97, "\u041F\u043E\u043A\u0430\u0437\u0430\u043D\u043E \u221E \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u043E\u0432.");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](98, "div", 45)(99, "select", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function ProductsCollectionPageComponent_Template_select_ngModelChange_99_listener($event) {
        return ctx.selectedOption = $event;
      })("ngModelChange", function ProductsCollectionPageComponent_Template_select_ngModelChange_99_listener($event) {
        return ctx.onOptionChange($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](100, "option", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](101, "\u041F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](102, "option", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](103, "\u041F\u043E \u0430\u043B\u0444\u0430\u0432\u0438\u0442\u0443 \u0410-\u042F");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](104, "option", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](105, "\u041F\u043E \u0430\u043B\u0444\u0430\u0432\u0438\u0442\u0443 \u042F-\u0410");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](106, "option", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](107, "\u041F\u043E \u0432\u043E\u0437\u0440\u0430\u0441\u0442\u0430\u043D\u0438\u044E \u0446\u0435\u043D\u044B");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](108, "option", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](109, "\u041F\u043E \u0443\u0431\u044B\u0432\u0430\u043D\u0438\u044E \u0446\u0435\u043D\u044B");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](110, "span", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](111, ProductsCollectionPageComponent_div_111_Template, 6, 14, "div", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](112, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](113, ProductsCollectionPageComponent_ng_template_113_Template, 1, 0, "ng-template", null, 54, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](114);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](70);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("min", ctx.minPriceOfProductsArray)("max", ctx.maxPriceOfProductsArray);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.minPrice);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.maxPrice);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](77, 11, ctx.minPrice));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](82, 13, ctx.maxPrice));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx.boxView ? "active" : "");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx.fullView ? "active" : "");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.selectedOption);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](112, 15, ctx.products$))("ngIfElse", _r1);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel, _angular_material_slider__WEBPACK_IMPORTED_MODULE_10__.MatSlider, _angular_material_slider__WEBPACK_IMPORTED_MODULE_10__.MatSliderRangeThumb, _product_page_product_page_component__WEBPACK_IMPORTED_MODULE_1__.ProductPageComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_7__.CurrencyPipe, _pipes_sort_of_order_pipe__WEBPACK_IMPORTED_MODULE_2__.SortOfOrder, _pipes_sort_of_category_product_collection_pipe__WEBPACK_IMPORTED_MODULE_3__.SortOfCategoryProductCollectionPipe, _pipes_sort_of_measure_product_collection_pipe__WEBPACK_IMPORTED_MODULE_4__.SortOfMeasureProductCollectionPipe, _pipes_sort_of_price_pipe__WEBPACK_IMPORTED_MODULE_5__.SortOfPricePipe],
  styles: [".collection-wrapper[_ngcontent-%COMP%] {\n  margin-top: 50px;\n  display: flex;\n}\n.collection-wrapper[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%] {\n  flex: 23%;\n  height: 800px;\n  color: #666;\n  background: #f1f1f1;\n}\n.collection-wrapper[_ngcontent-%COMP%]   .right-side[_ngcontent-%COMP%] {\n  flex: 77%;\n  min-height: 800px;\n  padding-left: 20px;\n}\n\n.left-side-filters-wrapper[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.left-side-filters-wrapper[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.left-side-filters-wrapper[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n.left-side-filters-wrapper[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n.left-side-filters-wrapper[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n  color: #222;\n  font-size: 0.9rem;\n  text-transform: uppercase;\n  font-weight: 700;\n}\n\n.left-side-title[_ngcontent-%COMP%] {\n  color: #222;\n  border-bottom: 1px solid #fff;\n  text-transform: uppercase;\n}\n.left-side-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 700;\n  position: relative;\n  padding: 20px 0;\n  margin: 0 20px;\n  display: inline-block;\n}\n.left-side-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 3px;\n  background: #0d7a52;\n  left: 0;\n  bottom: -2px;\n}\n\n.cat-filter[_ngcontent-%COMP%], .size-filter[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n\nh1[_ngcontent-%COMP%] {\n  font-family: Poppins, sans-serif;\n  text-align: center;\n  font-weight: 700;\n  color: #222;\n  margin-top: 40px;\n}\n\np[_ngcontent-%COMP%] {\n  font-family: Poppins, sans-serif;\n  color: #666;\n  text-align: center;\n  font-weight: 400;\n}\n\n.products-list[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 20px;\n}\n\n.producst-list--item[_ngcontent-%COMP%] {\n  position: relative;\n  border: 1px solid #eaeaea;\n  padding: 1rem;\n  text-align: center;\n  border-radius: 8px;\n  background: #fff;\n  flex-basis: calc(33.33333% - 20px);\n}\n.producst-list--item.active[_ngcontent-%COMP%] {\n  flex-basis: 100%;\n  display: flex;\n}\n\n.producst-list--item[_ngcontent-%COMP%]:hover {\n  border: none;\n  box-shadow: 5px 6px 15px 0 rgba(0, 0, 0, 0.1);\n  border: 1px solid transparent;\n}\n\n.image.active[_ngcontent-%COMP%] {\n  max-width: 261px;\n}\n\n.filters-wrapper[_ngcontent-%COMP%] {\n  margin-bottom: 50px;\n}\n\n.view-type-btn[_ngcontent-%COMP%] {\n  background: #fff;\n}\n.view-type-btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: none;\n  background: #cdcdcd;\n  color: #fff;\n  border-radius: 3px;\n  margin-right: 5px;\n  cursor: pointer;\n}\n.view-type-btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  line-height: 1.2;\n  font-size: 22px;\n}\n.view-type-btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: #0d7a52;\n}\n.view-type-btn[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  background: #0d7a52;\n}\n\n.filters-head[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.filters-head[_ngcontent-%COMP%]   .left-side-filters-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.filters-head[_ngcontent-%COMP%]   .left-side-filters-head[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding: 5px;\n  background-color: #fff;\n  color: #969696;\n  text-transform: uppercase;\n  font-weight: 300;\n  font-size: 0.8rem;\n}\n.filters-head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.filters-head[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 1px;\n  background: #d7d7d7;\n  bottom: 50%;\n  left: 0;\n  z-index: -1;\n}\n\n.custom-select[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.select-filters-wrapper[_ngcontent-%COMP%] {\n  background-color: #fff;\n  padding-left: 10px;\n}\n.select-filters-wrapper[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  cursor: pointer;\n  width: 100%;\n  font-size: 0.8rem;\n  text-transform: uppercase;\n  padding: 10px 30px 10px 10px;\n  border: 1px solid #d7d7d7;\n  border-radius: 5px;\n  background-color: #fff;\n  color: #969696;\n  outline: none;\n}\n.select-filters-wrapper[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\n  cursor: pointer;\n  font-size: 0.6rem;\n  color: black;\n}\n.select-filters-wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 40px;\n  height: 96%;\n  background-color: #fff;\n  right: 3px;\n  top: 1px;\n  pointer-events: none;\n}\n.select-filters-wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]::after {\n  position: absolute;\n  content: \"\";\n  border-style: solid;\n  border-width: 6px;\n  border-color: #5b6287 transparent transparent transparent;\n  top: 44%;\n  left: 35%;\n}\n\nmat-slider[_ngcontent-%COMP%] {\n  width: 200px;\n}\n\n.mat-mdc-slider.mat-primary[_ngcontent-%COMP%] {\n  --mdc-slider-handle-color: #0d7a52;\n  --mdc-slider-focus-handle-color: #0d7a52;\n  --mdc-slider-hover-handle-color: #0d7a52;\n  --mdc-slider-active-track-color: #0d7a52;\n  --mdc-slider-inactive-track-color: #0d7a52;\n  --mdc-slider-with-tick-marks-active-container-color: #fff;\n  --mdc-slider-with-tick-marks-inactive-container-color: #0d7a52;\n  --mat-mdc-slider-ripple-color: #0d7a52;\n  --mat-mdc-slider-hover-ripple-color: rgba(31, 162, 110, 0.05);\n  --mat-mdc-slider-focus-ripple-color: rgba(31, 162, 110, 0.05);\n}\n\n.price-filter[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: left;\n}\n.price-filter[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcHJvZHVjdHMtY29sbGVjdGlvbi1wYWdlL3Byb2R1Y3RzLWNvbGxlY3Rpb24tcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtBQUNGO0FBQUU7RUFDRSxTQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQUVKO0FBQ0U7RUFDRSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0UsYUFBQTtBQUNGO0FBQUU7RUFDRSxVQUFBO0FBRUo7QUFESTtFQUNFLG1CQUFBO0FBR047QUFGTTtFQUNFLGlCQUFBO0FBSVI7QUFBRTtFQUNFLGtDQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBQUVKOztBQUVBO0VBQ0UsV0FBQTtFQUNBLDZCQUFBO0VBQ0EseUJBQUE7QUFDRjtBQUFFO0VBQ0Usa0NBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtBQUVKO0FBREk7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7QUFHTjs7QUFFQTs7RUFFRSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQ0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0FBRUY7O0FBQ0E7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0VBRUEsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtDQUFBO0FBQ0Y7QUFBRTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtBQUVKOztBQUNBO0VBQ0UsWUFBQTtFQUNBLDZDQUFBO0VBQ0EsNkJBQUE7QUFFRjs7QUFFRTtFQUNFLGdCQUFBO0FBQ0o7O0FBR0E7RUFDRSxtQkFBQTtBQUFGOztBQUdBO0VBQ0UsZ0JBQUE7QUFBRjtBQUVFO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBQUo7QUFDSTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBQUNOO0FBQ0k7RUFDRSxtQkFBQTtBQUNOO0FBQ0k7RUFDRSxtQkFBQTtBQUNOOztBQUdBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQUFGO0FBQ0U7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFDSjtBQUFJO0VBQ0UsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUVOO0FBQ0U7RUFDRSxnQkFBQTtBQUNKO0FBQ0U7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0FBQ0o7O0FBR0E7RUFDRSxrQkFBQTtBQUFGOztBQUdBO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtBQUFGO0FBQ0U7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSw0QkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUVBLGNBQUE7RUFDQSxhQUFBO0FBQUo7QUFFSTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUFBTjtBQUlFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxvQkFBQTtBQUZKO0FBS0U7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EseURBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtBQUhKOztBQU1BO0VBQ0UsWUFBQTtBQUhGOztBQU1BO0VBQ0Usa0NBQUE7RUFDQSx3Q0FBQTtFQUNBLHdDQUFBO0VBQ0Esd0NBQUE7RUFDQSwwQ0FBQTtFQUNBLHlEQUFBO0VBQ0EsOERBQUE7RUFDQSxzQ0FBQTtFQUNBLDZEQUFBO0VBQ0EsNkRBQUE7QUFIRjs7QUFPRTtFQUNFLGdCQUFBO0FBSko7QUFLSTtFQUNFLGlCQUFBO0FBSE4iLCJzb3VyY2VzQ29udGVudCI6WyIuY29sbGVjdGlvbi13cmFwcGVyIHtcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgLmxlZnQtc2lkZSB7XHJcbiAgICBmbGV4OiAyMyU7XHJcbiAgICBoZWlnaHQ6IDgwMHB4O1xyXG4gICAgY29sb3I6ICM2NjY7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xyXG4gIH1cclxuXHJcbiAgLnJpZ2h0LXNpZGUge1xyXG4gICAgZmxleDogNzclO1xyXG4gICAgbWluLWhlaWdodDogODAwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgfVxyXG59XHJcbi5sZWZ0LXNpZGUtZmlsdGVycy13cmFwcGVyIHtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIHVsIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBsaSB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgIGlucHV0IHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBoMyB7XHJcbiAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjogIzIyMjtcclxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgfVxyXG59XHJcblxyXG4ubGVmdC1zaWRlLXRpdGxlIHtcclxuICBjb2xvcjogIzIyMjtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZjtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGgyIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDA7XHJcbiAgICBtYXJnaW46IDAgMjBweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICY6OmJlZm9yZSB7XHJcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogM3B4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjMGQ3YTUyO1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICBib3R0b206IC0ycHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uY2F0LWZpbHRlcixcclxuLnNpemUtZmlsdGVyIHtcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG59XHJcblxyXG5oMSB7XHJcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnMsIHNhbnMtc2VyaWY7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgY29sb3I6ICMyMjI7XHJcbiAgbWFyZ2luLXRvcDogNDBweDtcclxufVxyXG5cclxucCB7XHJcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnMsIHNhbnMtc2VyaWY7XHJcbiAgY29sb3I6ICM2NjY7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuLnByb2R1Y3RzLWxpc3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGdhcDogMjBweDtcclxufVxyXG5cclxuLnByb2R1Y3N0LWxpc3QtLWl0ZW0ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZWFlYWVhO1xyXG4gIC8vbWF4LXdpZHRoOiAyMyU7XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgZmxleC1iYXNpczogY2FsYygzMy4zMzMzMyUgLSAyMHB4KTtcclxuICAmLmFjdGl2ZSB7XHJcbiAgICBmbGV4LWJhc2lzOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICB9XHJcbn1cclxuLnByb2R1Y3N0LWxpc3QtLWl0ZW06aG92ZXIge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3gtc2hhZG93OiA1cHggNnB4IDE1cHggMCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5pbWFnZSB7XHJcbiAgJi5hY3RpdmUge1xyXG4gICAgbWF4LXdpZHRoOiAyNjFweDtcclxuICB9XHJcbn1cclxuXHJcbi5maWx0ZXJzLXdyYXBwZXIge1xyXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbn1cclxuXHJcbi52aWV3LXR5cGUtYnRuIHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG5cclxuICBidXR0b24ge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZDogI2NkY2RjZDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBtYXQtaWNvbiB7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIH1cclxuICAgICY6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjMGQ3YTUyO1xyXG4gICAgfVxyXG4gICAgJi5hY3RpdmUge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjMGQ3YTUyO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4uZmlsdGVycy1oZWFkIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAubGVmdC1zaWRlLWZpbHRlcnMtaGVhZCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHNwYW4ge1xyXG4gICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgIGNvbG9yOiAjOTY5Njk2O1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgIH1cclxuICB9XHJcbiAgcCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIH1cclxuICAmOjpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZDdkN2Q3O1xyXG4gICAgYm90dG9tOiA1MCU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgei1pbmRleDogLTE7XHJcbiAgfVxyXG59XHJcblxyXG4uY3VzdG9tLXNlbGVjdCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uc2VsZWN0LWZpbHRlcnMtd3JhcHBlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgc2VsZWN0IHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgcGFkZGluZzogMTBweCAzMHB4IDEwcHggMTBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkN2Q3ZDc7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG5cclxuICAgIGNvbG9yOiAjOTY5Njk2O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuXHJcbiAgICBvcHRpb24ge1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC42cmVtO1xyXG4gICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzcGFuIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiA5NiU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgcmlnaHQ6IDNweDtcclxuICAgIHRvcDogMXB4O1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgfVxyXG5cclxuICBzcGFuOjphZnRlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci13aWR0aDogNnB4O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjNWI2Mjg3IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xyXG4gICAgdG9wOiA0NCU7XHJcbiAgICBsZWZ0OiAzNSU7XHJcbiAgfVxyXG59XHJcbm1hdC1zbGlkZXIge1xyXG4gIHdpZHRoOiAyMDBweDtcclxufVxyXG5cclxuLm1hdC1tZGMtc2xpZGVyLm1hdC1wcmltYXJ5IHtcclxuICAtLW1kYy1zbGlkZXItaGFuZGxlLWNvbG9yOiAjMGQ3YTUyO1xyXG4gIC0tbWRjLXNsaWRlci1mb2N1cy1oYW5kbGUtY29sb3I6ICMwZDdhNTI7XHJcbiAgLS1tZGMtc2xpZGVyLWhvdmVyLWhhbmRsZS1jb2xvcjogIzBkN2E1MjtcclxuICAtLW1kYy1zbGlkZXItYWN0aXZlLXRyYWNrLWNvbG9yOiAjMGQ3YTUyO1xyXG4gIC0tbWRjLXNsaWRlci1pbmFjdGl2ZS10cmFjay1jb2xvcjogIzBkN2E1MjtcclxuICAtLW1kYy1zbGlkZXItd2l0aC10aWNrLW1hcmtzLWFjdGl2ZS1jb250YWluZXItY29sb3I6ICNmZmY7XHJcbiAgLS1tZGMtc2xpZGVyLXdpdGgtdGljay1tYXJrcy1pbmFjdGl2ZS1jb250YWluZXItY29sb3I6ICMwZDdhNTI7XHJcbiAgLS1tYXQtbWRjLXNsaWRlci1yaXBwbGUtY29sb3I6ICMwZDdhNTI7XHJcbiAgLS1tYXQtbWRjLXNsaWRlci1ob3Zlci1yaXBwbGUtY29sb3I6IHJnYmEoMzEsIDE2MiwgMTEwLCAwLjA1KTtcclxuICAtLW1hdC1tZGMtc2xpZGVyLWZvY3VzLXJpcHBsZS1jb2xvcjogcmdiYSgzMSwgMTYyLCAxMTAsIDAuMDUpO1xyXG59XHJcblxyXG4ucHJpY2UtZmlsdGVyIHtcclxuICBwIHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBiIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 5970:
/*!*******************************************!*\
  !*** ./src/app/services/alert.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertService": () => (/* binding */ AlertService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


class AlertService {
  constructor() {
    this.alert$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
  }
  success(text) {
    this.alert$.next({
      type: 'success',
      text
    });
  }
  warning(text) {
    this.alert$.next({
      type: 'warning',
      text
    });
  }
  danger(text) {
    this.alert$.next({
      type: 'danger',
      text
    });
  }
}
AlertService.ɵfac = function AlertService_Factory(t) {
  return new (t || AlertService)();
};
AlertService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: AlertService,
  factory: AlertService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 910:
/*!******************************************!*\
  !*** ./src/app/services/cart.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartService": () => (/* binding */ CartService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _shared_dialog_add_cart_dialog_add_cart_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/dialog-add-cart/dialog-add-cart.component */ 51);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alert.service */ 5970);






class CartService {
  constructor(alertService, dialog) {
    this.alertService = alertService;
    this.dialog = dialog;
    this.cartProducts = JSON.parse(localStorage.getItem('cartProducts') || '[]');
    this.productCount = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(0);
    this.totalPrice$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(0);
    this.totalQuantity$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(0);
    const productCount = JSON.parse(localStorage.getItem('productCount') || '0');
    this.productCount = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(productCount);
    this.updateTotal();
  }
  ngOnInit() {}
  //
  updateQuantity(product, newQuantity) {
    const productIndex = this.cartProducts.findIndex(item => item.id === product.id && item.options === product.options);
    if (productIndex !== -1) {
      const updatedProduct = {
        ...this.cartProducts[productIndex],
        quantity: newQuantity
      };
      console.log(updatedProduct);
      this.cartProducts.splice(productIndex, 1, updatedProduct);
      localStorage.setItem('cartProducts', JSON.stringify(this.cartProducts));
      localStorage.setItem('productCount', JSON.stringify(this.productCount.getValue()));
      this.updateTotal();
      console.log('Количество товара обновлено!');
    } else {
      console.log('Этого товара нет в корзине!');
      return;
    }
  }
  openDialog(product) {
    const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogConfig();
    dialogConfig.data = {
      product: product,
      totalQuantity$: this.totalQuantity$,
      totalPrice$: this.totalPrice$
    }; // передаем product в data
    dialogConfig.width = '600px';
    this.dialog.open(_shared_dialog_add_cart_dialog_add_cart_component__WEBPACK_IMPORTED_MODULE_0__.DialogAddCartComponent, dialogConfig);
    //console.log(dialogConfig);
  }
  //Метод every будет проверять каждый элемент массива и вернет true,
  // если все элементы не соответствуют условию в колбэке, и false - если найден элемент,
  // у которого совпадает id. Таким образом, если idExists равно true,
  // значит продукта с таким же id в массиве нет и можно добавлять новый,
  // иначе выведется сообщение "Этот товар уже есть в корзине!".
  //=================================================================================
  //При добавлении товара в корзину проверяется, есть ли опции у товара, далее проверяется
  //есть ли в корзине товар с определённым measureQantity, если таковой есть, то не добавляем.
  //Также после этого товар проверяется по id, чтобы другой товар с таким же measureQantity
  //не был добавлен
  //Товар без опций просто проверяется по id на предмет уже наличия в корзине, чтобы не добавлять такой же товар
  addProductToCart(product) {
    if (product.options && product.options.measureQantity !== undefined) {
      const measureQantityExists = this.cartProducts.some(item => item.options && item.options.measureQantity === product.options.measureQantity && item.id === product.id);
      if (measureQantityExists) {
        this.alertService.warning('Товар с такими параметрами уже есть в корзине!');
        return;
      }
    } else {
      const idExists = this.cartProducts.some(item => item.id === product.id);
      if (idExists) {
        this.alertService.warning('Этот товар уже есть в корзине!');
        return;
      }
    }
    this.cartProducts.push(product);
    this.productCount.next(this.cartProducts.length);
    localStorage.setItem('cartProducts', JSON.stringify(this.cartProducts));
    localStorage.setItem('productCount', JSON.stringify(this.productCount.getValue()));
    this.updateTotal();
    this.openDialog(product); //Диалоговое окно с сообщением, что товар добавлен
    this.alertService.success('Товар добавлен в корзину');
  }
  //===================================================================================================
  removeProductFromCart(product) {
    const productIndex = this.cartProducts.findIndex(item => item.id === product.id && item.options === product.options);
    if (productIndex !== -1) {
      this.cartProducts.splice(productIndex, 1);
      this.productCount.next(this.cartProducts.length);
      localStorage.setItem('cartProducts', JSON.stringify(this.cartProducts));
      localStorage.setItem('productCount', JSON.stringify(this.productCount.getValue()));
      this.updateTotal();
      this.alertService.danger('Товар удален из корзины!');
      //console.log('Товар удален из корзины!');
    } else {
      console.log('Этого товара нет в корзине!');
      return;
    }
  }
  updateTotal() {
    const totalPrice = this.cartProducts.reduce(
    //@ts-ignore
    (total, product) => total + product.quantity * product.price, 0);
    // Обновляем значение totalPrice в BehaviorSubject
    this.totalPrice$.next(totalPrice);
    //Считаем общее количество товаров в корзине
    const totalQuantity = this.cartProducts.reduce(
    //@ts-ignore
    (total, product) => total + product.quantity, 0);
    // Обновляем значение totalPrice в BehaviorSubject
    this.totalQuantity$.next(totalQuantity);
  }
  getProductCount() {
    return this.productCount.getValue();
  }
  getProductCountObservable() {
    return this.productCount.asObservable();
  }
}
CartService.ɵfac = function CartService_Factory(t) {
  return new (t || CartService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_alert_service__WEBPACK_IMPORTED_MODULE_1__.AlertService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialog));
};
CartService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: CartService,
  factory: CartService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 9531:
/*!**********************************************!*\
  !*** ./src/app/services/products.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductsService": () => (/* binding */ ProductsService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);




class ProductsService {
  constructor(http) {
    this.http = http;
  }
  getAll() {
    return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.fbDbUrl}/products.json`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(response => {
      return Object.keys(response).map(key => ({
        ...response[key],
        id: key,
        date: new Date(response[key].date)
      }));
    }));
  }
  addProduct(product) {
    return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.fbDbUrl}/products.json`, product)
    //@ts-ignore //странная ошибка ts
    .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(response => {
      return {
        ...product,
        id: response.name,
        date: new Date(product.date)
      };
    }));
  }
  getById(id) {
    return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.fbDbUrl}/products/${id}.json`)
    //@ts-ignore //странная ошибка ts
    .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(response => {
      if (response) {
        return {
          ...response,
          id,
          date: new Date(response.date)
        };
      }
      return response;
    }));
  }
  remove(id) {
    return this.http.delete(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.fbDbUrl}/products/${id}.json`);
  }
  update(product) {
    return this.http.patch(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.fbDbUrl}/products/${product.id}.json`, product);
  }
  setCategory(category) {
    this.category = category;
  }
}
ProductsService.ɵfac = function ProductsService_Factory(t) {
  return new (t || ProductsService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
};
ProductsService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: ProductsService,
  factory: ProductsService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 8549:
/*!*************************************************!*\
  !*** ./src/app/shared/alert/alert.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertComponent": () => (/* binding */ AlertComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/alert.service */ 5970);




const _c0 = function (a0, a1, a2) {
  return {
    "alert-success": a0,
    "alert-warning": a1,
    "alert-danger": a2
  };
};
function AlertComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AlertComponent_div_0_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.closeAlert());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "ok");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](2, _c0, ctx_r0.type === "success", ctx_r0.type === "warning", ctx_r0.type === "danger"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.text);
  }
}
class AlertComponent {
  constructor(alertService) {
    this.alertService = alertService;
    this.delay = 3000;
    this.type = 'success';
  }
  ngOnInit() {
    this.aSub = this.alertService.alert$.subscribe(alert => {
      this.text = alert.text;
      this.type = alert.type;
      clearTimeout(this.timeoutId); // clear the previous timeout before setting a new one
      this.timeoutId = setTimeout(() => {
        this.text = '';
      }, this.delay);
    });
  }
  closeAlert() {
    this.text = '';
  }
  ngOnDestroy() {
    if (this.aSub) {
      this.aSub.unsubscribe();
    }
  }
}
AlertComponent.ɵfac = function AlertComponent_Factory(t) {
  return new (t || AlertComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_0__.AlertService));
};
AlertComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: AlertComponent,
  selectors: [["app-alert"]],
  inputs: {
    delay: "delay"
  },
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
  decls: 1,
  vars: 1,
  consts: [["class", "alert-wrap", 3, "ngClass", 4, "ngIf"], [1, "alert-wrap", 3, "ngClass"], [1, "alert"], [3, "click"]],
  template: function AlertComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, AlertComponent_div_0_Template, 6, 6, "div", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.text);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf],
  styles: [".alert-wrap[_ngcontent-%COMP%] {\n  position: fixed;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 10px;\n  border-radius: 5px;\n  right: 40px;\n  bottom: 20px;\n  max-width: 300px;\n  gap: 20px;\n  z-index: 100;\n  box-shadow: 5px 6px 15px 0 rgba(0, 0, 0, 0.2);\n}\n.alert-wrap[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: #fff;\n  border: none;\n  background: inherit;\n  cursor: pointer;\n  border-radius: 5px;\n  padding: 5px;\n}\n.alert-wrap[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: #73a446;\n}\n\n.alert-success[_ngcontent-%COMP%] {\n  background: #78b144;\n}\n\n.alert-warning[_ngcontent-%COMP%] {\n  background: #cfcc12;\n}\n\n.alert-danger[_ngcontent-%COMP%] {\n  background: #e63c1e;\n}\n.alert-danger[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: #c54731;\n}\n\np[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2FsZXJ0L2FsZXJ0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUdBLDZDQUFBO0FBREo7QUFFSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBQVI7QUFDUTtFQUNJLG1CQUFBO0FBQ1o7O0FBSUE7RUFDSSxtQkFBQTtBQURKOztBQUlBO0VBQ0ksbUJBQUE7QUFESjs7QUFHQTtFQUNJLG1CQUFBO0FBQUo7QUFHUTtFQUNJLG1CQUFBO0FBRFo7O0FBTUU7RUFDRSxnQkFBQTtFQUNBLFdBQUE7QUFISiIsInNvdXJjZXNDb250ZW50IjpbIi5hbGVydC13cmFwIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgcGFkZGluZzogMTBweCAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcmlnaHQ6IDQwcHg7XHJcbiAgICBib3R0b206IDIwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xyXG4gICAgZ2FwOiAyMHB4O1xyXG4gICAgei1pbmRleDogMTAwO1xyXG4gICAgLy8gbGVmdDogNTAlO1xyXG4gICAgLy8gbWFyZ2luOiAtMTUwcHggMCAwIC0xNTBweDtcclxuICAgIGJveC1zaGFkb3c6IDVweCA2cHggMTVweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGluaGVyaXQ7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICM3M2E0NDY7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uYWxlcnQtc3VjY2VzcyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNzhiMTQ0O1xyXG5cclxufVxyXG4uYWxlcnQtd2FybmluZyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjY2ZjYzEyO1xyXG59XHJcbi5hbGVydC1kYW5nZXIge1xyXG4gICAgYmFja2dyb3VuZDogI2U2M2MxZTtcclxuICAgIFxyXG4gICAgYnV0dG9ue1xyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjYzU0NzMxO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuICBwIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICBjb2xvcjogI2ZmZlxyXG4gIH1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 51:
/*!*********************************************************************!*\
  !*** ./src/app/shared/dialog-add-cart/dialog-add-cart.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DialogAddCartComponent": () => (/* binding */ DialogAddCartComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-quill */ 3115);






function DialogAddCartComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "div", 1)(2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "check_circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u041F\u0440\u043E\u0434\u0443\u043A\u0442 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D \u0432 \u0432\u0430\u0448\u0443 \u043A\u043E\u0440\u0437\u0438\u043D\u0443");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "x");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3)(9, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "quill-view-html", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6)(12, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 7)(20, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " \u0423 \u0432\u0430\u0441 \u0441\u0435\u0439\u0447\u0430\u0441 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](24, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " \u0442\u043E\u0432\u0430\u0440\u043E\u0432 \u0432 \u043A\u043E\u0440\u0437\u0438\u043D\u0435. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " \u0412\u0441\u0435\u0433\u043E \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u043E\u0432 \u043D\u0430 \u0441\u0443\u043C\u043C\u0443: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](30, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](31, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430: \u0411\u0415\u0421\u041F\u041B\u0410\u0422\u041D\u041E");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " \u0418\u0442\u043E\u0433\u043E: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](38, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](39, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " (\u0432\u043A\u043B\u044E\u0447\u0430\u044F \u043D\u0430\u043B\u043E\u0433\u0438.) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 12)(42, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "\u0412\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F \u043A \u043F\u043E\u043A\u0443\u043F\u043A\u0430\u043C");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.data.product.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.data.product.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 7, ctx_r0.data.product.price));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E:", ctx_r0.data.product.quantity, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](24, 9, ctx_r0.data.totalQuantity$));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](30, 11, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](31, 13, ctx_r0.data.totalPrice$)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](38, 15, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](39, 17, ctx_r0.data.totalPrice$)));
  }
}
class DialogAddCartComponent {
  constructor(data) {
    this.data = data;
  }
  ngOnInit() {
    //console.log(this.product);
  }
}
DialogAddCartComponent.ɵfac = function DialogAddCartComponent_Factory(t) {
  return new (t || DialogAddCartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA));
};
DialogAddCartComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: DialogAddCartComponent,
  selectors: [["app-dialog-add-cart"]],
  decls: 1,
  vars: 1,
  consts: [[4, "ngIf"], [1, "header"], ["mat-dialog-close", "", 1, "btn-back"], [1, "content-info"], [1, "left-side"], [1, "img", 3, "content"], [1, "left-side-info"], [1, "right-side"], [1, "total-quantity"], [1, "total-price-products"], [1, "total-shipping"], [1, "total-price"], [1, "btn-wrap"], ["mat-dialog-close", "", 1, "btn-to-shop"]],
  template: function DialogAddCartComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DialogAddCartComponent_div_0_Template, 44, 19, "div", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIcon, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogClose, ngx_quill__WEBPACK_IMPORTED_MODULE_4__.QuillViewHTMLComponent, _angular_common__WEBPACK_IMPORTED_MODULE_2__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_2__.CurrencyPipe],
  styles: [".header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 10px 15px;\n  color: #0d7a52;\n}\n.header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0 0 0 10px;\n  text-transform: uppercase;\n  font-size: 1rem;\n  line-height: 1;\n}\n\n.btn-back[_ngcontent-%COMP%] {\n  padding: 0 5px;\n  border-radius: 50px;\n  border: none;\n  background-color: #0d7a52;\n  color: #fff;\n  cursor: pointer;\n  position: absolute;\n  right: -5px;\n  top: -5px;\n}\n.btn-back[_ngcontent-%COMP%]:hover {\n  background-color: #78b144;\n}\n\n.content-info[_ngcontent-%COMP%] {\n  border-top: 1px dotted #828282;\n  border-bottom: 1px dotted #828282;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.content-info[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  flex: 1 1 50%;\n}\n.content-info[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: start;\n  align-items: center;\n  padding: 20px;\n}\n.content-info[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%] {\n  max-width: 80px;\n}\n.content-info[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .left-side-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding-left: 30px;\n}\n.content-info[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .left-side-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  font-size: 1.2rem;\n  color: #222;\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 700;\n}\n.content-info[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .left-side-info[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  color: #0d7a52;\n  font-size: 1.4rem;\n  font-weight: 700;\n  margin-bottom: 10px;\n}\n.content-info[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .left-side-info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #666;\n}\n.content-info[_ngcontent-%COMP%]   .right-side[_ngcontent-%COMP%] {\n  padding: 20px 20px 0 0;\n}\n.content-info[_ngcontent-%COMP%]   .right-side[_ngcontent-%COMP%]   .total-quantity[_ngcontent-%COMP%] {\n  color: blue;\n  font-weight: 700;\n}\n\n.info-price[_ngcontent-%COMP%] {\n  padding-right: 20px;\n}\n\n.left-side[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.btn-wrap[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 10px 0;\n}\n\n.btn-to-shop[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  background: #222;\n  border: none;\n  cursor: pointer;\n  border-radius: 3px;\n  padding-left: 25px;\n  padding-right: 25px;\n  padding-top: 9px;\n  padding-bottom: 9px;\n  color: #fff;\n}\n.btn-to-shop[_ngcontent-%COMP%]:hover {\n  background: #084c33;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2RpYWxvZy1hZGQtY2FydC9kaWFsb2ctYWRkLWNhcnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFDRjtBQUFFO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBRUo7O0FBRUE7RUFDSSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUFDSjtBQUFJO0VBQ0UseUJBQUE7QUFFTjs7QUFFQTtFQUNFLDhCQUFBO0VBQ0EsaUNBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQUNGO0FBQUU7RUFDRSxhQUFBO0FBRUo7QUFBRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQUVKO0FBREk7RUFDRSxlQUFBO0FBR047QUFBSTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FBRU47QUFETTtFQUNFLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0NBQUE7RUFDQSxnQkFBQTtBQUdSO0FBRE07RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBR1I7QUFETTtFQUNFLFdBQUE7QUFHUjtBQUNFO0VBQ0Usc0JBQUE7QUFDSjtBQUFJO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0FBRVI7O0FBR0E7RUFDRSxtQkFBQTtBQUFGOztBQUVBO0VBQ0UsYUFBQTtBQUNGOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBQ0E7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBRUo7QUFESTtFQUNJLG1CQUFBO0FBR1IiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMTBweCAxNXB4O1xyXG4gIGNvbG9yOiAjMGQ3YTUyO1xyXG4gIGgxIHtcclxuICAgIG1hcmdpbjogMCAwIDAgMTBweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBsaW5lLWhlaWdodDogMTtcclxuICB9XHJcbn1cclxuXHJcbi5idG4tYmFjayB7XHJcbiAgICBwYWRkaW5nOiAwIDVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGQ3YTUyO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogLTVweDtcclxuICAgIHRvcDogLTVweDtcclxuICAgICY6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzhiMTQ0O1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuLmNvbnRlbnQtaW5mbyB7XHJcbiAgYm9yZGVyLXRvcDogMXB4IGRvdHRlZCAjODI4MjgyO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQgIzgyODI4MjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICYgPiBkaXYge1xyXG4gICAgZmxleDogMSAxIDUwJTtcclxuICB9XHJcbiAgLmxlZnQtc2lkZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgLmltZyB7XHJcbiAgICAgIG1heC13aWR0aDogODBweDtcclxuICAgIH1cclxuXHJcbiAgICAubGVmdC1zaWRlLWluZm8ge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbiAgICAgIGgzIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICAgIGNvbG9yOiAjMjIyO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcclxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICB9XHJcbiAgICAgIGIge1xyXG4gICAgICAgIGNvbG9yOiAjMGQ3YTUyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgfVxyXG4gICAgICBzcGFuIHtcclxuICAgICAgICBjb2xvcjogIzY2NjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAucmlnaHQtc2lkZSB7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDIwcHggMCAwO1xyXG4gICAgLnRvdGFsLXF1YW50aXR5IHtcclxuICAgICAgICBjb2xvcjogYmx1ZTtcclxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmluZm8tcHJpY2Uge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbn1cclxuLmxlZnQtc2lkZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLmJ0bi13cmFwe1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAxMHB4IDA7XHJcbn1cclxuLmJ0bi10by1zaG9wIHtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgYmFja2dyb3VuZDogIzIyMjtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIHBhZGRpbmctbGVmdDogMjVweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDI1cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogOXB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDlweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgJjpob3ZlcntcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMDg0YzMzO1xyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 4997:
/*!*************************************************************************!*\
  !*** ./src/app/shared/dialog-of-product/dialog-of-product.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DialogOfProductComponent": () => (/* binding */ DialogOfProductComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/cart.service */ 910);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-quill */ 3115);








function DialogOfProductComponent_div_0_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 28)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("-", ctx_r1.discountProcent, "%");
  }
}
function DialogOfProductComponent_div_0_span_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, ctx_r2.measurePrice));
  }
}
function DialogOfProductComponent_div_0_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, ctx_r4.product.price));
  }
}
function DialogOfProductComponent_div_0_div_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u0415\u0421\u0422\u042C \u041E\u041F\u0426\u0418\u0418!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function DialogOfProductComponent_div_0_ng_template_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, "\u041D\u0415\u0422 \u041E\u041F\u0426\u0418\u0419!");
  }
}
function DialogOfProductComponent_div_0_li_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li")(1, "div", 29)(2, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function DialogOfProductComponent_div_0_li_32_Template_input_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r10.measureQantity = $event);
    })("change", function DialogOfProductComponent_div_0_li_32_Template_input_change_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11);
      const option_r9 = restoredCtx.$implicit;
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r12.onChange(option_r9));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const option_r9 = ctx.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r8.measureQantity)("value", option_r9.measureQantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", option_r9.measureQantity, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](option_r9.measureValue);
  }
}
function DialogOfProductComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "div", 1)(2, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "x");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3)(5, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, DialogOfProductComponent_div_0_div_6_Template, 3, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "quill-view-html", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 8)(10, "div", 9)(11, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 10)(14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 11)(19, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, DialogOfProductComponent_div_0_span_22_Template, 3, 3, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, DialogOfProductComponent_div_0_ng_template_23_Template, 3, 3, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](27, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, DialogOfProductComponent_div_0_div_28_Template, 2, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, DialogOfProductComponent_div_0_ng_template_29_Template, 1, 0, "ng-template", null, 16, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "ul", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, DialogOfProductComponent_div_0_li_32_Template, 7, 4, "li", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 19)(34, "div", 20)(35, "div", 21)(36, "div")(37, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "\u041A\u043E\u043B-\u0432\u043E:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DialogOfProductComponent_div_0_Template_button_click_39_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r13.decreaseQuantity());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function DialogOfProductComponent_div_0_Template_input_ngModelChange_42_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r15.quantity = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DialogOfProductComponent_div_0_Template_button_click_43_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r16.increaseQuantity());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div")(47, "button", 26)(48, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "favorite_border");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "\u0412 \u0441\u043F\u0438\u0441\u043E\u043A \u0436\u0435\u043B\u0430\u0435\u043C\u043E\u0433\u043E ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div")(52, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DialogOfProductComponent_div_0_Template_button_click_52_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r17.addProduct(ctx_r17.product));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, " \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0432 \u043A\u043E\u0440\u0437\u0438\u043D\u0443 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
  }
  if (rf & 2) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](24);
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](30);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.discountProcent);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("content", ctx_r0.product.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.product.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.product.category === "Fruits" ? "\u0424\u0440\u0443\u043A\u0442\u044B" : ctx_r0.product.category === "Vegetable" ? "\u041E\u0432\u043E\u0449\u0438" : ctx_r0.product.category === "Juices" ? "\u0421\u043E\u043A\u0438" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.product.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.measurePrice)("ngIfElse", _r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](27, 12, ctx_r0.regularPrice));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.product.options)("ngIfElse", _r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.product.options);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.quantity);
  }
}
class DialogOfProductComponent {
  constructor(product, cartService) {
    this.product = product;
    this.cartService = cartService;
    //product:any
    this.quantity = 1;
    this.measurePrice = null;
    this.regularPrice = 0;
    this.discountProcent = 0;
  }
  ngOnInit() {
    if (this.product.options) {
      this.measureQantity = this.product.options[0].measureQantity;
      this.measurePrice = this.product.options[0].measurePrice;
      this.selectedOptions = {
        measurePrice: this.product.options[0].measurePrice,
        measureQantity: this.product.options[0].measureQantity,
        measureValue: this.product.options[0].measureValue
      };
      if (this.measurePrice) {
        this.regularPrice = this.measurePrice * this.product.discount;
      }
    }
    this.regularPrice = this.product.price * this.product.discount;
    this.discountProcent = Math.trunc(+this.product.discount * 100 - 100);
  }
  onChange(option) {
    this.measurePrice = option.measurePrice;
    this.selectedOptions = option;
    console.log(this.selectedOptions);
    if (this.measurePrice !== null && this.product.discount !== undefined) {
      this.regularPrice = this.measurePrice * +this.product.discount;
    }
  }
  decreaseQuantity() {
    if (this.quantity !== undefined && this.quantity > 1) {
      this.quantity--;
    }
  }
  increaseQuantity() {
    if (this.quantity !== undefined) {
      this.quantity++;
    }
  }
  addProduct(product) {
    const cartProduct = {
      ...product,
      options: this.selectedOptions,
      price: this.measurePrice ? this.measurePrice : product.price,
      quantity: this.quantity
    };
    console.log(cartProduct);
    this.cartService.addProductToCart(cartProduct);
    this.quantity = 1;
  }
}
DialogOfProductComponent.ɵfac = function DialogOfProductComponent_Factory(t) {
  return new (t || DialogOfProductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_0__.CartService));
};
DialogOfProductComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: DialogOfProductComponent,
  selectors: [["app-dialog-of-product"]],
  decls: 1,
  vars: 1,
  consts: [[4, "ngIf"], [1, "product"], ["mat-dialog-close", "", 1, "btn-back"], [1, "container"], [1, "content-wrapper"], ["class", "bage", 4, "ngIf"], [1, "image"], ["styles", "padding: 0", 3, "content"], [1, "content"], [1, "title"], [1, "categories"], [1, "description"], [1, "price"], [4, "ngIf", "ngIfElse"], ["productPrice", ""], [1, "regular-price"], ["nonOption", ""], [1, "option-wrapper"], [4, "ngFor", "ngForOf"], [1, "product-add-to-cart"], [1, "product-quantity"], [1, "input-group"], [1, "input-label"], [1, "btn-dec", 3, "click"], ["type", "number", "oninput", "if(this.value < 1) this.value = 1", 3, "ngModel", "ngModelChange"], [1, "btn-inc", 3, "click"], [1, "addToWishlist"], [1, "btn-add-to-cart", 3, "click"], [1, "bage"], [1, "input-options"], ["type", "radio", 3, "ngModel", "value", "ngModelChange", "change"], [1, "option-quantity"]],
  template: function DialogOfProductComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, DialogOfProductComponent_div_0_Template, 54, 14, "div", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.product);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogClose, ngx_quill__WEBPACK_IMPORTED_MODULE_6__.QuillViewHTMLComponent, _angular_common__WEBPACK_IMPORTED_MODULE_3__.CurrencyPipe],
  styles: [".product[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.btn-back[_ngcontent-%COMP%] {\n  padding: 5px 10px;\n  border-radius: 50px;\n  border: none;\n  background-color: #0d7a52;\n  color: #fff;\n  cursor: pointer;\n  position: absolute;\n  right: -11px;\n  top: -50px;\n}\n.btn-back[_ngcontent-%COMP%]:hover {\n  background-color: #78b144;\n}\n\n.content-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 40px;\n  margin-top: 40px;\n  margin-bottom: 40px;\n}\n\n.image[_ngcontent-%COMP%], .content[_ngcontent-%COMP%] {\n  flex: 1 1 50%;\n}\n\n.content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.categories[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-right: 50px;\n}\n\n.categories[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #666;\n  font-weight: 600;\n  font-size: 12px;\n}\n\n.price[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 3rem;\n  font-weight: 800;\n  color: #0d7a52;\n  line-height: 1;\n}\n.price[_ngcontent-%COMP%]   .regular-price[_ngcontent-%COMP%] {\n  margin-left: 40px;\n  font-size: 2rem;\n  color: #acacac;\n  text-decoration: line-through;\n  font-weight: 700;\n}\n\n.description[_ngcontent-%COMP%] {\n  margin: 25px 0;\n  color: #666;\n}\n\n.price[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n}\n\n.input-label[_ngcontent-%COMP%] {\n  color: #444;\n  text-transform: uppercase;\n  font-weight: 700;\n  font-size: 10px;\n  margin-bottom: 10px;\n  display: inline-block;\n}\n\n.product-quantity[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  margin-bottom: 40px;\n}\n\n.addToWishlist[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-left: 60px;\n  background-color: #f6f6f6;\n  border: 1px solid #ebebeb;\n  height: 40px;\n  line-height: 37px;\n  padding: 0 25px 0 15px;\n  border-radius: 3px;\n  margin-left: 60px;\n  font-size: 10px;\n  font-weight: 700;\n  color: #666;\n  text-transform: uppercase;\n  cursor: pointer;\n  transition: 0.2s ease-in-out;\n}\n.addToWishlist[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  transform: scale(0.6);\n  color: #0d7a52;\n}\n.addToWishlist[_ngcontent-%COMP%]:hover {\n  background-color: #0d7a52;\n  color: #fff;\n}\n.addToWishlist[_ngcontent-%COMP%]:hover   mat-icon[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\ninput[type=number][_ngcontent-%COMP%]::-webkit-outer-spin-button, input[type=number][_ngcontent-%COMP%]::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n}\n\ninput[type=number][_ngcontent-%COMP%], input[type=number][_ngcontent-%COMP%]:hover, input[type=number][_ngcontent-%COMP%]:focus {\n  -webkit-appearance: none;\n          appearance: none;\n  -moz-appearance: textfield;\n}\n\n.input-group[_ngcontent-%COMP%] {\n  width: 100px;\n  position: relative;\n  max-width: 200px;\n}\n.input-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  max-width: 50px;\n  margin-left: 37px;\n  color: #444;\n  height: 40px;\n  font-size: 14px;\n  border: 1px solid #ebebeb;\n  background-color: #f6f6f6;\n  text-align: center;\n  border-radius: 3px;\n  position: relative;\n  outline: none;\n}\n.input-group[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 40px;\n  border: 1px solid #ebebeb;\n  color: #989898;\n  background-color: #fff;\n  line-height: 1;\n  cursor: pointer;\n}\n.input-group[_ngcontent-%COMP%]   .btn-dec[_ngcontent-%COMP%] {\n  left: 0;\n}\n.input-group[_ngcontent-%COMP%]   .btn-inc[_ngcontent-%COMP%] {\n  right: -24px;\n}\n\n.btn-add-to-cart[_ngcontent-%COMP%] {\n  padding: 0 24px;\n  color: #fff;\n  font-size: 0.7rem;\n  font-weight: 800;\n  height: 50px;\n  line-height: 50px;\n  text-transform: uppercase;\n  font-family: \"Poppins\", sans-serif;\n  border: none;\n  width: 100%;\n  overflow: hidden;\n  border-radius: 50px;\n  background-color: #0d7a52;\n  cursor: pointer;\n  transition: 0.2s ease-in-out;\n}\n.btn-add-to-cart[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  background: #78b144;\n}\n\ninput[type=radio][_ngcontent-%COMP%] {\n  cursor: pointer;\n  -webkit-appearance: none;\n          appearance: none;\n  border: 1px solid #ebebeb;\n  padding: 0 7px;\n  width: 34px;\n  height: 34px;\n  outline: none;\n  border-width: 1px;\n  border-radius: 3px;\n}\n\ninput[type=radio][_ngcontent-%COMP%]:hover {\n  border-color: #000;\n  border-width: 3px;\n}\n\ninput[type=radio][_ngcontent-%COMP%]:checked {\n  border-color: #000;\n  border-width: 3px;\n}\n\n.input-options[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -7px;\n}\n\n.option-quantity[_ngcontent-%COMP%] {\n  font-size: 10px;\n}\n\n.option-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  padding-left: 0;\n  display: flex;\n  gap: 10px;\n}\n.option-wrapper[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  text-align: center;\n}\n\n.bage[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  z-index: 2;\n}\n.bage[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  background-color: #e85b40;\n  color: #fff;\n  padding: 5px 15px;\n  border-top-right-radius: 10px;\n  border-bottom-left-radius: 10px;\n  font-size: 11px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2RpYWxvZy1vZi1wcm9kdWN0L2RpYWxvZy1vZi1wcm9kdWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUFDRjtBQUFFO0VBQ0UseUJBQUE7QUFFSjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBOztFQUVFLGFBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtBQUNGOztBQUNBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUVGOztBQUNBO0VBQ0Usa0NBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQUVGO0FBREU7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtBQUdKOztBQUNBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7QUFFRjs7QUFDQTtFQUNFLG1CQUFBO0FBRUY7O0FBQ0E7RUFDRSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FBRUY7O0FBQ0E7RUFDRSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQUVGOztBQUNBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLDRCQUFBO0FBRUY7QUFBRTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtBQUVKO0FBQUU7RUFDRSx5QkFBQTtFQUNBLFdBQUE7QUFFSjtBQURJO0VBQ0UsV0FBQTtBQUdOOztBQUVBOztFQUVFLHdCQUFBO0FBQ0Y7O0FBRUE7OztFQUdFLHdCQUFBO1VBQUEsZ0JBQUE7RUFDQSwwQkFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFDRjtBQUNFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUFDSjtBQUNFO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQUNKO0FBRUU7RUFDRSxPQUFBO0FBQUo7QUFFRTtFQUNFLFlBQUE7QUFBSjs7QUFJQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0NBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSw0QkFBQTtBQURGO0FBRUU7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7QUFBSjs7QUFHQTtFQUNFLGVBQUE7RUFDQSx3QkFBQTtVQUFBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUFGOztBQUdBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtBQUFGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUdBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0FBQUY7O0FBRUE7RUFDRSxlQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtBQUVGO0FBREU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBR0o7O0FBQ0E7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtBQUVGO0FBREU7RUFDRSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLDZCQUFBO0VBQ0EsK0JBQUE7RUFDQSxlQUFBO0FBR0oiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZHVjdCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uYnRuLWJhY2sge1xyXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwZDdhNTI7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogLTExcHg7XHJcbiAgdG9wOiAtNTBweDtcclxuICAmOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzc4YjE0NDtcclxuICB9XHJcbn1cclxuXHJcbi5jb250ZW50LXdyYXBwZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ2FwOiA0MHB4O1xyXG4gIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxufVxyXG5cclxuLmltYWdlLFxyXG4uY29udGVudCB7XHJcbiAgZmxleDogMSAxIDUwJTtcclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5jYXRlZ29yaWVzIHNwYW4ge1xyXG4gIG1hcmdpbi1yaWdodDogNTBweDtcclxufVxyXG4uY2F0ZWdvcmllcyBzbWFsbCB7XHJcbiAgY29sb3I6ICM2NjY7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi5wcmljZSB7XHJcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogM3JlbTtcclxuICBmb250LXdlaWdodDogODAwO1xyXG4gIGNvbG9yOiAjMGQ3YTUyO1xyXG4gIGxpbmUtaGVpZ2h0OiAxO1xyXG4gIC5yZWd1bGFyLXByaWNlIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgY29sb3I6ICNhY2FjYWM7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgfVxyXG59XHJcblxyXG4uZGVzY3JpcHRpb24ge1xyXG4gIG1hcmdpbjogMjVweCAwO1xyXG4gIGNvbG9yOiAjNjY2O1xyXG59XHJcblxyXG4ucHJpY2Uge1xyXG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbn1cclxuXHJcbi5pbnB1dC1sYWJlbCB7XHJcbiAgY29sb3I6ICM0NDQ7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLnByb2R1Y3QtcXVhbnRpdHkge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbn1cclxuXHJcbi5hZGRUb1dpc2hsaXN0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWxlZnQ6IDYwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZWJlYmViO1xyXG4gIGhlaWdodDogNDBweDtcclxuICBsaW5lLWhlaWdodDogMzdweDtcclxuICBwYWRkaW5nOiAwIDI1cHggMCAxNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICBtYXJnaW4tbGVmdDogNjBweDtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBjb2xvcjogIzY2NjtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW4tb3V0O1xyXG5cclxuICBtYXQtaWNvbiB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNik7XHJcbiAgICBjb2xvcjogIzBkN2E1MjtcclxuICB9XHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGQ3YTUyO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBtYXQtaWNvbiB7XHJcbiAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuaW5wdXRbdHlwZT1cIm51bWJlclwiXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbixcclxuaW5wdXRbdHlwZT1cIm51bWJlclwiXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiB7XHJcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lOyAvLyBZZWFoLCB5ZWFoIGV2ZXJ5Ym9keSB3cml0ZSBhYm91dCBpdFxyXG59XHJcblxyXG5pbnB1dFt0eXBlPVwibnVtYmVyXCJdLFxyXG5pbnB1dFt0eXBlPVwibnVtYmVyXCJdOmhvdmVyLFxyXG5pbnB1dFt0eXBlPVwibnVtYmVyXCJdOmZvY3VzIHtcclxuICBhcHBlYXJhbmNlOiBub25lO1xyXG4gIC1tb3otYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xyXG59XHJcblxyXG4uaW5wdXQtZ3JvdXAge1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWF4LXdpZHRoOiAyMDBweDtcclxuXHJcbiAgaW5wdXQge1xyXG4gICAgbWF4LXdpZHRoOiA1MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDM3cHg7XHJcbiAgICBjb2xvcjogIzQ0NDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlYmViZWI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICB9XHJcbiAgYnV0dG9uIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlYmViZWI7XHJcbiAgICBjb2xvcjogIzk4OTg5ODtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBsaW5lLWhlaWdodDogMTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcblxyXG4gIC5idG4tZGVjIHtcclxuICAgIGxlZnQ6IDA7XHJcbiAgfVxyXG4gIC5idG4taW5jIHtcclxuICAgIHJpZ2h0OiAtMjRweDtcclxuICB9XHJcbn1cclxuXHJcbi5idG4tYWRkLXRvLWNhcnQge1xyXG4gIHBhZGRpbmc6IDAgMjRweDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LXNpemU6IDAuN3JlbTtcclxuICBmb250LXdlaWdodDogODAwO1xyXG4gIGhlaWdodDogNTBweDtcclxuICBsaW5lLWhlaWdodDogNTBweDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwZDdhNTI7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgJjpob3ZlciB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQ6ICM3OGIxNDQ7XHJcbiAgfVxyXG59XHJcbmlucHV0W3R5cGU9XCJyYWRpb1wiXSB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2ViZWJlYjtcclxuICBwYWRkaW5nOiAwIDdweDtcclxuICB3aWR0aDogMzRweDtcclxuICBoZWlnaHQ6IDM0cHg7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3JkZXItd2lkdGg6IDFweDtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJyYWRpb1wiXTpob3ZlciB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMDAwO1xyXG4gIGJvcmRlci13aWR0aDogM3B4O1xyXG59XHJcbmlucHV0W3R5cGU9XCJyYWRpb1wiXTpjaGVja2Vke1xyXG4gIGJvcmRlci1jb2xvcjogIzAwMDtcclxuICBib3JkZXItd2lkdGg6IDNweDtcclxufVxyXG5cclxuXHJcbi5pbnB1dC1vcHRpb25zIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAtN3B4O1xyXG59XHJcbi5vcHRpb24tcXVhbnRpdHkge1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxufVxyXG4ub3B0aW9uLXdyYXBwZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IDEwcHg7XHJcbiAgbGkge1xyXG4gICAgd2lkdGg6IDM0cHg7XHJcbiAgICBoZWlnaHQ6IDM0cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG59XHJcblxyXG4uYmFnZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMTBweDtcclxuICBsZWZ0OiAxMHB4O1xyXG4gIHotaW5kZXg6IDI7XHJcbiAgc3BhbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTg1YjQwO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiA1cHggMTVweDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 1899:
/*!*************************************************************!*\
  !*** ./src/app/shared/main-layout/main-layout.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainLayoutComponent": () => (/* binding */ MainLayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _alert_alert_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../alert/alert.component */ 8549);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/header/header.component */ 3646);




class MainLayoutComponent {}
MainLayoutComponent.ɵfac = function MainLayoutComponent_Factory(t) {
  return new (t || MainLayoutComponent)();
};
MainLayoutComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: MainLayoutComponent,
  selectors: [["app-main-layout"]],
  decls: 3,
  vars: 0,
  template: function MainLayoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-header")(1, "app-alert")(2, "router-outlet");
    }
  },
  dependencies: [_alert_alert_component__WEBPACK_IMPORTED_MODULE_0__.AlertComponent, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _components_header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
const environment = {
  production: true,
  apiKey: 'AIzaSyBHAxgUYAorZ-y4DCKdOG3dSIS6MqfN6Ko',
  fbDbUrl: 'https://greenbee-cb470-default-rtdb.firebaseio.com/'
};

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map