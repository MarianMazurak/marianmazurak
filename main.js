(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_user_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/user/login/login.component */ "./src/app/components/user/login/login.component.ts");
/* harmony import */ var _components_user_register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/user/register/register.component */ "./src/app/components/user/register/register.component.ts");
/* harmony import */ var _components_property_list_property_list_property_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/property/list-property/list-property.component */ "./src/app/components/property/list-property/list-property.component.ts");
/* harmony import */ var _components_property_create_property_create_property_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/property/create-property/create-property.component */ "./src/app/components/property/create-property/create-property.component.ts");
/* harmony import */ var _components_apartment_list_apartment_list_apartment_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/apartment/list-apartment/list-apartment.component */ "./src/app/components/apartment/list-apartment/list-apartment.component.ts");
/* harmony import */ var _components_apartment_create_apartment_create_apartment_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/apartment/create-apartment/create-apartment.component */ "./src/app/components/apartment/create-apartment/create-apartment.component.ts");
/* harmony import */ var _components_search_search_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/search/search.component */ "./src/app/components/search/search.component.ts");
/* harmony import */ var _components_property_edit_property_edit_property_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/property/edit-property/edit-property.component */ "./src/app/components/property/edit-property/edit-property.component.ts");
/* harmony import */ var _components_booking_list_booking_list_booking_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/booking/list-booking/list-booking.component */ "./src/app/components/booking/list-booking/list-booking.component.ts");
/* harmony import */ var _components_booking_booking_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/booking/booking.component */ "./src/app/components/booking/booking.component.ts");
/* harmony import */ var _components_review_review_booking_review_booking_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/review/review-booking/review-booking.component */ "./src/app/components/review/review-booking/review-booking.component.ts");
/* harmony import */ var _components_review_review_create_review_create_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/review/review-create/review-create.component */ "./src/app/components/review/review-create/review-create.component.ts");
/* harmony import */ var _components_booking_booking_create_booking_create_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/booking/booking-create/booking-create.component */ "./src/app/components/booking/booking-create/booking-create.component.ts");
/* harmony import */ var _components_property_owner_properties_owner_properties_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/property/owner-properties/owner-properties.component */ "./src/app/components/property/owner-properties/owner-properties.component.ts");
/* harmony import */ var _components_booking_guest_arrivals_guest_arrivals_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/booking/guest-arrivals/guest-arrivals.component */ "./src/app/components/booking/guest-arrivals/guest-arrivals.component.ts");
/* harmony import */ var _components_user_user_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/user/user.component */ "./src/app/components/user/user.component.ts");
/* harmony import */ var _components_user_user_profile_user_properties_user_properties_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/user/user-profile/user-properties/user-properties.component */ "./src/app/components/user/user-profile/user-properties/user-properties.component.ts");
/* harmony import */ var _components_review_reviews_property_reviews_property_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/review/reviews-property/reviews-property.component */ "./src/app/components/review/reviews-property/reviews-property.component.ts");
/* harmony import */ var _components_user_user_profile_user_properties_user_apartments_user_apartments_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/user/user-profile/user-properties/user-apartments/user-apartments.component */ "./src/app/components/user/user-profile/user-properties/user-apartments/user-apartments.component.ts");
/* harmony import */ var _services_authentication_auth_guard_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/authentication/auth-guard.service */ "./src/app/services/authentication/auth-guard.service.ts");
/* harmony import */ var _services_authentication_role_guard_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./services/authentication/role-guard.service */ "./src/app/services/authentication/role-guard.service.ts");
/* harmony import */ var _components_apartment_edit_apartment_edit_apartment_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/apartment/edit-apartment/edit-apartment.component */ "./src/app/components/apartment/edit-apartment/edit-apartment.component.ts");
/* harmony import */ var _components_property_property_details_property_details_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/property/property-details/property-details.component */ "./src/app/components/property/property-details/property-details.component.ts");
/* harmony import */ var _components_advanced_search_advanced_search_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/advanced-search/advanced-search.component */ "./src/app/components/advanced-search/advanced-search.component.ts");
/* harmony import */ var _components_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/notfound/notfound.component */ "./src/app/components/notfound/notfound.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



























var routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: _components_user_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'register', component: _components_user_register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"] },
    { path: 'bookings', component: _components_booking_list_booking_list_booking_component__WEBPACK_IMPORTED_MODULE_10__["ListBookingComponent"] },
    { path: 'booking/:id', component: _components_booking_booking_component__WEBPACK_IMPORTED_MODULE_11__["BookingComponent"] },
    { path: 'create-property', component: _components_property_create_property_create_property_component__WEBPACK_IMPORTED_MODULE_5__["CreatePropertyComponent"], canActivate: [_services_authentication_auth_guard_service__WEBPACK_IMPORTED_MODULE_21__["AuthGuardService"], _services_authentication_role_guard_service__WEBPACK_IMPORTED_MODULE_22__["RoleGuardService"]], data: { expectedRole: 'ROLE_OWNER' } },
    { path: 'property', component: _components_property_list_property_list_property_component__WEBPACK_IMPORTED_MODULE_4__["ListPropertyComponent"] },
    { path: 'property/:id/apartments', component: _components_apartment_list_apartment_list_apartment_component__WEBPACK_IMPORTED_MODULE_6__["ListApartmentComponent"] },
    { path: 'property/:id/create-apartment', component: _components_apartment_create_apartment_create_apartment_component__WEBPACK_IMPORTED_MODULE_7__["CreateApartmentComponent"], canActivate: [_services_authentication_auth_guard_service__WEBPACK_IMPORTED_MODULE_21__["AuthGuardService"], _services_authentication_role_guard_service__WEBPACK_IMPORTED_MODULE_22__["RoleGuardService"]], data: { expectedRole: 'ROLE_OWNER' } },
    { path: 'search', component: _components_search_search_component__WEBPACK_IMPORTED_MODULE_8__["SearchComponent"], canActivate: [_services_authentication_auth_guard_service__WEBPACK_IMPORTED_MODULE_21__["AuthGuardService"]] },
    { path: 'property-detailes/:id', component: _components_property_property_details_property_details_component__WEBPACK_IMPORTED_MODULE_24__["PropertyDetailsComponent"], canActivate: [_services_authentication_auth_guard_service__WEBPACK_IMPORTED_MODULE_21__["AuthGuardService"]] },
    { path: 'review-booking/:id', component: _components_review_review_booking_review_booking_component__WEBPACK_IMPORTED_MODULE_12__["ReviewBookingComponent"], canActivate: [_services_authentication_auth_guard_service__WEBPACK_IMPORTED_MODULE_21__["AuthGuardService"]] },
    { path: 'review-create/:id', component: _components_review_review_create_review_create_component__WEBPACK_IMPORTED_MODULE_13__["ReviewCreateComponent"], canActivate: [_services_authentication_auth_guard_service__WEBPACK_IMPORTED_MODULE_21__["AuthGuardService"]] },
    { path: 'booking-create/:id', component: _components_booking_booking_create_booking_create_component__WEBPACK_IMPORTED_MODULE_14__["BookingCreateComponent"], canActivate: [_services_authentication_auth_guard_service__WEBPACK_IMPORTED_MODULE_21__["AuthGuardService"]] },
    { path: 'owner-properties', component: _components_property_owner_properties_owner_properties_component__WEBPACK_IMPORTED_MODULE_15__["OwnerPropertiesComponent"], canActivate: [_services_authentication_auth_guard_service__WEBPACK_IMPORTED_MODULE_21__["AuthGuardService"]] },
    { path: 'reviews-property/:id', component: _components_review_reviews_property_reviews_property_component__WEBPACK_IMPORTED_MODULE_19__["ReviewsPropertyComponent"], canActivate: [_services_authentication_auth_guard_service__WEBPACK_IMPORTED_MODULE_21__["AuthGuardService"]] },
    { path: 'advanced-search', component: _components_advanced_search_advanced_search_component__WEBPACK_IMPORTED_MODULE_25__["AdvancedSearchComponent"], canActivate: [_services_authentication_auth_guard_service__WEBPACK_IMPORTED_MODULE_21__["AuthGuardService"]] },
    { path: 'edit-property/:id', component: _components_property_edit_property_edit_property_component__WEBPACK_IMPORTED_MODULE_9__["EditPropertyComponent"], canActivate: [_services_authentication_auth_guard_service__WEBPACK_IMPORTED_MODULE_21__["AuthGuardService"], _services_authentication_role_guard_service__WEBPACK_IMPORTED_MODULE_22__["RoleGuardService"]], data: { expectedRole: 'ROLE_OWNER' } },
    { path: 'user', component: _components_user_user_component__WEBPACK_IMPORTED_MODULE_17__["UserComponent"], canActivate: [_services_authentication_auth_guard_service__WEBPACK_IMPORTED_MODULE_21__["AuthGuardService"]] },
    { path: 'myproperties/:id/guest-arrivals/:filter', component: _components_booking_guest_arrivals_guest_arrivals_component__WEBPACK_IMPORTED_MODULE_16__["GuestArrivalsComponent"], canActivate: [_services_authentication_auth_guard_service__WEBPACK_IMPORTED_MODULE_21__["AuthGuardService"], _services_authentication_role_guard_service__WEBPACK_IMPORTED_MODULE_22__["RoleGuardService"]], data: { expectedRole: 'ROLE_OWNER' } },
    { path: 'myproperties', component: _components_user_user_profile_user_properties_user_properties_component__WEBPACK_IMPORTED_MODULE_18__["UserPropertiesComponent"], canActivate: [_services_authentication_auth_guard_service__WEBPACK_IMPORTED_MODULE_21__["AuthGuardService"], _services_authentication_role_guard_service__WEBPACK_IMPORTED_MODULE_22__["RoleGuardService"]], data: { expectedRole: 'ROLE_OWNER' } },
    { path: 'myproperty/:id/apartments', component: _components_user_user_profile_user_properties_user_apartments_user_apartments_component__WEBPACK_IMPORTED_MODULE_20__["UserApartmentsComponent"], canActivate: [_services_authentication_auth_guard_service__WEBPACK_IMPORTED_MODULE_21__["AuthGuardService"], _services_authentication_role_guard_service__WEBPACK_IMPORTED_MODULE_22__["RoleGuardService"]], data: { expectedRole: 'ROLE_OWNER' } },
    { path: 'property/:pid/edit-apartment/:apid', component: _components_apartment_edit_apartment_edit_apartment_component__WEBPACK_IMPORTED_MODULE_23__["EditApartmentComponent"], canActivate: [_services_authentication_auth_guard_service__WEBPACK_IMPORTED_MODULE_21__["AuthGuardService"], _services_authentication_role_guard_service__WEBPACK_IMPORTED_MODULE_22__["RoleGuardService"]], data: { expectedRole: 'ROLE_OWNER' } },
    { path: '**', component: _components_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_26__["NotfoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*{\n  box-sizing: border-box;\n}\nli {\n    float: left;\n    margin-right: 5px;\n}\nul {\n    list-style-type: none;\n}\nnav { \n    height: 30px;\n}\napp-spinner {\n  display: contents;\n}\napp-footer {\n  display: block;\n  margin-top: 100%;\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<router-outlet></router-outlet>\n<app-footer></app-footer>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'bookingliteClient';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_user_user_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/user/user.component */ "./src/app/components/user/user.component.ts");
/* harmony import */ var _components_user_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/user/login/login.component */ "./src/app/components/user/login/login.component.ts");
/* harmony import */ var _components_user_register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/user/register/register.component */ "./src/app/components/user/register/register.component.ts");
/* harmony import */ var _components_property_property_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/property/property.component */ "./src/app/components/property/property.component.ts");
/* harmony import */ var _components_property_create_property_create_property_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/property/create-property/create-property.component */ "./src/app/components/property/create-property/create-property.component.ts");
/* harmony import */ var _components_property_list_property_list_property_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/property/list-property/list-property.component */ "./src/app/components/property/list-property/list-property.component.ts");
/* harmony import */ var _components_apartment_apartment_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/apartment/apartment.component */ "./src/app/components/apartment/apartment.component.ts");
/* harmony import */ var _components_apartment_create_apartment_create_apartment_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/apartment/create-apartment/create-apartment.component */ "./src/app/components/apartment/create-apartment/create-apartment.component.ts");
/* harmony import */ var _components_apartment_list_apartment_list_apartment_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/apartment/list-apartment/list-apartment.component */ "./src/app/components/apartment/list-apartment/list-apartment.component.ts");
/* harmony import */ var _components_booking_booking_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/booking/booking.component */ "./src/app/components/booking/booking.component.ts");
/* harmony import */ var _components_search_search_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/search/search.component */ "./src/app/components/search/search.component.ts");
/* harmony import */ var _components_booking_list_booking_list_booking_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/booking/list-booking/list-booking.component */ "./src/app/components/booking/list-booking/list-booking.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _helpers_jwt_interceptor__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./helpers/jwt.interceptor */ "./src/app/helpers/jwt.interceptor.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _components_property_photo_photo_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/property/photo/photo.component */ "./src/app/components/property/photo/photo.component.ts");
/* harmony import */ var _components_property_photo_list_photo_list_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/property/photo-list/photo-list.component */ "./src/app/components/property/photo-list/photo-list.component.ts");
/* harmony import */ var _components_property_create_property_upload_photo_list_upload_photo_list_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/property/create-property/upload-photo-list/upload-photo-list.component */ "./src/app/components/property/create-property/upload-photo-list/upload-photo-list.component.ts");
/* harmony import */ var _components_property_list_property_property_item_property_item_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/property/list-property/property-item/property-item.component */ "./src/app/components/property/list-property/property-item/property-item.component.ts");
/* harmony import */ var _services_property_property_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./services/property/property.service */ "./src/app/services/property/property.service.ts");
/* harmony import */ var _services_propertyTypy_property_type_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./services/propertyTypy/property-type.service */ "./src/app/services/propertyTypy/property-type.service.ts");
/* harmony import */ var _services_apartment_apartment_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./services/apartment/apartment.service */ "./src/app/services/apartment/apartment.service.ts");
/* harmony import */ var _services_country_coutry_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./services/country/coutry.service */ "./src/app/services/country/coutry.service.ts");
/* harmony import */ var _services_city_city_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./services/city/city.service */ "./src/app/services/city/city.service.ts");
/* harmony import */ var _components_search_search_form_search_form_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/search/search-form/search-form.component */ "./src/app/components/search/search-form/search-form.component.ts");
/* harmony import */ var _components_property_edit_property_edit_property_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/property/edit-property/edit-property.component */ "./src/app/components/property/edit-property/edit-property.component.ts");
/* harmony import */ var _components_booking_booking_create_booking_create_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/booking/booking-create/booking-create.component */ "./src/app/components/booking/booking-create/booking-create.component.ts");
/* harmony import */ var _components_booking_guest_arrivals_guest_arrivals_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/booking/guest-arrivals/guest-arrivals.component */ "./src/app/components/booking/guest-arrivals/guest-arrivals.component.ts");
/* harmony import */ var _components_review_review_booking_review_booking_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/review/review-booking/review-booking.component */ "./src/app/components/review/review-booking/review-booking.component.ts");
/* harmony import */ var _components_review_review_create_review_create_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/review/review-create/review-create.component */ "./src/app/components/review/review-create/review-create.component.ts");
/* harmony import */ var _components_property_owner_properties_owner_properties_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/property/owner-properties/owner-properties.component */ "./src/app/components/property/owner-properties/owner-properties.component.ts");
/* harmony import */ var _components_user_user_navigation_user_navigation_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/user/user-navigation/user-navigation.component */ "./src/app/components/user/user-navigation/user-navigation.component.ts");
/* harmony import */ var _components_user_user_profile_user_properties_user_properties_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./components/user/user-profile/user-properties/user-properties.component */ "./src/app/components/user/user-profile/user-properties/user-properties.component.ts");
/* harmony import */ var _components_user_user_profile_user_properties_user_apartments_user_apartments_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./components/user/user-profile/user-properties/user-apartments/user-apartments.component */ "./src/app/components/user/user-profile/user-properties/user-apartments/user-apartments.component.ts");
/* harmony import */ var _components_apartment_edit_apartment_edit_apartment_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./components/apartment/edit-apartment/edit-apartment.component */ "./src/app/components/apartment/edit-apartment/edit-apartment.component.ts");
/* harmony import */ var _services_pagination_pagination_service__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./services/pagination/pagination.service */ "./src/app/services/pagination/pagination.service.ts");
/* harmony import */ var _components_pagination_items_size_items_size_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./components/pagination/items-size/items-size.component */ "./src/app/components/pagination/items-size/items-size.component.ts");
/* harmony import */ var _components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./components/pagination/pagination.component */ "./src/app/components/pagination/pagination.component.ts");
/* harmony import */ var _components_property_photo_popup_photo_popup_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./components/property/photo-popup/photo-popup.component */ "./src/app/components/property/photo-popup/photo-popup.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _components_review_reviews_property_reviews_property_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./components/review/reviews-property/reviews-property.component */ "./src/app/components/review/reviews-property/reviews-property.component.ts");
/* harmony import */ var _components_property_property_details_property_details_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./components/property/property-details/property-details.component */ "./src/app/components/property/property-details/property-details.component.ts");
/* harmony import */ var _components_advanced_search_advanced_search_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./components/advanced-search/advanced-search.component */ "./src/app/components/advanced-search/advanced-search.component.ts");
/* harmony import */ var _components_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./components/notfound/notfound.component */ "./src/app/components/notfound/notfound.component.ts");
/* harmony import */ var _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./components/spinner/spinner.component */ "./src/app/components/spinner/spinner.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_user_user_component__WEBPACK_IMPORTED_MODULE_5__["UserComponent"],
                _components_user_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                _components_user_register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"],
                _components_property_property_component__WEBPACK_IMPORTED_MODULE_8__["PropertyComponent"],
                _components_property_create_property_create_property_component__WEBPACK_IMPORTED_MODULE_9__["CreatePropertyComponent"],
                _components_property_list_property_list_property_component__WEBPACK_IMPORTED_MODULE_10__["ListPropertyComponent"],
                _components_apartment_apartment_component__WEBPACK_IMPORTED_MODULE_11__["ApartmentComponent"],
                _components_apartment_create_apartment_create_apartment_component__WEBPACK_IMPORTED_MODULE_12__["CreateApartmentComponent"],
                _components_apartment_list_apartment_list_apartment_component__WEBPACK_IMPORTED_MODULE_13__["ListApartmentComponent"],
                _components_booking_booking_component__WEBPACK_IMPORTED_MODULE_14__["BookingComponent"],
                _components_search_search_component__WEBPACK_IMPORTED_MODULE_15__["SearchComponent"],
                _components_booking_list_booking_list_booking_component__WEBPACK_IMPORTED_MODULE_16__["ListBookingComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_17__["HeaderComponent"],
                _components_property_photo_photo_component__WEBPACK_IMPORTED_MODULE_20__["PhotoComponent"],
                _components_property_photo_list_photo_list_component__WEBPACK_IMPORTED_MODULE_21__["PhotoListComponent"],
                _components_property_create_property_upload_photo_list_upload_photo_list_component__WEBPACK_IMPORTED_MODULE_22__["UploadPhotoListComponent"],
                _components_property_list_property_property_item_property_item_component__WEBPACK_IMPORTED_MODULE_23__["PropertyItemComponent"],
                _components_search_search_form_search_form_component__WEBPACK_IMPORTED_MODULE_29__["SearchFormComponent"],
                _components_property_edit_property_edit_property_component__WEBPACK_IMPORTED_MODULE_30__["EditPropertyComponent"],
                _components_booking_booking_create_booking_create_component__WEBPACK_IMPORTED_MODULE_31__["BookingCreateComponent"],
                _components_booking_guest_arrivals_guest_arrivals_component__WEBPACK_IMPORTED_MODULE_32__["GuestArrivalsComponent"],
                _components_review_review_booking_review_booking_component__WEBPACK_IMPORTED_MODULE_33__["ReviewBookingComponent"],
                _components_review_review_create_review_create_component__WEBPACK_IMPORTED_MODULE_34__["ReviewCreateComponent"],
                _components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_42__["PaginationComponent"],
                _components_pagination_items_size_items_size_component__WEBPACK_IMPORTED_MODULE_41__["ItemsSizeComponent"],
                _components_property_photo_popup_photo_popup_component__WEBPACK_IMPORTED_MODULE_43__["PhotoPopupComponent"],
                _components_property_owner_properties_owner_properties_component__WEBPACK_IMPORTED_MODULE_35__["OwnerPropertiesComponent"],
                _components_user_user_navigation_user_navigation_component__WEBPACK_IMPORTED_MODULE_36__["UserNavigationComponent"],
                _components_user_user_profile_user_properties_user_properties_component__WEBPACK_IMPORTED_MODULE_37__["UserPropertiesComponent"],
                _components_user_user_profile_user_properties_user_apartments_user_apartments_component__WEBPACK_IMPORTED_MODULE_38__["UserApartmentsComponent"],
                _components_apartment_edit_apartment_edit_apartment_component__WEBPACK_IMPORTED_MODULE_39__["EditApartmentComponent"],
                _components_review_reviews_property_reviews_property_component__WEBPACK_IMPORTED_MODULE_45__["ReviewsPropertyComponent"],
                _components_property_property_details_property_details_component__WEBPACK_IMPORTED_MODULE_46__["PropertyDetailsComponent"],
                _components_advanced_search_advanced_search_component__WEBPACK_IMPORTED_MODULE_47__["AdvancedSearchComponent"],
                _components_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_48__["NotfoundComponent"],
                _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_49__["SpinnerComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_50__["FooterComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_19__["AppRoutingModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_44__["NgbModule"].forRoot()
            ],
            providers: [
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"], useClass: _helpers_jwt_interceptor__WEBPACK_IMPORTED_MODULE_18__["JwtInterceptor"], multi: true },
                _services_property_property_service__WEBPACK_IMPORTED_MODULE_24__["PropertyService"], _services_country_coutry_service__WEBPACK_IMPORTED_MODULE_27__["CountryService"], _services_city_city_service__WEBPACK_IMPORTED_MODULE_28__["CityService"], _services_apartment_apartment_service__WEBPACK_IMPORTED_MODULE_26__["ApartmentService"], _services_propertyTypy_property_type_service__WEBPACK_IMPORTED_MODULE_25__["PropertyTypeService"], _services_pagination_pagination_service__WEBPACK_IMPORTED_MODULE_40__["PaginationService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/advanced-search/advanced-search.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/advanced-search/advanced-search.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-control-range{\n  width: 40%;\n}\n\n\n"

/***/ }),

/***/ "./src/app/components/advanced-search/advanced-search.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/advanced-search/advanced-search.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <app-search-form (mainDataChange)='onMainDataChange($event)'></app-search-form>\n  <div *ngIf=\"errorMsg\" class=\"alert alert-danger\" role=\"alert\">{{errorMsg}}</div>\n  <div class=\"row\" style=\"margin-top: 5px\">\n    <div class=\"col-md-3\">\n      <div class=\"row mb-3\">\n        <div class=\"col-md-12\">\n          <div class=\"card bg-warning\">\n            <div class=\"card-body\">\n              <div class=\"row\">\n                <div class=\"col-md-12\">\n                  <h3>Advance Search</h3>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-md-12\">\n                  <div class=\"form-group\">\n                    <label for=\"formControlRange\">Maximal Price: {{selectedPrice}}</label>\n                    <input type=\"range\" class=\"form-control-range\" id=\"formControlRange\" min=\"0\" max=\"9999\" step=\"1\"\n                           [(ngModel)]=\"selectedPrice\" name=\"priceInput\">\n                  </div>\n\n                  <div class=\"form-group\">\n                    <h5>Facilities</h5>\n                    <div class=\"custom-control custom-checkbox\"\n                         *ngFor=\"let facility of facilities\">\n                      <input [checked]=\"selectedFasilityIds.includes(facility.id.toString())\"\n                             (click)=\"onFacilitySelect(facility.id)\" type=\"checkbox\" class=\"custom-control-input\"\n                             id=\"customCheck{{facility.id}}\">\n                      <label class=\"custom-control-label\"\n                             for=\"customCheck{{facility.id}}\">{{facility.name}}</label>\n                    </div>\n                  </div>\n\n                  <div class=\"form-group\">\n                    <h5>Amenities</h5>\n                    <div class=\"custom-control custom-checkbox\"\n                         *ngFor=\"let am of amenities\">\n                      <input [checked]=\"selectedAmenityIds.includes(am.id.toString())\" (click)=\"onAmenitySelect(am.id)\"\n                             type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck2{{am.id}}\">\n                      <label class=\"custom-control-label\"\n                             for=\"customCheck2{{am.id}}\">{{am.name}}</label>\n                    </div>\n                  </div>\n                  <hr>\n                  <button type=\"submit\" class=\"btn btn-primary\" (click)=\"onApply()\">Apply</button>\n                  <div class=\"pb-3\"></div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-md-9\">\n\n      <app-list-property [propertyList]=\"propertyList\"></app-list-property>\n      <div *ngIf=\"totalElements == 0 \">\n        <h3>In this city we not find such properties. </h3>\n      </div>\n\n      <div class=\"row\" *ngIf=\"totalElements !=0\">\n        <ul class=\"pagination\" style=\"margin-left: 25%\">\n          <app-pagination\n            [currentPage]=\"currentPage\"\n            [totalPages]=\"totalPages\"\n            [pagesToPagination]=\"pagesToPagination\"\n            (goFirst)=\"onFirst($event)\"\n            (goPrev)=\"onPrev()\"\n            (goNext)=\"onNext()\"\n            (goLast)=\"onLast($event)\"\n            (goPage)=\"goToPage($event)\">\n          </app-pagination>\n        </ul>\n      </div>\n    </div>\n    <app-spinner *ngIf=\"isLoading\"></app-spinner>\n"

/***/ }),

/***/ "./src/app/components/advanced-search/advanced-search.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/advanced-search/advanced-search.component.ts ***!
  \*************************************************************************/
