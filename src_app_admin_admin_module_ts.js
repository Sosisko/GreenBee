"use strict";
(self["webpackChunkangular_greenbee"] = self["webpackChunkangular_greenbee"] || []).push([["src_app_admin_admin_module_ts"],{

/***/ 9541:
/*!******************************************************!*\
  !*** ./src/app/admin/add-page/add-page.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddPageComponent": () => (/* binding */ AddPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_products_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/products.service */ 9531);
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/alert.service */ 5970);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-quill */ 3115);







function AddPageComponent_div_7_small_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u0412\u044B \u043D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u0432\u0432\u0435\u043B\u0438");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function AddPageComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AddPageComponent_div_7_small_1_Template, 2, 0, "small", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r0.form.get("title")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors["required"]);
  }
}
function AddPageComponent_div_16_small_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function AddPageComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AddPageComponent_div_16_small_1_Template, 2, 0, "small", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r1.form.get("description")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors["required"]);
  }
}
function AddPageComponent_div_27_small_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u0412\u044B\u0431\u0435\u0440\u0435\u0442\u0435 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044E \u0442\u043E\u0432\u0430\u0440\u0430");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function AddPageComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AddPageComponent_div_27_small_1_Template, 2, 0, "small", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r2.form.get("category")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors["required"]);
  }
}
function AddPageComponent_div_32_small_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u0412\u0430\u043C \u043D\u0443\u0436\u043D\u043E \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u0446\u0435\u043D\u0443");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function AddPageComponent_div_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AddPageComponent_div_32_small_1_Template, 2, 0, "small", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r3.form.get("price")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors["required"]);
  }
}
function AddPageComponent_div_91_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 49)(1, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AddPageComponent_div_91_Template_button_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11);
      const option_r9 = restoredCtx.$implicit;
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r10.delOption(option_r9));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "x");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "\u0426\u0435\u043D\u0430: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](11, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const option_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" \u0415\u0434. \u0438\u0437\u043C.: ", option_r9.measureQantity, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](option_r9.measureValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](11, 3, option_r9.measurePrice));
  }
}
const _c0 = function (a0) {
  return {
    invalid: a0
  };
};
class AddPageComponent {
  constructor(productsService, alertService) {
    this.productsService = productsService;
    this.alertService = alertService;
    this.submitted = false;
    this.options = [];
  }
  //Если ввести отрицательное число, оно автоматически заменяется на 1
  checkValue(event) {
    if (event.target.value < 0) {
      event.target.value = 0;
    }
  }
  ngOnInit() {
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
      title: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
      image: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
      description: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
      price: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
      discount: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(null),
      category: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
      measureValue: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(null),
      measureQantity: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(null),
      measurePrice: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(null)
    });
  }
  //Добавляем дополнительные параметры в продукт (мера, цена)
  addOption() {
    //Проверяем, если в массиве уже есть одна мера (Кг или Литры), то не даём добавить разные меры
    const measureValue = this.form.value.measureValue;
    const measureValueExists = this.options.some(option => option.measureValue !== measureValue);
    //Проверяем, если в масиве уже есть количество меры, то не даём добавить одинаковые значения меры
    const measureQantity = this.form.value.measureQantity;
    const measureQantityExists = this.options.some(option => option.measureQantity === measureQantity);
    if (measureValue && this.form.value.measurePrice > 0) {
      if (!measureQantityExists && !measureValueExists) {
        this.options.push({
          measureValue: this.form.value.measureValue,
          measureQantity: this.form.value.measureQantity,
          measurePrice: this.form.value.measurePrice
        });
        this.alertService.success('Опция добавлена');
      } else if (measureValueExists) {
        this.alertService.warning('Вы можете выбрать только один тип меры');
      } else if (measureQantityExists) {
        this.alertService.warning('Опция с таким параметром уже существует, выберите другой вес или объём');
      }
    } else {
      this.alertService.success('Введите все данные');
    }
  }
  //Удаляет опции
  delOption(option) {
    const optionIndex = this.options.indexOf(option);
    if (optionIndex !== -1) {
      this.options.splice(optionIndex, 1);
      this.alertService.danger('Опция удалена');
    }
  }
  //Метод очистки инпутов при нажатии на кнопку "Очистить"
  clearOption() {
    this.form.patchValue({
      measureValue: null,
      measureQantity: null,
      measurePrice: null
    });
  }
  submit() {
    if (this.form.invalid) {
      return;
    }
    this.submitted = true;
    const product = {
      title: this.form.value.title,
      image: this.form.value.image,
      description: this.form.value.description,
      price: this.options.length > 0 ? this.options[0].measurePrice : this.form.value.price,
      discount: this.form.value.discount,
      category: this.form.value.category,
      options: this.options,
      date: new Date()
    };
    this.productsService.addProduct(product).subscribe(() => {
      this.form.reset();
      this.submitted = false;
      this.options = [];
    });
    console.log(product);
    this.product = product;
  }
}
AddPageComponent.ɵfac = function AddPageComponent_Factory(t) {
  return new (t || AddPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_products_service__WEBPACK_IMPORTED_MODULE_0__.ProductsService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_1__.AlertService));
};
AddPageComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: AddPageComponent,
  selectors: [["app-add-page"]],
  decls: 94,
  vars: 19,
  consts: [[3, "formGroup", "ngSubmit"], [1, "form-control", 3, "ngClass"], ["for", "title"], ["id", "title", "type", "text", "formControlName", "title"], [4, "ngIf"], [1, "form-control"], ["formControlName", "image"], ["for", "description"], ["id", "description", "type", "text", "formControlName", "description"], ["for", "category"], ["id", "category", "formControlName", "category"], ["value", "Fruits"], ["value", "Vegetable"], ["value", "Juices"], ["for", "price"], ["id", "price", "type", "number", "formControlName", "price", 3, "change"], ["for", "discount"], ["id", "discount", "formControlName", "discount"], ["value", "null"], ["value", "1.05"], ["value", "1.1"], ["value", "1.15"], ["value", "1.2"], ["value", "1.25"], ["value", "1.3"], ["value", "1.35"], ["value", "1.4"], ["value", "1.45"], ["value", "1.5"], [1, "measure-option-wrapper"], [1, "measure-left-side"], [1, "measure-content"], ["for", "measureValue"], ["id", "measureValue", "formControlName", "measureValue"], ["value", "Kg"], ["value", "L"], ["formControlName", "measureQantity"], ["value", "1"], ["value", "2"], ["value", "5"], ["value", "10"], ["value", "20"], [1, "measure-price-content"], ["for", "measurePrice"], ["id", "measurePrice", "type", "number", "formControlName", "measurePrice", 3, "change"], ["type", "button", 3, "click"], [1, "measure-right-side"], ["class", "array-of-options", 4, "ngFor", "ngForOf"], ["type", "submit", 3, "disabled"], [1, "array-of-options"], [3, "click"]],
  template: function AddPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function AddPageComponent_Template_form_ngSubmit_0_listener() {
        return ctx.submit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0430");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 1)(4, "label", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0430:");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "input", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, AddPageComponent_div_7_Template, 2, 1, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 5)(9, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "\u0424\u043E\u0442\u043E:");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "quill-editor", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 1)(13, "label", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435:");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "input", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, AddPageComponent_div_16_Template, 2, 1, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 1)(18, "label", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F:");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "select", 10)(21, "option", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Fruits");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "option", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Vegetable");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "option", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Juices");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, AddPageComponent_div_27_Template, 2, 1, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 1)(29, "label", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "\u0426\u0435\u043D\u0430:");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "input", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function AddPageComponent_Template_input_change_31_listener($event) {
        return ctx.checkValue($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](32, AddPageComponent_div_32_Template, 2, 1, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "label", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "\u0421\u043A\u0438\u0434\u043A\u0430:");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "select", 17)(36, "option", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "0%");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "option", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "5%");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "option", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "10%");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "option", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "15%");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "option", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "20%");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "option", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "25%");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "option", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, "30%");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "option", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, "35%");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "option", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, "40%");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "option", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, "45%");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "option", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, "50%");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59, "*\u043D\u0435\u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "div", 29)(61, "div", 30)(62, "div", 31)(63, "label", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64, "\u041C\u0435\u0440\u0430:");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "select", 33)(66, "option", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](67, "Kg");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "option", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](69, "Liter");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "select", 36)(71, "option", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](72, "1");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "option", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](74, "2");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "option", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](76, "5");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "option", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](78, "10");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "option", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](80, "20");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](81, "div", 42)(82, "label", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](83, "\u0426\u0435\u043D\u0430 \u0437\u0430 \u0435\u0434.:");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "input", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function AddPageComponent_Template_input_change_84_listener($event) {
        return ctx.checkValue($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](85, "button", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AddPageComponent_Template_button_click_85_listener() {
        return ctx.addOption();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](86, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043E\u043F\u0446\u0438\u044E");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](87, "button", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AddPageComponent_Template_button_click_87_listener() {
        return ctx.clearOption();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](88, "\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](89, "div", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](90, " \u0414\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u043D\u044B\u0435 \u043E\u043F\u0446\u0438\u0438: (\u043D\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E) ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](91, AddPageComponent_div_91_Template, 12, 5, "div", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](92, "button", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](93, " \u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043F\u0440\u043E\u0434\u0443\u043A\u0442 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      let tmp_1_0;
      let tmp_2_0;
      let tmp_3_0;
      let tmp_4_0;
      let tmp_5_0;
      let tmp_6_0;
      let tmp_7_0;
      let tmp_8_0;
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.form);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](11, _c0, ((tmp_1_0 = ctx.form.get("title")) == null ? null : tmp_1_0.touched) && ((tmp_1_0 = ctx.form.get("title")) == null ? null : tmp_1_0.invalid)));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_2_0 = ctx.form.get("title")) == null ? null : tmp_2_0.touched) && ((tmp_2_0 = ctx.form.get("title")) == null ? null : tmp_2_0.invalid));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](13, _c0, ((tmp_3_0 = ctx.form.get("description")) == null ? null : tmp_3_0.touched) && ((tmp_3_0 = ctx.form.get("description")) == null ? null : tmp_3_0.invalid)));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_4_0 = ctx.form.get("description")) == null ? null : tmp_4_0.touched) && ((tmp_4_0 = ctx.form.get("description")) == null ? null : tmp_4_0.invalid));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](15, _c0, ((tmp_5_0 = ctx.form.get("category")) == null ? null : tmp_5_0.touched) && ((tmp_5_0 = ctx.form.get("category")) == null ? null : tmp_5_0.invalid)));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_6_0 = ctx.form.get("category")) == null ? null : tmp_6_0.touched) && ((tmp_6_0 = ctx.form.get("category")) == null ? null : tmp_6_0.invalid));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](17, _c0, ((tmp_7_0 = ctx.form.get("price")) == null ? null : tmp_7_0.touched) && ((tmp_7_0 = ctx.form.get("price")) == null ? null : tmp_7_0.invalid)));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_8_0 = ctx.form.get("price")) == null ? null : tmp_8_0.touched) && ((tmp_8_0 = ctx.form.get("price")) == null ? null : tmp_8_0.invalid));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](59);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.options);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.form.invalid || ctx.submitted);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, ngx_quill__WEBPACK_IMPORTED_MODULE_5__.QuillEditorComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.CurrencyPipe],
  styles: ["form[_ngcontent-%COMP%] {\n  max-width: 600px;\n  margin: 0 auto;\n  margin-top: 40px;\n  padding: 1rem;\n  border: #ccc 1px dotted;\n}\n\n.form-control[_ngcontent-%COMP%] {\n  display: block;\n  color: #888;\n  margin-bottom: 2rem;\n}\n\n.form-control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  padding: 0.4rem;\n  font-size: 1.2rem;\n  border: 1px solid #ccc;\n}\n\n.form-control.invalid[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border-color: red;\n}\n\n.form-control[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.form-control[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > small[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: red;\n  position: absolute;\n}\n\n.btn-login[_ngcontent-%COMP%] {\n  width: 100%;\n  color: #fff;\n  background-color: #0d7a52;\n  border-radius: 50px;\n  display: block;\n  padding: 8px;\n  border: none;\n  cursor: pointer;\n}\n\n.btn-login[_ngcontent-%COMP%]:hover {\n  background: #1a865f;\n}\n\n.btn-login.disabled[_ngcontent-%COMP%] {\n  background: #fff;\n  color: black;\n  border: 1px dashed gray;\n  cursor: no-drop;\n}\n\n.measure-option-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  border: 1px dashed gray;\n  margin-top: 30px;\n}\n.measure-option-wrapper[_ngcontent-%COMP%]   .measure-left-side[_ngcontent-%COMP%], .measure-option-wrapper[_ngcontent-%COMP%]   .measure-right-side[_ngcontent-%COMP%] {\n  max-width: 50%;\n  padding: 20px;\n}\n.measure-option-wrapper[_ngcontent-%COMP%]   .array-of-options[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 10px;\n  border: 1px solid gray;\n  margin-bottom: 10px;\n}\n.measure-option-wrapper[_ngcontent-%COMP%]   .array-of-options[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n.measure-option-wrapper[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n.measure-option-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  display: inline;\n  text-align: center;\n  width: 100px;\n  padding: 2px;\n  border-color: black;\n}\n.measure-option-wrapper[_ngcontent-%COMP%]   .measure-content[_ngcontent-%COMP%], .measure-option-wrapper[_ngcontent-%COMP%]   .measure-price-content[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 20px;\n}\n\nlabel[for=discount][_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n\n#discount[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWRtaW4vYWRkLXBhZ2UvYWRkLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQUNKOztBQUVFO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVFO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtBQUNKOztBQUdJO0VBQ0UsaUJBQUE7QUFBTjs7QUFJRTtFQUNFLGtCQUFBO0FBREo7O0FBSUU7RUFDRSxlQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FBREo7O0FBSUU7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBRE47O0FBR0U7RUFDSSxtQkFBQTtBQUFOOztBQUVFO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FBQ047O0FBRUU7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQUNKO0FBQ0k7RUFDRSxjQUFBO0VBQ0EsYUFBQTtBQUNOO0FBRUE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBQUY7QUFDRTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7QUFDSjtBQUdJO0VBQ0Usa0JBQUE7QUFETjtBQUdJO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQUROO0FBSUk7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQUZOOztBQU1FO0VBQ0Usa0JBQUE7QUFISjs7QUFLRTtFQUNFLGdCQUFBO0FBRkoiLCJzb3VyY2VzQ29udGVudCI6WyJmb3JtIHtcclxuICAgIG1heC13aWR0aDogNjAwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgYm9yZGVyOiAjY2NjIDFweCBkb3R0ZWQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb3JtLWNvbnRyb2wge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBjb2xvcjogIzg4ODtcclxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5mb3JtLWNvbnRyb2wgaW5wdXQge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDAuNHJlbTtcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICB9XHJcbiAgXHJcbiAgLmZvcm0tY29udHJvbC5pbnZhbGlkIHtcclxuICAgIGlucHV0IHtcclxuICAgICAgYm9yZGVyLWNvbG9yOiByZWQ7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5mb3JtLWNvbnRyb2wgPiBkaXYge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuICBcclxuICAuZm9ybS1jb250cm9sID4gZGl2ID4gc21hbGwge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB9XHJcbiAgXHJcbiAgLmJ0bi1sb2dpbiB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzBkN2E1MjtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIHBhZGRpbmc6IDhweDtcclxuICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIC5idG4tbG9naW46aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjMWE4NjVmO1xyXG4gIH1cclxuICAuYnRuLWxvZ2luLmRpc2FibGVke1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgIGJvcmRlcjogMXB4IGRhc2hlZCBncmF5O1xyXG4gICAgICBjdXJzb3I6IG5vLWRyb3A7XHJcbiAgfVxyXG5cclxuICAubWVhc3VyZS1vcHRpb24td3JhcHBlcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBib3JkZXI6IDFweCBkYXNoZWQgZ3JheTtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcblxyXG4gICAgLm1lYXN1cmUtbGVmdC1zaWRlLCAubWVhc3VyZS1yaWdodC1zaWRlIHtcclxuICAgICAgbWF4LXdpZHRoOiA1MCU7XHJcbiAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICB9XHJcblxyXG4uYXJyYXktb2Ytb3B0aW9uc3tcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgYnV0dG9uIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gIH1cclxufVxyXG5cclxuICAgIGxhYmVsIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgfVxyXG4gICAgaW5wdXQge1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICBwYWRkaW5nOiAycHg7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XHJcblxyXG4gICAgfVxyXG4gICAgLm1lYXN1cmUtY29udGVudCwgLm1lYXN1cmUtcHJpY2UtY29udGVudHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbGFiZWxbZm9yPVwiZGlzY291bnRcIl0ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIH1cclxuICAjZGlzY291bnQge1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICB9Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 3664:
/*!**************************************************************!*\
  !*** ./src/app/admin/admin-header/admin-header.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminHeaderComponent": () => (/* binding */ AdminHeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/auth.service */ 7556);



