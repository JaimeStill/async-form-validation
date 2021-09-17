(self["webpackChunkasync_form_validation"] = self["webpackChunkasync_form_validation"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 4422:
/*!************************************!*\
  !*** ./dist/core/fesm2015/core.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiValidator": () => (/* binding */ ApiValidator),
/* harmony export */   "AppService": () => (/* binding */ AppService),
/* harmony export */   "BackdropDirective": () => (/* binding */ BackdropDirective),
/* harmony export */   "BytesPipe": () => (/* binding */ BytesPipe),
/* harmony export */   "Components": () => (/* binding */ Components),
/* harmony export */   "ConfirmDialog": () => (/* binding */ ConfirmDialog),
/* harmony export */   "CoreModule": () => (/* binding */ CoreModule),
/* harmony export */   "CoreService": () => (/* binding */ CoreService),
/* harmony export */   "Dialogs": () => (/* binding */ Dialogs),
/* harmony export */   "Directives": () => (/* binding */ Directives),
/* harmony export */   "Forms": () => (/* binding */ Forms),
/* harmony export */   "GenerateOrgForm": () => (/* binding */ GenerateOrgForm),
/* harmony export */   "MaterialModule": () => (/* binding */ MaterialModule),
/* harmony export */   "OrgCardComponent": () => (/* binding */ OrgCardComponent),
/* harmony export */   "OrgEditorComponent": () => (/* binding */ OrgEditorComponent),
/* harmony export */   "OrgForm": () => (/* binding */ OrgForm),
/* harmony export */   "Pipes": () => (/* binding */ Pipes),
/* harmony export */   "SnackerService": () => (/* binding */ SnackerService),
/* harmony export */   "StorageState": () => (/* binding */ StorageState),
/* harmony export */   "ThemeService": () => (/* binding */ ThemeService),
/* harmony export */   "TruncatePipe": () => (/* binding */ TruncatePipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 781);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 2529);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout/flex */ 582);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/extended */ 9460);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/tooltip */ 298);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 1775);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 2249);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 9005);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 9606);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 2027);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ 3882);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/snack-bar */ 8456);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/cdk/overlay */ 5129);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/form-field */ 5788);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/input */ 4742);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/dialog */ 2213);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/core */ 2220);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/flex-layout */ 8662);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/flex-layout */ 7896);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 395);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/autocomplete */ 5924);
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/badge */ 330);
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/bottom-sheet */ 6322);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/button-toggle */ 3894);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/card */ 2118);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/checkbox */ 4058);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/chips */ 9243);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/datepicker */ 2937);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/divider */ 1124);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/expansion */ 2323);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/grid-list */ 5937);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/list */ 8417);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/menu */ 221);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/paginator */ 8021);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/progress-bar */ 365);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/progress-spinner */ 181);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/radio */ 5644);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/select */ 7007);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/sidenav */ 6608);
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/material/slider */ 3616);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/material/slide-toggle */ 2080);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/material/sort */ 5381);
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @angular/material/stepper */ 8210);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @angular/material/table */ 4302);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! @angular/material/tabs */ 9348);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! @angular/material/toolbar */ 4106);
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! @angular/material/tree */ 5473);


























































function OrgCardComponent_mat_icon_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "radio_button_checked");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}

function OrgCardComponent_mat_icon_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "radio_button_unchecked");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}

function OrgForm_mat_error_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}

function OrgForm_mat_error_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Name is already in use");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}

class OrgCardComponent {
  constructor() {
    this.selected = false;
    this.size = 320;
    this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.remove = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }

}

OrgCardComponent.ɵfac = function OrgCardComponent_Factory(t) {
  return new (t || OrgCardComponent)();
};

OrgCardComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: OrgCardComponent,
  selectors: [["org-card"]],
  inputs: {
    org: "org",
    selected: "selected",
    size: "size"
  },
  outputs: {
    select: "select",
    remove: "remove"
  },
  decls: 9,
  vars: 6,
  consts: [["fxLayout", "row", "fxLayoutAlign", "start center", 1, "m4", "elevated", "rounded", "p4", 3, "ngClass"], ["fxFlex", "", 1, "m4"], ["mat-icon-button", "", "color", "warn", "matTooltip", "Remove", 3, "click"], ["mat-icon-button", "", 3, "click"], ["matTooltip", "Deselect", "class", "color-primary", 4, "ngIf"], ["matTooltip", "Select", 4, "ngIf"], ["matTooltip", "Deselect", 1, "color-primary"], ["matTooltip", "Select"]],
  template: function OrgCardComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrgCardComponent_Template_button_click_3_listener() {
        return ctx.remove.emit(ctx.org);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "delete_outlined");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrgCardComponent_Template_button_click_6_listener() {
        return ctx.select.emit(ctx.org);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, OrgCardComponent_mat_icon_7_Template, 2, 0, "mat-icon", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, OrgCardComponent_mat_icon_8_Template, 2, 0, "mat-icon", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.size, "px");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.selected ? "card-outline-primary" : "card-outline-accent");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.org.name);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selected);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.selected);
    }
  },
  directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__.DefaultLayoutAlignDirective, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__.DefaultClassDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__.DefaultFlexDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButton, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__.MatTooltip, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf],
  encapsulation: 2
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrgCardComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'org-card',
      templateUrl: 'org-card.component.html'
    }]
  }], null, {
    org: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    selected: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    size: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    select: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    remove: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();

const GenerateOrgForm = (org, fb) => fb.group({
  id: [org.id],
  name: [org.name, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]
});

class StorageState {
  constructor(root, module, key) {
    this.hasState = false;

    this.name = (module, key) => `${this.root}-${module}-${key}`;

    this.addLocalItem = (module, key, value) => localStorage.setItem(this.name(module, key), JSON.stringify(value));

    this.getLocalItem = (module, key) => JSON.parse(localStorage.getItem(this.name(module, key)));

    this.removeLocalItem = (module, key) => localStorage.removeItem(this.name(module, key));

    this.addSessionItem = (module, key, value) => sessionStorage.setItem(this.name(module, key), JSON.stringify(value));

    this.getSessionItem = (module, key) => JSON.parse(sessionStorage.getItem(this.name(module, key)));

    this.removeSessionItem = (module, key) => sessionStorage.removeItem(this.name(module, key));

    this.updateState = (value, useSession = true) => {
      useSession ? this.addSessionItem(this.module, this.key, value) : this.addLocalItem(this.module, this.key, value);
      this.hasState = true;
    };

    this.getState = (useSession = true) => {
      const value = useSession ? this.getSessionItem(this.module, this.key) : this.getLocalItem(this.module, this.key);
      this.hasState = value ? true : false;
      return value;
    };

    this.clearState = (useSession = true) => {
      useSession ? this.removeSessionItem(this.module, this.key) : this.removeLocalItem(this.module, this.key);
      this.hasState = false;
    };

    this.root = root;
    this.module = module;
    this.key = key;
    this.getState();
  }

}

class ApiValidator {
  constructor() {
    this.setErrorState = (control, error, value) => {
      if (value) {
        const errors = control.errors ? Object.assign(Object.assign({}, control.errors), {
          [error]: value
        }) : {
          [error]: value
        };
        control.setErrors(errors);
      } else if (control.errors) {
        if (control.errors.hasOwnProperty(error)) delete control.errors[error];
        if (Object.keys(control.errors).length > 0) control.setErrors(control.errors);else control.setErrors(null);
      }
    };

    this.registerValidator = (validator, form, control, error = 'api') => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
      if (control.value) {
        const res = yield validator(form.value);
        this.setErrorState(control, error, res ? null : true);
      }

      control.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.debounceTime)(350), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.distinctUntilChanged)()).subscribe(value => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
        if (value) {
          const res = yield validator(form.value);
          this.setErrorState(control, error, res ? null : true);
        } else this.setErrorState(control, error);
      }));
    });
  }

}

ApiValidator.ɵfac = function ApiValidator_Factory(t) {
  return new (t || ApiValidator)();
};

ApiValidator.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: ApiValidator,
  factory: ApiValidator.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiValidator, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], null, null);
})();

const root = 'jps-async-val';
const module = 'organization';