/*! exports provided: AdvancedSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvancedSearchComponent", function() { return AdvancedSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_property_property_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/property/property.service */ "./src/app/services/property/property.service.ts");
/* harmony import */ var _services_apartment_apartment_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/apartment/apartment.service */ "./src/app/services/apartment/apartment.service.ts");
/* harmony import */ var _services_country_coutry_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/country/coutry.service */ "./src/app/services/country/coutry.service.ts");
/* harmony import */ var _services_city_city_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/city/city.service */ "./src/app/services/city/city.service.ts");
/* harmony import */ var _services_facility_facility_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/facility/facility.service */ "./src/app/services/facility/facility.service.ts");
/* harmony import */ var _services_pagination_pagination_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/pagination/pagination.service */ "./src/app/services/pagination/pagination.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AdvancedSearchComponent = /** @class */ (function () {
    function AdvancedSearchComponent(propertyService, apartmentService, route, countryService, cityService, facilityService, router, paginationService) {
        this.propertyService = propertyService;
        this.apartmentService = apartmentService;
        this.route = route;
        this.countryService = countryService;
        this.cityService = cityService;
        this.facilityService = facilityService;
        this.router = router;
        this.paginationService = paginationService;
        this.NOT_SELECT_DATA_MESSAGE = 'Please, select country, city, checkin, checkout and number of guests';
        this.isLoading = false;
        this.DEFAULT_PRICE = 9999;
        this.selectedPrice = this.DEFAULT_PRICE;
        this.selectedFasilityIds = [];
        this.selectedAmenityIds = [];
        this.selectedItemsSize = 5;
    }
    AdvancedSearchComponent.prototype.ngOnInit = function () {
        this.currentPage = 1;
        this.readMainData();
        this.readAdvancedData();
        if (this.selectedCountryId && this.selectedCityId && this.checkIn && this.checkOut && this.selectedNumberOfGuests) {
            if ((this.selectedFasilityIds.length !== 0) || (this.selectedAmenityIds.length !== 0) || this.selectedPrice !== this.DEFAULT_PRICE) {
                this.advancedSearch();
            }
            else {
                this.mainSearch();
            }
        }
        else {
            this.errorMsg = this.NOT_SELECT_DATA_MESSAGE;
        }
        this.getFacilities();
        this.getAmenities();
    };
    AdvancedSearchComponent.prototype.readMainData = function () {
        if (this.route.snapshot.queryParamMap.has('country')) {
            this.selectedCountryId = Number.parseInt(this.route.snapshot.queryParamMap.get('country'));
            if (this.route.snapshot.queryParamMap.has('city')) {
                this.selectedCityId = Number.parseInt(this.route.snapshot.queryParamMap.get('city'));
            }
        }
        if (this.route.snapshot.queryParamMap.has('checkin')) {
            this.checkIn = this.route.snapshot.queryParamMap.get('checkin');
        }
        if (this.route.snapshot.queryParamMap.has('checkout')) {
            this.checkOut = this.route.snapshot.queryParamMap.get('checkout');
        }
        if (this.route.snapshot.queryParamMap.has('num_of_guests')) {
            this.selectedNumberOfGuests = Number.parseInt(this.route.snapshot.queryParamMap.get('num_of_guests'));
        }
    };
    AdvancedSearchComponent.prototype.readAdvancedData = function () {
        if (this.route.snapshot.queryParamMap.has('facilities')
            && (this.route.snapshot.queryParamMap.get('facilities').length !== 0)) {
            this.selectedFasilityIds = this.route.snapshot.queryParamMap.get('facilities').split(',');
        }
        if (this.route.snapshot.queryParamMap.has('amenities')
            && (this.route.snapshot.queryParamMap.get('amenities').length !== 0)) {
            this.selectedAmenityIds = this.route.snapshot.queryParamMap.get('amenities').split(',');
        }
        if (this.route.snapshot.queryParamMap.has('price')
            && (this.route.snapshot.queryParamMap.get('price').length !== 0)) {
            this.selectedPrice = Number.parseInt(this.route.snapshot.queryParamMap.get('price'));
        }
    };
    AdvancedSearchComponent.prototype.getFacilities = function () {
        var _this = this;
        this.facilityService.getAllFacilities().subscribe(function (facility) {
            _this.facilities = facility;
        });
    };
    AdvancedSearchComponent.prototype.getAmenities = function () {
        var _this = this;
        this.apartmentService.getAmenities().subscribe(function (amenity) {
            _this.amenities = amenity;
        });
    };
    AdvancedSearchComponent.prototype.onMainDataChange = function (newMainData) {
        this.resetData();
        this.selectedCountryId = newMainData.country;
        this.selectedCityId = newMainData.city;
        this.checkIn = newMainData.checkin;
        this.checkOut = newMainData.checkout;
        this.selectedNumberOfGuests = newMainData.num_of_guests;
        this.mainSearch();
    };
    AdvancedSearchComponent.prototype.resetData = function () {
        this.errorMsg = null;
        this.propertyList = undefined;
        this.selectedCountryId = undefined;
        this.selectedCityId = undefined;
        this.checkIn = undefined;
        this.checkOut = undefined;
        this.selectedNumberOfGuests = undefined;
        this.selectedFasilityIds = [];
        this.selectedAmenityIds = [];
    };
    AdvancedSearchComponent.prototype.onFacilitySelect = function (id) {
        var index = this.selectedFasilityIds.indexOf(id.toString());
        if (index !== -1) {
            this.selectedFasilityIds.splice(index, 1);
            return;
        }
        this.selectedFasilityIds.push(id.toString());
    };
    AdvancedSearchComponent.prototype.onAmenitySelect = function (id) {
        var index = this.selectedAmenityIds.indexOf(id.toString());
        if (index !== -1) {
            this.selectedAmenityIds.splice(index, 1);
            return;
        }
        this.selectedAmenityIds.push(id.toString());
    };
    AdvancedSearchComponent.prototype.onApply = function () {
        var facilitiesValue;
        if (this.selectedFasilityIds.length > 0) {
            facilitiesValue = this.selectedFasilityIds.join(',');
        }
        var amenitiesValue;
        if (this.selectedAmenityIds.length > 0) {
            amenitiesValue = this.selectedAmenityIds.join(',');
        }
        this.router.navigate(['/advanced-search'], {
            queryParams: {
                country: this.selectedCountryId,
                city: this.selectedCityId,
                checkin: this.checkIn,
                checkout: this.checkOut,
                num_of_guests: this.selectedNumberOfGuests,
                price: this.selectedPrice,
                facilities: facilitiesValue,
                amenities: amenitiesValue
            }
        });
        this.advancedSearch();
    };
    AdvancedSearchComponent.prototype.mainSearch = function () {
        var _this = this;
        this.isLoading = true;
        this.propertyService.search(this.selectedCountryId, this.selectedCityId, this.checkIn, this.checkOut, this.selectedNumberOfGuests, this.currentPage - 1, this.selectedItemsSize)
            .subscribe(function (data) {
            _this.propertyList = data['content'];
            _this.totalPages = data['totalPages'];
            _this.totalElements = data['totalElements'];
            _this.pagesToPagination = _this.paginationService.calculatePages(_this.currentPage, _this.totalPages);
            _this.isLoading = false;
        }, function (error) { return _this.isLoading = false; });
    };
    AdvancedSearchComponent.prototype.advancedSearch = function () {
        var _this = this;
        this.isLoading = true;
        this.propertyService.advancedSearch(this.selectedCountryId, this.selectedCityId, this.checkIn, this.checkOut, this.selectedNumberOfGuests, this.selectedPrice, this.selectedFasilityIds, this.selectedAmenityIds, this.currentPage - 1, this.selectedItemsSize).subscribe(function (data) {
            _this.propertyList = data['content'];
            _this.totalPages = data['totalPages'];
            _this.totalElements = data['totalElements'];
            _this.pagesToPagination = _this.paginationService.calculatePages(_this.currentPage, _this.totalPages);
            _this.isLoading = false;
        }, function (error) { return _this.isLoading = false; });
    };
    AdvancedSearchComponent.prototype.goToPage = function (n) {
        this.currentPage = n;
        if (this.selectedFasilityIds.length == 0 && this.selectedAmenityIds.length == 0) {
            this.mainSearch();
        }
        else
            this.advancedSearch();
    };
    AdvancedSearchComponent.prototype.onFirst = function (n) {
        this.currentPage = n;
        if (this.selectedFasilityIds.length == 0 && this.selectedAmenityIds.length == 0) {
            this.mainSearch();
        }
        else
            this.advancedSearch();
    };
    AdvancedSearchComponent.prototype.onPrev = function () {
        this.currentPage--;
        if (this.selectedFasilityIds.length == 0 && this.selectedAmenityIds.length == 0) {
            this.mainSearch();
        }
        else
            this.advancedSearch();
    };
    AdvancedSearchComponent.prototype.onNext = function () {
        this.currentPage++;
        if (this.selectedFasilityIds.length == 0 && this.selectedAmenityIds.length == 0) {
            this.mainSearch();
        }
        else
            this.advancedSearch();
    };
    AdvancedSearchComponent.prototype.onLast = function (n) {
        this.currentPage = n;
        if (this.selectedFasilityIds.length == 0 && this.selectedAmenityIds.length == 0) {
            this.mainSearch();
        }
        else
            this.advancedSearch();
    };
    AdvancedSearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-advanced-search',
            template: __webpack_require__(/*! ./advanced-search.component.html */ "./src/app/components/advanced-search/advanced-search.component.html"),
            styles: [__webpack_require__(/*! ./advanced-search.component.css */ "./src/app/components/advanced-search/advanced-search.component.css")]
        }),
        __metadata("design:paramtypes", [_services_property_property_service__WEBPACK_IMPORTED_MODULE_2__["PropertyService"],
            _services_apartment_apartment_service__WEBPACK_IMPORTED_MODULE_3__["ApartmentService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_country_coutry_service__WEBPACK_IMPORTED_MODULE_4__["CountryService"],
            _services_city_city_service__WEBPACK_IMPORTED_MODULE_5__["CityService"],
            _services_facility_facility_service__WEBPACK_IMPORTED_MODULE_6__["FacilityService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_pagination_pagination_service__WEBPACK_IMPORTED_MODULE_7__["PaginationService"]])
    ], AdvancedSearchComponent);
    return AdvancedSearchComponent;
}());



/***/ }),

/***/ "./src/app/components/apartment/apartment.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/apartment/apartment.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n"

/***/ }),

/***/ "./src/app/components/apartment/apartment.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/apartment/apartment.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  apartment works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/apartment/apartment.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/apartment/apartment.component.ts ***!
  \*************************************************************/
/*! exports provided: ApartmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApartmentComponent", function() { return ApartmentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ApartmentComponent = /** @class */ (function () {
    function ApartmentComponent() {
    }
    ApartmentComponent.prototype.ngOnInit = function () {
    };
    ApartmentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-apartment',
            template: __webpack_require__(/*! ./apartment.component.html */ "./src/app/components/apartment/apartment.component.html"),
            styles: [__webpack_require__(/*! ./apartment.component.css */ "./src/app/components/apartment/apartment.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ApartmentComponent);
    return ApartmentComponent;
}());



/***/ }),

/***/ "./src/app/components/apartment/create-apartment/create-apartment.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/components/apartment/create-apartment/create-apartment.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input {\n  width: 20%;\n}\n#inner-box{\n  margin-top: -250px;\n}\n.main-box{\n\n}\n.display-4{\n  text-align: center;\n}\n.card{\n  width: 850px;\n  height: 420px;\n}\n.form-control{\n  width: 350px;\n  height: 50px;\n}\nlabel{\n  font-size: 19px;\n}\n#amen-box {\n margin-top: 20px;\n}\n\n"

/***/ }),

/***/ "./src/app/components/apartment/create-apartment/create-apartment.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/components/apartment/create-apartment/create-apartment.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"menucard\" class=\"main-box\">\n  <div class=\"box\" id=\"inner-box\">\n    <div class=\"card\" id=\"card-id\">\n      <article class=\"card-body\">\n        <h4 class=\"card-title mb-2 mt-1\">Create Apartment</h4>\n\n        <form #createApartmentForm=ngForm (ngSubmit)=\"createApartment(createApartmentForm)\"\n              [ngClass]=\"{'was-validated' : !formValid}\">\n          <div class=\"row\">\n            <div class=\"col-6\">\n\n              <div class=\"form-group\">\n                <label>Apartment Name</label>\n                <input name=\"name\" #name=\"ngModel\" required [(ngModel)]=\"createdApartment.name\" class=\"form-control\"\n                       maxlength=\"32\"\n                       placeholder=\"Apartment Name\" type=\"text\">\n                <div class=\"invalid-feedback\">Apartment Name is required!</div>\n              </div>\n\n              <div class=\"form-group\">\n                <label>Price</label>\n                <input class=\"form-control\" name=\"price\" [(ngModel)]=\"createdApartment.price\"\n                       placeholder=\"Price\" type=\"text\" required pattern=\"^\\d{0,8}(\\.\\d{1,4})?$\">\n                <div class=\"invalid-feedback\">Price only number format, and (between 1 and 99999999)</div>\n              </div>\n\n\n              <div class=\"form-group\">\n                <label>Number of guests  (between 1 and 8):</label>\n                    <input class=\"form-control\" name=\"numberOfGuests\" #name=\"ngModel\"\n                           [(ngModel)]=\"createdApartment.numberOfGuests\"\n                       placeholder=\"Number of guests\" type=\"text\" required pattern=\"[1-8]\">\n                <div class=\"invalid-feedback\">Number have be number type and (between 1 and 8)!</div>\n              </div>\n\n            </div>\n            <div class=\"form-group\">\n              <label>Apartment Type</label>\n              <select class=\"form-control\" #selectApartmentType\n                      (change)=\"changeApartmentType(selectApartmentType.value)\">\n                <option *ngFor=\"let ap of apartmentTypes\" value=\"{{ap.id}}\">{{ap.name}}\n                </option>\n              </select>\n\n              <div class=\"form-group\" id=\"amen-box\">\n                <label>Amenities</label>\n                <div class=\"custom-control custom-checkbox\"\n                     *ngFor=\"let am of amenities\">\n                  <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck{{am.id}}\"\n                         (change)=\"workWithCheckboxes(am.id)\">\n                  <label class=\"custom-control-label\"\n                         for=\"customCheck{{am.id}}\">{{am.name}}</label>\n                </div>\n              </div>\n            </div>\n\n          </div>\n          <ng-container *ngIf=\"errorMessage !== ''\">\n            <div class=\"alert alert-danger\">\n              {{errorMessage}}\n            </div>\n          </ng-container>\n          <div class=\"form-group\" id=\"btn\">\n            <button type=\"submit\" class=\"btn btn-primary btn-block\">Create</button>\n          </div>\n        </form>\n      </article>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/apartment/create-apartment/create-apartment.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/components/apartment/create-apartment/create-apartment.component.ts ***!
  \*************************************************************************************/
/*! exports provided: CreateApartmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateApartmentComponent", function() { return CreateApartmentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_apartment_apartment_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/apartment/apartment.service */ "./src/app/services/apartment/apartment.service.ts");
/* harmony import */ var _services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/authentication/auth.service */ "./src/app/services/authentication/auth.service.ts");
/* harmony import */ var _models_create_apartment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models/create-apartment */ "./src/app/models/create-apartment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CreateApartmentComponent = /** @class */ (function () {
    function CreateApartmentComponent(auth, apartmentService, route, router) {
        this.auth = auth;
        this.apartmentService = apartmentService;
        this.route = route;
        this.router = router;
        this.formValid = true;
        this.errorMessage = '';
    }
    CreateApartmentComponent.prototype.ngOnInit = function () {
        this.authenticated = this.auth.isAuthenticated;
        this.getApartmentTypes();
        this.getAmenities();
        this.createdApartment = new _models_create_apartment__WEBPACK_IMPORTED_MODULE_3__["CreateApartment"]();
        this.createdApartment.amenitiesId = [];
    };
    CreateApartmentComponent.prototype.getApartmentTypes = function () {
        var _this = this;
        this.apartmentService.getApartmentType().subscribe(function (apType) {
            _this.apartmentTypes = apType;
            _this.selectedTypeId = _this.apartmentTypes[0].id;
        });
    };
    CreateApartmentComponent.prototype.changeApartmentType = function (id) {
        this.selectedTypeId = id;
    };
    CreateApartmentComponent.prototype.getAmenities = function () {
        var _this = this;
        this.apartmentService.getAmenities().subscribe(function (amenity) {
            _this.amenities = amenity;
        });
    };
    CreateApartmentComponent.prototype.createApartment = function (createApartmentForm) {
        var _this = this;
        if (createApartmentForm.valid) {
            var id = +this.route.snapshot.paramMap.get('id');
            this.createdApartment.apartmentTypeId = this.selectedTypeId;
            this.apartmentService.createApartment(this.createdApartment, id).subscribe(function (res) {
                _this.onSubmit();
            }, function (error) {
                _this.errorMessage = JSON.parse(error.error).message;
            });
        }
        else {
            this.formValid = false;
        }
    };
    CreateApartmentComponent.prototype.workWithCheckboxes = function (id) {
        var index = this.createdApartment.amenitiesId.indexOf(id);
        if (index !== -1) {
            this.createdApartment.amenitiesId.splice(index, 1);
            return;
        }
        this.createdApartment.amenitiesId.push(id);
    };
    CreateApartmentComponent.prototype.onSubmit = function () {
        var id = +this.route.snapshot.paramMap.get('id');
        this.router.navigate(['/myproperty/' + id + '/apartments']);
    };
    CreateApartmentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-apartment',
            template: __webpack_require__(/*! ./create-apartment.component.html */ "./src/app/components/apartment/create-apartment/create-apartment.component.html"),
            styles: [__webpack_require__(/*! ./create-apartment.component.css */ "./src/app/components/apartment/create-apartment/create-apartment.component.css")]
        }),
        __metadata("design:paramtypes", [_services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _services_apartment_apartment_service__WEBPACK_IMPORTED_MODULE_1__["ApartmentService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], CreateApartmentComponent);
    return CreateApartmentComponent;
}());



/***/ }),

/***/ "./src/app/components/apartment/edit-apartment/edit-apartment.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/components/apartment/edit-apartment/edit-apartment.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".edit-box{\n  width: 65%;\n  margin: 0 auto ;\n  padding-bottom: 25px;\n}\n"

/***/ }),

/***/ "./src/app/components/apartment/edit-apartment/edit-apartment.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/components/apartment/edit-apartment/edit-apartment.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"edit-box\">\n  <div class=\"box\">\n    <h1 class=\"display-8\">BookingLite</h1>\n    <div class=\"card\">\n      <article class=\"card-body\">\n        <h4 class=\"card-title mb-4 mt-1\">Edit Apartment</h4>\n\n        <form #createApartmentForm=ngForm (ngSubmit)=updateApartment(createApartmentForm)\n              [ngClass]=\"{'was-validated' : !formValid}\">\n\n        <div class=\"row\">\n          <div class=\"col-6\">\n\n            <div class=\"form-group\" *ngIf=\"apartment\">\n              <label>Apartment Name</label>\n              <input class=\"form-control\" placeholder=\"Name\" type=\"text\" required name=\"name\"\n                     placeholder=\"Name\" [(ngModel)]=\"apartment.name\">\n              <div class=\"invalid-feedback\">Apartment Name is required!</div>\n            </div>\n\n            <div class=\"form-group\" *ngIf=\"apartment\">\n              <label>Price</label>\n              <input class=\"form-control\" name=\"price\" [(ngModel)]=\"apartment.price\"\n                     placeholder=\"Price\" type=\"text\" required pattern=\"^\\d{0,8}(\\.\\d{1,4})?$\">\n              <div class=\"invalid-feedback\">Price only number format, and (between 1 and 99999999)</div>\n            </div>\n\n            <div class=\"form-group\" *ngIf=\"apartment\">\n              <label>Number of guests  (between 1 and 8):</label>\n              <input class=\"form-control\" name=\"numberOfGuests\"\n                     [(ngModel)]=\"apartment.numberOfGuests\"\n                     placeholder=\"Number of guests\" type=\"text\" required pattern=\"[1-8]\">\n              <div class=\"invalid-feedback\">Number have be number type and (between 1 and 8)!</div>\n            </div>\n\n\n\n          </div>\n          <div class=\"col-6\">\n            <div class=\"form-group\">\n\n              <label>Apartment Type</label>\n              <select class=\"form-control\" #selectApartmentType\n                      (change)=\"changeApartmentTypes(selectApartmentType.value)\">\n                <option *ngFor=\"let ap of apartmentTypes\" value=\"{{ap.id}}\">{{ap.name}}\n                </option>\n              </select>\n            </div>\n\n            <div class=\"form-group\" *ngIf=\"amenities && apartment\">\n              <label>Amenities</label>\n              <div class=\"custom-control custom-checkbox\"\n                   *ngFor=\"let amenity of amenities\">\n                <input  type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck{{amenity.id}}\"\n                        (change)=workWithCheckboxes(amenity.id)>\n                <label class=\"custom-control-label\"\n                       for=\"customCheck{{amenity.id}}\">{{amenity.name}}</label>\n              </div>\n            </div>\n          </div>\n        </div>\n\n          <div class=\"form-group\">\n            <button type=\"submit\" class=\"btn btn-primary btn-block\">Add Change\n            </button>\n          </div>\n\n        </form>\n      </article>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/apartment/edit-apartment/edit-apartment.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/apartment/edit-apartment/edit-apartment.component.ts ***!
  \*********************************************************************************/
/*! exports provided: EditApartmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditApartmentComponent", function() { return EditApartmentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_apartment_apartment_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/apartment/apartment.service */ "./src/app/services/apartment/apartment.service.ts");
/* harmony import */ var _models_create_apartment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models/create-apartment */ "./src/app/models/create-apartment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditApartmentComponent = /** @class */ (function () {
    function EditApartmentComponent(route, apartmentService, router) {
        this.route = route;
        this.apartmentService = apartmentService;
        this.router = router;
        this.formValid = true;
        this.errorMessage = '';
    }
    EditApartmentComponent.prototype.ngOnInit = function () {
        this.apartmentUpdate = new _models_create_apartment__WEBPACK_IMPORTED_MODULE_3__["CreateApartment"]();
        this.getApartmentById();
        this.getAmenities();
        this.getApartmentTypes();
        this.apartmentUpdate.amenitiesId = [];
    };
    EditApartmentComponent.prototype.getApartmentById = function () {
        var _this = this;
        var apId = +this.route.snapshot.paramMap.get('apid');
        var pId = +this.route.snapshot.paramMap.get('pid');
        this.apartmentService.getApartmentById(2, apId).subscribe(function (res) { return _this.apartment = res; });
        return this.apartment;
    };
    EditApartmentComponent.prototype.getApartmentTypes = function () {
        var _this = this;
        this.apartmentService.getApartmentType().subscribe(function (res) {
            _this.apartmentTypes = res;
        });
    };
    EditApartmentComponent.prototype.changeApartmentTypes = function (id) {
        this.selectApartmentType = id;
    };
    EditApartmentComponent.prototype.getAmenities = function () {
        var _this = this;
        this.apartmentService.getAmenities().subscribe(function (res) {
            _this.amenities = res;
        });
    };
    EditApartmentComponent.prototype.workWithCheckboxes = function (id) {
        var index = this.apartmentUpdate.amenitiesId.indexOf(id);
        if (index !== -1) {
            this.apartmentUpdate.amenitiesId.splice(index, 1);
            return;
        }
        this.apartmentUpdate.amenitiesId.push(id);
    };
    EditApartmentComponent.prototype.updateApartment = function (createApartmentForm) {
        var _this = this;
        if (createApartmentForm.valid) {
            var id = +this.route.snapshot.paramMap.get('apid');
            this.apartmentUpdate.name = this.apartment.name;
            this.apartmentUpdate.price = this.apartment.price;
            this.apartmentUpdate.numberOfGuests = this.apartment.numberOfGuests;
            this.apartmentUpdate.apartmentTypeId = this.selectApartmentType;
            this.apartmentService.updateApartment(this.apartmentUpdate, id).subscribe(function (res) {
                _this.onSubmit();
            }, function (error) {
                _this.errorMessage = JSON.parse(error.error).message;
            });
        }
        else {
            this.formValid = false;
        }
    };
    EditApartmentComponent.prototype.onSubmit = function () {
        var id = +this.route.snapshot.paramMap.get('pid');
        this.router.navigate(['/myproperty/' + id + '/apartments']);
    };
    EditApartmentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-apartment',
            template: __webpack_require__(/*! ./edit-apartment.component.html */ "./src/app/components/apartment/edit-apartment/edit-apartment.component.html"),
            styles: [__webpack_require__(/*! ./edit-apartment.component.css */ "./src/app/components/apartment/edit-apartment/edit-apartment.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_apartment_apartment_service__WEBPACK_IMPORTED_MODULE_2__["ApartmentService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], EditApartmentComponent);
    return EditApartmentComponent;
}());



/***/ }),

/***/ "./src/app/components/apartment/list-apartment/list-apartment.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/components/apartment/list-apartment/list-apartment.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  font-family: arial, sans-serif;\n  border-collapse: collapse;\n  width: 100%;\n}\n\ntd, th {\n  border: 1px solid #dddddd;\n  text-align: left;\n  padding: 8px;\n}\n\nth {\n  background-color: #fffe82;\n}\n"

/***/ }),

/***/ "./src/app/components/apartment/list-apartment/list-apartment.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/components/apartment/list-apartment/list-apartment.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <table>\n    <tr>\n      <th>Name</th>\n      <th>Apartment Type</th>\n      <th>Amenities</th>\n      <th>Price</th>\n      <th>Reserve</th>\n    </tr>\n    <tr *ngFor=\"let apartment of aprtmentsList\" >\n      <td>{{apartment.name}}</td>\n      <td>{{apartment.apartmentType.name}}</td>\n      <td><p *ngFor=\"let am of apartment.amenities\">{{am.name}}</p></td>\n      <td>{{apartment.price}}</td>\n      <td>\n        <button type=\"button\" routerLink=\"/booking-create/{{apartment.id}}\" [queryParams]=\"queryParams\"\n                   class=\"btn btn-primary\">Reserve Apartment</button>\n      </td>\n    </tr>\n  </table>\n</div>\n"

/***/ }),

/***/ "./src/app/components/apartment/list-apartment/list-apartment.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/apartment/list-apartment/list-apartment.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ListApartmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListApartmentComponent", function() { return ListApartmentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/authentication/auth.service */ "./src/app/services/authentication/auth.service.ts");
/* harmony import */ var _services_apartment_apartment_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/apartment/apartment.service */ "./src/app/services/apartment/apartment.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_property_property_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/property/property.service */ "./src/app/services/property/property.service.ts");
/* harmony import */ var _models_property__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../models/property */ "./src/app/models/property.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ListApartmentComponent = /** @class */ (function () {
    function ListApartmentComponent(apartmentService, propertyService, auth, route) {
        this.apartmentService = apartmentService;
        this.propertyService = propertyService;
        this.auth = auth;
        this.route = route;
        this.queryParams = {
            checkin: '',
            checkout: '',
            num_of_guests: ''
        };
    }
    ListApartmentComponent.prototype.ngOnInit = function () {
        this.authenticated = this.auth.isAuthenticated;
        this.getApartmentsByPropertyId();
        this.queryParams.checkin = this.route.snapshot.queryParamMap.get('checkin');
        this.queryParams.checkout = this.route.snapshot.queryParamMap.get('checkout');
        this.queryParams.num_of_guests = this.route.snapshot.queryParamMap.get('num_of_guests');
    };
    ListApartmentComponent.prototype.getApartmentsByPropertyId = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        this.propertyService.getPropertyById(id).subscribe(function (pr) { return _this.property = pr; });
        this.apartmentService.getAllApartments(id).subscribe(function (ap) {
            _this.aprtmentsList = ap;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_property__WEBPACK_IMPORTED_MODULE_5__["Property"])
    ], ListApartmentComponent.prototype, "property", void 0);
    ListApartmentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-apartment',
            template: __webpack_require__(/*! ./list-apartment.component.html */ "./src/app/components/apartment/list-apartment/list-apartment.component.html"),
            styles: [__webpack_require__(/*! ./list-apartment.component.css */ "./src/app/components/apartment/list-apartment/list-apartment.component.css")]
        }),
        __metadata("design:paramtypes", [_services_apartment_apartment_service__WEBPACK_IMPORTED_MODULE_2__["ApartmentService"],
            _services_property_property_service__WEBPACK_IMPORTED_MODULE_4__["PropertyService"],
            _services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], ListApartmentComponent);
    return ListApartmentComponent;
}());



/***/ }),

/***/ "./src/app/components/booking/booking-create/booking-create.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/components/booking/booking-create/booking-create.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.display-4 {\n  text-align: center;\n}\n\n.card {\n  width: 850px;\n  height: 680px;\n}\n\n.form-control {\n  width: 350px;\n  height: 50px;\n  margin-left: 20px;\n}\n\n.card {\n  margin-top: 10px;\n}\n\ndiv#menucard{\n  padding: 30px;\n  margin-top: 10px;\n  height: auto;\n}\n\nbutton{\n  margin-left: 73%;\n}\n\nlabel.createBooking{\n  margin-left: 32px;\n}\n"

/***/ }),