const _c0 = function () {
  return ["/"];
};
const _c1 = function () {
  return ["/admin", "dashboard"];
};
const _c2 = function () {
  return {
    exact: true
  };
};
const _c3 = function () {
  return ["/admin", "add"];
};
const _c4 = function () {
  return ["/admin", "orders"];
};
const _c5 = function () {
  return ["/admin", "login"];
};
class AdminHeaderComponent {
  constructor(router, auth) {
    this.router = router;
    this.auth = auth;
  }
  logout(event) {
    event.preventDefault();
    this.auth.logout();
    this.router.navigate(['/admin', 'login']);
  }
}
AdminHeaderComponent.ɵfac = function AdminHeaderComponent_Factory(t) {
  return new (t || AdminHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService));
};
AdminHeaderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: AdminHeaderComponent,
  selectors: [["app-admin-header"]],
  decls: 25,
  vars: 12,
  consts: [[1, "header"], [1, "container"], [1, "header-wrapper"], [1, "icon-logo"], [3, "routerLink"], ["src", "../../../assets/images/logo.png", "alt", "logo"], [2, "color", "aliceblue"], [1, "center-menu"], ["routerLinkActive", "active", 3, "routerLink", "routerLinkActiveOptions"], ["routerLinkActive", "active", 3, "routerLink"], ["href", "#", 3, "click"]],
  template: function AdminHeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h2", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Administrator Panel");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "nav", 7)(9, "ul")(10, "li")(11, "a", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Dashboard");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "li")(14, "a", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Add product");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "li")(17, "a", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Orders");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "li")(20, "a", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminHeaderComponent_Template_a_click_20_listener($event) {
        return ctx.logout($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Logout");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "li")(23, "a", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Login");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](6, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](7, _c1))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](8, _c2));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](9, _c3));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](10, _c4));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](11, _c5));
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkActive],
  styles: [".header[_ngcontent-%COMP%] {\n  background: #0d7a52;\n}\n\n.header-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.center-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  padding: 15px;\n  margin: 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.center-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n}\n.center-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 13px;\n  padding: 15.5px 10px;\n  color: #fff;\n  font-weight: 600;\n}\n.center-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #78b144;\n}\n.center-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  color: #78b144;\n}\n\n.right-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n.right-menu[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.cart-products-count[_ngcontent-%COMP%] {\n  position: absolute;\n  padding: 3px 6px;\n  background-color: #78b144;\n  border-radius: 68%;\n  font-size: 11px;\n  line-height: normal;\n  top: 2px;\n  right: -9px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWRtaW4vYWRtaW4taGVhZGVyL2FkbWluLWhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0FBQ0o7O0FBRUU7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUdJO0VBQ0UsYUFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQUFOO0FBRUk7RUFDRSx5QkFBQTtBQUFOO0FBRU07RUFDRSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFBUjtBQUNRO0VBQ0UsY0FBQTtBQUNWO0FBRU07RUFDRSxjQUFBO0FBQVI7O0FBTUk7RUFDRSxXQUFBO0FBSE47O0FBT0U7RUFDRSxrQkFBQTtBQUpKOztBQU9FO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtBQUpKIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMGQ3YTUyO1xyXG4gIH1cclxuICBcclxuICAuaGVhZGVyLXdyYXBwZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5jZW50ZXItbWVudSB7XHJcbiAgICB1bCB7XHJcbiAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgbGkge1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIFxyXG4gICAgICBhIHtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgcGFkZGluZzogMTUuNXB4IDEwcHg7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgIGNvbG9yOiAjNzhiMTQ0O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBhLmFjdGl2ZSB7XHJcbiAgICAgICAgY29sb3I6ICM3OGIxNDQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLnJpZ2h0LW1lbnUge1xyXG4gICAgYSB7XHJcbiAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAucmlnaHQtbWVudSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG4gIFxyXG4gIC5jYXJ0LXByb2R1Y3RzLWNvdW50IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHBhZGRpbmc6IDNweCA2cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzhiMTQ0O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNjglO1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgIHRvcDogMnB4O1xyXG4gICAgcmlnaHQ6IC05cHg7XHJcbiAgfVxyXG4gICJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 7095:
/*!***************************************!*\
  !*** ./src/app/admin/admin.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminModule": () => (/* binding */ AdminModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _shared_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/admin-layout/admin-layout.component */ 5695);