class AppService {
  constructor() {
    this.db = new Database();
    this.organizations = new rxjs__WEBPACK_IMPORTED_MODULE_11__.BehaviorSubject(null);
    this.organizations$ = this.organizations.asObservable();

    this.clearOrganizations = () => this.organizations.next(null);

    this.generateState = org => new StorageState(root, module, (org === null || org === void 0 ? void 0 : org.id) ? org.id.toString() : 'new');

    this.getOrganizations = () => this.organizations.next(this.db.getOrganizations());

    this.validateOrgName = org => new Promise((resolve, reject) => {
      try {
        const res = this.db.validateOrgName(org);
        resolve(res);
      } catch (err) {
        reject(err);
      }
    });

    this.addOrganization = org => this.db.addOrganization(org);

    this.updateOrganization = org => this.db.updateOrganization(org);

    this.removeOrganization = org => this.db.removeOrganization(org);
  }

}

AppService.ɵfac = function AppService_Factory(t) {
  return new (t || AppService)();
};

AppService.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: AppService,
  factory: AppService.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], null, null);
})();

class Database {
  constructor() {
    this.db = {
      organizations: new Array({
        id: 1,
        name: 'Good Toys'
      }, {
        id: 2,
        name: 'Rapid Bikes'
      })
    };

    this.generateId = arr => arr.reduce((a, v) => a = v > a ? v : a) + 1;

    this.generateOrgId = () => this.generateId(this.db.organizations.map(x => x.id));

    this.getOrganizations = () => this.db.organizations;

    this.validateOrgName = org => this.db.organizations.filter(o => {
      var _a, _b;

      return o.id !== (org === null || org === void 0 ? void 0 : org.id) && ((_a = o.name) === null || _a === void 0 ? void 0 : _a.toLowerCase()) === ((_b = org === null || org === void 0 ? void 0 : org.name) === null || _b === void 0 ? void 0 : _b.toLowerCase());
    }).length < 1;

    this.addOrganization = org => {
      org.id = this.generateOrgId();
      this.db.organizations.push(org);
    };

    this.updateOrganization = org => {
      const index = this.db.organizations.findIndex(o => o.id === (org === null || org === void 0 ? void 0 : org.id));
      if (typeof index === 'number') this.db.organizations[index] = org;
    };

    this.removeOrganization = org => {
      var _a;

      const state = new StorageState(root, module, (_a = org === null || org === void 0 ? void 0 : org.id) === null || _a === void 0 ? void 0 : _a.toString());
      if (state.hasState) state.clearState();
      const index = this.db.organizations.findIndex(o => o.id === org.id);
      if (typeof index === 'number') this.db.organizations.splice(index, 1);
    };
  }

}

class CoreService {
  constructor() {
    this.ssnPattern = /^(?!(000|666|9))\d{3}-(?!(00))\d{2}-(?!(0000))\d{4}$/g;

    this.getUploadOptions = () => {
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpHeaders();
      headers.set('Accept', 'application/json');
      headers.delete('Content-Type');
      return headers;
    };

    this.getTextOptions = () => {
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpHeaders();
      headers.set('Content-Type', 'text/plain');
      headers.delete('Pragma');
      return headers;
    };

    this.urlEncode = value => {
      const regex = /[^a-zA-Z0-9-.]/gi;
      let newValue = value.replace(/\s/g, '-').toLowerCase();
      newValue = newValue.replace(regex, '');
      return newValue;
    };

    this.generateInputObservable = input => (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.fromEvent)(input.nativeElement, 'keyup').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.debounceTime)(300), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.map)(event => event.target.value), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.distinctUntilChanged)());
  }

}

CoreService.ɵfac = function CoreService_Factory(t) {
  return new (t || CoreService)();
};

CoreService.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: CoreService,
  factory: CoreService.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoreService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], null, null);
})();

class SnackerService {
  constructor(snackbar) {
    this.snackbar = snackbar;
    this.config = new _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_15__.MatSnackBarConfig();

    this.sendMessage = message => this.snackbar.open(message, 'Close', this.config);

    this.setClasses = classes => {
      classes.push('snacker');
      this.config.panelClass = classes;
    };

    this.sendColorMessage = (message, colors) => {
      this.setClasses(colors);
      this.sendMessage(message);
    };

    this.sendErrorMessage = message => {
      this.setClasses(['snacker-red']);
      this.sendMessage(message);
    };

    this.sendWarningMessage = message => {
      this.setClasses(['snacker-orange']);
      this.sendMessage(message);
    };

    this.sendSuccessMessage = message => {
      this.setClasses(['snacker-green']);
      this.sendMessage(message);
    };

    this.config.duration = 5000;
    this.config.panelClass = [];
  }