/***/ "./src/app/components/booking/booking-create/booking-create.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/components/booking/booking-create/booking-create.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"menucard\">\n  <div class=\"box\">\n    <div class=\"card\">\n      <article class=\"card-body\">\n        <h4 class=\"card-title mb-4 mt-1\">My Booking : </h4>\n        <div *ngIf=\"apartment\">\n          <div class=\"form-group row\">\n            <div class=\"form-group\">\n              <label class=\"createBooking\">Property Name : </label>\n              <div class=\"col-sm-5\">\n                <textarea class=\"form-control\" readonly>{{apartment.propertyDto.name}}</textarea>\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <label class=\"createBooking\">Contact phone number : </label>\n              <div class=\"col-sm-5\">\n                <textarea class=\"form-control\" readonly>{{apartment.propertyDto.phoneNumber}}</textarea>\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group row\">\n            <div class=\"form-group\">\n              <label class=\"createBooking\">Total days : </label>\n              <div class=\"col-sm-5\">\n                <textarea class=\"form-control\"\n                          readonly>{{calculateTotalDays(booking.checkIn,booking.checkOut)}} day(s)</textarea>\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <label class=\"createBooking\">Total price : </label>\n              <div class=\"col-sm-5\">\n                <div *ngIf=\"calculatePriceByDates(booking.checkIn,booking.checkOut) == 0\">\n                  <textarea class=\"form-control\"\n                            readonly>{{calculatePriceByDates(booking.checkIn,booking.checkOut)}} $</textarea>\n                </div>\n                <div *ngIf=\"calculatePriceByDates(booking.checkIn,booking.checkOut) > 0\">\n                  <textarea class=\"form-control\" readonly>{{calculatePriceByDates(booking.checkIn,booking.checkOut) |  number: '2.'}} $</textarea>\n                </div>\n              </div>\n            </div>\n          </div>\n          <form #createBookingForm=ngForm (ngSubmit)=\"createBooking(createBookingForm)\"\n                [ngClass]=\"{'was-validated' : !formValid}\">\n            <div class=\"form-group row\">\n              <div class=\"form-group\">\n                <label class=\"createBooking\">Check In : </label>\n                <div class=\"col-sm-5\">\n                  <input type=\"date\" class=\"form-control\" id=\"in\" name=\"checkIn\" min=\"{{today | date:'yyyy-MM-dd' }}\"\n                         [(ngModel)]=\"booking.checkIn\" required=\"required\">\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <label class=\"createBooking\">Check Out : </label>\n                <div class=\"col-sm-5\">\n                  <input type=\"date\" class=\"form-control\" id=\"out\" name=\"checkOut\"\n                         min=\"{{booking.checkIn | date:'yyyy-MM-dd'}}\"\n                         [(ngModel)]=\"booking.checkOut\" required=\"required\">\n                </div>\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <label class=\"createBooking\">Number of guests (between 1 and 8):</label>\n              <input name=\"numberOfGuests\" class=\"form-control\" #name=\"ngModel\" [minlength]=\"1\" [maxlength]=\"1\"\n                     [(ngModel)]=\"booking.numberOfGuests\"\n                     type=\"text\" required pattern=\"[1-8]\">\n              <div class=\"invalid-feedback\">Number of guests must be a number type between 1 and 8 !!!</div>\n            </div>\n            <ng-container *ngIf=\"errorMessage !== ''\">\n              <div class=\"alert alert-danger\">\n                {{errorMessage}}\n              </div>\n            </ng-container>\n            <hr>\n            <div class=\"form-group row\">\n              <button type=\"submit\" class=\"btn btn-outline-primary\">Submit booking</button>\n            </div>\n          </form>\n        </div>\n      </article>\n    </div>\n  </div>\n</div>\n<app-spinner *ngIf=\"isLoading\"></app-spinner>\n"

/***/ }),

/***/ "./src/app/components/booking/booking-create/booking-create.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/booking/booking-create/booking-create.component.ts ***!
  \*******************************************************************************/
/*! exports provided: BookingCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingCreateComponent", function() { return BookingCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_booking_booking_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/booking/booking.service */ "./src/app/services/booking/booking.service.ts");
/* harmony import */ var _services_apartment_apartment_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/apartment/apartment.service */ "./src/app/services/apartment/apartment.service.ts");
/* harmony import */ var _models_booking_create__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../models/booking-create */ "./src/app/models/booking-create.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BookingCreateComponent = /** @class */ (function () {
    function BookingCreateComponent(bookingService, apartmentService, activatedRoute, router) {
        this.bookingService = bookingService;
        this.apartmentService = apartmentService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.booking = new _models_booking_create__WEBPACK_IMPORTED_MODULE_4__["BookingCreate"]();
        this.formValid = true;
        this.errorMessage = '';
        this.isLoading = false;
    }
    BookingCreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.booking = new _models_booking_create__WEBPACK_IMPORTED_MODULE_4__["BookingCreate"]();
        this.today = new Date();
        this.getApartmentById();
        this.activatedRoute.queryParams.subscribe(function (params) {
            _this.booking.checkIn = params['checkin'];
            _this.booking.checkOut = params['checkout'];
            _this.booking.numberOfGuests = params['num_of_guests'];
        });
    };
    BookingCreateComponent.prototype.onSubmit = function () {
        this.router.navigate(['/bookings']);
    };
    BookingCreateComponent.prototype.createBooking = function (createBookingForm) {
        var _this = this;
        this.isLoading = true;
        var id = +this.activatedRoute.snapshot.paramMap.get('id');
        if (createBookingForm.valid) {
            this.bookingService.createBooking(this.booking, id).subscribe(function (res) {
                alert('Your booking created successful!');
                _this.onSubmit();
                _this.isLoading = false;
            }, function (error) {
                _this.isLoading = false;
                _this.errorMessage = JSON.parse(error.error).message;
            });
        }
        else {
            this.formValid = false;
            this.isLoading = false;
        }
    };
    BookingCreateComponent.prototype.getApartmentById = function () {
        var _this = this;
        var id = +this.activatedRoute.snapshot.paramMap.get('id');
        this.apartmentService.getApartmentByIdApartment(id).subscribe(function (apart) {
            _this.apartment = apart;
        });
    };
    BookingCreateComponent.prototype.calculateTotalDays = function (checkIn, checkOut) {
        if (this.bookingService.calculateNumberOfDates(checkIn, checkOut) > 0) {
            return this.bookingService.calculateNumberOfDates(checkIn, checkOut);
        }
        else {
            return 0;
        }
    };
    BookingCreateComponent.prototype.calculatePriceByDates = function (checkIn, checkOut) {
        if ((checkOut > checkIn) && checkOut != null && checkIn != null) {
            return (this.apartment.price * this.bookingService.calculateNumberOfDates(checkIn, checkOut));
        }
        else {
            return 0;
        }
    };
    BookingCreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-booking-create',
            template: __webpack_require__(/*! ./booking-create.component.html */ "./src/app/components/booking/booking-create/booking-create.component.html"),
            styles: [__webpack_require__(/*! ./booking-create.component.css */ "./src/app/components/booking/booking-create/booking-create.component.css")]
        }),
        __metadata("design:paramtypes", [_services_booking_booking_service__WEBPACK_IMPORTED_MODULE_2__["BookingService"],
            _services_apartment_apartment_service__WEBPACK_IMPORTED_MODULE_3__["ApartmentService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], BookingCreateComponent);
    return BookingCreateComponent;
}());



/***/ }),

/***/ "./src/app/components/booking/booking.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/booking/booking.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".image{\n  width: 220px;\n  height: 220px;\n}\n.img-responsive {\n  width: 220px;\n  height: 200px;\n  position: relative ;\n  margin-left: auto;\n  margin-right: auto;\n  text-align: center;\n}\n"

/***/ }),

/***/ "./src/app/components/booking/booking.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/booking/booking.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul *ngIf=\"booking\" style=\"list-style: none\">\n    <div class=\"container\">\n      <div class=\"row mb-3\">\n        <div class=\"col-md-12\">\n          <div class=\"card\">\n            <div class=\"card-body\">\n              <div class=\"row\">\n                <div class=\"col-md-9  card-body\">\n                  <div class=\"list-title\">\n                    <ul class=\"list-inline list-unstyled\">\n                      <li class=\"list-inline-item\">\n                            <h3><b>{{booking.apartmentDto.propertyDto.name}}, \n                              {{booking.apartmentDto.name}}</b></h3>     \n                      </li>\n                      <li class=\"list-inline-item text-warning\"><i class=\"fa fa-star\"></i><i class=\"fa fa-star\"></i><i\n                        class=\"fa fa-star\"></i><i class=\"fa fa-star\"></i><i class=\"fa fa-star-half\"></i></li>\n                      <li class=\"list-inline-item text-success\"><i class=\"fa fa-thumbs-up\"></i></li>\n                    </ul>\n                  </div>\n                  <div class=\"list-location\">\n                    <h4>Price: {{booking.totalPrice}} USD</h4> \n                    <li>\n                    <h4>Status:\n                      <b *ngIf=\"isCanceled(booking.bookingStatus.name)\" style=\"color:red\">{{booking.bookingStatus.name}}</b>\n                      <b *ngIf=\"!isCanceled(booking.bookingStatus.name)\"style=\"color:green\">{{booking.bookingStatus.name}}</b>\n                    </h4>\n                    </li>\n                    <h4>Dates: {{booking.checkIn | date:'dd-MM-yyyy' }} - {{booking.checkOut | date:'dd-MM-yyyy' }}</h4>          \n                    <h4>Number of guests: {{booking.apartmentDto.numberOfGuests}}</h4>  \n                  </div>\n                  <div class=\"list-descrip\">  \n                    <br>\n                    <h5>Apartment:</h5>\n                    <small>Actual Price: {{booking.apartmentDto.price}} USD</small>                      \n                    <br>\n                    <small>Amenties: \n                    </small> \n                    <small *ngFor= \"let am of booking.apartmentDto.amenities\">{{am.name}}; \n                    </small>           \n                    <br>\n                    <small>Apartment type: {{booking.apartmentDto.apartmentType.name}}</small>                      \n                    <br><br>\n                    <h5>Hotel:</h5>\n                    <small>Rating: {{booking.apartmentDto.propertyDto.rating}}</small>                      \n                    <br>\n                    <small>Address: {{booking.apartmentDto.propertyDto.address.addressLine}}, \n                        {{booking.apartmentDto.propertyDto.address.city.name}},\n                        {{booking.apartmentDto.propertyDto.address.city.country.name}}\n                    </small>                      \n                    <br>\n                    <small>Phone number: {{booking.apartmentDto.propertyDto.phoneNumber}}</small>                      \n                    <br>\n                    <small>Email: {{booking.apartmentDto.propertyDto.contactEmail}}</small>                      \n                    <br>\n                    <small>Facilities: </small>\n                    <small *ngFor= \"let facilitie of booking.apartmentDto.propertyDto.facilities\">\n                    {{facilitie.name}}; </small>                    \n                    <br>\n                    <small>Descroption: {{booking.apartmentDto.propertyDto.description}}</small>                      \n                    <br>\n                      <div *ngIf= \"booking?.reviewDto\">\n                        <br>\n                        <h5>Your review:</h5>\n                        <small>Rating: {{booking.reviewDto.rating}}</small>\n                        <br>\n                        <small>Message: {{booking.reviewDto.message}}</small>\n                        <br>\n                     </div>\n                     <br>\n                      \n                  </div>\n                </div>  \n                  <div class=\"col-md-3 border-left card-body\">\n                    <img *ngIf=\"booking.apartmentDto.propertyDto.photos[0]\" class=\"img-responsive\"\n                    alt=\"No Photo\" src={{booking.apartmentDto.propertyDto.photos[0].url}}>\n                    <br><br>\n                    <img *ngIf=\"booking.apartmentDto.propertyDto.photos[1]\" class=\"img-responsive\"\n                    alt=\"No Photo\" src={{booking.apartmentDto.propertyDto.photos[1].url}}>\n                    <br><br>\n                    <img *ngIf=\"booking.apartmentDto.propertyDto.photos[2]\" class=\"img-responsive\"\n                    alt=\"No Photo\" src={{booking.apartmentDto.propertyDto.photos[2].url}}>\n                    <br><br>\n\n                    <app-photo-popup\n                    [booking]=\"booking\">\n                    </app-photo-popup> <!-- add conditionng ngIf-->\n                    <br>\n                    </div>\n              </div>\n              <hr>    \n              <div >\n                  <button class=\"btn btn-primary btn-block\" (click)=\"backToBookings()\">Back to bookings</button>\n                  <div *ngIf=\"isBookingDateActual(booking?.checkIn, booking?.checkOut) && \n                    !isCanceled(booking?.bookingStatus?.name)\">\n                    <br>\n                    <button class=\"btn btn-secondary btn-block\" (click)=\"cancelBooking()\">Cancel Booking</button>\n                  </div>                      \n              </div>          \n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n</ul>\n<app-spinner *ngIf=\"isLoading\"></app-spinner>\n\n"

/***/ }),

/***/ "./src/app/components/booking/booking.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/booking/booking.component.ts ***!
  \*********************************************************/
/*! exports provided: BookingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingComponent", function() { return BookingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_booking__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/booking */ "./src/app/models/booking.ts");
/* harmony import */ var _services_booking_booking_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/booking/booking.service */ "./src/app/services/booking/booking.service.ts");
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/@angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/authentication/auth.service */ "./src/app/services/authentication/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var BookingComponent = /** @class */ (function () {
    function BookingComponent(auth, route, bookingService, router) {
        this.auth = auth;
        this.route = route;
        this.bookingService = bookingService;
        this.router = router;
        this.bookingsUrl = '/bookings';
        this.isLoading = false;
    }
    BookingComponent.prototype.ngOnInit = function () {
        this.authenticated = this.auth.isAuthenticated;
        this.getBooking();
    };
    BookingComponent.prototype.getBooking = function () {
        var _this = this;
        this.isLoading = true;
        var id = +this.route.snapshot.paramMap.get('id');
        this.bookingService.getBooking(id)
            .subscribe(function (booking) {
            _this.booking = booking;
            _this.isLoading = false;
        }, function (error) { return _this.isLoading = false; });
    };
    BookingComponent.prototype.cancelBooking = function () {
        var _this = this;
        this.isLoading = true;
        var id = +this.route.snapshot.paramMap.get('id');
        this.bookingService.cancelBookings(id)
            .subscribe(function (res) {
            _this.isLoading = false;
            _this.backToBookings();
        }, function (error) { return _this.isLoading = false; });
    };
    BookingComponent.prototype.isBookingDateActual = function (checkIn, checkOut) {
        return this.bookingService.isBookingDateActual(checkIn, checkOut);
    };
    BookingComponent.prototype.isCanceled = function (bookingStatus) {
        return this.bookingService.isCanceled(bookingStatus);
    };
    BookingComponent.prototype.isReview = function (idReview) {
        if (!idReview) {
            return true;
        }
        else {
            return false;
        }
    };
    BookingComponent.prototype.backToBookings = function () {
        if (localStorage.getItem('urlToButtonBackToListBookings')) {
            var urlFromLocalStorage = localStorage.getItem('urlToButtonBackToListBookings');
            this.router.navigateByUrl(urlFromLocalStorage.split('/')[3]);
        }
        else {
            this.router.navigate([this.bookingsUrl]);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_booking__WEBPACK_IMPORTED_MODULE_1__["Booking"])
    ], BookingComponent.prototype, "booking", void 0);
    BookingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-booking',
            template: __webpack_require__(/*! ./booking.component.html */ "./src/app/components/booking/booking.component.html"),
            styles: [__webpack_require__(/*! ./booking.component.css */ "./src/app/components/booking/booking.component.css")]
        }),
        __metadata("design:paramtypes", [_services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _services_booking_booking_service__WEBPACK_IMPORTED_MODULE_2__["BookingService"],
            _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], BookingComponent);
    return BookingComponent;
}());



/***/ }),

/***/ "./src/app/components/booking/guest-arrivals/guest-arrivals.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/components/booking/guest-arrivals/guest-arrivals.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".img-responsive {\n  width: 210px;\n  height: 180px;\n  position: relative ;\n}\n"

/***/ }),

/***/ "./src/app/components/booking/guest-arrivals/guest-arrivals.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/components/booking/guest-arrivals/guest-arrivals.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-user-navigation></app-user-navigation>\n<br>\n\n<div class=\"container\">\n  <div class=\"text-center\">\n    <ul class=\"pagination\">\n      <li class=\"page-item active\" [ngClass]=\"{active: filterBookings == futureBookings}\">\n        <p class=\"page-link\" (click)=\"filterFutureBookings()\">Future bookings</p>\n      </li>\n      <li class=\"page-item active\" [ngClass]=\"{active: filterBookings == actualBookings }\">\n        <p class=\"page-link\" (click)=\"filterActualBooking()\">Actual bookings</p>\n      </li>\n      <li class=\"page-item active\" [ngClass]=\"{active: filterBookings == pastBookings }\">\n        <p class=\"page-link\" (click)=\"filterPastBooking()\">Past bookings</p>\n      </li>\n    </ul>\n  </div>\n</div>\n<div *ngIf=\"totalElements == 0 \" class=\"container\">\n  <h1 style=\"color: #07B3F9\">You do not have bookings !</h1>\n</div>\n\n<div *ngIf=\"totalElements !=0 \">\n  <div class=\"container\">\n    <div class=\"form-group row\" id=\"items-size\">\n      <h2 style=\"margin-right: 2%; height: content-box\">Reviews on page:</h2>\n      <app-items-size\n        (sentSelectedItemsSize)=\"setSelectedItemsSize($event)\">\n      </app-items-size>\n      <h1 style=\"margin-left: 20%\">{{property.name}} : {{property.rating | number: '1.1'}}</h1>\n    </div>\n    <br><br>\n\n    <table class=\"table table-hover\">\n      <thead>\n      <tr>\n        <th scope=\"col\">Apartment name</th>\n        <th scope=\"col\">Check In</th>\n        <th scope=\"col\">Check out</th>\n        <th scope=\"col\">Number of Guests</th>\n        <th scope=\"col\">Surname and Name</th>\n      </tr>\n      </thead>\n      <tbody *ngFor=\"let booking of guestArrivalsList\">\n      <tr>\n        <th>{{booking.apartmentDto.name}}</th>\n        <td>{{booking.checkIn | date:'dd-MM-yyyy'}}</td>\n        <td>{{booking.checkOut | date:'dd-MM-yyyy'}}</td>\n        <td>{{booking.apartmentDto.numberOfGuests}}</td>\n        <td>{{booking.userDto.lastName}} {{booking.userDto.firstName}}</td>\n      </tr>\n      </tbody>\n    </table>\n    <app-pagination\n      [currentPage]=\"currentPage\"\n      [totalPages]=\"totalPages\"\n      [pagesToPagination]=\"pagesToPagination\"\n      (goFirst)=\"onFirst($event)\"\n      (goPrev)=\"onPrev()\"\n      (goNext)=\"onNext()\"\n      (goLast)=\"onLast($event)\"\n      (goPage)=\"goToPage($event)\">\n    </app-pagination>\n\n  </div>\n\n  <div *ngIf=\"totalElements == 0 \">\n    <h3>You do not have any bookings !</h3>\n  </div>\n</div>\n<app-spinner *ngIf=\"isLoading\"></app-spinner>\n"

/***/ }),

/***/ "./src/app/components/booking/guest-arrivals/guest-arrivals.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/booking/guest-arrivals/guest-arrivals.component.ts ***!
  \*******************************************************************************/
/*! exports provided: GuestArrivalsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuestArrivalsComponent", function() { return GuestArrivalsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_booking_booking_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/booking/booking.service */ "./src/app/services/booking/booking.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_pagination_pagination_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/pagination/pagination.service */ "./src/app/services/pagination/pagination.service.ts");
/* harmony import */ var _services_property_property_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/property/property.service */ "./src/app/services/property/property.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GuestArrivalsComponent = /** @class */ (function () {
    function GuestArrivalsComponent(bookingService, route, paginationService, propertyService) {
        this.bookingService = bookingService;
        this.route = route;
        this.paginationService = paginationService;
        this.propertyService = propertyService;
        this.currentPage = 1;
        this.selectedItemsSize = 5;
        this.futureBookings = 'futureBookings';
        this.actualBookings = 'actualBookings';
        this.pastBookings = 'pastBookings';
        this.isLoading = false;
    }
    GuestArrivalsComponent.prototype.ngOnInit = function () {
        if (window.location.href.split('/')[5] === this.actualBookings) {
            this.filterBookings = this.actualBookings;
        }
        else if (window.location.href.split('/')[5] === this.pastBookings) {
            this.filterBookings = this.pastBookings;
        }
        else {
            this.filterBookings = this.futureBookings;
        }
        this.getBookingsByPage();
        this.getProperty();
    };
    GuestArrivalsComponent.prototype.getBookingsByPage = function () {
        var _this = this;
        this.isLoading = true;
        var id = +this.route.snapshot.paramMap.get('id');
        if (this.selectedItemsSize) {
            this.bookingService.getPageGuestArrivalsList(id, this.currentPage - 1, this.selectedItemsSize, this.filterBookings).subscribe(function (data) {
                _this.guestArrivalsList = data['content'];
                _this.totalPages = data['totalPages'];
                _this.totalElements = data['totalElements'];
                _this.pagesToPagination = _this.paginationService.calculatePages(_this.currentPage, _this.totalPages);
                _this.isLoading = false;
            });
        }
    };
    GuestArrivalsComponent.prototype.setSelectedItemsSize = function (n) {
        this.selectedItemsSize = n;
        this.currentPage = 1;
        this.getBookingsByPage();
    };
    GuestArrivalsComponent.prototype.goToPage = function (n) {
        this.currentPage = n;
        this.getBookingsByPage();
    };
    GuestArrivalsComponent.prototype.onFirst = function (n) {
        this.currentPage = n;
        this.getBookingsByPage();
    };
    GuestArrivalsComponent.prototype.onPrev = function () {
        this.currentPage--;
        this.getBookingsByPage();
    };
    GuestArrivalsComponent.prototype.onNext = function () {
        this.currentPage++;
        this.getBookingsByPage();
    };
    GuestArrivalsComponent.prototype.onLast = function (n) {
        this.currentPage = n;
        this.getBookingsByPage();
    };
    GuestArrivalsComponent.prototype.filterFutureBookings = function () {
        var newUrl = window.location.protocol + '//' + window.location.host + '/'
            + window.location.pathname.split('/')[1] + '/'
            + window.location.pathname.split('/')[2] + '/'
            + window.location.pathname.split('/')[3] + '/'
            + this.futureBookings;
        if (window.location.href !== newUrl) {
            history.pushState(null, null, newUrl);
            if (this.filterBookings !== this.futureBookings) {
                this.currentPage = 1;
            }
            this.filterBookings = this.futureBookings;
            this.getBookingsByPage();
        }
    };
    GuestArrivalsComponent.prototype.filterActualBooking = function () {
        var newUrl = window.location.protocol + '//' + window.location.host + '/'
            + window.location.pathname.split('/')[1] + '/'
            + window.location.pathname.split('/')[2] + '/'
            + window.location.pathname.split('/')[3] + '/'
            + this.actualBookings;
        if (window.location.href !== newUrl) {
            history.pushState(null, null, newUrl);
            if (this.filterBookings !== this.actualBookings) {
                this.currentPage = 1;
            }
            this.filterBookings = this.actualBookings;
            this.getBookingsByPage();
        }
    };
    GuestArrivalsComponent.prototype.filterPastBooking = function () {
        var newUrl = window.location.protocol + '//' + window.location.host + '/'
            + window.location.pathname.split('/')[1] + '/'
            + window.location.pathname.split('/')[2] + '/'
            + window.location.pathname.split('/')[3] + '/'
            + this.pastBookings;
        if (window.location.href !== newUrl) {
            history.pushState(null, null, newUrl);
            if (this.filterBookings !== this.pastBookings) {
                this.currentPage = 1;
            }
            this.filterBookings = this.pastBookings;
            this.getBookingsByPage();
        }
    };
    GuestArrivalsComponent.prototype.getProperty = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        this.propertyService.getPropertyById(id).subscribe(function (pr) { return _this.property = pr; });
    };
    GuestArrivalsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-guest-arrivals',
            template: __webpack_require__(/*! ./guest-arrivals.component.html */ "./src/app/components/booking/guest-arrivals/guest-arrivals.component.html"),
            styles: [__webpack_require__(/*! ./guest-arrivals.component.css */ "./src/app/components/booking/guest-arrivals/guest-arrivals.component.css")]
        }),
        __metadata("design:paramtypes", [_services_booking_booking_service__WEBPACK_IMPORTED_MODULE_1__["BookingService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_pagination_pagination_service__WEBPACK_IMPORTED_MODULE_3__["PaginationService"],
            _services_property_property_service__WEBPACK_IMPORTED_MODULE_4__["PropertyService"]])
    ], GuestArrivalsComponent);
    return GuestArrivalsComponent;
}());



/***/ }),

/***/ "./src/app/components/booking/list-booking/list-booking.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/booking/list-booking/list-booking.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".img-responsive {\n    width: 210px;\n    height: 180x;\n    position: relative ;\n  }"

/***/ }),

/***/ "./src/app/components/booking/list-booking/list-booking.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/booking/list-booking/list-booking.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-3\">\n      <div class=\"row mb-3\">\n        <div class=\"col-md-12\">\n          <div class=\"card bg-warning\">\n            <div class=\"card-body\">\n              <div class=\"row\">\n\n                <div class=\"col-md-12\">\n                  <h3>Bookings Filter</h3>                \n\n                  <div class=\"form-group\">\n                    <h5>Booking on page</h5>\n                    <app-items-size (sentSelectedItemsSize)=\"setSelectedItemsSize($event)\">\n                    </app-items-size>\n                  </div>\n\n                  <div class=\"form-group\">\n                    <h5>Filter by dates</h5>\n                    <div>\n                      <ul style=\"padding:0; list-style-type: none\"> \n                        <li class=\"page-item active\" [ngClass]=\"{active: filterBookingsByDates == allBookingsString }\">\n                            <p class=\"page-link\"  (click)=\"filterAllBookings()\">All bookings</p>\n                        </li>\n                        <li class=\"page-item active\" [ngClass]=\"{active: filterBookingsByDates == actualBookingsString }\">\n                            <p class=\"page-link\"  (click)=\"fiterActualBookings()\">Actual bookings</p>\n                        </li>\n                        <li class=\"page-item active\" [ngClass]=\"{active: filterBookingsByDates == archieveBookingsString }\">\n                            <p class=\"page-link\"  (click)=\"filterArchieveBookings()\">Archieve bookings</p>\n                        </li>\n                      </ul>\n                    </div>\n                  </div>\n                 </div>             \n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-md-9\">  \n    <div *ngIf=\"totalElements !=0 \">\n      <ul style=\"list-style: none\">\n        <li *ngFor=\"let booking of bookings\">\n          <div class=\"row mb-3\">\n            <div class=\"col-md-12\">\n              <div class=\"card\" style=\"max-height: 300px\">\n                <div class=\"card-body\">\n                  <div class=\"row\">\n\n                    <div class=\"col-md-3\">\n                      <img *ngIf=\"booking.apartmentDto.propertyDto.photos.length > 0\" class=\"img-responsive\" \n                      src={{booking.apartmentDto.propertyDto.photos[0].url}}\n                           alt=\"{{booking.apartmentDto.propertyDto.name}}\">\n                      <img *ngIf=\"booking.apartmentDto.propertyDto.photos.length === 0\" class=\"img-responsive\" \n                      src=\"assets/image/Capture.PNG\" alt=\"{{booking.apartmentDto.propertyDto.name}}\">\n                    </div>    \n      \n                    <div class=\"col-md-6  card-body\" style=\"margin-left: 10%; width: 300px\">\n                      <div class=\"list-title\">\n                        <ul class=\"list-inline list-unstyled\">\n                          <li class=\"list-inline-item\">\n                            <a routerLink=\"/booking/{{booking.bookingId}}\">\n                                <h4  (click)=\"setUlrToLocalStorage()\">\n                                  <b>{{booking.apartmentDto.propertyDto.name}}, \n                                   {{booking.apartmentDto.name}}</b>\n                                </h4>     \n                            </a>\n                          </li>\n                          <li class=\"list-inline-item text-warning\"><i class=\"fa fa-star\"></i><i class=\"fa fa-star\"></i><i\n                            class=\"fa fa-star\"></i><i class=\"fa fa-star\"></i><i class=\"fa fa-star-half\"></i></li>\n                          <li class=\"list-inline-item text-success\"><i class=\"fa fa-thumbs-up\"></i></li>\n                        </ul>\n                      </div>      \n      \n                      <div class=\"list-descrip\">\n                        <small style=\"font-size: 15px\">Dates: {{booking.checkIn | date:'dd-MM-yyyy' }} - {{booking.checkOut | date:'dd-MM-yyyy' }}</small>\n                        <br>\n                        <small style=\"font-size: 15px ;\">Number of guests: {{booking.apartmentDto.numberOfGuests}}</small>\n                        <br>\n                        <small style=\"font-size: 15px\">Apartment type: {{booking.apartmentDto.apartmentType.name}}</small>\n                        <br>\n                      </div>\n                    </div>                    \n      \n                    <div class=\"col-md-3 border-left card-body\">\n                      <ul class=\"list-unstyled\">\n                        <li>\n                            <h2>\n                            <b *ngIf=\"isCanceled(booking.bookingStatus.name)\" style=\"color:red\">{{booking.bookingStatus.name}}</b>\n                            <b *ngIf=\"!isCanceled(booking.bookingStatus.name)\"style=\"color:green\">{{booking.bookingStatus.name}}</b>\n                            </h2>\n                        </li>\n                        <li><h4>Price:</h4></li>\n                        <li><h4>{{booking.totalPrice}}*\n                          <p style=\"font-size: 14px\">*number of days: {{calculateNumberOfDates(booking.checkIn , booking.checkOut )}}</p>\n                         </h4></li>\n                        </ul>\n                      <div *ngIf=\" !isBookingDateActual(booking.checkIn, booking.checkOut)\">\n                        <div *ngIf=\"!booking.reviewDto\">\n                          <hr>\n                          <button type=\"button\" routerLink=\"/review-create/{{booking.bookingId}}\"\n                                  class=\"btn btn-outline-primary\">Write Review</button>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </li>\n      </ul>\n    </div>\n      <div *ngIf=\"totalElements == 0 \">\n        <h3>You not have booking yet. </h3>\n      </div>\n\n      <div class=\"row\" *ngIf=\"totalElements !=0\">\n        <ul class=\"pagination\" style=\"margin-left: 25%\">\n          <app-pagination\n            [currentPage]=\"currentPage\"\n            [totalPages]= \"totalPages\"\n            [pagesToPagination]= \"pagesToPagination\"    \n            (goFirst)=\"onFirst($event)\"\n            (goPrev)=\"onPrev()\"\n            (goNext)=\"onNext()\"\n            (goLast)=\"onLast($event)\"\n            (goPage)=\"goToPage($event)\">\n        </app-pagination>\n        </ul>\n      </div>\n  </div>\n</div>\n     \n</div> \n<app-spinner *ngIf=\"isLoading\"></app-spinner>\n"