/* harmony import */ var _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login-page/login-page.component */ 9259);
/* harmony import */ var _add_page_add_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-page/add-page.component */ 9541);
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/dashboard.component */ 6662);
/* harmony import */ var _edit_page_edit_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit-page/edit-page.component */ 125);
/* harmony import */ var _orders_page_orders_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./orders-page/orders-page.component */ 3463);
/* harmony import */ var _admin_header_admin_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin-header/admin-header.component */ 3664);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/auth.service */ 7556);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _services_auth_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/auth.guard */ 8063);
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/products.service */ 9531);
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-quill */ 3115);
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../pipes/pipes.module */ 5503);
/* harmony import */ var _shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared/alert/alert.component */ 8549);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 2560);




















class AdminModule {}
AdminModule.ɵfac = function AdminModule_Factory(t) {
  return new (t || AdminModule)();
};
AdminModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({
  type: AdminModule
});
AdminModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({
  providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_7__.AuthService, _services_auth_guard__WEBPACK_IMPORTED_MODULE_8__.AuthGuard, _services_products_service__WEBPACK_IMPORTED_MODULE_9__.ProductsService],
  imports: [_shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_11__.AlertComponent, _angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_15__.HttpClientModule, _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_10__.PipesModule, ngx_quill__WEBPACK_IMPORTED_MODULE_16__.QuillModule.forRoot(), _angular_router__WEBPACK_IMPORTED_MODULE_17__.RouterModule.forChild([{
    path: '',
    component: _shared_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_0__.AdminLayoutComponent,
    children: [{
      path: '',
      redirectTo: '/admin/login',
      pathMatch: 'full'
    }, {
      path: 'login',
      component: _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_1__.LoginPageComponent
    }, {
      path: 'dashboard',
      component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__.DashboardComponent,
      canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_8__.AuthGuard]
    }, {
      path: 'add',
      component: _add_page_add_page_component__WEBPACK_IMPORTED_MODULE_2__.AddPageComponent,
      canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_8__.AuthGuard]
    }, {
      path: 'orders',
      component: _orders_page_orders_page_component__WEBPACK_IMPORTED_MODULE_5__.OrdersPageComponent,
      canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_8__.AuthGuard]
    }, {
      path: 'product/:id/edit',
      component: _edit_page_edit_page_component__WEBPACK_IMPORTED_MODULE_4__.EditPageComponent,
      canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_8__.AuthGuard]
    }]
  }])]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](AdminModule, {
    declarations: [_shared_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_0__.AdminLayoutComponent, _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_1__.LoginPageComponent, _add_page_add_page_component__WEBPACK_IMPORTED_MODULE_2__.AddPageComponent, _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__.DashboardComponent, _edit_page_edit_page_component__WEBPACK_IMPORTED_MODULE_4__.EditPageComponent, _orders_page_orders_page_component__WEBPACK_IMPORTED_MODULE_5__.OrdersPageComponent, _admin_header_admin_header_component__WEBPACK_IMPORTED_MODULE_6__.AdminHeaderComponent],
    imports: [_shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_11__.AlertComponent, _angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_15__.HttpClientModule, _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_10__.PipesModule, ngx_quill__WEBPACK_IMPORTED_MODULE_16__.QuillModule, _angular_router__WEBPACK_IMPORTED_MODULE_17__.RouterModule]
  });
})();