  setDuration(duration) {
    this.config.duration = duration;
  }

}

SnackerService.ɵfac = function SnackerService_Factory(t) {
  return new (t || SnackerService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_15__.MatSnackBar));
};

SnackerService.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: SnackerService,
  factory: SnackerService.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SnackerService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_15__.MatSnackBar
    }];
  }, null);
})();

class ThemeService {
  constructor(overlay) {
    this.overlay = overlay;
    this.isLight = true;

    this.setOverlayContainerTheme = () => {
      if (this.isLight) {
        this.overlay.getContainerElement().classList.remove('app-dark');
        this.overlay.getContainerElement().classList.add('app-light');
      } else {
        this.overlay.getContainerElement().classList.remove('app-light');
        this.overlay.getContainerElement().classList.add('app-dark');
      }
    };

    this.toggleTheme = () => {
      this.isLight = !this.isLight;
      this.setOverlayContainerTheme();
    };

    this.setOverlayContainerTheme();
  }

}

ThemeService.ɵfac = function ThemeService_Factory(t) {
  return new (t || ThemeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_16__.OverlayContainer));
};

ThemeService.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: ThemeService,
  factory: ThemeService.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ThemeService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_16__.OverlayContainer
    }];
  }, null);
})();

class OrgForm {
  constructor(validator, app) {
    this.validator = validator;
    this.app = app;
  }

  get name() {
    var _a;

    return (_a = this.form) === null || _a === void 0 ? void 0 : _a.get('name');
  }

  set data(data) {
    this.form = data;
    this.validator.registerValidator(this.app.validateOrgName, this.form, this.name);
  }

}

OrgForm.ɵfac = function OrgForm_Factory(t) {
  return new (t || OrgForm)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ApiValidator), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](AppService));
};

OrgForm.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: OrgForm,
  selectors: [["org-form"]],
  inputs: {
    data: "data"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([ApiValidator, AppService])],
  decls: 8,
  vars: 3,
  consts: [[3, "formGroup"], ["fxLayout", "column", "fxLayoutAlign", "start stretch"], [1, "my4"], ["formControlName", "name", "matInput", ""], [4, "ngIf"]],
  template: function OrgForm_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, OrgForm_mat_error_6_Template, 2, 0, "mat-error", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, OrgForm_mat_error_7_Template, 2, 0, "mat-error", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.name == null ? null : ctx.name.errors == null ? null : ctx.name.errors.required);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.name == null ? null : ctx.name.errors == null ? null : ctx.name.errors.api);
    }
  },
  directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__.DefaultLayoutAlignDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatLabel, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_material_input__WEBPACK_IMPORTED_MODULE_18__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatError],
  encapsulation: 2
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrgForm, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'org-form',
      templateUrl: 'org.form.html',
      providers: [ApiValidator, AppService]
    }]
  }], function () {
    return [{
      type: ApiValidator
    }, {
      type: AppService
    }];
  }, {
    data: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();

class OrgEditorComponent {
  constructor(fb, app) {
    this.fb = fb;
    this.app = app;
    this.label = 'Organization';
    this.size = 360;
    this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();

    this.load = () => {
      this.state = this.app.generateState(this.org);
      const value = this.state.hasState ? this.state.getState() : this.org;
      this.form = GenerateOrgForm(value, this.fb);
      this.form.valueChanges.subscribe(org => this.state.updateState(org));
    };

    this.clearCache = () => {
      this.form.reset(this.org);
      this.state.clearState();
    };

    this.save = () => {
      var _a, _b, _c;

      if ((_a = this.form) === null || _a === void 0 ? void 0 : _a.valid) {
        ((_c = (_b = this.form) === null || _b === void 0 ? void 0 : _b.value) === null || _c === void 0 ? void 0 : _c.id) ? this.app.updateOrganization(this.form.value) : this.app.addOrganization(this.form.value);
        this.clearCache();
        this.update.emit();
      }
    };
  }

  set data(data) {
    this.org = data;
    this.load();
  }

}

OrgEditorComponent.ɵfac = function OrgEditorComponent_Factory(t) {
  return new (t || OrgEditorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](AppService));
};

OrgEditorComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: OrgEditorComponent,
  selectors: [["org-editor"]],
  inputs: {
    data: "data",
    label: "label",
    size: "size",
    update: "update"
  },
  decls: 7,
  vars: 5,
  consts: [["fxLayout", "column", "fxLayoutAlign", "start stretch", 1, "p8", "elevated", "rounded", "card-outline-accent"], [3, "data"], ["fxLayout", "row", "fxLayoutAlign", "end center"], ["mat-stroked-button", "", 1, "mx4", 3, "disabled", "click"], ["mat-stroked-button", "", 1, "color-primary", "mx4", 3, "disabled", "click"]],
  template: function OrgEditorComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "org-form", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrgEditorComponent_Template_button_click_3_listener() {
        return ctx.clearCache();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Clear Cache ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrgEditorComponent_Template_button_click_5_listener() {
        return ctx.save();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Save ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.size, "px");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.form);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.state.hasState);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.form == null ? null : ctx.form.invalid);
    }
  },
  directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__.DefaultLayoutAlignDirective, OrgForm, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButton],
  encapsulation: 2
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrgEditorComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'org-editor',
      templateUrl: 'org-editor.component.html'
    }]
  }], function () {
    return [{
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder
    }, {
      type: AppService
    }];
  }, {
    data: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    label: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    size: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    update: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();

const Components = [OrgCardComponent, OrgEditorComponent];

class ConfirmDialog {
  constructor(data) {
    this.data = data;
  }

  ngOnInit() {
    if (this.data) {
      this.data.title = this.data.title ? this.data.title : 'Confirm Action?';
      this.data.content = this.data.content ? this.data.content : 'Are you sure you would like to perform this action?';
    } else {
      this.data = {
        title: 'Confirm Action?',
        content: 'Are you sure you would like to perform this action?'
      };
    }
  }

}

ConfirmDialog.ɵfac = function ConfirmDialog_Factory(t) {
  return new (t || ConfirmDialog)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__.MAT_DIALOG_DATA));
};

ConfirmDialog.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: ConfirmDialog,
  selectors: [["confirm-dialog"]],
  decls: 11,
  vars: 4,
  consts: [[1, "mat-typography"], ["mat-dialog-title", ""], ["mat-button", "", 3, "mat-dialog-close"], ["mat-button", "", "color", "warn", 3, "mat-dialog-close"]],
  template: function ConfirmDialog_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-dialog-content");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-dialog-actions");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Cancel");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Confirm");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data == null ? null : ctx.data.title);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data == null ? null : ctx.data.content);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", true);
    }
  },
  directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__.MatDialogActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__.MatDialogClose],
  encapsulation: 2
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfirmDialog, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'confirm-dialog',
      templateUrl: 'confirm.dialog.html'
    }]
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__.MAT_DIALOG_DATA]
      }]
    }];
  }, null);
})();

const Dialogs = [ConfirmDialog];

class BackdropDirective {
  constructor(el) {
    this.el = el;
    this.filters = 'blur(30px) brightness(1.8)';
    this.hover = 'blur(30px) brightness(1.8)';
  }

  ngOnInit() {
    this.el.nativeElement.style.backdropFilter = this.filters;
    this.el.nativeElement.classList.add('backdropped');
  }

  onMouseEnter() {
    this.el.nativeElement.style.backdropFilter = this.hover;
  }

  onMouseLeave() {
    this.el.nativeElement.style.backdropFilter = this.filters;
  }

}

BackdropDirective.ɵfac = function BackdropDirective_Factory(t) {
  return new (t || BackdropDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
};

BackdropDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: BackdropDirective,
  selectors: [["", "backdrop", ""]],
  hostBindings: function BackdropDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function BackdropDirective_mouseenter_HostBindingHandler() {
        return ctx.onMouseEnter();
      })("mouseleave", function BackdropDirective_mouseleave_HostBindingHandler() {
        return ctx.onMouseLeave();
      });
    }
  },
  inputs: {
    filters: "filters",
    hover: "hover"
  }
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BackdropDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[backdrop]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }];
  }, {
    filters: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    hover: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    onMouseEnter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['mouseenter']
    }],
    onMouseLeave: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['mouseleave']
    }]
  });
})();