/***/ }),

/***/ "./src/app/components/booking/list-booking/list-booking.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/booking/list-booking/list-booking.component.ts ***!
  \***************************************************************************/
/*! exports provided: ListBookingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListBookingComponent", function() { return ListBookingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_booking_booking_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/booking/booking.service */ "./src/app/services/booking/booking.service.ts");
/* harmony import */ var _services_pagination_pagination_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/pagination/pagination.service */ "./src/app/services/pagination/pagination.service.ts");
/* harmony import */ var _services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/authentication/auth.service */ "./src/app/services/authentication/auth.service.ts");
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../node_modules/@angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ListBookingComponent = /** @class */ (function () {
    function ListBookingComponent(auth, bookingService, paginationService, route) {
        this.auth = auth;
        this.bookingService = bookingService;
        this.paginationService = paginationService;
        this.route = route;
        this.isLoading = false;
        this.allBookingsString = "allBookings";
        this.actualBookingsString = "actualBookings";
        this.archieveBookingsString = "archieveBookings";
        this.baseBookingUrl = window.location.protocol + "//"
            + window.location.host + "/"
            + "bookings";
    }
    ListBookingComponent.prototype.ngOnInit = function () {
        this.authenticated = this.auth.isAuthenticated;
        if (this.route.snapshot.queryParamMap.get('filter')) {
            this.filterBookingsByDates = this.route.snapshot.queryParamMap.get('filter');
        }
        else {
            this.filterBookingsByDates = this.allBookingsString;
        }
        if (localStorage.getItem('selectedItemsSize')) {
            this.selectedItemsSize = Number(localStorage.getItem('selectedItemsSize'));
        }
        if (Number(this.route.snapshot.queryParamMap.get('page'))) {
            this.currentPage = Number(this.route.snapshot.queryParamMap.get('page'));
        }
        else {
            this.currentPage = 1;
        }
        if (!Number(this.route.snapshot.queryParamMap.get('page'))
            && !this.route.snapshot.queryParamMap.get('filter')) {
            var newUrl = this.getUrlWithPageAndFilter(this.currentPage, this.filterBookingsByDates);
            history.pushState(null, null, newUrl);
        }
        this.getBookingsByPage();
    };
    ListBookingComponent.prototype.getBookingsByPage = function () {
        var _this = this;
        this.isLoading = true;
        this.bookingService.getBookingsByPage(this.currentPage - 1, this.selectedItemsSize, this.filterBookingsByDates).subscribe(function (data) {
            _this.bookings = data['content'];
            _this.totalPages = data['totalPages'];
            _this.totalElements = data['totalElements'];
            _this.pagesToPagination = _this.paginationService.calculatePages(_this.currentPage, _this.totalPages);
            _this.isLoading = false;
        }, function (error) { return _this.isLoading = false; });
    };
    ListBookingComponent.prototype.setSelectedItemsSize = function (n) {
        this.selectedItemsSize = n;
        this.currentPage = 1;
        var newUrl = this.getUrlWithPageAndFilter(1, this.filterBookingsByDates);
        history.pushState(null, null, newUrl);
        this.getBookingsByPage();
    };
    ListBookingComponent.prototype.setUlrToLocalStorage = function () {
        localStorage.setItem('urlToButtonBackToListBookings', window.location.href);
    };
    ListBookingComponent.prototype.goToPage = function (n) {
        this.currentPage = n;
        var newUrl = this.getUrlWithPageAndFilter(this.currentPage, this.filterBookingsByDates);
        history.pushState(null, null, newUrl);
        this.getBookingsByPage();
    };
    ListBookingComponent.prototype.onFirst = function (n) {
        this.currentPage = n;
        var newUrl = this.getUrlWithPageAndFilter(this.currentPage, this.filterBookingsByDates);
        history.pushState(null, null, newUrl);
        this.getBookingsByPage();
    };
    ListBookingComponent.prototype.onPrev = function () {
        this.currentPage--;
        var newUrl = this.getUrlWithPageAndFilter(this.currentPage, this.filterBookingsByDates);
        history.pushState(null, null, newUrl);
        this.getBookingsByPage();
    };
    ListBookingComponent.prototype.onNext = function () {
        this.currentPage++;
        var newUrl = this.getUrlWithPageAndFilter(this.currentPage, this.filterBookingsByDates);
        history.pushState(null, null, newUrl);
        this.getBookingsByPage();
    };
    ListBookingComponent.prototype.onLast = function (n) {
        this.currentPage = n;
        var newUrl = this.getUrlWithPageAndFilter(this.currentPage, this.filterBookingsByDates);
        history.pushState(null, null, newUrl);
        this.getBookingsByPage();
    };
    ListBookingComponent.prototype.isCanceled = function (bookingStatus) {
        return this.bookingService.isCanceled(bookingStatus);
    };
    ListBookingComponent.prototype.isBookingDateActual = function (checkIn, checkOut) {
        return this.bookingService.isBookingDateActual(checkIn, checkOut);
    };
    ListBookingComponent.prototype.calculateNumberOfDates = function (checkIn, checkOut) {
        return this.bookingService.calculateNumberOfDates(checkIn, checkOut);
    };
    ListBookingComponent.prototype.filterAllBookings = function () {
        var newUrl = this.getUrlWithPageAndFilter(1, this.allBookingsString);
        if (this.route.snapshot.queryParamMap.get('filter') != this.allBookingsString) {
            this.currentPage = 1;
            history.pushState(null, null, newUrl);
            this.filterBookingsByDates = this.allBookingsString;
            this.getBookingsByPage();
        }
    };
    ListBookingComponent.prototype.fiterActualBookings = function () {
        var newUrl = this.getUrlWithPageAndFilter(1, this.actualBookingsString);
        if (this.route.snapshot.queryParamMap.get('filter') != this.actualBookingsString) {
            this.currentPage = 1;
            history.pushState(null, null, newUrl);
            this.filterBookingsByDates = this.actualBookingsString;
            this.getBookingsByPage();
        }
    };
    ListBookingComponent.prototype.filterArchieveBookings = function () {
        var newUrl = this.getUrlWithPageAndFilter(1, this.archieveBookingsString);
        if (this.route.snapshot.queryParamMap.get('filter') != this.archieveBookingsString) {
            this.currentPage = 1;
            history.pushState(null, null, newUrl);
            this.filterBookingsByDates = this.archieveBookingsString;
            this.getBookingsByPage();
        }
    };
    ListBookingComponent.prototype.getUrlWithPageAndFilter = function (page, filter) {
        return this.baseBookingUrl + "?page=" + page + "&filter=" + filter;
    };
    ListBookingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-booking',
            template: __webpack_require__(/*! ./list-booking.component.html */ "./src/app/components/booking/list-booking/list-booking.component.html"),
            styles: [__webpack_require__(/*! ./list-booking.component.css */ "./src/app/components/booking/list-booking/list-booking.component.css")]
        }),
        __metadata("design:paramtypes", [_services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _services_booking_booking_service__WEBPACK_IMPORTED_MODULE_1__["BookingService"],
            _services_pagination_pagination_service__WEBPACK_IMPORTED_MODULE_2__["PaginationService"],
            _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], ListBookingComponent);
    return ListBookingComponent;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"page-footer\">\n  <div class=\"footer-copyright text-center py-3\">© 2018 Copyright:\n    <a routerLink=\"/search\">BookingLite.com</a>\n  </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/header/header.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#navbarRightSide {\n  justify-content: flex-end;\n}\n.user-dropdown {\n  display: block;\n}\n.dropdown-toggle {\n  cursor: pointer;\n}\n\n"

/***/ }),

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand navbar-light bg-light\">\n  <a class=\"navbar-brand\" href=\"#\" routerLink=\"/search\">\n    <img src=\"assets/image/logo.png\" width=\"30\" height=\"30\" class=\"d-inline-block align-top\" alt=\"\">\n    Bookinglite\n  </a>\n  <div class=\"collapse navbar-collapse\" >\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" *ngIf=\"auth.isAuthenticated\" routerLink=\"/bookings\">Bookings</a>\n      </li>\n    </ul>\n  </div>\n  <div class=\"collapse navbar-collapse\" id=\"navbarRightSide\" >\n    <ul class=\"navbar-nav \">\n      <div class=\"dropdown show\" (click)=\"onClick()\">\n        <a class=\"navbar-brand dropdown-toggle\" role=\"button\" *ngIf=\"auth.isAuthenticated\">\n          <img src=\"assets/image/profile.png\" width=\"30\" height=\"30\" class=\"d-inline-block align-top\" alt=\"\">\n        </a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\" [ngClass]=\"{'user-dropdown' : isOpen}\">\n          <a [ngClass]=\"{'dropdown-item' : true, 'active' : href.includes('user')}\" routerLink=\"/user\">Profile</a>\n          <a [ngClass]=\"{'dropdown-item' : true, 'active' : href.includes('bookings')}\" routerLink=\"/bookings\">Bookings</a>\n          <a [ngClass]=\"{'dropdown-item' : true, 'active' : href.includes('properties')}\" routerLink=\"/myproperties\" *ngIf=\"isOwner\">Properies</a>\n        </div>\n      </div>\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" routerLink=\"/login\" *ngIf=\"auth.isAuthenticated\">Logout</a>\n        <a class=\"nav-link\" routerLink=\"/login\" *ngIf=\"!auth.isAuthenticated\">Login</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/authentication/auth.service */ "./src/app/services/authentication/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(auth) {
        this.auth = auth;
        this.isOpen = false;
        this.href = '';
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.isOwner.subscribe(function (isOwner) { return _this.isOwner = isOwner; });
    };
    HeaderComponent.prototype.onClick = function () {
        this.href = window.location.href;
        this.isOpen = !this.isOpen;
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/components/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/notfound/notfound.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/notfound/notfound.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*\n{\n  font-family: 'PT Sans Caption', sans-serif, 'arial', 'Times New Roman';\n}\n/* Error Page */\n.error .clip .shadow\n{\n  height: 180px;  /*Contrall*/\n}\n.error .clip:nth-of-type(2) .shadow\n{\n  width: 130px;   /*Contrall play with javascript*/\n}\n.error .clip:nth-of-type(1) .shadow, .error .clip:nth-of-type(3) .shadow\n{\n  width: 250px; /*Contrall*/\n}\n.error .digit\n{\n  width: 150px;   /*Contrall*/\n  height: 150px;  /*Contrall*/\n  line-height: 150px; /*Contrall*/\n  font-size: 120px;\n  font-weight: bold;\n}\n.error h2   /*Contrall*/\n{\n  font-size: 32px;\n}\n.error .msg /*Contrall*/\n{\n  top: -190px;\n  left: 30%;\n  width: 80px;\n  height: 80px;\n  line-height: 80px;\n  font-size: 32px;\n}\n.error span.triangle    /*Contrall*/\n{\n  top: 70%;\n  right: 0%;\n  border-left: 20px solid #535353;\n  border-top: 15px solid transparent;\n  border-bottom: 15px solid transparent;\n}\n.error .container-error-404\n{\n  margin-top: 10%;\n  position: relative;\n  height: 250px;\n  padding-top: 40px;\n}\n.error .container-error-404 .clip\n{\n  display: inline-block;\n  -webkit-transform: skew(-45deg);\n          transform: skew(-45deg);\n}\n.error .clip .shadow\n{\n\n  overflow: hidden;\n}\n.error .clip:nth-of-type(2) .shadow\n{\n  overflow: hidden;\n  position: relative;\n  box-shadow: inset 20px 0px 20px -15px rgba(150, 150, 150,0.8), 20px 0px 20px -15px rgba(150, 150, 150,0.8);\n}\n.error .clip:nth-of-type(3) .shadow:after, .error .clip:nth-of-type(1) .shadow:after\n{\n  content: \"\";\n  position: absolute;\n  right: -8px;\n  bottom: 0px;\n  z-index: 9999;\n  height: 100%;\n  width: 10px;\n  background: linear-gradient(90deg, transparent, rgba(173,173,173, 0.8), transparent);\n  border-radius: 50%;\n}\n.error .clip:nth-of-type(3) .shadow:after\n{\n  left: -8px;\n}\n.error .digit\n{\n  position: relative;\n  top: 8%;\n  color: white;\n  background: #07B3F9;\n  border-radius: 50%;\n  display: inline-block;\n  -webkit-transform: skew(45deg);\n          transform: skew(45deg);\n}\n.error .clip:nth-of-type(2) .digit\n{\n  left: -10%;\n}\n.error .clip:nth-of-type(1) .digit\n{\n  right: -20%;\n}\n.error .clip:nth-of-type(3) .digit\n {\n   left: -20%;\n }\n.error h2\n{\n  color: #A2A2A2;\n  font-weight: bold;\n  padding-bottom: 20px;\n}\n.error .msg\n{\n  position: relative;\n  z-index: 9999;\n  display: block;\n  background: #535353;\n  color: #A2A2A2;\n  border-radius: 50%;\n  font-style: italic;\n}\n.error .triangle\n{\n  position: absolute;\n  z-index: 999;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n  content: \"\";\n  width: 0;\n  height: 0;\n}\n/* Error Page */\n@media(max-width: 767px)\n{\n  /* Error Page */\n  .error .clip .shadow\n  {\n    height: 100px;  /*Contrall*/\n  }\n  .error .clip:nth-of-type(2) .shadow\n  {\n    width: 80px;   /*Contrall play with javascript*/\n  }\n  .error .clip:nth-of-type(1) .shadow, .error .clip:nth-of-type(3) .shadow\n  {\n    width: 100px; /*Contrall*/\n  }\n  .error .digit\n  {\n    width: 80px;   /*Contrall*/\n    height: 80px;  /*Contrall*/\n    line-height: 80px; /*Contrall*/\n    font-size: 52px;\n  }\n  .error h2   /*Contrall*/\n  {\n    font-size: 24px;\n  }\n  .error .msg /*Contrall*/\n  {\n    top: -110px;\n    left: 15%;\n    width: 40px;\n    height: 40px;\n    line-height: 40px;\n    font-size: 18px;\n  }\n  .error span.triangle    /*Contrall*/\n  {\n    top: 70%;\n    right: -3%;\n    border-left: 10px solid #535353;\n    border-top: 8px solid transparent;\n    border-bottom: 8px solid transparent;\n  }\n  .error .container-error-404\n  {\n    height: 150px;\n  }\n  /* Error Page */\n}\n/*--------------------------------------------Framework --------------------------------*/\n.overlay { position: relative; z-index: 20; }\n/*done*/\n.ground-color { background: white; }\n/*done*/\n.item-bg-color { background: #EAEAEA }\n/*done*/\n/* Padding Section*/\n.padding-top { padding-top: 10px; }\n/*done*/\n.padding-bottom { padding-bottom: 10px; }\n/*done*/\n.padding-vertical { padding-top: 10px; padding-bottom: 10px; }\n.padding-horizontal { padding-left: 10px; padding-right: 10px; }\n.padding-all { padding: 10px; }\n/*done*/\n.no-padding-left { padding-left: 0px; }\n/*done*/\n.no-padding-right { padding-right: 0px; }\n/*done*/\n.no-vertical-padding { padding-top: 0px; padding-bottom: 0px; }\n.no-horizontal-padding { padding-left: 0px; padding-right: 0px; }\n.no-padding { padding: 0px; }\n/*done*/\n/* Padding Section*/\n/* Margin section */\n.margin-top { margin-top: 10px; }\n/*done*/\n.margin-bottom { margin-bottom: 10px; }\n/*done*/\n.margin-right { margin-right: 10px; }\n/*done*/\n.margin-left { margin-left: 10px; }\n/*done*/\n.margin-horizontal { margin-left: 10px; margin-right: 10px; }\n/*done*/\n.margin-vertical { margin-top: 10px; margin-bottom: 10px; }\n/*done*/\n.margin-all { margin: 10px; }\n/*done*/\n.no-margin { margin: 0px; }\n/*done*/\n.no-vertical-margin { margin-top: 0px; margin-bottom: 0px; }\n.no-horizontal-margin { margin-left: 0px; margin-right: 0px; }\n.inside-col-shrink { margin: 0px 20px; }\n/*done - For the inside sections that has also Title section*/\n/* Margin section */\nhr\n{ margin: 0px; padding: 0px; border-top: 1px dashed #999; }\n/*--------------------------------------------FrameWork------------------------*/\n"

/***/ }),

/***/ "./src/app/components/notfound/notfound.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/notfound/notfound.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"error\">\n  <div class=\"container-floud\">\n    <div class=\"col-xs-12 ground-color text-center\">\n      <div class=\"container-error-404\">\n        <div class=\"clip\"><div class=\"shadow\"><span class=\"digit thirdDigit\">4</span></div></div>\n        <div class=\"clip\"><div class=\"shadow\"><span class=\"digit secondDigit\">0</span></div></div>\n        <div class=\"clip\"><div class=\"shadow\"><span class=\"digit firstDigit\">4</span></div></div>\n        <div class=\"msg\">OH!<span class=\"triangle\"></span></div>\n      </div>\n      <h2 class=\"h1\">Sorry! Page not found</h2>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/notfound/notfound.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/notfound/notfound.component.ts ***!
  \***********************************************************/
/*! exports provided: NotfoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotfoundComponent", function() { return NotfoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotfoundComponent = /** @class */ (function () {
    function NotfoundComponent() {
    }
    NotfoundComponent.prototype.ngOnInit = function () {
    };
    NotfoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notfound',
            template: __webpack_require__(/*! ./notfound.component.html */ "./src/app/components/notfound/notfound.component.html"),
            styles: [__webpack_require__(/*! ./notfound.component.css */ "./src/app/components/notfound/notfound.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotfoundComponent);
    return NotfoundComponent;
}());



/***/ }),

/***/ "./src/app/components/pagination/items-size/items-size.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/components/pagination/items-size/items-size.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/pagination/items-size/items-size.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/components/pagination/items-size/items-size.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <select class=\"custom-select my-1 mr-sm-2\" id=\"inlineFormCustomSelectPref\" \n        [(ngModel)]=selectedItemsSize (ngModelChange)='onSelectedItemsSize()'>\n        <option [value]=\" itemsSize[0]\" selected>{{ itemsSize[0]}}</option>\n        <option *ngFor=\"let item of itemsSize.slice(1)\"  [value]=\"item\" >{{item}}</option>\n    </select>\n</div>\n"

/***/ }),

/***/ "./src/app/components/pagination/items-size/items-size.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/pagination/items-size/items-size.component.ts ***!
  \**************************************************************************/
/*! exports provided: ItemsSizeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemsSizeComponent", function() { return ItemsSizeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ItemsSizeComponent = /** @class */ (function () {
    function ItemsSizeComponent() {
        this.itemsSize = [5, 10, 25];
        this.sentSelectedItemsSize = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ItemsSizeComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('selectedItemsSize')) {
            this.selectedItemsSize = Number(localStorage.getItem('selectedItemsSize'));
        }
        else {
            this.selectedItemsSize = this.itemsSize[0];
            this.onSelectedItemsSize();
        }
    };
    ItemsSizeComponent.prototype.onSelectedItemsSize = function () {
        localStorage.setItem('selectedItemsSize', String(this.selectedItemsSize));
        this.sentSelectedItemsSize.emit(this.selectedItemsSize);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ItemsSizeComponent.prototype, "sentSelectedItemsSize", void 0);
    ItemsSizeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-items-size',
            template: __webpack_require__(/*! ./items-size.component.html */ "./src/app/components/pagination/items-size/items-size.component.html"),
            styles: [__webpack_require__(/*! ./items-size.component.css */ "./src/app/components/pagination/items-size/items-size.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ItemsSizeComponent);
    return ItemsSizeComponent;
}());



/***/ }),

/***/ "./src/app/components/pagination/pagination.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/pagination/pagination.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/pagination/pagination.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/pagination/pagination.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"itemOnPage\">\n    <select class=\"custom-select my-1 mr-sm-2\" id=\"inlineFormCustomSelectPref\" \n        [(ngModel)]=selectedItemOnPage (ngModelChange)='onSelectedItemOnPage()'>\n        <option [value]=\" itemOnPage[0]\" selected>{{ itemOnPage[0]}}</option>\n        <option *ngFor=\"let item of itemOnPage.slice(1)\"  [value]=\"item\" >{{item}}</option>\n    </select>\n</div>\n\n<div>\n    <div class=\"container\">\n        <div class=\"text-center\">\n            <ul  class=\"pagination\"> \n                <li class=\"page-item\" [ngClass]=\"{disabled: currentPage === 1}\">\n                    <p class=\"page-link\"  (click)=\"onFirst()\">First</p>\n                </li>\n                <li class=\"page-item\" [ngClass]=\"{disabled: currentPage === 1}\">\n                    <p class=\"page-link\"  (click)=\"onPrev()\">Previous</p>\n                </li>\n                <li class=\"page-item active\" *ngFor=\"let pageNum of pagesToPagination\" [ngClass]=\"{active: pageNum === currentPage}\">\n                    <p class=\"page-link\"  (click)=\"onPage(pageNum)\">{{pageNum}}</p>\n                </li>\n                <li class=\"page-item\" color=\"#blue\" [ngClass]=\"{disabled: currentPage === totalPages}\">\n                    <p class=\"page-link\"  (click)=\"onNext()\">Next</p>\n                </li>\n                <li class=\"page-item\" [ngClass]=\"{disabled: currentPage === totalPages}\">\n                    <p class=\"page-link\"  (click)=\"onLast()\">Last</p>\n                </li>\n            </ul>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/pagination/pagination.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/pagination/pagination.component.ts ***!
  \***************************************************************/
/*! exports provided: PaginationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationComponent", function() { return PaginationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_booking_booking_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/booking/booking.service */ "./src/app/services/booking/booking.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PaginationComponent = /** @class */ (function () {
    function PaginationComponent(bookingService) {
        this.bookingService = bookingService;
        this.firstPage = 1;
        this.goFirst = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.goPrev = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.goNext = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.goLast = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.goPage = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    PaginationComponent.prototype.ngOnInit = function () {
    };
    PaginationComponent.prototype.onPage = function (n) {
        this.goPage.emit(n);
    };
    PaginationComponent.prototype.onFirst = function () {
        this.goFirst.emit(this.firstPage);
    };
    PaginationComponent.prototype.onPrev = function () {
        this.goPrev.emit(true);
    };
    PaginationComponent.prototype.onNext = function (next) {
        this.goNext.emit(next);
    };
    PaginationComponent.prototype.onLast = function () {
        this.goLast.emit(this.totalPages);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], PaginationComponent.prototype, "currentPage", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], PaginationComponent.prototype, "totalPages", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], PaginationComponent.prototype, "pagesToPagination", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], PaginationComponent.prototype, "goFirst", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], PaginationComponent.prototype, "goPrev", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], PaginationComponent.prototype, "goNext", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], PaginationComponent.prototype, "goLast", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], PaginationComponent.prototype, "goPage", void 0);
    PaginationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pagination',
            template: __webpack_require__(/*! ./pagination.component.html */ "./src/app/components/pagination/pagination.component.html"),
            styles: [__webpack_require__(/*! ./pagination.component.css */ "./src/app/components/pagination/pagination.component.css")]
        }),
        __metadata("design:paramtypes", [_services_booking_booking_service__WEBPACK_IMPORTED_MODULE_1__["BookingService"]])
    ], PaginationComponent);
    return PaginationComponent;
}());



/***/ }),

/***/ "./src/app/components/property/create-property/create-property.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/components/property/create-property/create-property.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".display-4{\n  text-align: center;\n}\n.card{\n  width: 850px;\n  height: 680px;\n}\n.form-control{\n  width: 350px;\n  height: 50px;\n}\nlabel{\n  font-size: 19px;\n}\n"

/***/ }),