/***/ }),

/***/ 6662:
/*!********************************************************!*\
  !*** ./src/app/admin/dashboard/dashboard.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardComponent": () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_products_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/products.service */ 9531);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _pipes_search_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../pipes/search.pipe */ 2080);






function DashboardComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
const _c0 = function (a2) {
  return ["/admin", "product", a2, "edit"];
};
function DashboardComponent_ng_template_3_div_0_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "td", 7)(11, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, " Edit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "td", 7)(14, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DashboardComponent_ng_template_3_div_0_tr_17_Template_button_click_14_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8);
      const product_r5 = restoredCtx.$implicit;
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r7.remove(product_r5.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, " Delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const product_r5 = ctx.$implicit;
    const idx_r6 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](idx_r6 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](product_r5.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](product_r5.price);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](9, 5, product_r5.date, "medium"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](8, _c0, product_r5.id));
  }
}
function DashboardComponent_ng_template_3_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "table", 5)(2, "thead")(3, "tr")(4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0430");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "\u0426\u0435\u043D\u0430");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "\u0414\u0430\u0442\u0430");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "\u041F\u0440\u0430\u0432\u0438\u0442\u044C");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, DashboardComponent_ng_template_3_div_0_tr_17_Template, 16, 10, "tr", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](18, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](18, 1, ctx_r3.products, ctx_r3.productName));
  }
}
function DashboardComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, DashboardComponent_ng_template_3_div_0_Template, 19, 4, "div", 4);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.products == null ? null : ctx_r2.products.length);
  }
}
class DashboardComponent {
  constructor(productsService) {
    this.productsService = productsService;
    this.products = [];
    this.loading = true;
  }
  ngOnInit() {
    this.pSub = this.productsService.getAll().subscribe(products => {
      console.log(products);
      this.products = products;
      this.loading = false;
    });
  }
  ngOnDestroy() {
    if (this.pSub) {
      this.pSub.unsubscribe();
    }
    if (this.rSub) {
      this.rSub.unsubscribe();
    }
  }
  remove(id) {
    if (id !== undefined) {
      this.rSub = this.productsService.remove(id).subscribe(() => {
        this.products = this.products.filter(product => product.id !== id);
      });
    }
  }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) {
  return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_products_service__WEBPACK_IMPORTED_MODULE_0__.ProductsService));
};
DashboardComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: DashboardComponent,
  selectors: [["app-dashboard"]],
  decls: 5,
  vars: 3,
  consts: [[1, "search-products"], ["type", "text", "placeholder", "\u041D\u0430\u0439\u0442\u0438 \u043F\u0440\u043E\u0434\u0443\u043A\u0442...", 3, "ngModel", "ngModelChange"], [4, "ngIf", "ngIfElse"], ["productTable", ""], [4, "ngIf"], [1, "table"], [4, "ngFor", "ngForOf"], [1, "btn-wrapper"], [1, "btn", "btn-edit", 3, "routerLink"], [1, "btn", "btn-del", 3, "click"]],
  template: function DashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "input", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function DashboardComponent_Template_input_ngModelChange_1_listener($event) {
        return ctx.productName = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, DashboardComponent_div_2_Template, 3, 0, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, DashboardComponent_ng_template_3_Template, 1, 1, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.productName);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loading)("ngIfElse", _r1);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_3__.DatePipe, _pipes_search_pipe__WEBPACK_IMPORTED_MODULE_1__.SearchPipe],
  styles: [".search-products[_ngcontent-%COMP%] {\n  margin: 20px 0;\n}\n\n.table[_ngcontent-%COMP%] {\n  border: 1px solid #eee;\n  table-layout: fixed;\n  width: 100%;\n  margin: 0 auto;\n  margin-bottom: 20px;\n}\n\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-weight: bold;\n  padding: 5px;\n  background: #efefef;\n  border: 1px solid #dddddd;\n}\n\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 5px 10px;\n  border: 1px solid #eee;\n}\n\n.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(odd) {\n  background: #fff;\n}\n\n.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) {\n  background: #F7F7F7;\n}\n\n.btn-wrapper[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.btn[_ngcontent-%COMP%] {\n  border: none;\n  padding: 5px 15px;\n  border-radius: 2rem;\n  color: #eee;\n  cursor: pointer;\n}\n\n.btn-edit[_ngcontent-%COMP%] {\n  background: #12ab3a;\n}\n\n.btn-del[_ngcontent-%COMP%] {\n  background: red;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWRtaW4vZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGNBQUE7QUFDRDs7QUFFQTtFQUNDLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0csY0FBQTtFQUNILG1CQUFBO0FBQ0Q7O0FBQ0E7RUFDQyxpQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FBRUQ7O0FBQUE7RUFDQyxpQkFBQTtFQUNBLHNCQUFBO0FBR0Q7O0FBREE7RUFDQyxnQkFBQTtBQUlEOztBQUZBO0VBQ0MsbUJBQUE7QUFLRDs7QUFEQTtFQUNDLGtCQUFBO0FBSUQ7O0FBRkE7RUFDQyxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBS0Q7O0FBRkE7RUFDQyxtQkFBQTtBQUtEOztBQUZBO0VBQ0MsZUFBQTtBQUtEIiwic291cmNlc0NvbnRlbnQiOlsiLnNlYXJjaC1wcm9kdWN0cyB7XHJcblx0bWFyZ2luOiAyMHB4IDA7XHJcbn1cclxuXHJcbi50YWJsZXtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xyXG5cdHRhYmxlLWxheW91dDogZml4ZWQ7XHJcblx0d2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuXHRtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcbi50YWJsZSB0aCB7XHJcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0cGFkZGluZzogNXB4O1xyXG5cdGJhY2tncm91bmQ6ICNlZmVmZWY7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgI2RkZGRkZDtcclxufVxyXG4udGFibGUgdGR7XHJcblx0cGFkZGluZzogNXB4IDEwcHg7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgI2VlZTtcclxufVxyXG4udGFibGUgdGJvZHkgdHI6bnRoLWNoaWxkKG9kZCl7XHJcblx0YmFja2dyb3VuZDogI2ZmZjtcclxufVxyXG4udGFibGUgdGJvZHkgdHI6bnRoLWNoaWxkKGV2ZW4pe1xyXG5cdGJhY2tncm91bmQ6ICNGN0Y3Rjc7XHJcbn1cclxuXHJcblxyXG4uYnRuLXdyYXBwZXIge1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uYnRue1xyXG5cdGJvcmRlcjogbm9uZTtcclxuXHRwYWRkaW5nOiA1cHggMTVweDtcclxuXHRib3JkZXItcmFkaXVzOiAycmVtO1xyXG5cdGNvbG9yOiAjZWVlO1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmJ0bi1lZGl0IHtcclxuXHRiYWNrZ3JvdW5kOiAjMTJhYjNhO1xyXG59XHJcblxyXG4uYnRuLWRlbCB7XHJcblx0YmFja2dyb3VuZDogcmVkO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 125:
/*!********************************************************!*\
  !*** ./src/app/admin/edit-page/edit-page.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditPageComponent": () => (/* binding */ EditPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 2673);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_services_products_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/products.service */ 9531);
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/alert.service */ 5970);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-quill */ 3115);









function EditPageComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function EditPageComponent_ng_template_1_div_7_small_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u0412\u044B \u043D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u0432\u0432\u0435\u043B\u0438");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function EditPageComponent_ng_template_1_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, EditPageComponent_ng_template_1_div_7_small_1_Template, 2, 0, "small", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r3.form.get("title")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors["required"]);
  }
}
function EditPageComponent_ng_template_1_div_16_small_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function EditPageComponent_ng_template_1_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, EditPageComponent_ng_template_1_div_16_small_1_Template, 2, 0, "small", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r4.form.get("description")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors["required"]);
  }
}
function EditPageComponent_ng_template_1_div_27_small_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u0412\u044B\u0431\u0435\u0440\u0435\u0442\u0435 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044E \u0442\u043E\u0432\u0430\u0440\u0430");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function EditPageComponent_ng_template_1_div_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, EditPageComponent_ng_template_1_div_27_small_1_Template, 2, 0, "small", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r5.form.get("category")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors["required"]);
  }
}
function EditPageComponent_ng_template_1_div_32_small_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u0412\u0430\u043C \u043D\u0443\u0436\u043D\u043E \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u0446\u0435\u043D\u0443");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function EditPageComponent_ng_template_1_div_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, EditPageComponent_ng_template_1_div_32_small_1_Template, 2, 0, "small", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r6.form.get("price")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors["required"]);
  }
}
function EditPageComponent_ng_template_1_div_91_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 52)(1, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EditPageComponent_ng_template_1_div_91_Template_button_click_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14);
      const option_r12 = restoredCtx.$implicit;
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r13.delOption(option_r12, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "x");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " \u0426\u0435\u043D\u0430: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](11, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const option_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" \u0415\u0434. \u0438\u0437\u043C.: ", option_r12.measureQantity, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](option_r12.measureValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](11, 3, option_r12.measurePrice));
  }
}
const _c0 = function (a0) {
  return {
    invalid: a0
  };
};
function EditPageComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function EditPageComponent_ng_template_1_Template_form_ngSubmit_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r16);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r15.submit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0430");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3)(4, "label", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0430:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, EditPageComponent_ng_template_1_div_7_Template, 2, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 7)(9, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "\u0424\u043E\u0442\u043E:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "quill-editor", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 3)(13, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, EditPageComponent_ng_template_1_div_16_Template, 2, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 3)(18, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "select", 13)(21, "option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Fruits");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Vegetable");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Juices");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, EditPageComponent_ng_template_1_div_27_Template, 2, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 3)(29, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "\u0426\u0435\u043D\u0430:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function EditPageComponent_ng_template_1_Template_input_change_31_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r16);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r17.checkValue($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](32, EditPageComponent_ng_template_1_div_32_Template, 2, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "\u0421\u043A\u0438\u0434\u043A\u0430:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "select", 20)(36, "option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "0%");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "5%");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "10%");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "15%");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "20%");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "25%");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, "30%");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, "35%");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, "40%");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, "45%");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, "50%");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59, "*\u043D\u0435\u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "div", 32)(61, "div", 33)(62, "div", 34)(63, "label", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64, "\u041C\u0435\u0440\u0430:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "select", 36)(66, "option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](67, "Kg");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](69, "Liter");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "select", 39)(71, "option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](72, "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](74, "2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](76, "5");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](78, "10");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "option", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](80, "20");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](81, "div", 45)(82, "label", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](83, "\u0426\u0435\u043D\u0430 \u0437\u0430 \u0435\u0434.:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "input", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function EditPageComponent_ng_template_1_Template_input_change_84_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r16);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r18.checkValue($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](85, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EditPageComponent_ng_template_1_Template_button_click_85_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r16);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r19.addOption());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](86, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043E\u043F\u0446\u0438\u044E");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](87, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EditPageComponent_ng_template_1_Template_button_click_87_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r16);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r20.clearOption());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](88, "\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](89, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](90, " \u0414\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u043D\u044B\u0435 \u043E\u043F\u0446\u0438\u0438: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](91, EditPageComponent_ng_template_1_div_91_Template, 12, 5, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](92, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](93, " \u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C \u043F\u0440\u043E\u0434\u0443\u043A\u0442 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    let tmp_1_0;
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    let tmp_7_0;
    let tmp_8_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r2.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](11, _c0, ((tmp_1_0 = ctx_r2.form.get("title")) == null ? null : tmp_1_0.touched) && ((tmp_1_0 = ctx_r2.form.get("title")) == null ? null : tmp_1_0.invalid)));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_2_0 = ctx_r2.form.get("title")) == null ? null : tmp_2_0.touched) && ((tmp_2_0 = ctx_r2.form.get("title")) == null ? null : tmp_2_0.invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](13, _c0, ((tmp_3_0 = ctx_r2.form.get("description")) == null ? null : tmp_3_0.touched) && ((tmp_3_0 = ctx_r2.form.get("description")) == null ? null : tmp_3_0.invalid)));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_4_0 = ctx_r2.form.get("description")) == null ? null : tmp_4_0.touched) && ((tmp_4_0 = ctx_r2.form.get("description")) == null ? null : tmp_4_0.invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](15, _c0, ((tmp_5_0 = ctx_r2.form.get("category")) == null ? null : tmp_5_0.touched) && ((tmp_5_0 = ctx_r2.form.get("category")) == null ? null : tmp_5_0.invalid)));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_6_0 = ctx_r2.form.get("category")) == null ? null : tmp_6_0.touched) && ((tmp_6_0 = ctx_r2.form.get("category")) == null ? null : tmp_6_0.invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](17, _c0, ((tmp_7_0 = ctx_r2.form.get("price")) == null ? null : tmp_7_0.touched) && ((tmp_7_0 = ctx_r2.form.get("price")) == null ? null : tmp_7_0.invalid)));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_8_0 = ctx_r2.form.get("price")) == null ? null : tmp_8_0.touched) && ((tmp_8_0 = ctx_r2.form.get("price")) == null ? null : tmp_8_0.invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r2.options);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r2.form.invalid || ctx_r2.submitted);
  }
}
class EditPageComponent {
  constructor(route, router, productService, alertService) {
    this.route = route;
    this.router = router;
    this.productService = productService;
    this.alertService = alertService;
    this.loading = true;
    this.submitted = false;
    this.options = [];
  }
  //Если ввести отрицательное число в опциях, оно автоматически заменяется на 1
  checkValue(event) {
    if (event.target.value < 0) {
      event.target.value = 0;
    }
  }
  ngOnInit() {
    this.route.params.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.switchMap)(params => {
      return this.productService.getById(params['id']);
    })).subscribe(product => {
      this.product = product;
      //console.log(this.product.options);
      const optionsFormArray = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormArray([]);
      if (this.product.options && this.product.options.length > 0) {
        this.product.options.map(option => {
          // console.log(option);
          const optionGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
            measureValue: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(option.measureValue),
            measureQantity: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(option.measureQantity),
            measurePrice: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(option.measurePrice)
          });
          optionsFormArray.push(optionGroup);
          this.options = optionsFormArray.value;
          //console.log(this.options);
        });
      } else {}
      this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
        title: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(this.product.title, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required),
        image: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(this.product.image, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required),
        description: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(this.product.description, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required),
        price: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(this.product.price, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required),
        discount: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(this.product.discount),
        category: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(this.product.category, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required),
        options: optionsFormArray,
        measureValue: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(),
        measureQantity: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(),
        measurePrice: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl()
        // measureValue: new FormControl(this.product.options.measureValue),
        // measureQantity: new FormControl(this.product.options.measureQantity),
        // measurePrice: new FormControl(this.product.options.measurePrice),
      });

      this.loading = false;
    });
  }
  submit() {
    if (this.form.invalid) {
      return;
    }
    this.submitted = true;
    this.productService.update({
      ...this.product,
      title: this.form.value.title,
      image: this.form.value.image,
      description: this.form.value.description,
      price: this.options.length > 0 ? this.options[0].measurePrice : this.form.value.price,
      discount: this.form.value.discount,
      category: this.form.value.category,
      options: this.options,
      date: new Date()
    }).subscribe(res => {
      this.form.reset();
      this.submitted = false;
      this.router.navigate(['/admin', 'dashboard']);
    });
  }
  //Добавляем дополнительные параметры в продукт (мера, цена)
  addOption() {
    if (!this.options) {
      this.options = [];
    }
    //Проверяем, если в массиве уже есть одна мера (Кг или Литры), то не даём добавить разные меры
    const measureValue = this.form.value.measureValue;
    const measureValueExists = this.options.some(option => option.measureValue !== measureValue);
    //Проверяем, если в масиве уже есть количество меры, то не даём добавить одинаковые значения меры
    const measureQantity = this.form.value.measureQantity;
    const measureQantityExists = this.options.some(option => option.measureQantity === measureQantity);
    if (measureValue && this.form.value.measurePrice > 0) {
      if (!measureQantityExists && !measureValueExists) {
        this.options.push({
          measureValue: this.form.value.measureValue,
          measureQantity: this.form.value.measureQantity,
          measurePrice: this.form.value.measurePrice
        });
        this.alertService.success('Опция добавлена');
      } else if (measureValueExists) {
        this.alertService.warning('Вы можете выбрать только один тип меры');
      } else if (measureQantityExists) {
        this.alertService.warning('Опция с таким параметром уже существует, выберите другой вес или объём');
      }
    } else {
      this.alertService.success('Введите все данные');
    }
  }
  //Удаляет опции
  delOption(option, event) {
    event.preventDefault();
    const optionIndex = this.options.indexOf(option);
    if (optionIndex !== -1) {
      this.options.splice(optionIndex, 1);
      this.alertService.danger('Опция удалена');
    }
  }
  //Метод очистки инпутов при нажатии на кнопку "Очистить"
  clearOption() {
    this.form.patchValue({
      measureValue: null,
      measureQantity: null,
      measurePrice: null
    });
  }
}
EditPageComponent.ɵfac = function EditPageComponent_Factory(t) {
  return new (t || EditPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_products_service__WEBPACK_IMPORTED_MODULE_0__.ProductsService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_1__.AlertService));
};
EditPageComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: EditPageComponent,
  selectors: [["app-edit-page"]],
  decls: 3,
  vars: 2,
  consts: [[4, "ngIf", "ngIfElse"], ["productForm", ""], [3, "formGroup", "ngSubmit"], [1, "form-control", 3, "ngClass"], ["for", "title"], ["id", "title", "type", "text", "formControlName", "title"], [4, "ngIf"], [1, "form-control"], ["for", "type"], ["formControlName", "image"], ["for", "description"], ["id", "description", "type", "text", "formControlName", "description"], ["for", "category"], ["formControlName", "category"], ["value", "Fruits"], ["value", "Vegetable"], ["value", "Juices"], ["for", "price"], ["id", "price", "type", "number", "formControlName", "price", 3, "change"], ["for", "discount"], ["id", "discount", "formControlName", "discount"], ["value", "null"], ["value", "1.05"], ["value", "1.1"], ["value", "1.15"], ["value", "1.2"], ["value", "1.25"], ["value", "1.3"], ["value", "1.35"], ["value", "1.4"], ["value", "1.45"], ["value", "1.5"], [1, "measure-option-wrapper"], [1, "measure-left-side"], [1, "measure-content"], ["for", "measureValue"], ["id", "measureValue", "formControlName", "measureValue"], ["value", "Kg"], ["value", "L"], ["formControlName", "measureQantity"], ["value", "1"], ["value", "2"], ["value", "5"], ["value", "10"], ["value", "20"], [1, "measure-price-content"], ["for", "measurePrice"], ["id", "measurePrice", "type", "number", "formControlName", "measurePrice", 3, "change"], ["type", "button", 3, "click"], [1, "measure-right-side"], ["class", "array-of-options", 4, "ngFor", "ngForOf"], ["type", "submit", 3, "disabled"], [1, "array-of-options"], [3, "click"]],
  template: function EditPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, EditPageComponent_div_0_Template, 3, 0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, EditPageComponent_ng_template_1_Template, 94, 19, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loading)("ngIfElse", _r1);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, ngx_quill__WEBPACK_IMPORTED_MODULE_7__.QuillEditorComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.CurrencyPipe],
  styles: ["form[_ngcontent-%COMP%] {\n  max-width: 600px;\n  margin: 0 auto;\n  margin-top: 40px;\n  padding: 1rem;\n  border: #ccc 1px dotted;\n}\n\n.form-control[_ngcontent-%COMP%] {\n  display: block;\n  color: #888;\n  margin-bottom: 2rem;\n}\n\n.form-control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  padding: 0.4rem;\n  font-size: 1.2rem;\n  border: 1px solid #ccc;\n}\n\n.form-control.invalid[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border-color: red;\n}\n\n.form-control[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.form-control[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > small[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: red;\n  position: absolute;\n}\n\n.btn-login[_ngcontent-%COMP%] {\n  width: 100%;\n  color: #fff;\n  background-color: #0d7a52;\n  border-radius: 50px;\n  display: block;\n  padding: 8px;\n  border: none;\n  cursor: pointer;\n}\n\n.btn-login[_ngcontent-%COMP%]:hover {\n  background: #1a865f;\n}\n\n.btn-login.disabled[_ngcontent-%COMP%] {\n  background: #fff;\n  color: black;\n  border: 1px dashed gray;\n  cursor: no-drop;\n}\n\n.measure-option-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  border: 1px dashed gray;\n  margin-top: 30px;\n}\n.measure-option-wrapper[_ngcontent-%COMP%]   .measure-left-side[_ngcontent-%COMP%], .measure-option-wrapper[_ngcontent-%COMP%]   .measure-right-side[_ngcontent-%COMP%] {\n  max-width: 50%;\n  padding: 20px;\n}\n.measure-option-wrapper[_ngcontent-%COMP%]   .array-of-options[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 10px;\n  border: 1px solid gray;\n  margin-bottom: 10px;\n}\n.measure-option-wrapper[_ngcontent-%COMP%]   .array-of-options[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n.measure-option-wrapper[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n.measure-option-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  display: inline;\n  text-align: center;\n  width: 100px;\n  padding: 2px;\n  border-color: black;\n}\n.measure-option-wrapper[_ngcontent-%COMP%]   .measure-content[_ngcontent-%COMP%], .measure-option-wrapper[_ngcontent-%COMP%]   .measure-price-content[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWRtaW4vZWRpdC1wYWdlL2VkaXQtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FBQ0o7O0FBRUU7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUU7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0FBQ0o7O0FBR0k7RUFDRSxpQkFBQTtBQUFOOztBQUlFO0VBQ0Usa0JBQUE7QUFESjs7QUFJRTtFQUNFLGVBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUFESjs7QUFJRTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFETjs7QUFHRTtFQUNJLG1CQUFBO0FBQU47O0FBRUU7RUFDSSxnQkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUFDTjs7QUFFRTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FBQ0o7QUFDSTtFQUNFLGNBQUE7RUFDQSxhQUFBO0FBQ047QUFFQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFBRjtBQUNFO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtBQUNKO0FBR0k7RUFDRSxrQkFBQTtBQUROO0FBR0k7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBRE47QUFJSTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBRk4iLCJzb3VyY2VzQ29udGVudCI6WyJmb3JtIHtcclxuICAgIG1heC13aWR0aDogNjAwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgYm9yZGVyOiAjY2NjIDFweCBkb3R0ZWQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb3JtLWNvbnRyb2wge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBjb2xvcjogIzg4ODtcclxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5mb3JtLWNvbnRyb2wgaW5wdXQge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDAuNHJlbTtcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICB9XHJcbiAgXHJcbiAgLmZvcm0tY29udHJvbC5pbnZhbGlkIHtcclxuICAgIGlucHV0IHtcclxuICAgICAgYm9yZGVyLWNvbG9yOiByZWQ7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5mb3JtLWNvbnRyb2wgPiBkaXYge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuICBcclxuICAuZm9ybS1jb250cm9sID4gZGl2ID4gc21hbGwge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB9XHJcbiAgXHJcbiAgLmJ0bi1sb2dpbiB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzBkN2E1MjtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIHBhZGRpbmc6IDhweDtcclxuICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIC5idG4tbG9naW46aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjMWE4NjVmO1xyXG4gIH1cclxuICAuYnRuLWxvZ2luLmRpc2FibGVke1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgIGJvcmRlcjogMXB4IGRhc2hlZCBncmF5O1xyXG4gICAgICBjdXJzb3I6IG5vLWRyb3A7XHJcbiAgfVxyXG5cclxuICAubWVhc3VyZS1vcHRpb24td3JhcHBlcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBib3JkZXI6IDFweCBkYXNoZWQgZ3JheTtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcblxyXG4gICAgLm1lYXN1cmUtbGVmdC1zaWRlLCAubWVhc3VyZS1yaWdodC1zaWRlIHtcclxuICAgICAgbWF4LXdpZHRoOiA1MCU7XHJcbiAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICB9XHJcblxyXG4uYXJyYXktb2Ytb3B0aW9uc3tcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgYnV0dG9uIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gIH1cclxufVxyXG5cclxuICAgIGxhYmVsIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgfVxyXG4gICAgaW5wdXQge1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICBwYWRkaW5nOiAycHg7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XHJcblxyXG4gICAgfVxyXG4gICAgLm1lYXN1cmUtY29udGVudCwgLm1lYXN1cmUtcHJpY2UtY29udGVudHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgfVxyXG4gIH0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 9259:
/*!**********************************************************!*\
  !*** ./src/app/admin/login-page/login-page.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageComponent": () => (/* binding */ LoginPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/auth.service */ 7556);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);






function LoginPageComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.message, "\n");
  }
}
function LoginPageComponent_div_8_small_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0415\u043C\u0430\u0439\u043B");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function LoginPageComponent_div_8_small_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u0412\u044B \u0432\u0432\u0435\u043B\u0438 \u043D\u0435 \u0415\u043C\u0430\u0439\u043B");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function LoginPageComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LoginPageComponent_div_8_small_1_Template, 2, 0, "small", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, LoginPageComponent_div_8_small_2_Template, 2, 0, "small", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    let tmp_0_0;
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r1.form.get("email")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx_r1.form.get("email")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["email"]);
  }
}
function LoginPageComponent_div_13_small_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function LoginPageComponent_div_13_small_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u041F\u0430\u0440\u043E\u043B\u044C \u0434\u043E\u043B\u0436\u0435\u043D \u0431\u044B\u0442\u044C \u043D\u0435 \u043C\u0435\u043D\u0435\u0435 6 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function LoginPageComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LoginPageComponent_div_13_small_1_Template, 2, 0, "small", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, LoginPageComponent_div_13_small_2_Template, 2, 0, "small", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    let tmp_0_0;
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r2.form.get("password")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx_r2.form.get("password")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["minlength"]);
  }
}
const _c0 = function (a0) {
  return {
    invalid: a0
  };
};
class LoginPageComponent {
  constructor(authService, router, route) {
    this.authService = authService;
    this.router = router;
    this.route = route;
    this.submitted = false;
  }
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['loginAgain']) {
        this.message = "Пожалуйста, введите данные";
      }
    });
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup({
      email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.email]),
      password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(6)])
    });
  }
  submit() {
    if (this.form.invalid) {
      return;
    }
    this.submitted = true;
    const user = {
      email: this.form.value.email,
      password: this.form.value.password
    };
    this.authService.login(user).subscribe(() => {
      this.form.reset();
      this.router.navigate(['/admin', 'dashboard']);
      this.submitted = false;
    });
  }
}
LoginPageComponent.ɵfac = function LoginPageComponent_Factory(t) {
  return new (t || LoginPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute));
};
LoginPageComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: LoginPageComponent,
  selectors: [["app-login-page"]],
  decls: 16,
  vars: 12,
  consts: [[1, "form-login-admin", 3, "formGroup", "ngSubmit"], [4, "ngIf"], [1, "form-control", 3, "ngClass"], ["for", "email"], ["id", "email", "type", "email", "formControlName", "email"], ["for", "password"], ["id", "password", "type", "password", "formControlName", "password"], ["type", "submit", 1, "btn-login", 3, "disabled", "ngClass"]],
  template: function LoginPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function LoginPageComponent_Template_form_ngSubmit_0_listener() {
        return ctx.submit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Login as Administrator");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, LoginPageComponent_div_3_Template, 2, 1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2)(5, "label", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Email:");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "input", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, LoginPageComponent_div_8_Template, 3, 2, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 2)(10, "label", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Password:");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "input", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, LoginPageComponent_div_13_Template, 3, 2, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Login");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      let tmp_2_0;
      let tmp_3_0;
      let tmp_4_0;
      let tmp_5_0;
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.form);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.message);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](8, _c0, ((tmp_2_0 = ctx.form.get("email")) == null ? null : tmp_2_0.touched) && ((tmp_2_0 = ctx.form.get("email")) == null ? null : tmp_2_0.invalid)));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_3_0 = ctx.form.get("email")) == null ? null : tmp_3_0.touched) && ((tmp_3_0 = ctx.form.get("email")) == null ? null : tmp_3_0.invalid));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](10, _c0, ((tmp_4_0 = ctx.form.get("password")) == null ? null : tmp_4_0.touched) && ((tmp_4_0 = ctx.form.get("password")) == null ? null : tmp_4_0.invalid)));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_5_0 = ctx.form.get("password")) == null ? null : tmp_5_0.touched) && ((tmp_5_0 = ctx.form.get("password")) == null ? null : tmp_5_0.invalid));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.form.invalid || ctx.submitted)("ngClass", ctx.form.invalid ? "disabled" : "");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName],
  styles: [".form-login-admin[_ngcontent-%COMP%] {\n  max-width: 600px;\n  margin: 0 auto;\n  margin-top: 40px;\n  padding: 1rem;\n  border: #ccc 1px dotted;\n}\n\n.form-control[_ngcontent-%COMP%] {\n  display: block;\n  color: #888;\n  margin-bottom: 2rem;\n}\n\n.form-control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  padding: 0.4rem;\n  font-size: 1.2rem;\n  border: 1px solid #ccc;\n}\n\n.form-control.invalid[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border-color: red;\n}\n\n.form-control[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.form-control[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > small[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: red;\n  position: absolute;\n}\n\n.btn-login[_ngcontent-%COMP%] {\n  width: 100%;\n  color: #fff;\n  background-color: #0d7a52;\n  border-radius: 50px;\n  display: block;\n  padding: 8px;\n  border: none;\n  cursor: pointer;\n}\n\n.btn-login[_ngcontent-%COMP%]:hover {\n  background: #1a865f;\n}\n\n.btn-login.disabled[_ngcontent-%COMP%] {\n  background: #fff;\n  color: black;\n  border: 1px dashed gray;\n  cursor: no-drop;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWRtaW4vbG9naW4tcGFnZS9sb2dpbi1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7QUFDRjs7QUFHRTtFQUNFLGlCQUFBO0FBQUo7O0FBSUE7RUFDRSxrQkFBQTtBQURGOztBQUlBO0VBQ0UsZUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQURGOztBQUlBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQURKOztBQUdBO0VBQ0ksbUJBQUE7QUFBSjs7QUFFQTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQUNKIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tbG9naW4tYWRtaW4ge1xyXG4gIG1heC13aWR0aDogNjAwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgbWFyZ2luLXRvcDogNDBweDtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG4gIGJvcmRlcjogI2NjYyAxcHggZG90dGVkO1xyXG59XHJcblxyXG4uZm9ybS1jb250cm9sIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBjb2xvcjogIzg4ODtcclxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG59XHJcblxyXG4uZm9ybS1jb250cm9sIGlucHV0IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAwLjRyZW07XHJcbiAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxufVxyXG5cclxuLmZvcm0tY29udHJvbC5pbnZhbGlkIHtcclxuICBpbnB1dCB7XHJcbiAgICBib3JkZXItY29sb3I6IHJlZDtcclxuICB9XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2wgPiBkaXYge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmZvcm0tY29udHJvbCA+IGRpdiA+IHNtYWxsIHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgY29sb3I6IHJlZDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuXHJcbi5idG4tbG9naW4ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwZDdhNTI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmJ0bi1sb2dpbjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMWE4NjVmO1xyXG59XHJcbi5idG4tbG9naW4uZGlzYWJsZWR7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgYm9yZGVyOiAxcHggZGFzaGVkIGdyYXk7XHJcbiAgICBjdXJzb3I6IG5vLWRyb3A7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 3463:
/*!************************************************************!*\
  !*** ./src/app/admin/orders-page/orders-page.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrdersPageComponent": () => (/* binding */ OrdersPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class OrdersPageComponent {}
OrdersPageComponent.ɵfac = function OrdersPageComponent_Factory(t) {
  return new (t || OrdersPageComponent)();
};
OrdersPageComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: OrdersPageComponent,
  selectors: [["app-orders-page"]],
  decls: 2,
  vars: 0,
  template: function OrdersPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "orders-page works!");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 5695:
/*!*********************************************************************!*\
  !*** ./src/app/admin/shared/admin-layout/admin-layout.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminLayoutComponent": () => (/* binding */ AdminLayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/alert/alert.component */ 8549);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _admin_header_admin_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../admin-header/admin-header.component */ 3664);




class AdminLayoutComponent {}
AdminLayoutComponent.ɵfac = function AdminLayoutComponent_Factory(t) {
  return new (t || AdminLayoutComponent)();
};
AdminLayoutComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: AdminLayoutComponent,
  selectors: [["app-admin-layout"]],
  decls: 4,
  vars: 0,
  consts: [[1, "container"]],
  template: function AdminLayoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-admin-header");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "router-outlet");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "app-alert");
    }
  },
  dependencies: [_shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_0__.AlertComponent, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _admin_header_admin_header_component__WEBPACK_IMPORTED_MODULE_1__.AdminHeaderComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 8063:
/*!****************************************!*\
  !*** ./src/app/services/auth.guard.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ 7556);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);



class AuthGuard {
  constructor(auth, router) {
    this.auth = auth;
    this.router = router;
  }
  canActivate(route, state) {
    if (!this.auth.isAuthenticated()) {
      this.auth.logout();
      this.router.navigate(['/admin', 'login'], {
        queryParams: {
          loginAgain: true
        }
      });
    }
    return true;
  }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) {
  return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
};
AuthGuard.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: AuthGuard,
  factory: AuthGuard.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 7556:
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 9337);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);




class AuthService {
  constructor(http) {
    this.http = http;
  }
  get token() {
    const expDate = new Date() ?? localStorage.getItem('fb-token-exp');
    if (new Date() > expDate) {
      this.logout();
      return null;
    }
    return localStorage.getItem('fb-token');
  }
  login(user) {
    user.returnSecureToken = true;
    return this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiKey}`, user).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)(this.setToken));
  }
  logout() {
    this.setToken(null);
  }
  isAuthenticated() {
    return !!this.token;
  }
  setToken(response) {
    if (response) {
      const expDate = new Date(new Date().getTime() + +response.expiresIn * 1000);
      localStorage.setItem('fb-token', response.idToken);
      localStorage.setItem('fb-token-exp', expDate.toString());
    } else {
      localStorage.clear();
    }
  }
}
AuthService.ɵfac = function AuthService_Factory(t) {
  return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
};
AuthService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: AuthService,
  factory: AuthService.ɵfac,
  providedIn: 'root'
});

/***/ })

}]);
//# sourceMappingURL=src_app_admin_admin_module_ts.js.map