const Directives = [BackdropDirective];
const Forms = [OrgForm];

class BytesPipe {
  transform(value, precision = 2) {
    if (!value || value === 0) return '0 Bytes';
    const k = 1024,
          dm = precision <= 0 ? 0 : precision || 2,
          sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
          i = Math.floor(Math.log(value) / Math.log(k));
    return parseFloat((value / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }

}

BytesPipe.ɵfac = function BytesPipe_Factory(t) {
  return new (t || BytesPipe)();
};

BytesPipe.ɵpipe = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
  name: "bytes",
  type: BytesPipe,
  pure: true
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BytesPipe, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe,
    args: [{
      name: 'bytes'
    }]
  }], null, null);
})();

class TruncatePipe {
  transform(value, limit = 50, ellipses = '...') {
    if (!value) return '';
    return value.length <= limit ? value : `${value.substr(0, limit)}${ellipses}`;
  }

}

TruncatePipe.ɵfac = function TruncatePipe_Factory(t) {
  return new (t || TruncatePipe)();
};

TruncatePipe.ɵpipe = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
  name: "truncate",
  type: TruncatePipe,
  pure: true
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TruncatePipe, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe,
    args: [{
      name: 'truncate'
    }]
  }], null, null);
})();

const Pipes = [BytesPipe, TruncatePipe];

class MaterialModule {}

MaterialModule.ɵfac = function MaterialModule_Factory(t) {
  return new (t || MaterialModule)();
};

MaterialModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: MaterialModule
});
MaterialModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_20__.DragDropModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_21__.FlexLayoutModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_22__.GridModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_23__.MatAutocompleteModule, _angular_material_badge__WEBPACK_IMPORTED_MODULE_24__.MatBadgeModule, _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_25__.MatBottomSheetModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButtonModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_26__.MatButtonToggleModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_27__.MatCardModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_28__.MatCheckboxModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_29__.MatChipsModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_30__.MatCommonModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_31__.MatDatepickerModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__.MatDialogModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_32__.MatDividerModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_33__.MatExpansionModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatFormFieldModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_34__.MatGridListModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_18__.MatInputModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_30__.MatLineModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_35__.MatListModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_36__.MatMenuModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_30__.MatNativeDateModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_30__.MatOptionModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_37__.MatPaginatorModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_38__.MatProgressBarModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_39__.MatProgressSpinnerModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_30__.MatPseudoCheckboxModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_40__.MatRadioModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_30__.MatRippleModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_41__.MatSelectModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_42__.MatSidenavModule, _angular_material_slider__WEBPACK_IMPORTED_MODULE_43__.MatSliderModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_44__.MatSlideToggleModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_15__.MatSnackBarModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_45__.MatSortModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_46__.MatStepperModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_47__.MatTableModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_48__.MatTabsModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_49__.MatToolbarModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__.MatTooltipModule, _angular_material_tree__WEBPACK_IMPORTED_MODULE_50__.MatTreeModule]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaterialModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      exports: [_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_20__.DragDropModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_21__.FlexLayoutModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_22__.GridModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_23__.MatAutocompleteModule, _angular_material_badge__WEBPACK_IMPORTED_MODULE_24__.MatBadgeModule, _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_25__.MatBottomSheetModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButtonModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_26__.MatButtonToggleModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_27__.MatCardModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_28__.MatCheckboxModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_29__.MatChipsModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_30__.MatCommonModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_31__.MatDatepickerModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__.MatDialogModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_32__.MatDividerModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_33__.MatExpansionModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatFormFieldModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_34__.MatGridListModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_18__.MatInputModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_30__.MatLineModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_35__.MatListModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_36__.MatMenuModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_30__.MatNativeDateModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_30__.MatOptionModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_37__.MatPaginatorModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_38__.MatProgressBarModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_39__.MatProgressSpinnerModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_30__.MatPseudoCheckboxModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_40__.MatRadioModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_30__.MatRippleModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_41__.MatSelectModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_42__.MatSidenavModule, _angular_material_slider__WEBPACK_IMPORTED_MODULE_43__.MatSliderModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_44__.MatSlideToggleModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_15__.MatSnackBarModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_45__.MatSortModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_46__.MatStepperModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_47__.MatTableModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_48__.MatTabsModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_49__.MatToolbarModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__.MatTooltipModule, _angular_material_tree__WEBPACK_IMPORTED_MODULE_50__.MatTreeModule]
    }]
  }], null, null);
})();