/***/ "./src/app/components/property/create-property/create-property.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/components/property/create-property/create-property.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"menucard\" style=\"margin-top: 4%; max-height: 600px\">\n    <div class=\"box\">\n\n      <div class=\"card\">\n        <article class=\"card-body\">\n          <h4 class=\"card-title mb-2 mt-1\">Create Property</h4>\n\n          <form #createPropertyForm=ngForm (ngSubmit)=\"createProperty(createPropertyForm)\"\n                [ngClass]=\"{'was-validated' : !formValid}\">\n            <div class=\"row\">\n              <div class=\"col-6\">\n                <div class=\"form-group\">\n                  <label>Property Name</label>\n                  <input name=\"name\" #name=\"ngModel\" required [(ngModel)]=\"propertyCreate.name\" class=\"form-control\"\n                         placeholder=\"Property Name\" type=\"text\">\n                  <div class=\"invalid-feedback\">Property Name is required!</div>\n                </div>\n\n                <div class=\"form-group\">\n                  <label>Email</label>\n                  <input class=\"form-control\" required name=\"email\" [(ngModel)]=\"propertyCreate.contactEmail\"\n                         placeholder=\"Email\" type=\"email\" required pattern=\"[^@\\s]+@[^@\\s]+\\.[^@\\s]+\">\n                  <div class=\"invalid-feedback\">Valid email is required!</div>\n                </div>\n\n                <div class=\"form-group\">\n                  <label>Phone Number</label>\n                  <input name=\"phone number\" class=\"form-control\" [(ngModel)]=\"propertyCreate.phoneNumber\"\n                         placeholder=\"phone number\" type=\"text\" required pattern=\"[0-9]{10}\">\n                  <div class=\"invalid-feedback\">Phone Number can hold only number format and 10 digits!</div>\n                </div>\n\n                <div class=\"form-group\">\n                  <label>Property Type</label>\n                  <select class=\"form-control\" #selectPropertyType\n                          (change)=\"changePropertyTypes(selectPropertyType.value)\">\n                    <option *ngFor=\"let propertyType of propertyTypes\" value=\"{{propertyType.id}}\">{{propertyType.name}}\n                    </option>\n                  </select>\n                </div>\n\n                <div class=\"form-group\">\n                  <label>Facilities</label>\n                  <div class=\"custom-control custom-checkbox\"\n                       *ngFor=\"let facility of facilities\">\n                    <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck{{facility.id}}\"\n                           (change)=\"workWithCheckboxes(facility.id)\">\n                    <label class=\"custom-control-label\"\n                           for=\"customCheck{{facility.id}}\">{{facility.name}}</label>\n                  </div>\n                </div>\n\n              </div>\n\n              <div class=\"col-6\">\n                <div class=\"form-group\">\n                  <label>Address Line</label>\n                  <input class=\"form-control\" required name=\"addressline\" [(ngModel)]=\"propertyCreate.addressLine\"\n                         placeholder=\"Address Line\" type=\"text\">\n                  <div class=\"invalid-feedback\">Address line is required!</div>\n                </div>\n\n\n                <div class=\"form-group\">\n                  <label>Country</label>\n                  <select class=\"form-control\" #selectCountry (change)=\"changeCountry(selectCountry.value)\">\n                    <option *ngFor=\"let country of countries\" value=\"{{country.id}}\">{{country.name}}</option>\n                  </select>\n                </div>\n\n                <div *ngIf=\"cities\" class=\"form-group\">\n                  <label>City</label>\n                  <select class=\"form-control\" #selectCity (change)=\"changeCity(selectCity.value)\">\n                    <option *ngFor=\"let city of cities\" value=\"{{city.id}}\">{{city.name}}</option>\n                  </select>\n                </div>\n\n                <div class=\"form-group\">\n                  <label>Zip</label>\n                  <input class=\"form-control\" required name=\"zip\"\n                         [(ngModel)]=\"propertyCreate.zip\" placeholder=\"12345\" type=\"text\" required pattern=\"[0-9]{5}\">\n                  <div class=\"invalid-feedback\">Zip can hold only number format and 5 digits!</div>\n                </div>\n\n                <div class=\"form-group\">\n                  <label>Description</label>\n                  <textarea class=\"form-control\" id=\"FormControlTextarea\" rows=\"4\"\n                            placeholder=\"write your descrition...\"\n                            [(ngModel)]=\"propertyCreate.description\" name=\"message\"></textarea>\n                </div>\n              </div>\n\n            </div>\n            <ng-container *ngIf=\"errorMessage !== ''\">\n              <div class=\"alert alert-danger\">\n                {{errorMessage}}\n              </div>\n            </ng-container>\n\n            <div class=\"form-group\">\n              <button type=\"submit\" class=\"btn btn-primary btn-block\">Create</button>\n            </div>\n          </form>\n        </article>\n      </div>\n    </div>\n  </div>\n\n"

/***/ }),

/***/ "./src/app/components/property/create-property/create-property.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/components/property/create-property/create-property.component.ts ***!
  \**********************************************************************************/
/*! exports provided: CreatePropertyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatePropertyComponent", function() { return CreatePropertyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_property_create__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/property-create */ "./src/app/models/property-create.ts");
/* harmony import */ var _services_country_coutry_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/country/coutry.service */ "./src/app/services/country/coutry.service.ts");
/* harmony import */ var _services_city_city_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/city/city.service */ "./src/app/services/city/city.service.ts");
/* harmony import */ var _services_property_property_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/property/property.service */ "./src/app/services/property/property.service.ts");
/* harmony import */ var _services_propertyTypy_property_type_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/propertyTypy/property-type.service */ "./src/app/services/propertyTypy/property-type.service.ts");
/* harmony import */ var _services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/authentication/auth.service */ "./src/app/services/authentication/auth.service.ts");
/* harmony import */ var _services_facility_facility_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/facility/facility.service */ "./src/app/services/facility/facility.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// services






var CreatePropertyComponent = /** @class */ (function () {
    function CreatePropertyComponent(auth, propertyService, propertyTypeService, facilityService, countryService, cityService, router) {
        this.auth = auth;
        this.propertyService = propertyService;
        this.propertyTypeService = propertyTypeService;
        this.facilityService = facilityService;
        this.countryService = countryService;
        this.cityService = cityService;
        this.router = router;
        this.countries = [];
        this.cities = [];
        this.formValid = true;
        this.errorMessage = '';
    }
    CreatePropertyComponent.prototype.ngOnInit = function () {
        this.authenticated = this.auth.isAuthenticated;
        this.propertyCreate = new _models_property_create__WEBPACK_IMPORTED_MODULE_2__["PropertyCreate"]();
        this.propertyCreate.facilityId = [];
        this.getFacilities();
        this.getPropertyTypes();
        this.getCountries();
    };
    CreatePropertyComponent.prototype.getCountries = function () {
        var _this = this;
        this.countryService.getCountry().subscribe(function (countriesarr) {
            _this.countries = countriesarr;
            _this.selectedCountryId = countriesarr[0].id;
            _this.getCities(_this.selectedCountryId);
        });
    };
    CreatePropertyComponent.prototype.changeCountry = function (id) {
        this.selectedCountryId = id;
        this.getCities(id);
    };
    CreatePropertyComponent.prototype.changeCity = function (id) {
        this.selectedCityId = id;
    };
    CreatePropertyComponent.prototype.getCities = function (countryId) {
        var _this = this;
        this.cityService.getCity(countryId).subscribe(function (citiesarr) {
            _this.cities = citiesarr;
            if (citiesarr.length !== 0) {
                _this.selectedCityId = citiesarr[0].id;
            }
        });
    };
    CreatePropertyComponent.prototype.getPropertyTypes = function () {
        var _this = this;
        this.propertyTypeService.getAllPropertyTypes().subscribe(function (properties) {
            _this.propertyTypes = properties;
            _this.selectedPropertyTypeId = properties[0].id;
        });
    };
    CreatePropertyComponent.prototype.changePropertyTypes = function (id) {
        this.selectedPropertyTypeId = id;
    };
    CreatePropertyComponent.prototype.createProperty = function (createPropertyForm) {
        var _this = this;
        if (createPropertyForm.valid) {
            this.propertyCreate.countryId = this.selectedCountryId;
            this.propertyCreate.cityId = this.selectedCityId;
            this.propertyCreate.propertyTypeId = this.selectedPropertyTypeId;
            this.propertyService.createProperty(this.propertyCreate).subscribe(function (res) {
                _this.onSubmit();
            }, function (error) {
                _this.errorMessage = JSON.parse(error.error).message;
            });
        }
        else {
            this.formValid = false;
        }
    };
    CreatePropertyComponent.prototype.getFacilities = function () {
        var _this = this;
        this.facilityService.getAllFacilities().subscribe(function (facility) {
            _this.facilities = facility;
        });
    };
    CreatePropertyComponent.prototype.workWithCheckboxes = function (id) {
        var index = this.propertyCreate.facilityId.indexOf(id);
        if (index !== -1) {
            this.propertyCreate.facilityId.splice(index, 1);
            return;
        }
        this.propertyCreate.facilityId.push(id);
    };
    CreatePropertyComponent.prototype.onSubmit = function () {
        this.router.navigate(['/myproperties']);
    };
    CreatePropertyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-property',
            template: __webpack_require__(/*! ./create-property.component.html */ "./src/app/components/property/create-property/create-property.component.html"),
            styles: [__webpack_require__(/*! ./create-property.component.css */ "./src/app/components/property/create-property/create-property.component.css")]
        }),
        __metadata("design:paramtypes", [_services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"],
            _services_property_property_service__WEBPACK_IMPORTED_MODULE_5__["PropertyService"],
            _services_propertyTypy_property_type_service__WEBPACK_IMPORTED_MODULE_6__["PropertyTypeService"],
            _services_facility_facility_service__WEBPACK_IMPORTED_MODULE_8__["FacilityService"],
            _services_country_coutry_service__WEBPACK_IMPORTED_MODULE_3__["CountryService"],
            _services_city_city_service__WEBPACK_IMPORTED_MODULE_4__["CityService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], CreatePropertyComponent);
    return CreatePropertyComponent;
}());



/***/ }),

/***/ "./src/app/components/property/create-property/upload-photo-list/upload-photo-list.component.css":
/*!*******************************************************************************************************!*\
  !*** ./src/app/components/property/create-property/upload-photo-list/upload-photo-list.component.css ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*.ion-md-close{\n  padding-top: 5%;\n}*/\n.ion-md-close:hover{\n  opacity: 0.5;\n}\n.btn{\n  margin: 20px;\n}\n.exist-photo{\n  max-height: 100px;\n  margin: 10px;\n  border:3px solid #b3cccc!important;\n}\n"

/***/ }),

/***/ "./src/app/components/property/create-property/upload-photo-list/upload-photo-list.component.html":
/*!********************************************************************************************************!*\
  !*** ./src/app/components/property/create-property/upload-photo-list/upload-photo-list.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"alert alert-primary\" role=\"alert\">\n    This property have {{existPhotos.length}} photos\n  </div>\n\n  <div class=\"row justify-content-start\">\n    <div class=\"col-3\" *ngFor=\"let photo of existPhotos\">\n      <input type=\"checkbox\" (change)=\"markPhoto(photo)\">\n      <img class=\"exist-photo\" [src]=\"photo.url\">\n    </div>\n  </div>\n  <button *ngIf=\"existPhotos.length > 0\" type=\"button\" class=\"btn btn-danger\" (click)=\"deletePhotos()\">Delete</button>\n\n  <div *ngIf=\"property\">\n    <form>\n      <div *ngIf=\"seccessMessages.length\" class=\"alert alert-success\" role=\"alert\"><p\n        *ngFor=\"let secces of seccessMessages\">{{secces}}</p></div>\n      <div *ngIf=\"errorMessages.length\" class=\"alert alert-danger\" role=\"alert\"><p *ngFor=\"let error of errorMessages\">\n        {{error}}</p></div>\n      <div class=\"row\">\n        <div class=\"custom-file\">\n          <input type=\"file\" multiple class=\"custom-file-input\" id=\"validatedCustomFile\" #input0\n                 (change)=\"addPhotos($event)\">\n          <label class=\"custom-file-label\" for=\"validatedCustomFile\">{{infoMessage}}</label>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-4 offset-md-4\">\n          <button type=\"submit\" class=\"btn btn-primary\" (click)=\"uploadPhotos()\">Upload</button>\n          <button type=\"button\" class=\"btn btn-outline-danger\" (click)=\"clearInput()\">Cancle</button>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/property/create-property/upload-photo-list/upload-photo-list.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/components/property/create-property/upload-photo-list/upload-photo-list.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: UploadPhotoListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadPhotoListComponent", function() { return UploadPhotoListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_property_property_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/property/property.service */ "./src/app/services/property/property.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UploadPhotoListComponent = /** @class */ (function () {
    function UploadPhotoListComponent(http, propertyService, route) {
        this.http = http;
        this.propertyService = propertyService;
        this.route = route;
        this.START_INFO_MESSAGE = 'Choose files...';
        this.UPLOAD_INFO_MESSAGE = 'click "upload" for photo uploading';
        this.SECCESS_MESSAGE = ': uploaded seccessfully';
        this.FILE_PARAM_NAME = 'file';
        this.RESOURCE_PARAM_NAME = 'id';
        this.existPhotos = [];
        this.files = [];
        this.infoMessage = this.START_INFO_MESSAGE;
        this.seccessMessages = [];
        this.errorMessages = [];
    }
    UploadPhotoListComponent.prototype.ngOnInit = function () {
        this.initExistPhotos();
    };
    UploadPhotoListComponent.prototype.initExistPhotos = function () {
        var _this = this;
        this.propertyId = Number.parseInt(this.route.snapshot.paramMap.get(this.RESOURCE_PARAM_NAME));
        this.propertyService.getPropertyById(this.propertyId).subscribe(function (pr) {
            _this.property = pr;
            _this.existPhotos = [];
            for (var _i = 0, _a = _this.property.photos; _i < _a.length; _i++) {
                var photo = _a[_i];
                _this.existPhotos.push({ url: photo.url, isMark: false });
            }
        });
    };
    UploadPhotoListComponent.prototype.addPhotos = function (event) {
        this.clearMessages();
        this.infoMessage = this.UPLOAD_INFO_MESSAGE;
        this.files = event.target.files;
    };
    UploadPhotoListComponent.prototype.uploadPhotos = function () {
        var _this = this;
        this.clearMessages();
        this.infoMessage = this.START_INFO_MESSAGE;
        var answerCount = 0;
        Array.from(this.files).forEach(function (el, ind) {
            var uploadData = new FormData();
            uploadData.append(_this.FILE_PARAM_NAME, _this.files[ind]);
            _this.http.post('/api/property/' + _this.propertyId + '/photo', uploadData)
                .subscribe(function (data) {
                _this.seccessMessages.push(_this.files[ind].name + _this.SECCESS_MESSAGE);
                if (++answerCount === _this.files.length) {
                    _this.input0.nativeElement.value = '';
                    setTimeout(function () { _this.initExistPhotos(); }, 2000);
                }
            }, function (err) {
                _this.errorMessages.push(_this.files[ind].name + ': ' + err.error.message);
                if (++answerCount === _this.files.length) {
                    _this.input0.nativeElement.value = '';
                    setTimeout(function () { _this.initExistPhotos(); }, 2000);
                }
            });
        });
    };
    UploadPhotoListComponent.prototype.clearInput = function () {
        this.clearMessages();
        this.infoMessage = this.START_INFO_MESSAGE;
        this.input0.nativeElement.value = '';
    };
    UploadPhotoListComponent.prototype.markPhoto = function (photo) {
        photo.isMark = !photo.isMark;
    };
    UploadPhotoListComponent.prototype.deletePhotos = function () {
        var _this = this;
        for (var _i = 0, _a = this.existPhotos; _i < _a.length; _i++) {
            var photo = _a[_i];
            if (photo.isMark) {
                this.http.delete('api/photo/' + photo.url.substring(photo.url.lastIndexOf('/'), photo.url.lastIndexOf('.')))
                    .subscribe(function (ans) {
                    _this.initExistPhotos();
                });
            }
        }
    };
    UploadPhotoListComponent.prototype.clearMessages = function () {
        this.infoMessage = null;
        this.errorMessages = [];
        this.seccessMessages = [];
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('input0'),
        __metadata("design:type", Object)
    ], UploadPhotoListComponent.prototype, "input0", void 0);
    UploadPhotoListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-upload-photo-list',
            template: __webpack_require__(/*! ./upload-photo-list.component.html */ "./src/app/components/property/create-property/upload-photo-list/upload-photo-list.component.html"),
            styles: [__webpack_require__(/*! ./upload-photo-list.component.css */ "./src/app/components/property/create-property/upload-photo-list/upload-photo-list.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _services_property_property_service__WEBPACK_IMPORTED_MODULE_2__["PropertyService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], UploadPhotoListComponent);
    return UploadPhotoListComponent;
}());



/***/ }),

/***/ "./src/app/components/property/edit-property/edit-property.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/components/property/edit-property/edit-property.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".edit-box{\n  /*margin-bottom: 200px;*/\n/*margin-top: 20px;*/\n}\n\n.edit-box{\n  width: 65%;\n  margin: 0 auto ;\n  padding-bottom: 25px;\n}\n"

/***/ }),

/***/ "./src/app/components/property/edit-property/edit-property.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/components/property/edit-property/edit-property.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"edit-box\">\n  <div class=\"box\">\n    <h1 class=\"display-8\">BookingLite</h1>\n    <div class=\"card\">\n      <article class=\"card-body\">\n        <h4 class=\"card-title mb-4 mt-1\">Edit Property</h4>\n\n        <form #createPropertyForm=ngForm (ngSubmit)=updateProperty(createPropertyForm)\n        [ngClass]=\"{'was-validated' : !formValid}\">\n\n        <div class=\"row\">\n          <div class=\"col-6\">\n\n            <div class=\"form-group\" *ngIf=\"property\">\n              <label>Property Name</label>\n              <input class=\"form-control\" placeholder=\"Name\" type=\"text\" required name=\"name\"\n                     [(ngModel)]=\"property.name\">\n              <div class=\"invalid-feedback\">Valid name is required!</div>\n            </div>\n\n            <div class=\"form-group\" *ngIf=\"property\">\n              <label>Email</label>\n              <input class=\"form-control\" placeholder=\"Email\" type=\"email\"  required name=\"email\"\n                     [(ngModel)]=\"property.contactEmail\" required pattern=\"[^@\\s]+@[^@\\s]+\\.[^@\\s]+\">\n              <div class=\"invalid-feedback\">Valid email is required!</div>\n            </div>\n\n            <div class=\"form-group\" *ngIf=\"property\">\n              <label>Phone Number</label>\n              <input name=\"phone number\" required class=\"form-control\"\n                     placeholder=\"phone number\" type=\"text\" required pattern=\"[0-9]{10}\"\n                     [(ngModel)]=\"property.phoneNumber\">\n              <div class=\"invalid-feedback\">Phone Number can hold only number format and 10 digits!</div>\n            </div>\n\n            <div class=\"form-group\" *ngIf=\"facilities\">\n              <label>Facilities</label>\n              <div class=\"custom-control custom-checkbox\"\n                   *ngFor=\"let facility of facilities\">\n                <input  type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck{{facility.id}}\"\n                       (change)=workWithCheckboxes(facility.id)>\n                <label class=\"custom-control-label\"\n                       for=\"customCheck{{facility.id}}\">{{facility.name}}</label>\n              </div>\n            </div>\n         </div>\n\n\n          <div class=\"col-6\" *ngIf=\"property\">\n            <div class=\"form-group\">\n              <label>Description</label>\n              <input name=\"description\" class=\"form-control\"\n                     placeholder=\"description\" type=\"text\"\n                     [(ngModel)]=\"property.description\">\n            </div>\n\n            <div class=\"form-group\" *ngIf=\"propertyTypes\">\n              <label>Property Type</label>\n              <select class=\"form-control\" #selectPropertyType\n                      (change)=\"changePropertyTypes(selectPropertyType.value)\">\n                <option *ngFor=\"let propertyType of propertyTypes\" value=\"{{propertyType.id}}\">\n                  {{propertyType.name}}\n                </option>\n              </select>\n            </div>\n\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n          <button type=\"submit\" class=\"btn btn-primary btn-block\">Add Change\n          </button>\n        </div>\n\n\n        </form>\n      </article>\n    </div>\n  </div>\n</div>\n\n<div class=\"box-photo\">\n  <app-upload-photo-list></app-upload-photo-list>\n</div>\n"

/***/ }),

/***/ "./src/app/components/property/edit-property/edit-property.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/property/edit-property/edit-property.component.ts ***!
  \******************************************************************************/
/*! exports provided: EditPropertyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPropertyComponent", function() { return EditPropertyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/authentication/auth.service */ "./src/app/services/authentication/auth.service.ts");
/* harmony import */ var _services_property_property_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/property/property.service */ "./src/app/services/property/property.service.ts");
/* harmony import */ var _services_propertyTypy_property_type_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/propertyTypy/property-type.service */ "./src/app/services/propertyTypy/property-type.service.ts");
/* harmony import */ var _services_facility_facility_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/facility/facility.service */ "./src/app/services/facility/facility.service.ts");
/* harmony import */ var _models_property_create__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../models/property-create */ "./src/app/models/property-create.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EditPropertyComponent = /** @class */ (function () {
    function EditPropertyComponent(route, auth, propertyService, propertyTypeService, facilityService, router) {
        this.route = route;
        this.auth = auth;
        this.propertyService = propertyService;
        this.propertyTypeService = propertyTypeService;
        this.facilityService = facilityService;
        this.router = router;
        this.formValid = true;
        this.errorMessage = '';
        this.options = Array();
    }
    EditPropertyComponent.prototype.ngOnInit = function () {
        this.authentication = this.auth.isAuthenticated;
        this.propertyUpdate = new _models_property_create__WEBPACK_IMPORTED_MODULE_6__["PropertyCreate"]();
        this.getPropertyById();
        this.getFacilities();
        this.getPropertyTypes();
        this.propertyUpdate.facilityId = [];
        this.selectedPropertyTypeId = 1;
    };
    EditPropertyComponent.prototype.getPropertyById = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        this.propertyService.getPropertyById(id).subscribe(function (res) { return _this.property = res; });
        return this.property;
    };
    EditPropertyComponent.prototype.getPropertyTypes = function () {
        var _this = this;
        this.propertyTypeService.getAllPropertyTypes().subscribe(function (res) {
            _this.propertyTypes = res;
        });
    };
    EditPropertyComponent.prototype.changePropertyTypes = function (id) {
        this.selectedPropertyTypeId = id;
    };
    EditPropertyComponent.prototype.updateProperty = function (createPropertyForm) {
        var _this = this;
        if (createPropertyForm.valid) {
            var id = +this.route.snapshot.paramMap.get('id');
            this.propertyUpdate.propertyTypeId = this.selectedPropertyTypeId;
            this.propertyUpdate.name = this.property.name;
            this.propertyUpdate.description = this.property.description;
            this.propertyUpdate.contactEmail = this.property.contactEmail;
            this.propertyUpdate.phoneNumber = this.property.phoneNumber;
            this.propertyService.updateProperty(this.propertyUpdate, id).subscribe(function (res) {
                _this.onSubmit();
            }, function (error) {
                _this.errorMessage = JSON.parse(error.error).message;
            });
        }
        else {
            this.formValid = false;
        }
    };
    EditPropertyComponent.prototype.getFacilities = function () {
        var _this = this;
        this.facilityService.getAllFacilities().subscribe(function (facility) {
            _this.facilities = facility;
        });
    };
    EditPropertyComponent.prototype.workWithCheckboxes = function (id) {
        var index = this.propertyUpdate.facilityId.indexOf(id);
        if (index !== -1) {
            this.propertyUpdate.facilityId.splice(index, 1);
            return;
        }
        this.propertyUpdate.facilityId.push(id);
    };
    // public isChecked(): boolean {
    //   this.facilities.forEach(res => {
    //     this.property.facilities.forEach(alreadyChecked => {
    //       console.log(alreadyChecked.id + 'my');
    //       if ( res.id === alreadyChecked.id) {
    //         console.log('збіглося');
    //         return true;
    //            } else {
    //         console.log('NE-збіглося');
    //         return false;
    //       }
    //     });
    //   });
    //   return false;
    // }
    //
    // public check() {
    //   console.log(this.getPropertyById().facilities[0].id);
    //   this.getPropertyById().facilities.forEach(value => {
    //     const element = this.options.find(x => x.id === value.id);
    //     if (element) {
    //       element.checked = true;
    //     }
    //   });
    // }
    EditPropertyComponent.prototype.onSubmit = function () {
        this.router.navigate(['/myproperties']);
    };
    EditPropertyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-property',
            template: __webpack_require__(/*! ./edit-property.component.html */ "./src/app/components/property/edit-property/edit-property.component.html"),
            styles: [__webpack_require__(/*! ./edit-property.component.css */ "./src/app/components/property/edit-property/edit-property.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _services_property_property_service__WEBPACK_IMPORTED_MODULE_3__["PropertyService"],
            _services_propertyTypy_property_type_service__WEBPACK_IMPORTED_MODULE_4__["PropertyTypeService"],
            _services_facility_facility_service__WEBPACK_IMPORTED_MODULE_5__["FacilityService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], EditPropertyComponent);
    return EditPropertyComponent;
}());



/***/ }),

/***/ "./src/app/components/property/list-property/list-property.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/components/property/list-property/list-property.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*{\n  box-sizing: border-box;\n}\n\n  /*.container {*/\n\n  /*position: fixed;*/\n\n  /*}*/\n\n  .img-responsive {\n  padding-bottom: 4%;\n  width: 250px;\n  height: 170px;\n  position: absolute ;\n  border-radius: 15px;\n}\n"

/***/ }),

/***/ "./src/app/components/property/list-property/list-property.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/components/property/list-property/list-property.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul style=\"list-style: none\">\n  <li *ngFor=\"let property of propertyList \">\n    <div class=\"row mb-3\">\n      <div class=\"col-md-12\">\n        <div class=\"card\" style=\"max-height: 200px\">\n          <div class=\"card-body\">\n            <div class=\"row\">\n\n              <div class=\"col-md-3\">\n                <img *ngIf=\"property.photos.length > 0\" class=\"img-responsive\" src={{property.photos[0].url}}\n                     alt=\"{{property.name}}\">\n                <img *ngIf=\"property.photos.length === 0\" class=\"img-responsive\" src=\"assets/image/Capture.PNG\"\n                     alt=\"{{property.name}}\">\n              </div>\n\n\n              <div class=\"col-md-6  card-body\" style=\"margin-left: 10%; width: 300px\">\n                <div class=\"list-title\">\n                  <ul class=\"list-inline list-unstyled\">\n                    <li class=\"list-inline-item\"><a *ngIf=\"property\" routerLink=\"/property-detailes/{{property.id}}\">\n                      <h4>\n                        <b>{{property.name}}</b></h4></a></li>\n                    <li class=\"list-inline-item text-warning\"><i class=\"fa fa-star\"></i><i class=\"fa fa-star\"></i><i\n                      class=\"fa fa-star\"></i><i class=\"fa fa-star\"></i><i class=\"fa fa-star-half\"></i></li>\n                    <li class=\"list-inline-item text-success\"><i class=\"fa fa-thumbs-up\"></i></li>\n                  </ul>\n                </div>\n\n                <div class=\"list-location\">\n                 <i class=\"fa fa-map-marker\"></i>\n                    <small style=\"font-size: 14px\" *ngIf=\"property\">Location : {{property.address.addressLine}}, zip : {{property.address.zip}},\n                      {{property.address.city.name}},{{property.address.city.country.name}}\n                    </small>\n                </div>\n\n                <div class=\"list-descrip\">\n                  <small style=\"font-size: 15px\" *ngIf=\"property\">Email: {{property.contactEmail}}</small>\n                  <br>\n                  <small style=\"font-size: 15px ;\" *ngIf=\"property\">Phone Number: {{property.phoneNumber}}</small>\n                  <br>\n                  <small style=\"font-size: 15px\" *ngIf=\"property\">Type: {{property.propertyType.name}}</small>\n                  <br>\n                </div>\n              </div>\n\n              <div class=\"col-md-3 border-left card-body\">\n                <h4>Ranking {{property.rating}}</h4>\n                <button type=\"button\" class=\"btn btn-outline-primary\" routerLink=\"/property-detailes/{{property.id}}\">\n                  Property Detail\n                </button>\n                <br> <br> <br>\n                <button type=\"button\" class=\"btn btn-outline-primary\" routerLink=\"/property/{{property.id}}/apartments\"\n                        [queryParams]=\"queryParams\">Select Apartments\n                </button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </li>\n</ul>\n"

/***/ }),

/***/ "./src/app/components/property/list-property/list-property.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/property/list-property/list-property.component.ts ***!
  \******************************************************************************/
/*! exports provided: ListPropertyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPropertyComponent", function() { return ListPropertyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPropertyComponent = /** @class */ (function () {
    function ListPropertyComponent(route) {
        this.route = route;
        this.queryParams = {
            checkin: '',
            checkout: '',
            num_of_guests: ''
        };
    }
    ListPropertyComponent.prototype.ngOnInit = function () {
        this.queryParams.checkin = this.route.snapshot.queryParamMap.get('checkin');
        this.queryParams.checkout = this.route.snapshot.queryParamMap.get('checkout');
        this.queryParams.num_of_guests = this.route.snapshot.queryParamMap.get('num_of_guests');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], ListPropertyComponent.prototype, "propertyList", void 0);
    ListPropertyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-property',
            template: __webpack_require__(/*! ./list-property.component.html */ "./src/app/components/property/list-property/list-property.component.html"),
            styles: [__webpack_require__(/*! ./list-property.component.css */ "./src/app/components/property/list-property/list-property.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], ListPropertyComponent);
    return ListPropertyComponent;
}());



/***/ }),

/***/ "./src/app/components/property/list-property/property-item/property-item.component.css":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/property/list-property/property-item/property-item.component.css ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/property/list-property/property-item/property-item.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/components/property/list-property/property-item/property-item.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/property/list-property/property-item/property-item.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/components/property/list-property/property-item/property-item.component.ts ***!
  \********************************************************************************************/
/*! exports provided: PropertyItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyItemComponent", function() { return PropertyItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_property_property_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/property/property.service */ "./src/app/services/property/property.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PropertyItemComponent = /** @class */ (function () {
    function PropertyItemComponent(propertyService) {
        this.propertyService = propertyService;
    }
    PropertyItemComponent.prototype.ngOnInit = function () {
    };
    PropertyItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-property-item',
            template: __webpack_require__(/*! ./property-item.component.html */ "./src/app/components/property/list-property/property-item/property-item.component.html"),
            styles: [__webpack_require__(/*! ./property-item.component.css */ "./src/app/components/property/list-property/property-item/property-item.component.css")]
        }),
        __metadata("design:paramtypes", [_services_property_property_service__WEBPACK_IMPORTED_MODULE_1__["PropertyService"]])
    ], PropertyItemComponent);
    return PropertyItemComponent;
}());



/***/ }),

/***/ "./src/app/components/property/owner-properties/owner-properties.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/components/property/owner-properties/owner-properties.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/property/owner-properties/owner-properties.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/components/property/owner-properties/owner-properties.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul style=\"list-style: none\">\n  <li *ngFor=\"let property of propertyList\">\n    <div class=\"container\">\n      <div class=\"row mb-3\">\n        <div class=\"col-md-12\">\n          <div class=\"card\">\n            <div class=\"card-body\">\n              <div class=\"row\">\n                <div class=\"col-md-3\">\n                 <!-- <img class=\"img-responsive\" src={{property.photos[0].url}} onerror=\"this.src = 'assets/image/Capture.gif'\">-->\n                </div>\n                <div class=\"col-md-6  card-body\">\n                  <div class=\"list-title\">\n                    <ul class=\"list-inline list-unstyled\">\n                      <li class=\"list-inline-item\"><h4>{{property.name}}</h4></li>\n                      <li class=\"list-inline-item text-warning\"><i class=\"fa fa-star\"></i><i class=\"fa fa-star\"></i><i\n                        class=\"fa fa-star\"></i><i class=\"fa fa-star\"></i><i class=\"fa fa-star-half\"></i></li>\n                      <li class=\"list-inline-item text-success\"><i class=\"fa fa-thumbs-up\"></i></li>\n                      <ul>\n                        <li><p *ngFor=\"let facility of property.facilities\">{{facility.name}}</p></li>\n                      </ul>\n                    </ul>\n                  </div>\n                  <div class=\"list-location\">\n                    <small>{{property.description}}</small>\n                  </div>\n                  <div class=\"list-descrip\">\n                    <small>{{property.contactEmail}}\n                    </small>\n                    <small>{{property.phoneNumber}}\n                    </small>\n                    <br>\n                    <small>{{property.propertyType.name}}\n                    </small>\n\n                  </div>\n                </div>\n                <div class=\"col-md-3 border-left card-body\">\n                  <ul class=\"list-unstyled\">\n                    <li><h3>Rating {{property.rating}}</h3></li>\n                  </ul>\n                  <button type=\"button\"\n                          routerLink=\"/reviews-property/{{property.id}}\"\n                          class=\"btn btn-outline-primary\">\n                    Reviews\n                  </button>\n                  <br><br>\n                  <button type=\"button\"\n                          routerLink=\"/myproperties/{{property.id}}/guest-arrivals/futureBookings\"\n                          class=\"btn btn-outline-primary\">\n                    Guest Arrivals\n                  </button>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </li>\n</ul>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/components/property/owner-properties/owner-properties.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/components/property/owner-properties/owner-properties.component.ts ***!
  \************************************************************************************/
/*! exports provided: OwnerPropertiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwnerPropertiesComponent", function() { return OwnerPropertiesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_property_property_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/property/property.service */ "./src/app/services/property/property.service.ts");
/* harmony import */ var _services_review_review_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/review/review.service */ "./src/app/services/review/review.service.ts");
/* harmony import */ var _services_apartment_apartment_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/apartment/apartment.service */ "./src/app/services/apartment/apartment.service.ts");
/* harmony import */ var _services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/authentication/auth.service */ "./src/app/services/authentication/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var OwnerPropertiesComponent = /** @class */ (function () {
    function OwnerPropertiesComponent(propertyService, reviewService, apartmentService, auth) {
        this.propertyService = propertyService;
        this.reviewService = reviewService;
        this.apartmentService = apartmentService;
        this.auth = auth;
    }
    OwnerPropertiesComponent.prototype.ngOnInit = function () {
        this.authentication = this.auth.isAuthenticated;
        this.getOwnerProperties();
    };
    OwnerPropertiesComponent.prototype.getOwnerProperties = function () {
        var _this = this;
        this.propertyService.getOwnerProperties().subscribe(function (properties) {
            _this.propertyList = properties;
        });
    };
    OwnerPropertiesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-owner-properties',
            template: __webpack_require__(/*! ./owner-properties.component.html */ "./src/app/components/property/owner-properties/owner-properties.component.html"),
            styles: [__webpack_require__(/*! ./owner-properties.component.css */ "./src/app/components/property/owner-properties/owner-properties.component.css")]
        }),
        __metadata("design:paramtypes", [_services_property_property_service__WEBPACK_IMPORTED_MODULE_1__["PropertyService"],
            _services_review_review_service__WEBPACK_IMPORTED_MODULE_2__["ReviewService"],
            _services_apartment_apartment_service__WEBPACK_IMPORTED_MODULE_3__["ApartmentService"],
            _services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], OwnerPropertiesComponent);
    return OwnerPropertiesComponent;
}());



/***/ }),

/***/ "./src/app/components/property/photo-list/photo-list.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/components/property/photo-list/photo-list.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#blocker{\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  top: 0;\n  left: 0;\n  background: rgba(0,0,0,0.5);\n}\n#zoom-img{\n  position: fixed;\n  z-index: 99;\n  opacity: 1;\n  cursor: zoom-out;\n  max-height: 70%;\n  border:5px solid #fff!important;\n}\n\n"

/***/ }),

/***/ "./src/app/components/property/photo-list/photo-list.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/components/property/photo-list/photo-list.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row justify-content-start\">\n    <div class=\"col-3\" *ngFor=\"let photo of photos\" (click)=\"openPhoto(photo.url)\">\n      <app-photo [photoUrl]='photo.url'></app-photo>\n    </div>\n  </div>\n</div>\n<ng-container *ngIf=\"opened\">\n  <div id=\"blocker\" (click)=\"closePhoto()\"><img id=\"zoom-img\" [src]=\"openedPhotoUrl\" (click)=\"closePhoto()\">\n  </div>\n</ng-container>\n"

/***/ }),

/***/ "./src/app/components/property/photo-list/photo-list.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/property/photo-list/photo-list.component.ts ***!
  \************************************************************************/
/*! exports provided: PhotoListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoListComponent", function() { return PhotoListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_property_property_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/property/property.service */ "./src/app/services/property/property.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PhotoListComponent = /** @class */ (function () {
    function PhotoListComponent(route, propertyService) {
        this.route = route;
        this.propertyService = propertyService;
        this.openedPhotoUrl = '';
        this.opened = false;
    }
    PhotoListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.propertyId = Number.parseInt(this.route.snapshot.paramMap.get('id'));
        this.propertyService.getPropertyById(this.propertyId)
            .subscribe(function (property) { return _this.photos = property.photos; });
    };
    PhotoListComponent.prototype.openPhoto = function (url) {
        this.openedPhotoUrl = url;
        this.opened = true;
    };
    PhotoListComponent.prototype.closePhoto = function () {
        this.opened = false;
    };
    PhotoListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-photo-list',
            template: __webpack_require__(/*! ./photo-list.component.html */ "./src/app/components/property/photo-list/photo-list.component.html"),
            styles: [__webpack_require__(/*! ./photo-list.component.css */ "./src/app/components/property/photo-list/photo-list.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_property_property_service__WEBPACK_IMPORTED_MODULE_2__["PropertyService"]])
    ], PhotoListComponent);
    return PhotoListComponent;
}());



/***/ }),

/***/ "./src/app/components/property/photo-popup/photo-popup.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/components/property/photo-popup/photo-popup.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".img-responsive {\n    width: 220px;\n    height: 200px;\n    position: relative ;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    margin-left: auto;\n    margin-right: auto;\n    text-align: center;\n  }\n  #blocker{\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    top: 0;\n    left: 0;\n    background: rgba(0,0,0,0.5);\n  }\n  #zoom-img{\n    position: fixed;\n    z-index: 99;\n    opacity: 1;\n    cursor: zoom-out;\n    max-height: 70%;\n    border:5px solid #fff!important;\n  }"

/***/ }),

/***/ "./src/app/components/property/photo-popup/photo-popup.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/components/property/photo-popup/photo-popup.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template #bookingContent let-modal>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\" id=\"modal-booking\">Photos {{booking.apartmentDto.propertyDto.name}}</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <form>\n      <div class=\"form-group\">\n        <div *ngIf= \"booking\">    \n          <div class=\"row \">  \n            <div class=\"col-4\" *ngFor=\"let photo of booking.apartmentDto.propertyDto.photos\" (click)=\"openPhoto(photo.url)\">\n              <app-photo [photoUrl]='photo.url'></app-photo>\n            </div>\n            <ng-container *ngIf=\"opened\">\n              <div id=\"blocker\" (click)=\"closePhoto()\"><img id=\"zoom-img\" [src]=\"openedPhotoUrl\" (click)=\"closePhoto()\">\n              </div>\n            </ng-container>\n          </div>\n        </div>  \n      </div>\n    </form>\n  </div>\n</ng-template>\n\n<ng-template #propertyContent let-modal>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\" id=\"modal-property\">Photos {{property.name}}</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <form>\n      <div class=\"form-group\">\n        <div *ngIf= \"property\">    \n          <div class=\"row \">  \n            <div class=\"col-4\" *ngFor=\"let photo of property.photos\" (click)=\"openPhoto(photo.url)\">\n              <app-photo [photoUrl]='photo.url'></app-photo>\n            </div>\n            <ng-container *ngIf=\"opened\">\n              <div id=\"blocker\" (click)=\"closePhoto()\"><img id=\"zoom-img\" [src]=\"openedPhotoUrl\" (click)=\"closePhoto()\">\n              </div>\n            </ng-container>\n          </div>\n        </div>  \n      </div>\n    </form>\n  </div>\n</ng-template>\n\n\n<button class=\"btn btn-lg btn-outline-primary\" (click)=\"open(bookingContent, propertyContent)\">\n  More photos</button>\n\n\n"

/***/ }),

/***/ "./src/app/components/property/photo-popup/photo-popup.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/property/photo-popup/photo-popup.component.ts ***!
  \**************************************************************************/
/*! exports provided: PhotoPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoPopupComponent", function() { return PhotoPopupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _models_booking__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/booking */ "./src/app/models/booking.ts");
/* harmony import */ var _models_property__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models/property */ "./src/app/models/property.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PhotoPopupComponent = /** @class */ (function () {
    function PhotoPopupComponent(modalService) {
        this.modalService = modalService;
        this.openedPhotoUrl = '';
        this.opened = false;
    }
    PhotoPopupComponent.prototype.ngOnInit = function () {
    };
    PhotoPopupComponent.prototype.open = function (bookingContent, propertyContent) {
        this.opened = false;
        if (this.booking) {
            this.modalService.open(bookingContent, { ariaLabelledBy: 'modal-booking', size: 'lg' });
        }
        else if (this.property) {
            this.modalService.open(propertyContent, { ariaLabelledBy: 'modal-property', size: 'lg' });
        }
    };
    PhotoPopupComponent.prototype.openPhoto = function (url) {
        this.openedPhotoUrl = url;
        this.opened = true;
    };
    PhotoPopupComponent.prototype.closePhoto = function () {
        this.opened = false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_booking__WEBPACK_IMPORTED_MODULE_2__["Booking"])
    ], PhotoPopupComponent.prototype, "booking", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_property__WEBPACK_IMPORTED_MODULE_3__["Property"])
    ], PhotoPopupComponent.prototype, "property", void 0);
    PhotoPopupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-photo-popup',
            template: __webpack_require__(/*! ./photo-popup.component.html */ "./src/app/components/property/photo-popup/photo-popup.component.html"),
            styles: [__webpack_require__(/*! ./photo-popup.component.css */ "./src/app/components/property/photo-popup/photo-popup.component.css")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]])
    ], PhotoPopupComponent);
    return PhotoPopupComponent;
}());



/***/ }),

/***/ "./src/app/components/property/photo/photo.component.css":
/*!***************************************************************!*\
  !*** ./src/app/components/property/photo/photo.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".photo{\n  border:1px solid #ccc!important;\n  padding:8px !important;\n  max-width: 230px;\n  height: 160px;\n  margin: 6px;\n  cursor: zoom-in;\n  transition: opacity .4s;\n}\n.photo:hover {\n  opacity: .8;\n}\n"

/***/ }),

/***/ "./src/app/components/property/photo/photo.component.html":
/*!****************************************************************!*\
  !*** ./src/app/components/property/photo/photo.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<img [src]=\"photoUrl\" class=\"photo\" >\n"

/***/ }),

/***/ "./src/app/components/property/photo/photo.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/property/photo/photo.component.ts ***!
  \**************************************************************/
/*! exports provided: PhotoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoComponent", function() { return PhotoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PhotoComponent = /** @class */ (function () {
    function PhotoComponent() {
    }
    PhotoComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], PhotoComponent.prototype, "photoUrl", void 0);
    PhotoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-photo',
            template: __webpack_require__(/*! ./photo.component.html */ "./src/app/components/property/photo/photo.component.html"),
            styles: [__webpack_require__(/*! ./photo.component.css */ "./src/app/components/property/photo/photo.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PhotoComponent);
    return PhotoComponent;
}());



/***/ }),

/***/ "./src/app/components/property/property-details/property-details.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/components/property/property-details/property-details.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n*{\n  box-sizing: border-box;\n}\n.thumb {\n  display: block;\n  width: 600px;\n  max-height: 300px;\n  border-radius: 20px;\n  border: 3px outset black;\n\n}\n#photo-list{\n  min-height: 580px;\n  max-height: 580px;\n}\n.media-object {\n  width: 250px;\n  min-height: 125px;\n  margin: 10px;\n  border-radius: 20px;\n  border: 2px double black;\n}\n"

/***/ }),

/***/ "./src/app/components/property/property-details/property-details.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/components/property/property-details/property-details.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"property\">\n  <div class=\"row\">\n\n    <div class=\"col-md-8\">\n      <h2 style=\"width: 90%; margin-left: 3%; margin-top: 1%\"><a href=\"#\" style=\"text-decoration: none;\"\n                                                                 *ngIf=\"property\"\n                                                                 routerLink=\"/property/{{property.id}}/apartments\">\n        <b>{{property.name}}</b></a><span\n        style=\"font-size: 14px; margin-left: 17%\">Type: {{property.propertyType.name}}</span>\n        <span style=\"font-size: 13px; margin-left: 10%\">Ranking: {{property.rating}}</span>\n      </h2>\n      <img src=\"assets/image/pin.png\" style=\"width: 25px\">\n      <span *ngIf=\"property\" style=\"font-size: 14px; font-style:italic\">Location : {{property.address.addressLine}},\n          zip : {{property.address.zip}}, {{property.address.city.name}}, {{property.address.city.country.name}} <span style=\"margin-left: 10%\">\n          Review:{{countReview}}\n        </span></span>\n\n      <div class=\"featured-article\">\n        <img class=\"thumb\" alt=\"No Photo\" *ngIf=\"property.photos.length > 0\"\n             src={{property.photos[0].url}}>\n        <div class=\"col-md-8\" style=\"margin-top: 4px\" *ngIf=\"property\">\n          <ul class=\"pagination\">\n            <li class=\"page-item active\">\n              <p class=\"page-link\" style=\"width: 100%; font-size: 13px\">\n                <a style=\"text-decoration: none; color: white;\" routerLink=\"/property/{{property.id}}/apartments\"\n                   [queryParams]=\"queryParams\">\n                  Info about apartments and price</a></p>\n            </li>\n\n            <li class=\"page-item active\" style=\"margin-left: 5%\">\n              <p class=\"page-link\" style=\"width: 110%; font-size: 13px\">\n                <a style=\"text-decoration: none; color: white;\" routerLink=\"/reviews-property/{{property.id}}\">\n                  Show all review</a></p>\n            </li>\n\n            <li class=\"page-item active\" style=\"margin-left: 5%\">\n              <p class=\"page-link\" style=\"width: 110%; font-size: 13px\"><a\n                style=\"text-decoration: none; color: white;\" routerLink=\"/property/{{property.id}}/apartments\"\n                [queryParams]=\"queryParams\">Book now</a></p>\n            </li>\n\n          </ul>\n        </div>\n\n        <div class=\"block-title\" style=\"margin-top: 1%\">\n          <img src=\"assets/image/medal.png\" style=\"width: 25px;\n             display: inline; margin-left: 10px;\">\n          <span style=\"font-size: 15px; color: #ffa21c; font-style:oblique\">One of our most popular lodging in\n             {{property.address.city.name}}, {{property.address.city.country.name}}</span>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-md-4 border-left card-body\" id=\"photo-list\" *ngIf='property'>\n      <ul class=\"media-list main-list\">\n        <li class=\"media\">\n\n          <img class=\"media-object\"\n               alt=\"No Photo\" *ngIf=\"property.photos.length > 0\"\n               src={{property.photos[0].url}}>\n          <img class=\"media-object\"\n               alt=\"No Photo\" *ngIf=\"property.photos.length === 0\"\n               src=\"assets/image/Capture.PNG\">\n        </li>\n        <li class=\"media\">\n          <img class=\"media-object\"\n               alt=\"No Photo\" *ngIf=\"property.photos.length > 0\"\n               src={{property.photos[1].url}}>\n          <img class=\"media-object\"\n               alt=\"No Photo\" *ngIf=\"property.photos.length === 0\"\n               src=\"assets/image/Capture.PNG\">\n        </li>\n\n        <li class=\"media\">\n          <img class=\"media-object\"\n               alt=\"No Photo\" *ngIf=\"property.photos.length === 0\"\n               src=\"assets/image/Capture.PNG\">\n          <img class=\"media-object\"\n               alt=\"No Photo\" *ngIf=\"property.photos.length > 0\"\n               src={{property.photos[2].url}}>\n        </li>\n      </ul>\n      <app-photo-popup style=\"margin-left: 33%\"\n                       [property]=\"property\">\n      </app-photo-popup>\n    </div>\n\n    <div class=\"col-md-5\" style=\"margin-top: -11%\">\n      <ul class=\"menu-items\" style=\"list-style: none\">\n        <li style=\"font-size: 18px; color: #bb5500\">Information about property</li>\n        <li style=\"font-family: 'Bitstream Vera Sans'; font-size: 14px\"> Contact Email : {{property.contactEmail}}\n        </li>\n        <li style=\"font-family: 'Bitstream Vera Sans'; font-size: 14px\">Phone Number : {{property.phoneNumber}}</li>\n        <li style=\"font-family: 'Bitstream Vera Sans'; font-size: 14px\">Property Type :\n          {{property.propertyType.name}}\n        </li>\n        <li style=\"font-family: 'Bitstream Vera Sans'; font-size: 14px\">Address Line :\n          {{property.address.addressLine}}\n        </li>\n        <li style=\"font-family: 'Bitstream Vera Sans'; font-size: 14px\">City : {{property.address.city.name}}</li>\n        <li style=\"font-family: 'Bitstream Vera Sans'; font-size: 14px\">Country :\n          {{property.address.city.country.name}}\n        </li>\n      </ul>\n    </div>\n\n    <div class=\"col-md-2 border-left card-body\" style=\"margin-top: -11%\">\n      <li style=\"font-size: 18px; color:#bb5500; list-style: none; margin-left: 1px\">Facilities</li>\n      <ul class=\"list-group\" style=\"list-style: none\" *ngFor=\"let facility of property.facilities\">\n        <li style=\"font-size: 14px\">{{facility.name}}</li>\n      </ul>\n    </div>\n\n    <div class=\"col-md-8 border-top card-body\">\n      <h6 style=\"font-family: 'Fira Code';color: #300027; font-size: 13px\">\n        {{property.description}}\n        All rooms feature simple furnishings. They come with a TV with satellite channels, a hairdryer and all the\n        necessary amenities for making coffee / tea. All rooms at this hotel also have their own bathroom with a range\n        of toiletries.\n        The spacious lounge area offers light snacks and a variety of drinks. Guests can also visit the modern\n        cocktail bar. Every morning, the hotel serves a full breakfast.\n        From Queensway Station, the Metro to Oxford Street shopping is a 5-minute walk, and Buckingham Palace is 20\n        minutes away. Paddington Rail Station, which provides express services to Heathrow Airport, is a 15-minute\n        walk from the hotel.\n        Westminster is a great choice for travelers who are interested in shopping, visiting parks and history.\n        This place especially likes couples - they rated it at 8.2 for a trip together\n      </h6>\n    </div>\n  </div>\n</div>\n\n<app-spinner *ngIf=\"isLoading\"></app-spinner>\n"

/***/ }),

/***/ "./src/app/components/property/property-details/property-details.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/components/property/property-details/property-details.component.ts ***!
  \************************************************************************************/
/*! exports provided: PropertyDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyDetailsComponent", function() { return PropertyDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_property_property_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/property/property.service */ "./src/app/services/property/property.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_review_review_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/review/review.service */ "./src/app/services/review/review.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PropertyDetailsComponent = /** @class */ (function () {
    function PropertyDetailsComponent(route, propertyService, reviewService) {
        this.route = route;
        this.propertyService = propertyService;
        this.reviewService = reviewService;
        this.isLoading = false;
        this.queryParams = {
            checkin: '',
            checkout: '',
            num_of_guests: ''
        };
    }
    PropertyDetailsComponent.prototype.ngOnInit = function () {
        this.getPropertyById();
        this.queryParams.checkin = this.route.snapshot.queryParamMap.get('checkin');
        this.queryParams.checkout = this.route.snapshot.queryParamMap.get('checkout');
        this.queryParams.num_of_guests = this.route.snapshot.queryParamMap.get('num_of_guests');
        this.getCountReview();
    };
    PropertyDetailsComponent.prototype.getPropertyById = function () {
        var _this = this;
        this.isLoading = true;
        var id = +this.route.snapshot.paramMap.get('id');
        this.propertyService.getPropertyById(id).subscribe(function (res) {
            _this.property = res;
            _this.isLoading = false;
        }, function (error) { return _this.isLoading = false; });
        return this.property;
    };
    PropertyDetailsComponent.prototype.getCountReview = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        this.reviewService.getCountReviewByPropertyId(id).subscribe(function (res) {
            _this.countReview = res;
        });
    };
    PropertyDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-property-details',
            template: __webpack_require__(/*! ./property-details.component.html */ "./src/app/components/property/property-details/property-details.component.html"),
            styles: [__webpack_require__(/*! ./property-details.component.css */ "./src/app/components/property/property-details/property-details.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_property_property_service__WEBPACK_IMPORTED_MODULE_1__["PropertyService"],
            _services_review_review_service__WEBPACK_IMPORTED_MODULE_3__["ReviewService"]])
    ], PropertyDetailsComponent);
    return PropertyDetailsComponent;
}());



/***/ }),

/***/ "./src/app/components/property/property.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/property/property.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/property/property.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/property/property.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Property Details</h1>\n<app-photo-list></app-photo-list>\n"

/***/ }),

/***/ "./src/app/components/property/property.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/property/property.component.ts ***!
  \***********************************************************/
/*! exports provided: PropertyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyComponent", function() { return PropertyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PropertyComponent = /** @class */ (function () {
    function PropertyComponent() {
    }
    PropertyComponent.prototype.ngOnInit = function () {
    };
    PropertyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-property',
            template: __webpack_require__(/*! ./property.component.html */ "./src/app/components/property/property.component.html"),
            styles: [__webpack_require__(/*! ./property.component.css */ "./src/app/components/property/property.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PropertyComponent);
    return PropertyComponent;
}());



/***/ }),

/***/ "./src/app/components/review/review-booking/review-booking.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/components/review/review-booking/review-booking.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.reviewBooking {\n  height: 300px;\n  width: 500px;\n  border: 1px solid black;\n  padding: 30px\n}\n"

/***/ }),

/***/ "./src/app/components/review/review-booking/review-booking.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/components/review/review-booking/review-booking.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"reviewBooking\" *ngIf=\"review\" >\n  <p>{{review.message}}</p>\n  <hr>\n  <p>Rating : {{review.rating}}</p>\n</div>\n<div class=\"reviewBooking\" class=\"reviewBooking\" *ngIf=\"!review\" style=\"height: 300px ;width: 500px; border: 1px solid black\">\n  <h1>No review</h1>\n</div>\n"

/***/ }),

/***/ "./src/app/components/review/review-booking/review-booking.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/review/review-booking/review-booking.component.ts ***!
  \******************************************************************************/
/*! exports provided: ReviewBookingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewBookingComponent", function() { return ReviewBookingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_review_review_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/review/review.service */ "./src/app/services/review/review.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReviewBookingComponent = /** @class */ (function () {
    function ReviewBookingComponent(route, reviewService) {
        this.route = route;
        this.reviewService = reviewService;
    }
    ReviewBookingComponent.prototype.ngOnInit = function () {
        this.getReviewByBooking();
    };
    ReviewBookingComponent.prototype.getReviewByBooking = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        this.reviewService.getReviewByBooking(id).subscribe(function (r) { return _this.review = r; });
    };
    ReviewBookingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-review-booking',
            template: __webpack_require__(/*! ./review-booking.component.html */ "./src/app/components/review/review-booking/review-booking.component.html"),
            styles: [__webpack_require__(/*! ./review-booking.component.css */ "./src/app/components/review/review-booking/review-booking.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_review_review_service__WEBPACK_IMPORTED_MODULE_2__["ReviewService"]])
    ], ReviewBookingComponent);
    return ReviewBookingComponent;
}());



/***/ }),

/***/ "./src/app/components/review/review-create/review-create.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/components/review/review-create/review-create.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.reviewDiv {\n  height: auto;\n  width: 750px;\n  border: 1px solid silver;\n  padding: 30px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n\n}\ndiv#btns{\n  margin-left: 40%;\n}\nbutton{\n  width: 200px;\n}\n"

/***/ }),

/***/ "./src/app/components/review/review-create/review-create.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/components/review/review-create/review-create.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"reviewDiv\" *ngIf=\"!flag\">\n  <form #createReviewForm=ngForm (ngSubmit)=\"createReview(createReviewForm)\" [ngClass]=\"{'was-validated' : !formValid}\">\n    <label for=\"FormControlTextarea\">Review : </label>\n    <textarea class=\"form-control z-depth-1\" id=\"FormControlTextarea\" rows=\"8\" placeholder=\"write your review...\"\n              [(ngModel)]=\"review.message\" name=\"message\" required=\"required\"></textarea>\n    <hr>\n    <p>Rating :<input type=\"number\" min=\"1\" max=\"10\" [(ngModel)]=\"review.rating\" name=\"rating\"\n                      required=\"required\"></p>\n    <ng-container *ngIf=\"errorMessage !== ''\">\n      <div class=\"alert alert-danger\">\n        {{errorMessage}}\n      </div>\n    </ng-container>\n    <div class=\"form-row\" id=\"btns\">\n      <button (click)=\"goBack()\" class=\"btn-danger\">Cancel</button>\n      <button type=\"submit\" class=\"btn-info\">Save Review</button>\n    </div>\n  </form>\n</div>\n\n\n<div class=\"reviewDiv\" *ngIf=\"flag\">\n  <label for=\"FormControlTextarea\">Review : </label>\n  <textarea class=\"form-control z-depth-1\" readonly rows=\"8\">{{booking.reviewDto.message}}</textarea>\n  <hr>\n  <p>Rating : {{booking.reviewDto.rating}}</p>\n  <div class=\"form-row\">\n    <button (click)=\"goBack()\" class=\"btn-danger\">Back</button>\n  </div>\n</div>\n<app-spinner *ngIf=\"isLoading\"></app-spinner>\n"