class CoreModule {}

CoreModule.ɵfac = function CoreModule_Factory(t) {
  return new (t || CoreModule)();
};

CoreModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: CoreModule
});
CoreModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, MaterialModule], MaterialModule]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoreModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      declarations: [...Components, ...Dialogs, ...Directives, ...Forms, ...Pipes],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, MaterialModule],
      exports: [...Components, ...Dialogs, ...Directives, ...Forms, ...Pipes, MaterialModule]
    }]
  }], null, null);
})();
/*
 * Public API Surface of core
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core */ 4422);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/extended */ 9460);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ 4106);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/flex */ 582);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 781);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 2529);









function AppComponent_mat_icon_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "brightness_5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_mat_icon_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "brightness_3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AppComponent {
    constructor(themer) {
        this.themer = themer;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](core__WEBPACK_IMPORTED_MODULE_1__.ThemeService)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 9, vars: 4, consts: [[1, "mat-typography", "mat-app-background", "app-frame", 3, "ngClass"], ["color", "primary", 1, "app-toolbar", "sticky-top"], ["fxFlex", ""], ["mat-icon-button", "", 3, "ngClass", "click"], [4, "ngIf"], [1, "app-container"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Async Form Validation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_4_listener() { return ctx.themer.toggleTheme(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AppComponent_mat_icon_5_Template, 2, 0, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AppComponent_mat_icon_6_Template, 2, 0, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "section", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.themer.isLight ? "app-light" : "app-dark");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.themer.isLight ? "color-amber" : "color-text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.themer.isLight);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.themer.isLight);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__.DefaultClassDirective, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__.MatToolbar, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__.DefaultFlexDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterOutlet, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon], encapsulation: 2 });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 1570);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ 718);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core */ 4422);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./routes */ 3529);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _routes_home_home_route__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routes/home/home.route */ 4765);










class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__.BrowserAnimationsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            core__WEBPACK_IMPORTED_MODULE_7__.CoreModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forRoot(_routes__WEBPACK_IMPORTED_MODULE_1__.Routes)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, _routes_home_home_route__WEBPACK_IMPORTED_MODULE_2__.HomeRoute], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__.BrowserAnimationsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
        core__WEBPACK_IMPORTED_MODULE_7__.CoreModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule] }); })();


/***/ }),

/***/ 4765:
/*!*******************************************!*\
  !*** ./src/app/routes/home/home.route.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeRoute": () => (/* binding */ HomeRoute)
/* harmony export */ });
/* harmony import */ var core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core */ 4422);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ 2213);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/flex */ 582);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/progress-bar */ 365);








function HomeRoute_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-progress-bar", 7);
  }
}

function HomeRoute_ng_container_6_ng_container_1_org_card_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "org-card", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("select", function HomeRoute_ng_container_6_ng_container_1_org_card_1_Template_org_card_select_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return ctx_r8.selectOrganization($event);
    })("remove", function HomeRoute_ng_container_6_ng_container_1_org_card_1_Template_org_card_remove_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return ctx_r10.removeOrganization($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const o_r7 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("org", o_r7)("selected", ctx_r6.selected(o_r7));
  }
}

function HomeRoute_ng_container_6_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeRoute_ng_container_6_ng_container_1_org_card_1_Template, 1, 2, "org-card", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const orgs_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", orgs_r3)("ngForTrackBy", ctx_r4.identify);
  }
}