/***/ }),

/***/ "./src/app/components/review/review-create/review-create.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/review/review-create/review-create.component.ts ***!
  \****************************************************************************/
/*! exports provided: ReviewCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewCreateComponent", function() { return ReviewCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_review_review_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/review/review.service */ "./src/app/services/review/review.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_create_review__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models/create-review */ "./src/app/models/create-review.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_booking_booking_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/booking/booking.service */ "./src/app/services/booking/booking.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ReviewCreateComponent = /** @class */ (function () {
    function ReviewCreateComponent(reviewService, route, bookingService, location) {
        this.reviewService = reviewService;
        this.route = route;
        this.bookingService = bookingService;
        this.location = location;
        this.formValid = true;
        this.errorMessage = '';
        this.isLoading = false;
    }
    ReviewCreateComponent.prototype.ngOnInit = function () {
        this.review = new _models_create_review__WEBPACK_IMPORTED_MODULE_3__["CreateReview"]();
        this.getBooking();
    };
    ReviewCreateComponent.prototype.createReview = function (createReviewForm) {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        if (createReviewForm.valid) {
            this.reviewService.createReview(this.review, id).subscribe(function (res) {
                alert('Review created');
                _this.getBooking();
            }, function (error) {
                _this.errorMessage = JSON.parse(error.error).message;
            });
        }
        else {
            this.formValid = false;
        }
    };
    ReviewCreateComponent.prototype.goBack = function () {
        this.location.back();
    };
    ReviewCreateComponent.prototype.getBooking = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        this.bookingService.getBooking(id).subscribe(function (b) {
            _this.booking = b;
            _this.flag = !!b.reviewDto;
        });
    };
    ReviewCreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-review-create',
            template: __webpack_require__(/*! ./review-create.component.html */ "./src/app/components/review/review-create/review-create.component.html"),
            styles: [__webpack_require__(/*! ./review-create.component.css */ "./src/app/components/review/review-create/review-create.component.css")]
        }),
        __metadata("design:paramtypes", [_services_review_review_service__WEBPACK_IMPORTED_MODULE_1__["ReviewService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_booking_booking_service__WEBPACK_IMPORTED_MODULE_5__["BookingService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]])
    ], ReviewCreateComponent);
    return ReviewCreateComponent;
}());



/***/ }),

/***/ "./src/app/components/review/reviews-property/reviews-property.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/components/review/reviews-property/reviews-property.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "span.rating {\n  margin-left: 70%;\n}\n\ndiv.reviewDiv {\n  margin-top: 1px;\n  margin-left: 10%;\n  margin-right: 10%;\n}\n\ndiv#items-size{\n  margin-left: 10%;\n  margin-right: 15%;\n}\n\n"

/***/ }),

/***/ "./src/app/components/review/reviews-property/reviews-property.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/components/review/reviews-property/reviews-property.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-user-navigation></app-user-navigation>\n<br>\n<div *ngIf=\"totalElements !=0 \">\n  <div class=\"container\">\n    <div class=\"form-group row\" id=\"items-size\">\n      <h2 style=\"margin-right: 2%; height: content-box\">Reviews on page:</h2>\n      <app-items-size\n        (sentSelectedItemsSize)=\"setSelectedItemsSize($event)\">\n      </app-items-size>\n      <h1 style=\"margin-left: 20%\">{{property.name}} : {{property.rating | number: '1.1'}}</h1>\n    </div>\n    <br><br>\n    <div class=\"reviewDiv\">\n      <div class=\"align-items-center\" *ngFor=\"let review of reviews\">\n        <label for=\"FormControlTextarea\"><strong style=\"margin-left: 20px\">{{review.userDto.firstName}} : </strong> </label>\n        <span class=\"rating\"><strong>Rating : </strong> {{review.rating}}</span>\n        <textarea class=\"form-control\" id=\"FormControlTextarea\" rows=\"4\" readonly>{{review.message}}</textarea>\n        <hr>\n        <div class=\"form-row\">\n        </div>\n      </div>\n    </div>\n    <app-pagination\n      [currentPage]=\"currentPage\"\n      [totalPages]=\"totalPages\"\n      [pagesToPagination]=\"pagesToPagination\"\n      (goFirst)=\"onFirst($event)\"\n      (goPrev)=\"onPrev()\"\n      (goNext)=\"onNext()\"\n      (goLast)=\"onLast($event)\"\n      (goPage)=\"goToPage($event)\">\n    </app-pagination>\n\n  </div>\n\n  <div *ngIf=\"totalElements ===0 \">\n    <h3>You not have booking yet!</h3>\n  </div>\n</div>\n<app-spinner *ngIf=\"isLoading\"></app-spinner>\n"

/***/ }),

/***/ "./src/app/components/review/reviews-property/reviews-property.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/components/review/reviews-property/reviews-property.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ReviewsPropertyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewsPropertyComponent", function() { return ReviewsPropertyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_review_review_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/review/review.service */ "./src/app/services/review/review.service.ts");
/* harmony import */ var _services_pagination_pagination_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/pagination/pagination.service */ "./src/app/services/pagination/pagination.service.ts");
/* harmony import */ var _services_property_property_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/property/property.service */ "./src/app/services/property/property.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ReviewsPropertyComponent = /** @class */ (function () {
    function ReviewsPropertyComponent(route, reviewService, paginationService, propertyService) {
        this.route = route;
        this.reviewService = reviewService;
        this.paginationService = paginationService;
        this.propertyService = propertyService;
        this.currentPage = 1;
        this.selectedItemsSize = 10;
        this.isLoading = false;
    }
    ReviewsPropertyComponent.prototype.ngOnInit = function () {
        this.getReviewsByPage();
        this.getProperty();
    };
    ReviewsPropertyComponent.prototype.getReviewsByPage = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        if (this.selectedItemsSize) {
            this.reviewService.getPageAllReviewsByProperty(id, this.currentPage - 1, this.selectedItemsSize)
                .subscribe(function (data) {
                _this.reviews = data['content'];
                _this.totalPages = data['totalPages'];
                _this.totalElements = data['totalElements'];
                _this.pagesToPagination = _this.paginationService.calculatePages(_this.currentPage, _this.totalPages);
            });
        }
    };
    ReviewsPropertyComponent.prototype.setSelectedItemsSize = function (n) {
        this.selectedItemsSize = n;
        this.currentPage = 1;
        this.getReviewsByPage();
    };
    ReviewsPropertyComponent.prototype.goToPage = function (n) {
        this.currentPage = n;
        this.getReviewsByPage();
    };
    ReviewsPropertyComponent.prototype.onFirst = function (n) {
        this.currentPage = n;
        this.getReviewsByPage();
    };
    ReviewsPropertyComponent.prototype.onPrev = function () {
        this.currentPage--;
        this.getReviewsByPage();
    };
    ReviewsPropertyComponent.prototype.onNext = function () {
        this.currentPage++;
        this.getReviewsByPage();
    };
    ReviewsPropertyComponent.prototype.onLast = function (n) {
        this.currentPage = n;
        this.getReviewsByPage();
    };
    ReviewsPropertyComponent.prototype.getProperty = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        this.propertyService.getPropertyById(id).subscribe(function (pr) { return _this.property = pr; });
    };
    ReviewsPropertyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reviews-property',
            template: __webpack_require__(/*! ./reviews-property.component.html */ "./src/app/components/review/reviews-property/reviews-property.component.html"),
            styles: [__webpack_require__(/*! ./reviews-property.component.css */ "./src/app/components/review/reviews-property/reviews-property.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_review_review_service__WEBPACK_IMPORTED_MODULE_2__["ReviewService"],
            _services_pagination_pagination_service__WEBPACK_IMPORTED_MODULE_3__["PaginationService"],
            _services_property_property_service__WEBPACK_IMPORTED_MODULE_4__["PropertyService"]])
    ], ReviewsPropertyComponent);
    return ReviewsPropertyComponent;
}());



/***/ }),

/***/ "./src/app/components/search/search-form/search-form.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/components/search/search-form/search-form.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn{\n  margin: 10px;\n}\n"

/***/ }),

/***/ "./src/app/components/search/search-form/search-form.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/components/search/search-form/search-form.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" style = \"margin-left:20%\">\n  <div class=\"col-md-12\" style=\"width: 98% \">\n\n    <form class=\"form-inline searchform\">\n\n      <div class=\"form-group mr-2\">\n        <select class=\"form-control\" value=\"\" #country (change)=\"onCountrySelect(country.value)\" required>\n          <option disabled>Country</option>\n          <option *ngFor=\"let country of countries\" [selected]=\"country.id === this.selectedCountryId\"\n                  value=\"{{country.id}}\">{{country.name}}\n          </option>\n        </select>\n      </div>\n\n      <div *ngIf=\"cities\" class=\"form-group mr-2\">\n        <select class=\"form-control\" #city (change)=\"onCitySelect(city.value)\" required>\n          <option disabled>City</option>\n          <option *ngFor=\"let city of cities\" [selected]=\"city.id === this.selectedCityId\"\n                  value=\"{{city.id}}\">{{city.name}}\n          </option>\n        </select>\n      </div>\n\n      <div class=\"form-group mr-2\">\n        <input placeholder=\"Check-in\" class=\"form-control\" type=\"date\" [(ngModel)]=\"checkIn\" name=\"in\" required>\n      </div>\n\n\n      <div class=\"form-group mr-2\">\n        <input placeholder=\"Check-out\" class=\"form-control\" type=\"date\" [(ngModel)]=\"checkOut\" name=\"out\" required>\n      </div>\n\n      <div class=\"form-group mr-2\">\n        <select class=\"form-control\" #numOfGuestsSelect (change)=\"onNumOfGuestsSelect(numOfGuestsSelect.value)\"\n                required>\n          <option disabled>Number of guests</option>\n          <option *ngFor=\"let num of numsOfGuests\" [selected]=\"num === this.selectedNumberOfGuests\">{{num}}</option>\n        </select>\n      </div>\n\n\n      <div class=\"btn-group btn-group-justified\">\n        <button type=\"submit\" class=\"btn btn-primary\" (click)=\"onSearch()\">Search</button>\n      </div>\n      <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"!formValid\">\n        Please, select Country, city, check in, check out and number of guests\n      </div>\n    </form>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/search/search-form/search-form.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/search/search-form/search-form.component.ts ***!
  \************************************************************************/
/*! exports provided: SearchFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchFormComponent", function() { return SearchFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_country_coutry_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/country/coutry.service */ "./src/app/services/country/coutry.service.ts");
/* harmony import */ var _services_city_city_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/city/city.service */ "./src/app/services/city/city.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SearchFormComponent = /** @class */ (function () {
    function SearchFormComponent(countryService, cityService, router, route) {
        this.countryService = countryService;
        this.cityService = cityService;
        this.router = router;
        this.route = route;
        this.numsOfGuests = [1, 2, 3, 4, 5, 6, 7, 8];
        this.countries = [];
        this.cities = [];
        this.formValid = true;
        this.mainDataChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    SearchFormComponent.prototype.ngOnInit = function () {
        if (this.route.snapshot.queryParamMap.has('country')) {
            this.selectedCountryId = Number.parseInt(this.route.snapshot.queryParamMap.get('country'));
            this.initCities(this.selectedCountryId);
            if (this.route.snapshot.queryParamMap.has('city')) {
                this.selectedCityId = Number.parseInt(this.route.snapshot.queryParamMap.get('city'));
            }
        }
        if (this.route.snapshot.queryParamMap.has('checkin')) {
            this.checkIn = this.route.snapshot.queryParamMap.get('checkin');
        }
        if (this.route.snapshot.queryParamMap.has('checkout')) {
            this.checkOut = this.route.snapshot.queryParamMap.get('checkout');
        }
        if (this.route.snapshot.queryParamMap.has('num_of_guests')) {
            this.selectedNumberOfGuests = Number.parseInt(this.route.snapshot.queryParamMap.get('num_of_guests'));
        }
        this.initCountries();
    };
    SearchFormComponent.prototype.initCountries = function () {
        var _this = this;
        this.countryService.getCountry().subscribe(function (countries) {
            _this.countries = countries;
        });
    };
    SearchFormComponent.prototype.initCities = function (CountryId) {
        var _this = this;
        this.cityService.getCity(CountryId).subscribe(function (cities) {
            _this.cities = cities;
        });
    };
    SearchFormComponent.prototype.onCountrySelect = function (id) {
        this.selectedCountryId = id;
        this.initCities(id);
    };
    SearchFormComponent.prototype.onCitySelect = function (id) {
        this.selectedCityId = id;
    };
    SearchFormComponent.prototype.onNumOfGuestsSelect = function (numOfGuests) {
        this.selectedNumberOfGuests = numOfGuests;
    };
    SearchFormComponent.prototype.onSearch = function () {
        this.formValid = true;
        if (!this.selectedCityId || !this.checkIn || !this.checkOut || !this.checkOut || !this.selectedNumberOfGuests) {
            this.formValid = false;
            return;
        }
        this.router.navigate(['/advanced-search'], { queryParams: {
                country: this.selectedCountryId,
                city: this.selectedCityId,
                checkin: this.checkIn,
                checkout: this.checkOut,
                num_of_guests: this.selectedNumberOfGuests
            } });
        this.mainDataChange.emit({
            country: this.selectedCountryId,
            city: this.selectedCityId,
            checkin: this.checkIn,
            checkout: this.checkOut,
            num_of_guests: this.selectedNumberOfGuests
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SearchFormComponent.prototype, "mainDataChange", void 0);
    SearchFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search-form',
            template: __webpack_require__(/*! ./search-form.component.html */ "./src/app/components/search/search-form/search-form.component.html"),
            styles: [__webpack_require__(/*! ./search-form.component.css */ "./src/app/components/search/search-form/search-form.component.css")]
        }),
        __metadata("design:paramtypes", [_services_country_coutry_service__WEBPACK_IMPORTED_MODULE_1__["CountryService"],
            _services_city_city_service__WEBPACK_IMPORTED_MODULE_2__["CityService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], SearchFormComponent);
    return SearchFormComponent;
}());



/***/ }),

/***/ "./src/app/components/search/search.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/search/search.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/search/search.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/search/search.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-search-form></app-search-form>\n"

/***/ }),

/***/ "./src/app/components/search/search.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/search/search.component.ts ***!
  \*******************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchComponent = /** @class */ (function () {
    function SearchComponent() {
    }
    SearchComponent.prototype.ngOnInit = function () {
    };
    SearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/components/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.css */ "./src/app/components/search/search.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/components/spinner/spinner.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/spinner/spinner.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".loader {\n  border: 16px solid #f3f3f3;\n  border-radius: 50%;\n  border-top: 16px solid #3498db;\n  width: 120px;\n  height: 120px;\n  -webkit-animation: spin 2s linear infinite;\n          animation: spin 2s linear infinite;\n  position: fixed;\n  z-index: 99;\n  opacity: 1;\n  margin: auto;\n}\n@-webkit-keyframes spin {\n  0% { -webkit-transform: rotate(0deg); transform: rotate(0deg); }\n  100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); }\n}\n@keyframes spin {\n  0% { -webkit-transform: rotate(0deg); transform: rotate(0deg); }\n  100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); }\n}\n#spinner-background{\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  top: 0;\n  left: 0;\n  background: rgba(255,255,255,0.5);\n}\n"

/***/ }),

/***/ "./src/app/components/spinner/spinner.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/spinner/spinner.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"spinner-background\">\n  <div class=\"loader\"></div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/spinner/spinner.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/spinner/spinner.component.ts ***!
  \*********************************************************/
/*! exports provided: SpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function() { return SpinnerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SpinnerComponent = /** @class */ (function () {
    function SpinnerComponent() {
    }
    SpinnerComponent.prototype.ngOnInit = function () {
    };
    SpinnerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-spinner',
            template: __webpack_require__(/*! ./spinner.component.html */ "./src/app/components/spinner/spinner.component.html"),
            styles: [__webpack_require__(/*! ./spinner.component.css */ "./src/app/components/spinner/spinner.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SpinnerComponent);
    return SpinnerComponent;
}());



/***/ }),

/***/ "./src/app/components/user/login/login.component.css":
/*!***********************************************************!*\
  !*** ./src/app/components/user/login/login.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n"

/***/ }),

/***/ "./src/app/components/user/login/login.component.html":
/*!************************************************************!*\
  !*** ./src/app/components/user/login/login.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"menucard\">\n    <div>\n        <h1 class=\"display-4\" style=\"text-align: center\">BookingLite</h1>\n    <div class=\"card\" style=\"width:400px\">\n        <article class=\"card-body\">\n            <h4 class=\"card-title mb-4 mt-1\">Login</h4>\n            <form #loginForm=ngForm (ngSubmit)=\"signIn(loginForm)\">\n                <div class=\"form-group\">\n                    <label>Your email</label>\n                    <input id=\"email\" required email [(ngModel)]=\"loginDto.email\" #email=\"ngModel\" name=\"email\" class=\"form-control\" placeholder=\"Email\" type=\"email\">\n                </div> \n                <div class=\"form-group\">\n                    <label>Your password</label>\n                    <input id=\"password\" required [(ngModel)]=\"loginDto.password\"  name=\"password\" class=\"form-control\" placeholder=\"******\" type=\"password\" >\n                </div>\n                <ng-container *ngIf=\"errorMessage !== ''\">\n                    <div class=\"alert alert-danger\">\n                            {{errorMessage}}\n                    </div>\n                </ng-container>\n                <ng-container *ngIf=\"!formValid\">\n                    <div class=\"alert alert-warning\">\n                    Check input data. Password and valid email is required!\n                    </div>\n                </ng-container>  \n                <div class=\"form-group\">\n                    <button type=\"submit\" class=\"btn btn-primary btn-block\">Login</button>\n                </div>\n                <a routerLink=\"/register\">Don’t have account? Sign Up!</a>\n            </form>\n        </article>\n    </div> \n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/user/login/login.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/user/login/login.component.ts ***!
  \**********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_loginDto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/loginDto */ "./src/app/models/loginDto.ts");
/* harmony import */ var _services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/authentication/auth.service */ "./src/app/services/authentication/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(auth, router) {
        this.auth = auth;
        this.router = router;
        this.loginDto = new _models_loginDto__WEBPACK_IMPORTED_MODULE_1__["LoginDto"]();
        this.formValid = true;
        this.errorMessage = '';
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.signOut();
    };
    LoginComponent.prototype.signIn = function (form) {
        var _this = this;
        if (form.valid) {
            this.auth.signIn(this.loginDto)
                .subscribe(function (res) {
                _this.auth.saveToken(res);
                _this.auth.loadUser();
                _this.onSubmit();
            }, function (error) {
                console.log(error);
                _this.errorMessage = JSON.parse(error.error).message;
            });
        }
        else {
            this.formValid = false;
        }
    };
    LoginComponent.prototype.signOut = function () {
        this.auth.signOut();
    };
    LoginComponent.prototype.onSubmit = function () {
        this.router.navigate(['/search']);
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/user/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/user/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/user/register/register.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/components/user/register/register.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/user/register/register.component.html":
/*!******************************************************************!*\
  !*** ./src/app/components/user/register/register.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"menucard\">\n    <div>\n        <h1 class=\"display-4\" style=\"text-align: center\">BookingLite</h1>\n        <div class=\"card\" style=\"width:600px\">\n            <article class=\"card-body\">\n                <h4 class=\"card-title mb-4 mt-1\">Register</h4>\n                <form #registerForm=ngForm (ngSubmit)=\"signUp(registerForm)\" [ngClass]=\"{'was-validated' : !formValid}\">\n                <div class=\"row\">\n                    <div class=\"col-6\">\n                    <div class=\"form-group\">\n                        <label>First Name</label>\n                        <input name=\"firstname\" #firstname=\"ngModel\" required [(ngModel)]=\"registerDto.firstName\" class=\"form-control\" placeholder=\"First Name\" type=\"text\">\n                        <div class=\"invalid-feedback\">First name is required!</div>\n                    </div> \n                    <div class=\"form-group\">\n                        <label>Last Name</label>\n                        <input  name=\"lastname\" required class=\"form-control\" [(ngModel)]=\"registerDto.lastName\" placeholder=\"Last Name\" type=\"text\">\n                        <div class=\"invalid-feedback\">Last name is required!</div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label>Email</label>\n                        <input  class=\"form-control\" required name=\"email\" [(ngModel)]=\"registerDto.email\" placeholder=\"Email\" type=\"email\">\n                        <div class=\"invalid-feedback\">Valid email is required!</div>\n                    </div>  \n                    <div class=\"form-group\">\n                        <label>Your password</label>\n                        <input  class=\"form-control\" required minlength=\"8\" name=\"password\"  [(ngModel)]=\"registerDto.password\" placeholder=\"******\" type=\"password\">\n                        <div class=\"invalid-feedback\">Minimum length 8</div>\n                    </div> \n                    <div class=\"form-group\">\n                        <label>Phone Number</label>\n                        <input  class=\"form-control\" required name=\"phonenumber\" [(ngModel)]=\"registerDto.phoneNumber\" placeholder=\"Phone\" type=\"text\">\n                        <div class=\"invalid-feedback\">Phone number is required!</div>\n                    </div>\n                    <div class=\"form-group\">\n                            <label>Register as owner? <input name=\"owner\" [(ngModel)]=\"registerDto.owner\" type=\"checkbox\"></label>\n                        </div>\n                    </div>\n                    <div class=\"col-6\">\n                    <div class=\"form-group\">\n                            <label>Address Line</label>\n                            <input  class=\"form-control\" required name=\"addressline\" [(ngModel)]=\"registerDto.address.addressLine\" placeholder=\"Address Line\" type=\"text\">\n                            <div class=\"invalid-feedback\">Address line is required!</div>\n                    </div>\n                    <div class=\"form-group\">\n                            <label>Country</label>\n                        <select class=\"form-control\" #selectCountry (change)=\"changeCountry(selectCountry.value)\">\n                            <option *ngFor=\"let country of countries\" value=\"{{country.id}}\">{{country.name}}</option>\n                        </select>\n                    </div>\n                    <div *ngIf=\"cities\" class=\"form-group\">\n                            <label>City</label>\n                        <select class=\"form-control\" #selectCity (change)=\"changeCity(selectCity.value)\">\n                            <option *ngFor=\"let city of cities\" value=\"{{city.id}}\">{{city.name}}</option>\n                        </select>\n                    </div>\n\n                    <div class=\"form-group\">\n                            <label>Zip</label>\n                            <input class=\"form-control\" required maxlength=\"5\" minlength=\"5\" name=\"zip\" [(ngModel)]=\"registerDto.address.zip\" placeholder=\"12345\" type=\"text\">\n                            <div class=\"invalid-feedback\">Valid zip is required!</div>\n                    </div>\n                    </div>\n                    </div>\n                    <ng-container *ngIf=\"errorMessage !== ''\">\n                            <div class=\"alert alert-danger\">\n                                    {{errorMessage}}\n                            </div>\n                    </ng-container>\n                    <div class=\"form-group\">\n                        <button type=\"submit\" class=\"btn btn-primary btn-block\">Register</button>\n                    </div> \n                </form>\n            </article>\n        </div> \n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/user/register/register.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/user/register/register.component.ts ***!
  \****************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/authentication/auth.service */ "./src/app/services/authentication/auth.service.ts");
/* harmony import */ var _models_registerDto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models/registerDto */ "./src/app/models/registerDto.ts");
/* harmony import */ var _services_country_coutry_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/country/coutry.service */ "./src/app/services/country/coutry.service.ts");
/* harmony import */ var _services_city_city_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/city/city.service */ "./src/app/services/city/city.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(auth, countryService, cityService, router) {
        this.auth = auth;
        this.countryService = countryService;
        this.cityService = cityService;
        this.router = router;
        this.registerDto = new _models_registerDto__WEBPACK_IMPORTED_MODULE_3__["RegisterDto"]();
        this.formValid = true;
        this.errorMessage = '';
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.getCountries();
    };
    RegisterComponent.prototype.getCountries = function () {
        var _this = this;
        this.countryService.getCountry().subscribe(function (countriesarr) {
            _this.countries = countriesarr;
            _this.selectedCountry = countriesarr[0].id;
            _this.getCities(_this.selectedCountry);
        });
    };
    RegisterComponent.prototype.changeCountry = function (id) {
        this.selectedCountry = id;
        this.getCities(id);
    };
    RegisterComponent.prototype.changeCity = function (id) {
        this.selectedCity = id;
    };
    RegisterComponent.prototype.getCities = function (countryId) {
        var _this = this;
        this.cityService.getCity(countryId).subscribe(function (citiesarr) {
            _this.cities = citiesarr;
            if (citiesarr.length !== 0) {
                _this.selectedCity = citiesarr[0].id;
            }
        });
    };
    RegisterComponent.prototype.signUp = function (registerForm) {
        var _this = this;
        if (registerForm.valid) {
            this.registerDto.address.city.id = this.selectedCity;
            this.registerDto.address.city.country.id = this.selectedCountry;
            this.auth.signUp(this.registerDto).subscribe(function (result) {
                _this.onSubmit();
            }, function (error) {
                console.log(error);
                _this.errorMessage = JSON.parse(error.error).message;
            });
        }
        else {
            this.formValid = false;
        }
    };
    RegisterComponent.prototype.onSubmit = function () {
        this.router.navigate(['/login']);
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/user/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/components/user/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _services_country_coutry_service__WEBPACK_IMPORTED_MODULE_4__["CountryService"],
            _services_city_city_service__WEBPACK_IMPORTED_MODULE_5__["CityService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/user/user-navigation/user-navigation.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/components/user/user-navigation/user-navigation.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/user/user-navigation/user-navigation.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/components/user/user-navigation/user-navigation.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"card-header\">\n    <ul class=\"nav nav-pills card-header-pills\">\n      <li class=\"nav-item\">\n        <a [ngClass]=\"{'nav-link': true, 'active': href.includes('user')}\" routerLink=\"/user\">Profile</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [ngClass]=\"{'nav-link': true, 'active': href.includes('bookings')}\"\n         routerLink=\"/bookings\">Bookings</a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"isOwner\">\n        <a [ngClass]=\"{'nav-link': true, 'active': href.includes('properties')}\" routerLink=\"/myproperties\">Properties</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"#\">Settings</a>\n      </li>\n    </ul>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/user/user-navigation/user-navigation.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/user/user-navigation/user-navigation.component.ts ***!
  \******************************************************************************/
/*! exports provided: UserNavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserNavigationComponent", function() { return UserNavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/authentication/auth.service */ "./src/app/services/authentication/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserNavigationComponent = /** @class */ (function () {
    function UserNavigationComponent(auth) {
        this.auth = auth;
        this.isOwner = false;
        this.href = '';
    }
    UserNavigationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.isOwner.subscribe(function (res) { return _this.isOwner = res; });
        this.href = window.location.href;
    };
    UserNavigationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-navigation',
            template: __webpack_require__(/*! ./user-navigation.component.html */ "./src/app/components/user/user-navigation/user-navigation.component.html"),
            styles: [__webpack_require__(/*! ./user-navigation.component.css */ "./src/app/components/user/user-navigation/user-navigation.component.css")]
        }),
        __metadata("design:paramtypes", [_services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], UserNavigationComponent);
    return UserNavigationComponent;
}());



/***/ }),

/***/ "./src/app/components/user/user-profile/user-properties/user-apartments/user-apartments.component.css":
/*!************************************************************************************************************!*\
  !*** ./src/app/components/user/user-profile/user-properties/user-apartments/user-apartments.component.css ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#addApartment{\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n.action {\n  width: 117px;\n  text-align: center;\n}\n"

/***/ }),