function HomeRoute_ng_container_6_p_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " No Organizations Available ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}

function HomeRoute_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeRoute_ng_container_6_ng_container_1_Template, 2, 2, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomeRoute_ng_container_6_p_2_Template, 2, 0, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const orgs_r3 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (orgs_r3 == null ? null : orgs_r3.length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !((orgs_r3 == null ? null : orgs_r3.length) > 0));
  }
}

class HomeRoute {
  constructor(dialog, app) {
    this.dialog = dialog;
    this.app = app;

    this.new = () => {
      return {
        id: null,
        name: null
      };
    };

    this.selected = o => {
      var _a;

      return (o === null || o === void 0 ? void 0 : o.id) === ((_a = this.organization) === null || _a === void 0 ? void 0 : _a.id);
    };

    this.selectOrganization = o => this.organization = this.selected(o) ? this.new() : o;

    this.refresh = () => this.app.getOrganizations();

    this.removeOrganization = o => o && this.dialog.open(core__WEBPACK_IMPORTED_MODULE_1__.ConfirmDialog, {
      data: {
        title: 'Remove Organization',
        content: `Are you sure you want to remove organization ${o.name}?`
      },
      disableClose: true,
      autoFocus: false
    }).afterClosed().subscribe(res => {
      if (res) {
        if (this.selected(o)) this.selectOrganization(o);
        this.app.removeOrganization(o);
        this.app.getOrganizations();
      }
    });
  }

  ngOnInit() {
    this.refresh();
    this.organization = this.new();
  }

}

HomeRoute.ɵfac = function HomeRoute_Factory(t) {
  return new (t || HomeRoute)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](core__WEBPACK_IMPORTED_MODULE_1__.AppService));
};

HomeRoute.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: HomeRoute,
  selectors: [["home-route"]],
  decls: 12,
  vars: 5,
  consts: [["loading", ""], ["fxLayout", "row", "fxLayoutAlign", "start stretch"], ["fxLayout", "column", "fxLayoutAlign", "start stretch", 1, "p8"], [1, "mat-title", "bold", "m4"], [4, "ngIf", "ngIfElse"], ["fxLayout", "column", "fxLayoutAlign", "start stretch", "fxFlex", "", 1, "p8"], [1, "m4", 3, "data", "update"], ["mode", "indeterminate", "color", "accent"], [4, "ngIf"], ["class", "mat-subheading-2 m4 color-warn", 4, "ngIf"], [3, "org", "selected", "select", "remove", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "org", "selected", "select", "remove"], [1, "mat-subheading-2", "m4", "color-warn"]],
  template: function HomeRoute_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HomeRoute_ng_template_0_Template, 1, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Organizations");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HomeRoute_ng_container_6_Template, 3, 2, "ng-container", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "section", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Organization Editor");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "org-editor", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("update", function HomeRoute_Template_org_editor_update_11_listener() {
        return ctx.refresh();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 3, ctx.app.organizations$))("ngIfElse", _r0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.organization);
    }
  },
  directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__.DefaultLayoutAlignDirective, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__.DefaultFlexDirective, core__WEBPACK_IMPORTED_MODULE_1__.OrgEditorComponent, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_5__.MatProgressBar, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, core__WEBPACK_IMPORTED_MODULE_1__.OrgCardComponent],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.AsyncPipe],
  encapsulation: 2
});

/***/ }),

/***/ 5947:
/*!**************************************!*\
  !*** ./src/app/routes/home/index.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeRoute": () => (/* reexport safe */ _home_route__WEBPACK_IMPORTED_MODULE_0__.HomeRoute)
/* harmony export */ });
/* harmony import */ var _home_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.route */ 4765);



/***/ }),

/***/ 3529:
/*!*********************************!*\
  !*** ./src/app/routes/index.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RouteComponents": () => (/* binding */ RouteComponents),
/* harmony export */   "Routes": () => (/* binding */ Routes)
/* harmony export */ });
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ 5947);

const RouteComponents = [
    _home__WEBPACK_IMPORTED_MODULE_0__.HomeRoute
];
const Routes = [
    { path: '', component: _home__WEBPACK_IMPORTED_MODULE_0__.HomeRoute },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 1570);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map