/***/ "./src/app/components/user/user-profile/user-properties/user-apartments/user-apartments.component.html":
/*!*************************************************************************************************************!*\
  !*** ./src/app/components/user/user-profile/user-properties/user-apartments/user-apartments.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-user-navigation></app-user-navigation>\n<div class=\"container\">\n  <button *ngIf=\"property\" routerLink=\"/property/{{property.id}}/create-apartment\" type=\"button\" class=\"btn btn-primary\" id=\"addApartment\">New Apartment</button>\n  <div *ngIf=\"property\" class=\"alert alert-info\" role=\"alert\">\n    <strong>{{property.name}}</strong> have <strong>{{property.apartments.length}}</strong> apartments\n  </div>\n    <table class=\"table\">\n    <thead class=\"thead-light\">\n    <tr>\n      <th scope=\"col\">Name</th>\n      <th scope=\"col\">Price</th>\n      <th scope=\"col\">Type</th>\n      <th scope=\"col\">Number of guests</th>\n      <th scope=\"col\">Action</th>\n    </tr>\n    </thead>\n    <tbody *ngIf=\"property\">\n      <tr *ngFor=\"let ap of property.apartments\">\n        <td>{{ap.name}}</td>\n        <td>{{ap.price}}</td>\n        <td>{{ap.apartmentType.name}}</td>\n        <td>{{ap.numberOfGuests}}</td>\n        <td><button type=\"button\" class=\"btn btn-primary action\"\n                    routerLink=\"/property/{{property.id}}/edit-apartment/{{ap.id}}\">Edit</button></td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n"

/***/ }),

/***/ "./src/app/components/user/user-profile/user-properties/user-apartments/user-apartments.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/components/user/user-profile/user-properties/user-apartments/user-apartments.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: UserApartmentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserApartmentsComponent", function() { return UserApartmentsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_property_property_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../services/property/property.service */ "./src/app/services/property/property.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserApartmentsComponent = /** @class */ (function () {
    function UserApartmentsComponent(route, propertyService) {
        this.route = route;
        this.propertyService = propertyService;
        this.isLoading = false;
    }
    UserApartmentsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = true;
        this.propertyService.getPropertyById(Number.parseInt(this.route.snapshot.paramMap.get('id')))
            .subscribe(function (property) {
            _this.property = property;
            _this.isLoading = false;
        }, function (error) { return _this.isLoading = false; });
    };
    UserApartmentsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-apartments',
            template: __webpack_require__(/*! ./user-apartments.component.html */ "./src/app/components/user/user-profile/user-properties/user-apartments/user-apartments.component.html"),
            styles: [__webpack_require__(/*! ./user-apartments.component.css */ "./src/app/components/user/user-profile/user-properties/user-apartments/user-apartments.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_property_property_service__WEBPACK_IMPORTED_MODULE_2__["PropertyService"]])
    ], UserApartmentsComponent);
    return UserApartmentsComponent;
}());



/***/ }),

/***/ "./src/app/components/user/user-profile/user-properties/user-properties.component.css":
/*!********************************************************************************************!*\
  !*** ./src/app/components/user/user-profile/user-properties/user-properties.component.css ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".action {\n width: 117px;\n  text-align: center;\n}\n.new-appartment {\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n"

/***/ }),

/***/ "./src/app/components/user/user-profile/user-properties/user-properties.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/user/user-profile/user-properties/user-properties.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" id=\"box\">\n  <table class=\"table\">\n    <thead class=\"thead-light\">\n    <a href=\"#\" routerLink=\"/create-property\" class=\"btn btn-primary btn-xs pull-right new-appartment\"><b>+</b> Add new property</a>\n    <tr>\n      <th scope=\"col\">Name</th>\n      <th scope=\"col\">ContactEmail</th>\n      <th scope=\"col\">PhoneNumber</th>\n      <th scope=\"col\">Property Type</th>\n      <th class=\"text-center\">Edit</th>\n      <th class=\"text-center\">Apartments</th>\n      <th class=\"text-center\">Guest Arrivals</th>\n    </tr>\n    </thead>\n    <tbody>\n    <tr *ngFor=\"let property of propertyList\">\n      <td>{{property.name}}</td>\n      <td>{{property.contactEmail}}</td>\n      <td>{{property.phoneNumber}}</td>\n      <td>{{property.propertyType.name}}</td>\n      <td class=\"text-center\">\n        <a class='btn btn-info btn-xs action' routerLink=\"/edit-property/{{property.id}}\">\n        <span class=\"glyphicon glyphicon-edit\"></span>Edit</a>\n      </td>\n      <td>\n        <a class='btn btn-info btn-xs action' routerLink=\"/myproperty/{{property.id}}/apartments\">\n          <span class=\"glyphicon glyphicon-edit\"></span>Apartments</a>\n      </td>\n      <td>\n        <a class='btn btn-info btn-xs action' routerLink=\"/myproperties/{{property.id}}/guest-arrivals/futureBookings\">\n          <span class=\"glyphicon glyphicon-edit\"></span>Guest Arrivals</a>\n      </td>\n    </tr>\n    </tbody>\n  </table>\n</div>\n<app-spinner *ngIf=\"isLoading\"></app-spinner>\n"

/***/ }),

/***/ "./src/app/components/user/user-profile/user-properties/user-properties.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/user/user-profile/user-properties/user-properties.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: UserPropertiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPropertiesComponent", function() { return UserPropertiesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_property_property_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/property/property.service */ "./src/app/services/property/property.service.ts");
/* harmony import */ var _services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/authentication/auth.service */ "./src/app/services/authentication/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserPropertiesComponent = /** @class */ (function () {
    function UserPropertiesComponent(propertyService, auth) {
        this.propertyService = propertyService;
        this.auth = auth;
        this.isLoading = false;
    }
    UserPropertiesComponent.prototype.ngOnInit = function () {
        this.authentication = this.auth.isAuthenticated;
        this.getOwnerProperties();
    };
    UserPropertiesComponent.prototype.getOwnerProperties = function () {
        var _this = this;
        this.isLoading = true;
        this.propertyService.getOwnerProperties().subscribe(function (properties) {
            _this.propertyList = properties;
            _this.isLoading = false;
        }, function (error) { return _this.isLoading = false; });
    };
    UserPropertiesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-properties',
            template: __webpack_require__(/*! ./user-properties.component.html */ "./src/app/components/user/user-profile/user-properties/user-properties.component.html"),
            styles: [__webpack_require__(/*! ./user-properties.component.css */ "./src/app/components/user/user-profile/user-properties/user-properties.component.css")]
        }),
        __metadata("design:paramtypes", [_services_property_property_service__WEBPACK_IMPORTED_MODULE_1__["PropertyService"], _services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], UserPropertiesComponent);
    return UserPropertiesComponent;
}());



/***/ }),

/***/ "./src/app/components/user/user.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/user/user.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".username{\n  margin-top: 5%;\n  margin-bottom: 5%;\n}\n"

/***/ }),

/***/ "./src/app/components/user/user.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/user/user.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-4 offset-1\">\n      <h3 class=\"username\" *ngIf=\"user\">{{user.firstName}} {{user.lastName}}</h3>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-3 offset-1\"><img src=\"assets/image/user.png\" alt=\"user\" class=\"img-thumbnail\"></div>\n    <div class=\"col-5 offset-1\">\n      <table class=\"table\">\n        <tbody>\n        <tr *ngIf=\"user\">\n          <td>Firstname:</td>\n          <td>{{user.firstName}}</td>\n        </tr>\n        <tr *ngIf=\"user\">\n          <td>Lastname:</td>\n          <td>{{user.lastName}}</td>\n        </tr>\n        <tr *ngIf=\"user\">\n          <td>email:</td>\n          <td>{{user.email}}</td>\n        </tr>\n        <tr *ngIf=\"user\">\n          <td>phone:</td>\n          <td>{{user.phoneNumber}}</td>\n        </tr>\n        <tr *ngIf=\"isOwner\">\n          <td>Number of your properties:</td>\n          <td>{{myPropertyCount}}</td>\n        </tr>\n        <tr *ngIf=\"isOwner\">\n          <td>Number of your apartments:</td>\n          <td>{{myApartmentCount}}</td>\n        </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>\n<app-spinner *ngIf=\"isLoading\"></app-spinner>\n"

/***/ }),

/***/ "./src/app/components/user/user.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/user/user.component.ts ***!
  \***************************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/authentication/auth.service */ "./src/app/services/authentication/auth.service.ts");
/* harmony import */ var _services_property_property_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/property/property.service */ "./src/app/services/property/property.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserComponent = /** @class */ (function () {
    function UserComponent(auth, propertyService) {
        this.auth = auth;
        this.propertyService = propertyService;
        this.isLoading = false;
        this.myPropertyCount = 0;
        this.myApartmentCount = 0;
    }
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = true;
        this.auth.getUserFromBackEnd().subscribe(function (user) {
            _this.user = user;
            _this.isLoading = false;
        }, function (error) { return _this.isLoading = false; });
        this.auth.isOwner.subscribe(function (isOwner) {
            _this.isOwner = isOwner;
            if (isOwner) {
                _this.propertyService.getOwnerProperties().subscribe(function (properties) {
                    _this.myPropertyCount = properties.length;
                    var myApartmentCount = 0;
                    properties.forEach(function (property) { return myApartmentCount += property.apartments.length; });
                    _this.myApartmentCount = myApartmentCount;
                });
            }
        });
    };
    UserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/components/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/components/user/user.component.css")]
        }),
        __metadata("design:paramtypes", [_services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _services_property_property_service__WEBPACK_IMPORTED_MODULE_2__["PropertyService"]])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/helpers/jwt.interceptor.ts":
/*!********************************************!*\
  !*** ./src/app/helpers/jwt.interceptor.ts ***!
  \********************************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/authentication/auth.service */ "./src/app/services/authentication/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var JwtInterceptor = /** @class */ (function () {
    function JwtInterceptor(auth) {
        this.auth = auth;
        this.ingoreRoutes = ['/api/login', '/api/register'];
    }
    JwtInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        if (!(this.ingoreRoutes.includes(request.url))) {
            var token = localStorage.getItem('token');
            if (token != null) {
                request = request.clone({
                    setHeaders: {
                        Authorization: "Bearer " + token
                    }
                });
            }
        }
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (ev) {
            if (ev instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]) {
            }
        }, function (err) {
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpErrorResponse"]) {
                if (err.status === 401) {
                    _this.auth.signOut();
                }
            }
        }));
    };
    JwtInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], JwtInterceptor);
    return JwtInterceptor;
}());



/***/ }),

/***/ "./src/app/models/address.ts":
/*!***********************************!*\
  !*** ./src/app/models/address.ts ***!
  \***********************************/
/*! exports provided: Address */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Address", function() { return Address; });
/* harmony import */ var _city__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./city */ "./src/app/models/city.ts");

var Address = /** @class */ (function () {
    function Address() {
        this.city = new _city__WEBPACK_IMPORTED_MODULE_0__["City"]();
    }
    return Address;
}());



/***/ }),

/***/ "./src/app/models/booking-create.ts":
/*!******************************************!*\
  !*** ./src/app/models/booking-create.ts ***!
  \******************************************/
/*! exports provided: BookingCreate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingCreate", function() { return BookingCreate; });
var BookingCreate = /** @class */ (function () {
    function BookingCreate() {
    }
    return BookingCreate;
}());



/***/ }),

/***/ "./src/app/models/booking.ts":
/*!***********************************!*\
  !*** ./src/app/models/booking.ts ***!
  \***********************************/
/*! exports provided: Booking */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Booking", function() { return Booking; });
var Booking = /** @class */ (function () {
    function Booking() {
    }
    return Booking;
}());



/***/ }),

/***/ "./src/app/models/city.ts":
/*!********************************!*\
  !*** ./src/app/models/city.ts ***!
  \********************************/
/*! exports provided: City */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "City", function() { return City; });
/* harmony import */ var _country__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./country */ "./src/app/models/country.ts");

var City = /** @class */ (function () {
    function City() {
        this.country = new _country__WEBPACK_IMPORTED_MODULE_0__["Country"]();
    }
    return City;
}());



/***/ }),

/***/ "./src/app/models/country.ts":
/*!***********************************!*\
  !*** ./src/app/models/country.ts ***!
  \***********************************/
/*! exports provided: Country */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Country", function() { return Country; });
var Country = /** @class */ (function () {
    function Country() {
    }
    return Country;
}());



/***/ }),

/***/ "./src/app/models/create-apartment.ts":
/*!********************************************!*\
  !*** ./src/app/models/create-apartment.ts ***!
  \********************************************/
/*! exports provided: CreateApartment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateApartment", function() { return CreateApartment; });
var CreateApartment = /** @class */ (function () {
    function CreateApartment() {
    }
    return CreateApartment;
}());



/***/ }),

/***/ "./src/app/models/create-review.ts":
/*!*****************************************!*\
  !*** ./src/app/models/create-review.ts ***!
  \*****************************************/
/*! exports provided: CreateReview */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateReview", function() { return CreateReview; });
var CreateReview = /** @class */ (function () {
    function CreateReview() {
    }
    return CreateReview;
}());



/***/ }),

/***/ "./src/app/models/loginDto.ts":
/*!************************************!*\
  !*** ./src/app/models/loginDto.ts ***!
  \************************************/
/*! exports provided: LoginDto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginDto", function() { return LoginDto; });
var LoginDto = /** @class */ (function () {
    function LoginDto() {
    }
    return LoginDto;
}());



/***/ }),

/***/ "./src/app/models/property-create.ts":
/*!*******************************************!*\
  !*** ./src/app/models/property-create.ts ***!
  \*******************************************/
/*! exports provided: PropertyCreate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyCreate", function() { return PropertyCreate; });
var PropertyCreate = /** @class */ (function () {
    function PropertyCreate() {
    }
    return PropertyCreate;
}());



/***/ }),

/***/ "./src/app/models/property.ts":
/*!************************************!*\
  !*** ./src/app/models/property.ts ***!
  \************************************/
/*! exports provided: Property */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Property", function() { return Property; });
var Property = /** @class */ (function () {
    function Property() {
    }
    return Property;
}());



/***/ }),

/***/ "./src/app/models/registerDto.ts":
/*!***************************************!*\
  !*** ./src/app/models/registerDto.ts ***!
  \***************************************/
/*! exports provided: RegisterDto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterDto", function() { return RegisterDto; });
/* harmony import */ var _address__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./address */ "./src/app/models/address.ts");

var RegisterDto = /** @class */ (function () {
    function RegisterDto() {
        this.address = new _address__WEBPACK_IMPORTED_MODULE_0__["Address"]();
    }
    return RegisterDto;
}());



/***/ }),

/***/ "./src/app/services/apartment/apartment.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/services/apartment/apartment.service.ts ***!
  \*********************************************************/
/*! exports provided: ApartmentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApartmentService", function() { return ApartmentService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ApartmentService = /** @class */ (function () {
    function ApartmentService(http) {
        this.http = http;
        this.apartmentUrl = '/api/property';
        this.typeUrl = '/api/create-apartment/apartment-type';
        this.amenityUrl = '/api/create-apartment/amenities';
    }
    ApartmentService.prototype.getAllApartments = function (id) {
        return this.http.get(this.apartmentUrl + "/" + id + "/apartment");
    };
    ApartmentService.prototype.getApartmentType = function () {
        return this.http.get(this.typeUrl);
    };
    ApartmentService.prototype.getAmenities = function () {
        return this.http.get(this.amenityUrl);
    };
    ApartmentService.prototype.createApartment = function (model, id) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        return this.http.post("api/property/" + id + "/apartment", model, httpOptions);
    };
    ApartmentService.prototype.getApartmentById = function (pId, apId) {
        return this.http.get('api/property/' + pId + '/apartment/' + apId);
    };
    ApartmentService.prototype.updateApartment = function (model, id) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        return this.http.put('api/apartment/' + id, model, httpOptions);
    };
    ApartmentService.prototype.getApartmentByIdApartment = function (id) {
        return this.http.get("api/apartment/" + id);
    };
    ApartmentService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ApartmentService);
    return ApartmentService;
}());



/***/ }),

/***/ "./src/app/services/authentication/auth-guard.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/services/authentication/auth-guard.service.ts ***!
  \***************************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/authentication/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function () {
        if (!this.auth.isAuthenticated) {
            this.router.navigate(['/login']);
        }
        return this.auth.isAuthenticated;
    };
    AuthGuardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/services/authentication/auth.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/services/authentication/auth.service.ts ***!
  \*********************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = /** @class */ (function () {
    function AuthService(http, router) {
        this.http = http;
        this.router = router;
    }
    AuthService.prototype.signIn = function (model) {
        console.log('In auth service');
        console.log('json', JSON.stringify(model));
        return this.http.post('/api/login', JSON.stringify({ email: model.email, password: model.password }), { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            }),
            responseType: 'text'
        });
    };
    AuthService.prototype.signUp = function (model) {
        console.log('json', JSON.stringify(model));
        return this.http.post('/api/register', JSON.stringify(model), { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            }),
            responseType: 'text'
        });
    };
    AuthService.prototype.loadUser = function () {
        var _this = this;
        return this.http.get('/api/user').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (user) {
            _this._currentUser = user;
            console.log(_this._currentUser);
            var ownerrole = _this._currentUser.roles.find(function (role) { return role.name === 'ROLE_OWNER'; });
            if (ownerrole) {
                _this._isOwner = true;
            }
        }));
    };
    AuthService.prototype.saveToken = function (token) {
        localStorage.setItem('token', token);
    };
    AuthService.prototype.getToken = function () {
        return localStorage.getItem('token');
    };
    AuthService.prototype.signOut = function () {
        localStorage.removeItem('token');
        this._currentUser = undefined;
        this._isOwner = false;
        this.router.navigate(['/login']);
    };
    Object.defineProperty(AuthService.prototype, "isAuthenticated", {
        get: function () {
            return localStorage.getItem('token') != null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "isOwner", {
        get: function () {
            var _this = this;
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
                if (_this._currentUser !== undefined) {
                    observer.next(_this._isOwner);
                    observer.complete();
                }
                else {
                    _this.loadUser().subscribe(function (res) {
                        observer.next(_this._isOwner);
                        observer.complete();
                    });
                }
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "currentUser", {
        get: function () {
            var _this = this;
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
                if (_this._currentUser !== undefined) {
                    observer.next(_this._currentUser);
                }
                else {
                    _this.loadUser().subscribe(function (res) {
                        observer.next(res);
                    });
                }
            });
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.getUserFromBackEnd = function () {
        return this.http.get('/api/user');
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/authentication/role-guard.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/services/authentication/role-guard.service.ts ***!
  \***************************************************************/
/*! exports provided: RoleGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleGuardService", function() { return RoleGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/authentication/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RoleGuardService = /** @class */ (function () {
    function RoleGuardService(auth, router) {
        this.auth = auth;
        this.router = router;
        this.errorMessage = 'You are not property owner';
        this.errorNavigateLink = '/user';
    }
    RoleGuardService.prototype.canActivate = function (route) {
        var _this = this;
        var expectedRole = route.data.expectedRole;
        this.auth.currentUser.subscribe(function (user) {
            if (!_this.auth.isAuthenticated || !user.roles.find(function (role) { return role.name === expectedRole; })) {
                _this.router.navigate([_this.errorNavigateLink]);
                alert(_this.errorMessage);
            }
        });
        return true;
    };
    RoleGuardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], RoleGuardService);
    return RoleGuardService;
}());



/***/ }),

/***/ "./src/app/services/booking/booking.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/booking/booking.service.ts ***!
  \*****************************************************/
/*! exports provided: BookingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingService", function() { return BookingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BookingService = /** @class */ (function () {
    function BookingService(http) {
        this.http = http;
        this.bookingUrl = 'api/booking';
        this.bookingByPageUrl = 'api/bookings';
        this.myPropertiesUrl = 'api/myproperties';
    }
    BookingService.prototype.getBookingsByPage = function (pageNumber, pageSize, filterBookingsByDates) {
        return this.http.get(this.bookingByPageUrl + "?pageNumber=" + pageNumber + "&pageSize=" + pageSize + "\n      &filterBookingsByDates=" + filterBookingsByDates);
    };
    BookingService.prototype.getBooking = function (id) {
        var url = this.bookingUrl + "/" + id;
        return this.http.get(url);
    };
    BookingService.prototype.cancelBookings = function (id) {
        var url = this.bookingUrl + "/" + id;
        var httpOption = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        return this.http.put(url, httpOption);
    };
    BookingService.prototype.isCanceled = function (bookingStatus) {
        var canceledStatus = 'Canceled';
        if (bookingStatus === canceledStatus) {
            return true;
        }
        else {
            return false;
        }
    };
    BookingService.prototype.calculateNumberOfDates = function (checkIn, checkOut) {
        var dateChackIn = new Date(checkIn);
        var dateChackOut = new Date(checkOut);
        var oneDay = 24 * 60 * 60 * 1000;
        return Math.round((dateChackOut.getTime() - dateChackIn.getTime()) / (oneDay));
    };
    BookingService.prototype.isBookingDateActual = function (checkIn, checkOut) {
        var dateChackIn = new Date(checkIn);
        var dateChackOut = new Date(checkOut);
        this.nowDate = new Date();
        if (dateChackIn > this.nowDate || dateChackOut > this.nowDate) {
            return true;
        }
        else {
            return false;
        }
    };
    BookingService.prototype.createBooking = function (bookingCreate, apartmentId) {
        var url = "api/booking/" + apartmentId;
        return this.http.post(url, bookingCreate, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            }),
            responseType: 'text'
        });
    };
    BookingService.prototype.getPageGuestArrivalsList = function (id, page, size, filterBooking) {
        return this.http.get(this.myPropertiesUrl + "/" + id + "/guestArrivals?page=" + page + "&size=" + size + "&filterBooking=" + filterBooking);
    };
    BookingService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], BookingService);
    return BookingService;
}());



/***/ }),

/***/ "./src/app/services/city/city.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/city/city.service.ts ***!
  \***********************************************/
/*! exports provided: CityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CityService", function() { return CityService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CityService = /** @class */ (function () {
    function CityService(http) {
        this.http = http;
    }
    CityService.prototype.getCity = function (countryId) {
        return this.http.get("api/country/" + countryId + "/cities");
    };
    CityService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CityService);
    return CityService;
}());



/***/ }),

/***/ "./src/app/services/country/coutry.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/country/coutry.service.ts ***!
  \****************************************************/
/*! exports provided: CountryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryService", function() { return CountryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CountryService = /** @class */ (function () {
    function CountryService(http) {
        this.http = http;
    }
    CountryService.prototype.getCountry = function () {
        return this.http.get('api/countries');
    };
    CountryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CountryService);
    return CountryService;
}());



/***/ }),

/***/ "./src/app/services/facility/facility.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/facility/facility.service.ts ***!
  \*******************************************************/
/*! exports provided: FacilityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacilityService", function() { return FacilityService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FacilityService = /** @class */ (function () {
    function FacilityService(http) {
        this.http = http;
    }
    FacilityService.prototype.getAllFacilities = function () {
        return this.http.get('api/facilities');
    };
    FacilityService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], FacilityService);
    return FacilityService;
}());



/***/ }),

/***/ "./src/app/services/pagination/pagination.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/services/pagination/pagination.service.ts ***!
  \***********************************************************/
/*! exports provided: PaginationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationService", function() { return PaginationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PaginationService = /** @class */ (function () {
    function PaginationService() {
    }
    PaginationService.prototype.calculatePages = function (currentPage, totalPages) {
        var startPage, endPage;
        if (totalPages <= 10) {
            // less than 10 total pages so show all
            startPage = 1;
            endPage = totalPages;
        }
        else {
            // more than 10 total pages so calculate start and end pages
            if (currentPage <= 6) {
                startPage = 1;
                endPage = 10;
            }
            else if (currentPage + 4 >= totalPages) {
                startPage = totalPages - 9;
                endPage = totalPages;
            }
            else {
                startPage = currentPage - 5;
                endPage = currentPage + 4;
            }
        }
        // create an array of pages to ng-For in the pager control
        return Array.from(Array((endPage + 1) - startPage).keys()).map(function (i) { return startPage + i; });
    };
    PaginationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], PaginationService);
    return PaginationService;
}());



/***/ }),

/***/ "./src/app/services/property/property.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/property/property.service.ts ***!
  \*******************************************************/
/*! exports provided: PropertyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyService", function() { return PropertyService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PropertyService = /** @class */ (function () {
    function PropertyService(http) {
        this.http = http;
    }
    PropertyService.prototype.createProperty = function (model) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        return this.http.post('api/property', model, httpOptions);
    };
    PropertyService.prototype.getProperties = function () {
        return this.http.get('api/property');
    };
    PropertyService.prototype.getPropertyById = function (id) {
        return this.http.get('api/property/' + id);
    };
    PropertyService.prototype.getOwnerProperties = function () {
        return this.http.get('api/myproperties');
    };
    PropertyService.prototype.updateProperty = function (model, id) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        return this.http.put('api/property/' + id, model, httpOptions);
    };
    PropertyService.prototype.search = function (selectedCountryId, selectedCityId, checkIn, checkOut, numberOfGuests, pageNumber, pageSize) {
        return this.http.get('api/property/search?' +
            'countryId=' + selectedCountryId +
            '&cityId=' + selectedCityId +
            '&checkIn=' + checkIn +
            '&checkOut=' + checkOut +
            '&numberOfGuests=' + numberOfGuests +
            '&pageNumber=' + pageNumber +
            '&pageSize=' + pageSize);
    };
    PropertyService.prototype.advancedSearch = function (selectedCountryId, selectedCityId, checkIn, checkOut, numberOfGuests, selectedPrice, facilityIds, amenityIds, pageNumber, pageSize) {
        return this.http.get('api/property/advancesearch?' +
            'countryId=' + selectedCountryId +
            '&cityId=' + selectedCityId +
            '&checkIn=' + checkIn +
            '&checkOut=' + checkOut +
            '&numberOfGuests=' + numberOfGuests +
            '&price=' + selectedPrice +
            '&facilityIds=' + facilityIds +
            '&amenityIds=' + amenityIds +
            '&pageNumber=' + pageNumber +
            '&pageSize=' + pageSize);
    };
    PropertyService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], PropertyService);
    return PropertyService;
}());



/***/ }),

/***/ "./src/app/services/propertyTypy/property-type.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/services/propertyTypy/property-type.service.ts ***!
  \****************************************************************/
/*! exports provided: PropertyTypeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyTypeService", function() { return PropertyTypeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PropertyTypeService = /** @class */ (function () {
    function PropertyTypeService(http) {
        this.http = http;
    }
    PropertyTypeService.prototype.getAllPropertyTypes = function () {
        return this.http.get("api/propertytype");
    };
    PropertyTypeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], PropertyTypeService);
    return PropertyTypeService;
}());



/***/ }),

/***/ "./src/app/services/review/review.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/review/review.service.ts ***!
  \***************************************************/
/*! exports provided: ReviewService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewService", function() { return ReviewService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReviewService = /** @class */ (function () {
    function ReviewService(http) {
        this.http = http;
        this.bookingUrl = '/api/booking';
        this.propertyUrl = '/api/property';
    }
    ReviewService.prototype.getReviewByBooking = function (id) {
        return this.http.get(this.bookingUrl + "/" + id + "/review");
    };
    ReviewService.prototype.createReview = function (review, id) {
        return this.http.post(this.bookingUrl + "/" + id + "/review", review, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            }),
            responseType: 'text'
        });
    };
    ReviewService.prototype.getPageAllReviewsByProperty = function (id, page, size) {
        return this.http.get(this.propertyUrl + "/" + id + "/reviews?page=" + page + "&size=" + size);
    };
    ReviewService.prototype.getCountReviewByPropertyId = function (id) {
        return this.http.get('/api/property/' + id + '/reviews/count');
    };
    ReviewService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ReviewService);
    return ReviewService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/marian/BookingliteClient/bookingliteClient/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map