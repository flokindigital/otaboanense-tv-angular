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

/***/ "./src/app/ad/ad.component.html":
/*!**************************************!*\
  !*** ./src/app/ad/ad.component.html ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ad col-12 justify-content-center text-center\">\n  <a *ngIf=\"home != null\" [href]=\"home.banner_middle_link\">\n    <img [src]=\"home.banner_middle_image\" style=\"width:100%\">\n  </a>\n</div>\n"

/***/ }),

/***/ "./src/app/ad/ad.component.scss":
/*!**************************************!*\
  !*** ./src/app/ad/ad.component.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ad {\n  padding: 0em;\n  background: #fff;\n  border-bottom: 5px solid #000; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0JhY2t1cC9Kb2JzL09UQUJPQU5FTlNFL3R2L3NwYS9zcmMvYXBwL2FkL2FkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtFQUVoQiw2QkFBNkIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FkL2FkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFkIHtcbiAgcGFkZGluZzogMGVtO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAvLyBtYXJnaW46IDAgMCAyZW0gMDtcbiAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkICMwMDA7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/ad/ad.component.ts":
/*!************************************!*\
  !*** ./src/app/ad/ad.component.ts ***!
  \************************************/
/*! exports provided: AdComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdComponent", function() { return AdComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_home_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/home.service */ "./src/app/services/home.service.ts");



var AdComponent = /** @class */ (function () {
    function AdComponent(homeService) {
        this.homeService = homeService;
    }
    AdComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.homeService.HomeEvent.subscribe(function (home) {
            _this.home = home;
        });
    };
    AdComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'SPA-ad',
            template: __webpack_require__(/*! ./ad.component.html */ "./src/app/ad/ad.component.html"),
            styles: [__webpack_require__(/*! ./ad.component.scss */ "./src/app/ad/ad.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_home_service__WEBPACK_IMPORTED_MODULE_2__["HomeService"]])
    ], AdComponent);
    return AdComponent;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.browser.module.ts":
/*!***************************************!*\
  !*** ./src/app/app.browser.module.ts ***!
  \***************************************/
/*! exports provided: AppBrowserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppBrowserModule", function() { return AppBrowserModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _painel_videos_videos_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./painel/videos/videos.component */ "./src/app/painel/videos/videos.component.ts");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _painel_banner_banner_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./painel/banner/banner.component */ "./src/app/painel/banner/banner.component.ts");
/* harmony import */ var _frontend_frontend_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./frontend/frontend.component */ "./src/app/frontend/frontend.component.ts");
/* harmony import */ var _p404_p404_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./p404/p404.component */ "./src/app/p404/p404.component.ts");
/* harmony import */ var ng2_adsense__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng2-adsense */ "./node_modules/ng2-adsense/fesm5/ng2-adsense.js");
/* harmony import */ var _painel_login_login_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./painel/login/login.component */ "./src/app/painel/login/login.component.ts");
/* harmony import */ var _services_home_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/home.service */ "./src/app/services/home.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _painel_video_editar_editar_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./painel/video/editar/editar.component */ "./src/app/painel/video/editar/editar.component.ts");
/* harmony import */ var _painel_logout_logout_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./painel/logout/logout.component */ "./src/app/painel/logout/logout.component.ts");
/* harmony import */ var _test_test_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./test/test.component */ "./src/app/test/test.component.ts");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./app.module */ "./src/app/app.module.ts");
























var appRoutes = [
    { path: 'painel/banner', component: _painel_banner_banner_component__WEBPACK_IMPORTED_MODULE_13__["BannerComponent"] },
    { path: 'painel/login', component: _painel_login_login_component__WEBPACK_IMPORTED_MODULE_17__["LoginComponent"] },
    { path: 'painel/videos', component: _painel_videos_videos_component__WEBPACK_IMPORTED_MODULE_1__["VideosComponent"] },
    { path: 'painel/video/editar', component: _painel_video_editar_editar_component__WEBPACK_IMPORTED_MODULE_20__["EditarComponent"] },
    { path: 'painel/video/novo', component: _painel_video_editar_editar_component__WEBPACK_IMPORTED_MODULE_20__["EditarComponent"] },
    { path: 'painel/sair', component: _painel_logout_logout_component__WEBPACK_IMPORTED_MODULE_21__["LogoutComponent"] },
    { path: 'testandotudo/ola', component: _test_test_component__WEBPACK_IMPORTED_MODULE_22__["TestComponent"] },
    { path: 'video/:id', component: _frontend_frontend_component__WEBPACK_IMPORTED_MODULE_14__["FrontendComponent"] },
    { path: '', component: _frontend_frontend_component__WEBPACK_IMPORTED_MODULE_14__["FrontendComponent"] },
    { path: '**', component: _p404_p404_component__WEBPACK_IMPORTED_MODULE_15__["P404Component"] }
];
var AppBrowserModule = /** @class */ (function () {
    function AppBrowserModule() {
    }
    AppBrowserModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            imports: [
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_10__["AngularFirestoreModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_9__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].firebase),
                _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterModule"].forRoot(appRoutes, { enableTracing: false }),
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientJsonpModule"],
                ng2_adsense__WEBPACK_IMPORTED_MODULE_16__["AdsenseModule"].forRoot({
                    adClient: 'ca-pub-5073402446734231',
                    adSlot: 8385261178
                }),
                _app_module__WEBPACK_IMPORTED_MODULE_23__["AppModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserTransferStateModule"]
            ],
            providers: [_services_user_service__WEBPACK_IMPORTED_MODULE_19__["UserService"], _services_home_service__WEBPACK_IMPORTED_MODULE_18__["HomeService"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppBrowserModule);
    return AppBrowserModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300,700|Open+Sans:300,400,700\");\n.body {\n  background: #f6f6f6;\n  font-family: 'Open Sans'; }\n.body {\n  padding: 0; }\n@media only screen and (max-width: 600px) {\n  .fix2 {\n    padding: 0; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0JhY2t1cC9Kb2JzL09UQUJPQU5FTlNFL3R2L3NwYS9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx3R0FBWTtBQUdaO0VBQ0UsbUJBQW1CO0VBQ25CLHdCQUF3QixFQUFBO0FBRzFCO0VBQ0UsVUFBVSxFQUFBO0FBR1o7RUFDRTtJQUNFLFVBQVUsRUFBQSxFQUNYIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1PcGVuK1NhbnMrQ29uZGVuc2VkOjMwMCw3MDB8T3BlbitTYW5zOjMwMCw0MDAsNzAwJyk7XG5cblxuLmJvZHkge1xuICBiYWNrZ3JvdW5kOiAjZjZmNmY2O1xuICBmb250LWZhbWlseTogJ09wZW4gU2Fucyc7XG59XG5cbi5ib2R5IHtcbiAgcGFkZGluZzogMDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuZml4MiB7XG4gICAgcGFkZGluZzogMDtcbiAgfVxufVxuIl19 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _services_home_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/home.service */ "./src/app/services/home.service.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");





var AppComponent = /** @class */ (function () {
    function AppComponent(afs, sanitizer, homeService) {
        var _this = this;
        this.afs = afs;
        this.sanitizer = sanitizer;
        this.homeService = homeService;
        this.itemDoc = this.afs.doc('home/' + this.homeService.getHOME());
        this.item = this.itemDoc.valueChanges();
        this.item.subscribe(function (item) {
            _this.temp_values = item;
            _this.homeService.homeFull = item;
        });
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'SPA-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"],
            _services_home_service__WEBPACK_IMPORTED_MODULE_3__["HomeService"]])
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _painel_videos_videos_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./painel/videos/videos.component */ "./src/app/painel/videos/videos.component.ts");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _player_player_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./player/player.component */ "./src/app/player/player.component.ts");
/* harmony import */ var _ad_ad_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ad/ad.component */ "./src/app/ad/ad.component.ts");
/* harmony import */ var _list_movies_list_movies_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./list-movies/list-movies.component */ "./src/app/list-movies/list-movies.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _painel_banner_banner_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./painel/banner/banner.component */ "./src/app/painel/banner/banner.component.ts");
/* harmony import */ var _frontend_frontend_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./frontend/frontend.component */ "./src/app/frontend/frontend.component.ts");
/* harmony import */ var _p404_p404_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./p404/p404.component */ "./src/app/p404/p404.component.ts");
/* harmony import */ var _painel_destaque_destaque_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./painel/destaque/destaque.component */ "./src/app/painel/destaque/destaque.component.ts");
/* harmony import */ var _news_news_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./news/news.component */ "./src/app/news/news.component.ts");
/* harmony import */ var ng2_adsense__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ng2-adsense */ "./node_modules/ng2-adsense/fesm5/ng2-adsense.js");
/* harmony import */ var _painel_login_login_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./painel/login/login.component */ "./src/app/painel/login/login.component.ts");
/* harmony import */ var _services_home_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./services/home.service */ "./src/app/services/home.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _painel_video_editar_editar_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./painel/video/editar/editar.component */ "./src/app/painel/video/editar/editar.component.ts");
/* harmony import */ var _painel_logout_logout_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./painel/logout/logout.component */ "./src/app/painel/logout/logout.component.ts");
/* harmony import */ var _test_test_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./test/test.component */ "./src/app/test/test.component.ts");
/* harmony import */ var _page_single_single_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./page/single/single.component */ "./src/app/page/single/single.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _nguniversal_common__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @nguniversal/common */ "./node_modules/@nguniversal/common/fesm5/common.js");
/* harmony import */ var _ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @ng-toolkit/universal */ "./node_modules/@ng-toolkit/universal/fesm5/ng-toolkit-universal.js");


































var appRoutes = [
    { path: 'painel/banner', component: _painel_banner_banner_component__WEBPACK_IMPORTED_MODULE_18__["BannerComponent"] },
    { path: 'painel/login', component: _painel_login_login_component__WEBPACK_IMPORTED_MODULE_24__["LoginComponent"] },
    { path: 'painel/videos', component: _painel_videos_videos_component__WEBPACK_IMPORTED_MODULE_1__["VideosComponent"] },
    { path: 'painel/video/editar', component: _painel_video_editar_editar_component__WEBPACK_IMPORTED_MODULE_27__["EditarComponent"] },
    { path: 'painel/video/novo', component: _painel_video_editar_editar_component__WEBPACK_IMPORTED_MODULE_27__["EditarComponent"] },
    { path: 'painel/sair', component: _painel_logout_logout_component__WEBPACK_IMPORTED_MODULE_28__["LogoutComponent"] },
    { path: 'testandotudo/ola', component: _test_test_component__WEBPACK_IMPORTED_MODULE_29__["TestComponent"] },
    { path: 'video/:id', component: _frontend_frontend_component__WEBPACK_IMPORTED_MODULE_19__["FrontendComponent"] },
    { path: '', component: _frontend_frontend_component__WEBPACK_IMPORTED_MODULE_19__["FrontendComponent"] },
    { path: '**', component: _p404_p404_component__WEBPACK_IMPORTED_MODULE_20__["P404Component"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_12__["HeaderComponent"],
                _player_player_component__WEBPACK_IMPORTED_MODULE_13__["PlayerComponent"],
                _ad_ad_component__WEBPACK_IMPORTED_MODULE_14__["AdComponent"],
                _list_movies_list_movies_component__WEBPACK_IMPORTED_MODULE_15__["ListMoviesComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_16__["FooterComponent"],
                _painel_banner_banner_component__WEBPACK_IMPORTED_MODULE_18__["BannerComponent"],
                _frontend_frontend_component__WEBPACK_IMPORTED_MODULE_19__["FrontendComponent"],
                _p404_p404_component__WEBPACK_IMPORTED_MODULE_20__["P404Component"],
                _painel_destaque_destaque_component__WEBPACK_IMPORTED_MODULE_21__["DestaqueComponent"],
                _news_news_component__WEBPACK_IMPORTED_MODULE_22__["NewsComponent"],
                _painel_login_login_component__WEBPACK_IMPORTED_MODULE_24__["LoginComponent"],
                _painel_videos_videos_component__WEBPACK_IMPORTED_MODULE_1__["VideosComponent"],
                _painel_video_editar_editar_component__WEBPACK_IMPORTED_MODULE_27__["EditarComponent"],
                _painel_logout_logout_component__WEBPACK_IMPORTED_MODULE_28__["LogoutComponent"],
                _test_test_component__WEBPACK_IMPORTED_MODULE_29__["TestComponent"],
                _page_single_single_component__WEBPACK_IMPORTED_MODULE_30__["SingleComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"].withServerTransition({ appId: 'serverApp' }),
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_10__["AngularFirestoreModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_9__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].firebase),
                _angular_router__WEBPACK_IMPORTED_MODULE_17__["RouterModule"].forRoot(appRoutes, { enableTracing: false }),
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientJsonpModule"],
                ng2_adsense__WEBPACK_IMPORTED_MODULE_23__["AdsenseModule"].forRoot({
                    adClient: 'ca-pub-5073402446734231',
                    adSlot: 8385261178
                }),
                _angular_common__WEBPACK_IMPORTED_MODULE_31__["CommonModule"],
                _nguniversal_common__WEBPACK_IMPORTED_MODULE_32__["TransferHttpCacheModule"],
                _ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_33__["NgtUniversalModule"]
            ],
            providers: [_services_user_service__WEBPACK_IMPORTED_MODULE_26__["UserService"], _services_home_service__WEBPACK_IMPORTED_MODULE_25__["HomeService"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer id=\"myFooter\" class=\"col-12\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-sm-3\">\n        <h2 class=\"logo\" style=\"text-align:center;\"><a href=\"#\">\n            <img src=\"./../../assets/img/logofooter.svg\" class=\"img-fluid\" style=\"width:100px;\"> </a></h2>\n      </div>\n      <div class=\"col-sm-7\">\n        <h5>TV TABOANENSE</h5>\n        <ul>\n          <li><a href=\"https://www.otaboanense.com.br/quem-somos/\" target=\"_blank\">Quem Somos</a></li>\n          <li><a href=\"https://www.otaboanense.com.br/anuncie\" target=\"_blank\">Anuncie Aqui</a></li>\n          <li><a href=\"https://www.otaboanense.com.br/ultimasnoticias/\" target=\"_blank\">Últimas Notícias</a></li>\n          <li><a href=\"https://www.otaboanense.com.br/fale-conosco/\" target=\"_blank\">Fale Conosco</a></li>\n        </ul>\n      </div>\n      <!-- <div class=\"col-sm-2\">\n        <h5>About us</h5>\n        <ul>\n          <li><a href=\"#\">Company Information</a></li>\n          <li><a href=\"#\">Contact us</a></li>\n          <li><a href=\"#\">Reviews</a></li>\n        </ul>\n      </div>\n      <div class=\"col-sm-2\">\n        <h5>Support</h5>\n        <ul>\n          <li><a href=\"#\">FAQ</a></li>\n          <li><a href=\"#\">Help desk</a></li>\n          <li><a href=\"#\">Forums</a></li>\n        </ul>\n      </div> -->\n      <div class=\"col-sm-2\">\n        <div class=\"social-networks\">\n          <a href=\"https://www.facebook.com/otaboanense\" class=\"twitter\"><i class=\"fab fa-facebook-f\"></i></a>\n          <a href=\"https://twitter.com/otaboanense\" class=\"facebook\"><i class=\"fab fa-twitter\"></i></a>\n          <!-- <a href=\"#\" class=\"google\"><i class=\"fab fa-instagram\"></i></a> -->\n        </div>\n        <a href=\"https://www.otaboanense.com.br/fale-conosco/\" target=\"_blank\" class=\"btn btn-default\">Fale Conosco</a>\n      </div>\n    </div>\n  </div>\n  <div class=\"footer-copyright row justify-content-between\">\n    <p class=\"col-6\">Todos os direitos reservados ao Portal O Taboanense</p>\n    <div class=\"flokin col-4\">\n      <a href=\"https://www.broadbox.com.br\" target=\"_blank\">\n        <span style=\"margin-right:1em;\">Powered By</span>\n        <img src=\"https://www.broadbox.com.br/assets/images/logo-h.svg\" style=\"max-width: 116px;\n        margin: 1em 0 1em;\n        position: relative;\n        top: -6px;\">\n      </a>\n    </div>\n  </div>\n\n</footer>\n"

/***/ }),

/***/ "./src/app/footer/footer.component.scss":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#myFooter {\n  background-color: #f0f0f0;\n  color: black;\n  padding-top: 30px;\n  margin-top: 3em;\n  font-family: 'Open Sans' !important; }\n\n#myFooter .footer-copyright {\n  border-top: 1px solid #0000000d;\n  padding-top: 9px;\n  padding-bottom: 3px;\n  text-align: center; }\n\n#myFooter a:hover {\n  color: black; }\n\n#myFooter .navbar-brand {\n  margin-top: 45px;\n  height: 65px; }\n\n#myFooter .footer-copyright p {\n  margin: 10px;\n  color: black; }\n\n#myFooter ul {\n  list-style-type: none;\n  padding-left: 0;\n  line-height: 1.7; }\n\n#myFooter h5 {\n  font-size: 18px;\n  color: black;\n  font-weight: bold; }\n\n#myFooter h2 a {\n  font-size: 50px;\n  text-align: center;\n  color: black; }\n\n#myFooter a {\n  color: black;\n  text-decoration: none; }\n\n#myFooter a:hover,\n#myFooter a:focus {\n  text-decoration: none;\n  color: black; }\n\n#myFooter .social-networks {\n  text-align: center;\n  padding-top: 30px;\n  padding-bottom: 16px; }\n\n#myFooter .social-networks a {\n  font-size: 32px;\n  color: black;\n  padding: 10px;\n  transition: 0.2s; }\n\n#myFooter .social-networks a:hover {\n  text-decoration: none; }\n\n#myFooter .facebook:hover {\n  color: #0077e2; }\n\n#myFooter .google:hover {\n  color: #ef1a1a; }\n\n#myFooter .twitter:hover {\n  color: #00aced; }\n\n#myFooter .btn {\n  color: #fff;\n  background-color: #ef1a1a;\n  border-radius: 4px;\n  border: none;\n  width: 150px;\n  display: block;\n  margin: 0 auto;\n  margin-top: 10px;\n  line-height: 25px; }\n\n@media screen and (max-width: 767px) {\n  #myFooter {\n    text-align: center; } }\n\n/* CSS used for positioning the footers at the bottom of the page. */\n\n/* You can remove this. */\n\nhtml {\n  height: 100%; }\n\nbody {\n  display: flex;\n  display: -webkit-flex;\n  flex-direction: column;\n  height: 100%; }\n\n.content {\n  flex: 1 0 auto;\n  -webkit-flex: 1 0 auto;\n  min-height: 200px; }\n\n#myFooter {\n  flex: 0 0 auto;\n  -webkit-flex: 0 0 auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0JhY2t1cC9Kb2JzL09UQUJPQU5FTlNFL3R2L3NwYS9zcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsbUNBQW1DLEVBQUE7O0FBR3JDO0VBQ0UsK0JBQStCO0VBQy9CLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsWUFBWSxFQUFBOztBQU9kO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVksRUFBQTs7QUFHZDtFQUNFLFlBQVk7RUFDWixZQUFZLEVBQUE7O0FBR2Q7RUFDRSxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osaUJBQWlCLEVBQUE7O0FBSW5CO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixZQUFZLEVBQUE7O0FBR2Q7RUFDRSxZQUFZO0VBQ1oscUJBQXFCLEVBQUE7O0FBR3ZCOztFQUVFLHFCQUFxQjtFQUNyQixZQUFZLEVBQUE7O0FBR2Q7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLG9CQUFvQixFQUFBOztBQUd0QjtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osYUFBYTtFQUNiLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLHFCQUFxQixFQUFBOztBQUd2QjtFQUNFLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSxjQUFjLEVBQUE7O0FBR2hCO0VBQ0UsY0FBYyxFQUFBOztBQUdoQjtFQUNFLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixZQUFZO0VBQ1osY0FBYztFQUNkLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0U7SUFDRSxrQkFBa0IsRUFBQSxFQUNuQjs7QUFJSCxvRUFBQTs7QUFDQSx5QkFBQTs7QUFFQTtFQUNFLFlBQVksRUFBQTs7QUFHZDtFQUNFLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsc0JBQXNCO0VBRXRCLFlBQVksRUFBQTs7QUFHZDtFQUNFLGNBQWM7RUFDZCxzQkFBc0I7RUFDdEIsaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0UsY0FBYztFQUNkLHNCQUFzQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNteUZvb3RlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XG4gIGNvbG9yOiBibGFjaztcbiAgcGFkZGluZy10b3A6IDMwcHg7XG4gIG1hcmdpbi10b3A6IDNlbTtcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnICFpbXBvcnRhbnQ7XG59XG5cbiNteUZvb3RlciAuZm9vdGVyLWNvcHlyaWdodCB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjMDAwMDAwMGQ7XG4gIHBhZGRpbmctdG9wOiA5cHg7XG4gIHBhZGRpbmctYm90dG9tOiAzcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuI215Rm9vdGVyIGE6aG92ZXIge1xuICBjb2xvcjogYmxhY2s7XG59XG5cbiNteUZvb3RlciAucm93IHtcbiAgLy8gbWFyZ2luLWJvdHRvbTogNjBweDtcbn1cblxuI215Rm9vdGVyIC5uYXZiYXItYnJhbmQge1xuICBtYXJnaW4tdG9wOiA0NXB4O1xuICBoZWlnaHQ6IDY1cHg7XG59XG5cbiNteUZvb3RlciAuZm9vdGVyLWNvcHlyaWdodCBwIHtcbiAgbWFyZ2luOiAxMHB4O1xuICBjb2xvcjogYmxhY2s7XG59XG5cbiNteUZvb3RlciB1bCB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICBsaW5lLWhlaWdodDogMS43O1xufVxuXG4jbXlGb290ZXIgaDUge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIC8vICAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuI215Rm9vdGVyIGgyIGEge1xuICBmb250LXNpemU6IDUwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4jbXlGb290ZXIgYSB7XG4gIGNvbG9yOiBibGFjaztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4jbXlGb290ZXIgYTpob3ZlcixcbiNteUZvb3RlciBhOmZvY3VzIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbiNteUZvb3RlciAuc29jaWFsLW5ldHdvcmtzIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogMzBweDtcbiAgcGFkZGluZy1ib3R0b206IDE2cHg7XG59XG5cbiNteUZvb3RlciAuc29jaWFsLW5ldHdvcmtzIGEge1xuICBmb250LXNpemU6IDMycHg7XG4gIGNvbG9yOiBibGFjaztcbiAgcGFkZGluZzogMTBweDtcbiAgdHJhbnNpdGlvbjogMC4ycztcbn1cblxuI215Rm9vdGVyIC5zb2NpYWwtbmV0d29ya3MgYTpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuI215Rm9vdGVyIC5mYWNlYm9vazpob3ZlciB7XG4gIGNvbG9yOiAjMDA3N2UyO1xufVxuXG4jbXlGb290ZXIgLmdvb2dsZTpob3ZlciB7XG4gIGNvbG9yOiAjZWYxYTFhO1xufVxuXG4jbXlGb290ZXIgLnR3aXR0ZXI6aG92ZXIge1xuICBjb2xvcjogIzAwYWNlZDtcbn1cblxuI215Rm9vdGVyIC5idG4ge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmMWExYTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIHdpZHRoOiAxNTBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBsaW5lLWhlaWdodDogMjVweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgI215Rm9vdGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbn1cblxuXG4vKiBDU1MgdXNlZCBmb3IgcG9zaXRpb25pbmcgdGhlIGZvb3RlcnMgYXQgdGhlIGJvdHRvbSBvZiB0aGUgcGFnZS4gKi9cbi8qIFlvdSBjYW4gcmVtb3ZlIHRoaXMuICovXG5cbmh0bWwge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbmJvZHkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uY29udGVudCB7XG4gIGZsZXg6IDEgMCBhdXRvO1xuICAtd2Via2l0LWZsZXg6IDEgMCBhdXRvO1xuICBtaW4taGVpZ2h0OiAyMDBweDtcbn1cblxuI215Rm9vdGVyIHtcbiAgZmxleDogMCAwIGF1dG87XG4gIC13ZWJraXQtZmxleDogMCAwIGF1dG87XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'SPA-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/footer/footer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/frontend/frontend.component.html":
/*!**************************************************!*\
  !*** ./src/app/frontend/frontend.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid body\">\n  <div class=\"row justify-content-center align-items-start h-100\">\n    <SPA-header class=\"col-12 header row justify-content-center\" style=\"padding:0;\"></SPA-header>\n    <SPA-player [videoplayer]=\"id_video\" class=\"col-12 fix2\" style=\"padding:0;\"></SPA-player>\n    <!-- <a href=\"https://www.otaboanense.com.br/wp-content/uploads/2019/01/banner_dengue2019_taboao__big.jpg\"\n      class=\"col-12 header row justify-content-center\" style=\"padding:0; margin: 2em 0;\">\n      <img src=\"https://www.otaboanense.com.br/wp-content/uploads/2019/01/banner_dengue2019_taboao.gif\" alt=\"\">\n    </a> -->\n\n    <SPA-news style=\"background:white; padding:2em 1em 0em 1em;\"></SPA-news>\n    <SPA-ad class=\"col-12 row\" style=\"padding:0;\"></SPA-ad>\n    <div class=\"col-12 row\" style=\"background: #e7e7e7; box-shadow: inset 0px 2px 4px rgba(0,0,0,.2);\">\n      <ng-adsense></ng-adsense>\n    </div>\n    <SPA-list-movies class=\"col-12 row justify-content-start\" style=\"padding:2em;\"></SPA-list-movies>\n    <SPA-footer class=\"col-12\" style=\"padding:0;\"></SPA-footer>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/frontend/frontend.component.scss":
/*!**************************************************!*\
  !*** ./src/app/frontend/frontend.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zyb250ZW5kL2Zyb250ZW5kLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/frontend/frontend.component.ts":
/*!************************************************!*\
  !*** ./src/app/frontend/frontend.component.ts ***!
  \************************************************/
/*! exports provided: FrontendComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrontendComponent", function() { return FrontendComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var FrontendComponent = /** @class */ (function () {
    function FrontendComponent(route) {
        this.route = route;
        this.id_video = route.snapshot.paramMap.get('id');
    }
    FrontendComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], FrontendComponent.prototype, "id_video", void 0);
    FrontendComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'SPA-frontend',
            template: __webpack_require__(/*! ./frontend.component.html */ "./src/app/frontend/frontend.component.html"),
            styles: [__webpack_require__(/*! ./frontend.component.scss */ "./src/app/frontend/frontend.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], FrontendComponent);
    return FrontendComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-12 header row justify-content-center\">\n\n  <div class=\"col-11 no-gutters row justify-content-between\">\n    <div class=\"col-12 col-sm-4 logobase\">\n      <img src=\"./../assets/img/logosite.svg\" style=\"margin-top:1em;\" class=\"logo\">\n    </div>\n    <div class=\"col-12 col-sm-8 text-right menu\">\n\n      <a *ngIf=\"home != null\" [href]=\"home.banner_top_url\" target=\"_blank\">\n        <img [src]=\"home.banner_top_image\" class=\"img-fluid\">\n      </a>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  background: white;\n  padding: 1.5em 0;\n  margin: 0; }\n\na {\n  color: black; }\n\n.menu {\n  font-size: 15px;\n  font-family: 'Open Sans Condensed';\n  font-weight: 600; }\n\n.menu i {\n  margin-right: 10px; }\n\n@media only screen and (max-width: 600px) {\n  .logo {\n    margin: 0 !important; }\n  .logobase {\n    margin-bottom: 10px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0JhY2t1cC9Kb2JzL09UQUJPQU5FTlNFL3R2L3NwYS9zcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLFNBQVMsRUFBQTs7QUFHWDtFQUNFLFlBQVksRUFBQTs7QUFHZDtFQUNFLGVBQWU7RUFDZixrQ0FBa0M7RUFDbEMsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0Usa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0U7SUFDRSxvQkFBb0IsRUFBQTtFQUd0QjtJQUNFLG1CQUFtQixFQUFBLEVBQ3BCIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXIge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgcGFkZGluZzogMS41ZW0gMDtcbiAgbWFyZ2luOiAwO1xufVxuXG5hIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4ubWVudSB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMgQ29uZGVuc2VkJztcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLm1lbnUgaSB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAubG9nbyB7XG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubG9nb2Jhc2Uge1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_home_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/home.service */ "./src/app/services/home.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(homeService) {
        this.homeService = homeService;
        this.home = homeService.homeFull;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.homeService.HomeEvent.subscribe(function (home) {
            _this.home = home;
        });
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'SPA-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_home_service__WEBPACK_IMPORTED_MODULE_1__["HomeService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/list-movies/list-movies.component.html":
/*!********************************************************!*\
  !*** ./src/app/list-movies/list-movies.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"col-12 title\">\n  Confira nossos outros vídeos\n</h2>\n<div class=\"card-deck\">\n  <div class=\"card\" *ngFor=\"let item of items | async\">\n    <!-- <a href=\"#\" (click)=\"showMovie(item);\"> -->\n    <a href=\"./video/{{item.id}}\">\n      <img class=\"card-img-top\" src=\"https://img.youtube.com/vi/{{item.youtubeid}}/0.jpg\">\n      <div class=\"card-body\">\n        <h6 class=\"date\">{{ item.date }}</h6>\n        <h5 class=\"card-title\">{{ item.name }}</h5>\n        <!-- <p class=\"card-text\">\n          {{ (item.description.length > 100)? (item.description | slice:0:100)+'..':(item.description)}}\n        </p> -->\n        <a href=\"#\" class=\"btn btn-outline-secondary btn-sm\">Assistir</a>\n      </div>\n    </a>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/list-movies/list-movies.component.scss":
/*!********************************************************!*\
  !*** ./src/app/list-movies/list-movies.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n  margin: 10px;\n  border: none;\n  transition: all 0.5s; }\n\n.card a {\n  color: black; }\n\n.card a:hover {\n  text-decoration: none; }\n\n.card:hover {\n  transform: scale(1.05);\n  transition: all 0.5s;\n  z-index: 99;\n  box-shadow: 0px 6px 7px 5px rgba(0, 0, 0, 0.15);\n  cursor: pointer; }\n\n.card-title {\n  font-family: 'Open Sans';\n  font-weight: 400;\n  font-size: 1em; }\n\n.card-text {\n  font-size: .8em; }\n\n.card .date {\n  color: #726f6f;\n  font-size: 10px;\n  text-transform: uppercase;\n  font-weight: 600;\n  letter-spacing: 0px;\n  padding-bottom: 1em; }\n\n.title {\n  font-size: 1em;\n  border-bottom: 2px solid #f00;\n  padding-bottom: .5em;\n  font-weight: 600;\n  text-transform: uppercase;\n  padding-left: 0;\n  margin-top: 1em;\n  margin-bottom: 1em; }\n\n.card-footer {\n  background: white; }\n\n.card {\n  min-width: 200px;\n  margin: 3px;\n  margin: 10px; }\n\n.card:hover {\n  -webkit-filter: grayscale(0);\n          filter: grayscale(0); }\n\n.card-columns {\n  -moz-column-count: 5;\n       column-count: 5; }\n\n.card-img-top {\n  -o-object-fit: cover;\n     object-fit: cover;\n  width: 100%;\n  height: 128px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0JhY2t1cC9Kb2JzL09UQUJPQU5FTlNFL3R2L3NwYS9zcmMvYXBwL2xpc3QtbW92aWVzL2xpc3QtbW92aWVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUVaLFlBQVk7RUFDWixvQkFBb0IsRUFBQTs7QUFJdEI7RUFDRSxZQUFZLEVBQUE7O0FBR2Q7RUFDRSxxQkFBcUIsRUFBQTs7QUFTdkI7RUFDRSxzQkFBc0I7RUFDdEIsb0JBQW9CO0VBQ3BCLFdBQVc7RUFDWCwrQ0FBK0M7RUFDL0MsZUFBZSxFQUFBOztBQUdqQjtFQUNFLHdCQUF3QjtFQUN4QixnQkFBZ0I7RUFDaEIsY0FBYyxFQUFBOztBQUdoQjtFQUNFLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLGNBQWM7RUFDZCw2QkFBNkI7RUFDN0Isb0JBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsZUFBZTtFQUNmLGVBQWU7RUFDZixrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxpQkFBaUIsRUFBQTs7QUFHbkI7RUFFRSxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLFlBQVksRUFBQTs7QUFJZDtFQUNFLDRCQUFvQjtVQUFwQixvQkFBb0IsRUFBQTs7QUFHdEI7RUFDRSxvQkFBZTtPQUFmLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxvQkFBaUI7S0FBakIsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxhQUFhLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9saXN0LW1vdmllcy9saXN0LW1vdmllcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcbiAgbWFyZ2luOiAxMHB4O1xuICAvLyB3aWR0aDogMTZyZW07XG4gIGJvcmRlcjogbm9uZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gIC8vIGhlaWdodDogNDcwcHg7XG59XG5cbi5jYXJkIGEge1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5jYXJkIGE6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5jYXJkIGEuYnRuIHtcbiAgLy8gYmFja2dyb3VuZDogI2YwMDtcbiAgLy8gYm9yZGVyOiAxcHggc29saWQgI2YwMDtcbiAgLy8gY29sb3I6ICNmZmY7XG59XG5cbi5jYXJkOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gIHotaW5kZXg6IDk5O1xuICBib3gtc2hhZG93OiAwcHggNnB4IDdweCA1cHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY2FyZC10aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJztcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxZW07XG59XG5cbi5jYXJkLXRleHQge1xuICBmb250LXNpemU6IC44ZW07XG59XG5cbi5jYXJkIC5kYXRlIHtcbiAgY29sb3I6ICM3MjZmNmY7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDBweDtcbiAgcGFkZGluZy1ib3R0b206IDFlbTtcbn1cblxuLnRpdGxlIHtcbiAgZm9udC1zaXplOiAxZW07XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZjAwO1xuICBwYWRkaW5nLWJvdHRvbTogLjVlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICBtYXJnaW4tdG9wOiAxZW07XG4gIG1hcmdpbi1ib3R0b206IDFlbTtcbn1cblxuLmNhcmQtZm9vdGVyIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbi5jYXJkIHtcbiAgLy8gZmlsdGVyOiBncmF5c2NhbGUoMSk7XG4gIG1pbi13aWR0aDogMjAwcHg7XG4gIG1hcmdpbjogM3B4O1xuICBtYXJnaW46IDEwcHg7XG4gIC8vIGhlaWdodDogNDgwcHg7XG59XG5cbi5jYXJkOmhvdmVyIHtcbiAgZmlsdGVyOiBncmF5c2NhbGUoMCk7XG59XG5cbi5jYXJkLWNvbHVtbnMge1xuICBjb2x1bW4tY291bnQ6IDU7XG59XG5cbi5jYXJkLWltZy10b3Age1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTI4cHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/list-movies/list-movies.component.ts":
/*!******************************************************!*\
  !*** ./src/app/list-movies/list-movies.component.ts ***!
  \******************************************************/
/*! exports provided: ListMoviesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListMoviesComponent", function() { return ListMoviesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_home_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/home.service */ "./src/app/services/home.service.ts");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");





var ListMoviesComponent = /** @class */ (function () {
    function ListMoviesComponent(afs, homeService) {
        this.afs = afs;
        this.homeService = homeService;
        this.itemsCollection = afs.collection('movies', function (ref) {
            return ref.orderBy('order', 'desc');
        });
        this.items = this.itemsCollection.snapshotChanges().map(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ id: id }, data);
            });
        });
    }
    ListMoviesComponent.prototype.ngOnInit = function () { };
    ListMoviesComponent.prototype.showMovie = function (item) {
        event.stopPropagation();
        this.homeService.setHOME(item);
    };
    ListMoviesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'SPA-list-movies',
            template: __webpack_require__(/*! ./list-movies.component.html */ "./src/app/list-movies/list-movies.component.html"),
            styles: [__webpack_require__(/*! ./list-movies.component.scss */ "./src/app/list-movies/list-movies.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"], _services_home_service__WEBPACK_IMPORTED_MODULE_2__["HomeService"]])
    ], ListMoviesComponent);
    return ListMoviesComponent;
}());



/***/ }),

/***/ "./src/app/news/news.component.html":
/*!******************************************!*\
  !*** ./src/app/news/news.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" style=\"margin-bottom:1em;\" *ngIf=\"news != null\">\n  <div class=\"row justify-content-center\">\n    <div class=\"col-12\">\n      <div class=\"row title\">\n        <div class=\"col-12 text-center\">\n          <img src=\"./../../assets/img/otaboanense.svg\" class=\"img-fluid\" style=\"max-width:300px;\" />\n        </div>\n        <!-- <div class=\"col-sm-9 col-12\">\n          <h2 class=\"col-12 text-sm-right text-center title-txt\">\n            ÚLTIMAS NOTÍCIAS DO PORTAL O TABOANENSE\n          </h2>\n\n        </div> -->\n      </div>\n      <div class=\"card-group\">\n\n        <div class=\"card\" *ngFor=\"let item of news\">\n          <div *ngIf=\"item.status == 'publish'\">\n            <a [href]=\"item.link\" target=\"_blank\">\n              <img class=\"card-img-top\" *ngIf=\"item._embedded['wp:featuredmedia']['0'].source_url != null\"\n                [src]=\"item._embedded['wp:featuredmedia']['0'].source_url\">\n              <div class=\"card-body\">\n                <h5 class=\"card-title\">{{item.title.rendered}}</h5>\n              </div>\n              <!-- <div class=\"card-footer\">\n                <small class=\"text-muted\">por {{ item._embedded['author']['0'].name }}</small>\n              </div> -->\n            </a>\n          </div>\n        </div>\n\n      </div>\n\n      <div class=\"text-right\">\n        <a href=\"https://www.otaboanense.com.br\" target=\"_blank\" class=\"link\">veja mais notícias</a>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/news/news.component.scss":
/*!******************************************!*\
  !*** ./src/app/news/news.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card a {\n  color: black; }\n\n.card {\n  border: none; }\n\n.card a:hover {\n  text-decoration: none; }\n\n.card-body {\n  height: 148px; }\n\n.card-title {\n  font-size: 18px;\n  font-weight: 100; }\n\n.title {\n  font-size: 14px;\n  padding-bottom: .5em;\n  font-weight: 600;\n  text-transform: uppercase;\n  padding-left: 0;\n  margin-top: 1em;\n  margin-bottom: 1em; }\n\n.title-txt {\n  font-size: 15px;\n  padding-top: 15px;\n  color: #0055a1; }\n\n.link {\n  margin-bottom: 1em;\n  display: inline-block;\n  text-transform: uppercase;\n  background: #007bff;\n  color: #fff;\n  padding: 8PX;\n  border-radius: 3px;\n  font-weight: 700; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0JhY2t1cC9Kb2JzL09UQUJPQU5FTlNFL3R2L3NwYS9zcmMvYXBwL25ld3MvbmV3cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVksRUFBQTs7QUFHZDtFQUNFLFlBQVksRUFBQTs7QUFHZDtFQUNFLHFCQUFxQixFQUFBOztBQUd2QjtFQUNFLGFBQWEsRUFBQTs7QUFHZjtFQUNFLGVBQWU7RUFDZixnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsZUFBZTtFQUNmLGVBQWU7RUFDZixrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGNBQWMsRUFBQTs7QUFJaEI7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9uZXdzL25ld3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZCBhIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4uY2FyZCB7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLmNhcmQgYTpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmNhcmQtYm9keSB7XG4gIGhlaWdodDogMTQ4cHg7XG59XG5cbi5jYXJkLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogMTAwO1xufVxuXG4udGl0bGUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmctYm90dG9tOiAuNWVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIG1hcmdpbi10b3A6IDFlbTtcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xufVxuXG4udGl0bGUtdHh0IHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBwYWRkaW5nLXRvcDogMTVweDtcbiAgY29sb3I6ICMwMDU1YTE7XG59XG5cblxuLmxpbmsge1xuICBtYXJnaW4tYm90dG9tOiAxZW07XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgYmFja2dyb3VuZDogIzAwN2JmZjtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDhQWDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBmb250LXdlaWdodDogNzAwO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/news/news.component.ts":
/*!****************************************!*\
  !*** ./src/app/news/news.component.ts ***!
  \****************************************/
/*! exports provided: NewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsComponent", function() { return NewsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_home_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/home.service */ "./src/app/services/home.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var NewsComponent = /** @class */ (function () {
    function NewsComponent(homeService) {
        this.homeService = homeService;
    }
    NewsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.homeService.NewsEvent.subscribe(function (news) {
            _this.news = news;
        });
    };
    NewsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'SPA-news',
            template: __webpack_require__(/*! ./news.component.html */ "./src/app/news/news.component.html"),
            styles: [__webpack_require__(/*! ./news.component.scss */ "./src/app/news/news.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_home_service__WEBPACK_IMPORTED_MODULE_1__["HomeService"]])
    ], NewsComponent);
    return NewsComponent;
}());



/***/ }),

/***/ "./src/app/p404/p404.component.html":
/*!******************************************!*\
  !*** ./src/app/p404/p404.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"notfound\">\n  <div class=\"notfound\">\n    <a href=\"/\" class=\"notfound-404\" style=\"display:inline;\">\n      <h1>404</h1>\n      <img src=\"./../../assets/img/logosite.svg\" style=\"max-width:400px;\">\n    </a>\n    <h2>Oops, esta página não existe!</h2>\n    <a href=\"/\">Voltar para a TV TABOANENSE</a>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/p404/p404.component.scss":
/*!******************************************!*\
  !*** ./src/app/p404/p404.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n* {\n  box-sizing: border-box; }\n\nbody {\n  padding: 0;\n  margin: 0; }\n\n#notfound {\n  position: relative;\n  height: 100vh; }\n\n#notfound .notfound {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%); }\n\n.notfound {\n  max-width: 710px;\n  width: 100%;\n  text-align: center;\n  padding: 0px 15px;\n  line-height: 1.4; }\n\n.notfound .notfound-404 {\n  height: 200px;\n  line-height: 200px; }\n\n.notfound .notfound-404 h1 {\n  font-family: 'Open Sans', cursive;\n  font-size: 168px;\n  font-weight: 800;\n  margin: 0px;\n  color: #ff0000;\n  text-transform: uppercase; }\n\n.notfound h2 {\n  font-family: 'Raleway', sans-serif;\n  font-size: 22px;\n  font-weight: 400;\n  text-transform: uppercase;\n  color: #222;\n  margin: 0; }\n\n.notfound-search {\n  position: relative;\n  padding-right: 123px;\n  max-width: 420px;\n  width: 100%;\n  margin: 30px auto 22px; }\n\n.notfound-search input {\n  font-family: 'Raleway', sans-serif;\n  width: 100%;\n  height: 40px;\n  padding: 3px 15px;\n  color: #222;\n  font-size: 18px;\n  background: #f8fafb;\n  border: 1px solid rgba(34, 34, 34, 0.2);\n  border-radius: 3px; }\n\n.notfound-search button {\n  font-family: 'Raleway', sans-serif;\n  position: absolute;\n  right: 0px;\n  top: 0px;\n  width: 120px;\n  height: 40px;\n  text-align: center;\n  border: none;\n  background: #ff0000;\n  cursor: pointer;\n  padding: 0;\n  color: #fff;\n  font-weight: 700;\n  font-size: 18px;\n  border-radius: 3px; }\n\n.notfound a {\n  font-family: 'Raleway', sans-serif;\n  display: inline-block;\n  font-weight: 700;\n  border-radius: 15px;\n  text-decoration: none;\n  color: black; }\n\n.notfound a > .arrow {\n  position: relative;\n  top: -2px;\n  border: solid black;\n  border-width: 0 3px 3px 0;\n  display: inline-block;\n  padding: 3px;\n  transform: rotate(135deg); }\n\n@media only screen and (max-width: 767px) {\n  .notfound .notfound-404 {\n    height: 122px;\n    line-height: 122px; }\n  .notfound .notfound-404 h1 {\n    font-size: 122px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0JhY2t1cC9Kb2JzL09UQUJPQU5FTlNFL3R2L3NwYS9zcmMvYXBwL3A0MDQvcDQwNC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRUE7RUFFRSxzQkFBc0IsRUFBQTs7QUFHeEI7RUFDRSxVQUFVO0VBQ1YsU0FBUyxFQUFBOztBQUdYO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWEsRUFBQTs7QUFHZjtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsUUFBUTtFQUdSLGdDQUFnQyxFQUFBOztBQUdsQztFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsaUNBQWlDO0VBQ2pDLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGNBQWM7RUFDZCx5QkFBeUIsRUFBQTs7QUFHM0I7RUFDRSxrQ0FBa0M7RUFDbEMsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsV0FBVztFQUNYLFNBQVMsRUFBQTs7QUFHWDtFQUNFLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxzQkFBc0IsRUFBQTs7QUFHeEI7RUFDRSxrQ0FBa0M7RUFDbEMsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsV0FBVztFQUNYLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsdUNBQXVDO0VBQ3ZDLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLGtDQUFrQztFQUNsQyxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFFBQVE7RUFDUixZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixVQUFVO0VBQ1YsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2Ysa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0Usa0NBQWtDO0VBQ2xDLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixZQUFZLEVBQUE7O0FBR2Q7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLFlBQVk7RUFHWix5QkFBeUIsRUFBQTs7QUFHM0I7RUFDRTtJQUNFLGFBQWE7SUFDYixrQkFBa0IsRUFBQTtFQUdwQjtJQUNFLGdCQUFnQixFQUFBLEVBQ2pCIiwiZmlsZSI6InNyYy9hcHAvcDQwNC9wNDA0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1GcmVkb2thK09uZXxSYWxld2F5OjQwMCw3MFwiO1xuXG4qIHtcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5ib2R5IHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xufVxuXG4jbm90Zm91bmQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMTAwdmg7XG59XG5cbiNub3Rmb3VuZCAubm90Zm91bmQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiA1MCU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cbi5ub3Rmb3VuZCB7XG4gIG1heC13aWR0aDogNzEwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDBweCAxNXB4O1xuICBsaW5lLWhlaWdodDogMS40O1xufVxuXG4ubm90Zm91bmQgLm5vdGZvdW5kLTQwNCB7XG4gIGhlaWdodDogMjAwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyMDBweDtcbn1cblxuLm5vdGZvdW5kIC5ub3Rmb3VuZC00MDQgaDEge1xuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIGN1cnNpdmU7XG4gIGZvbnQtc2l6ZTogMTY4cHg7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIG1hcmdpbjogMHB4O1xuICBjb2xvcjogI2ZmMDAwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLm5vdGZvdW5kIGgyIHtcbiAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjb2xvcjogIzIyMjtcbiAgbWFyZ2luOiAwO1xufVxuXG4ubm90Zm91bmQtc2VhcmNoIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLXJpZ2h0OiAxMjNweDtcbiAgbWF4LXdpZHRoOiA0MjBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMzBweCBhdXRvIDIycHg7XG59XG5cbi5ub3Rmb3VuZC1zZWFyY2ggaW5wdXQge1xuICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0MHB4O1xuICBwYWRkaW5nOiAzcHggMTVweDtcbiAgY29sb3I6ICMyMjI7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgYmFja2dyb3VuZDogI2Y4ZmFmYjtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgzNCwgMzQsIDM0LCAwLjIpO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG59XG5cbi5ub3Rmb3VuZC1zZWFyY2ggYnV0dG9uIHtcbiAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMHB4O1xuICB0b3A6IDBweDtcbiAgd2lkdGg6IDEyMHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiAjZmYwMDAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IDA7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cblxuLm5vdGZvdW5kIGEge1xuICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4ubm90Zm91bmQgYT4uYXJyb3cge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTJweDtcbiAgYm9yZGVyOiBzb2xpZCBibGFjaztcbiAgYm9yZGVyLXdpZHRoOiAwIDNweCAzcHggMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAzcHg7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTM1ZGVnKTtcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDEzNWRlZyk7XG4gIHRyYW5zZm9ybTogcm90YXRlKDEzNWRlZyk7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLm5vdGZvdW5kIC5ub3Rmb3VuZC00MDQge1xuICAgIGhlaWdodDogMTIycHg7XG4gICAgbGluZS1oZWlnaHQ6IDEyMnB4O1xuICB9XG5cbiAgLm5vdGZvdW5kIC5ub3Rmb3VuZC00MDQgaDEge1xuICAgIGZvbnQtc2l6ZTogMTIycHg7XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/p404/p404.component.ts":
/*!****************************************!*\
  !*** ./src/app/p404/p404.component.ts ***!
  \****************************************/
/*! exports provided: P404Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P404Component", function() { return P404Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var P404Component = /** @class */ (function () {
    function P404Component() {
    }
    P404Component.prototype.ngOnInit = function () {
    };
    P404Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'SPA-p404',
            template: __webpack_require__(/*! ./p404.component.html */ "./src/app/p404/p404.component.html"),
            styles: [__webpack_require__(/*! ./p404.component.scss */ "./src/app/p404/p404.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], P404Component);
    return P404Component;
}());



/***/ }),

/***/ "./src/app/page/single/single.component.html":
/*!***************************************************!*\
  !*** ./src/app/page/single/single.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  single works!\n</p>\n"

/***/ }),

/***/ "./src/app/page/single/single.component.scss":
/*!***************************************************!*\
  !*** ./src/app/page/single/single.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2Uvc2luZ2xlL3NpbmdsZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/page/single/single.component.ts":
/*!*************************************************!*\
  !*** ./src/app/page/single/single.component.ts ***!
  \*************************************************/
/*! exports provided: SingleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleComponent", function() { return SingleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SingleComponent = /** @class */ (function () {
    function SingleComponent() {
    }
    SingleComponent.prototype.ngOnInit = function () {
    };
    SingleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'SPA-single',
            template: __webpack_require__(/*! ./single.component.html */ "./src/app/page/single/single.component.html"),
            styles: [__webpack_require__(/*! ./single.component.scss */ "./src/app/page/single/single.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SingleComponent);
    return SingleComponent;
}());



/***/ }),

/***/ "./src/app/painel/banner/banner.component.html":
/*!*****************************************************!*\
  !*** ./src/app/painel/banner/banner.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container h-100\">\n  <div class=\"row justify-content-center align-items-center h-100\">\n    <div class=\"col-10\">\n      <h1>Alteração de Banners</h1>\n      <div *ngIf=\"home != null\" class=\"blockBanner\">\n        <h4>Banner Topo</h4>\n        <div class=\"form-group\" *ngIf=\"home != null\">\n          <label for=\"top_url\">Image URL</label>\n          <input type=\"text\" [(ngModel)]=\"home.banner_top_image\" value=\"\" id=\"top_url\" class=\"form-control\"\n            placeholder=\"url do banner do topo\" [ngModelOptions]=\"{standalone: true}\" required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"top_url\">Link URL</label>\n          <input type=\"text\" [(ngModel)]=\"home.banner_top_url\" id=\"top_url\" class=\"form-control\"\n            placeholder=\"url do link do banner do topo\" [ngModelOptions]=\"{standalone: true}\" required>\n        </div>\n      </div>\n\n      <div *ngIf=\"home != null\" class=\"blockBanner\">\n        <h4>Banner Meio</h4>\n        <div class=\"form-group\" *ngIf=\"home != null\">\n          <label for=\"top_url\">Image URL</label>\n          <input type=\"text\" [(ngModel)]=\"home.banner_middle_image\" value=\"\" id=\"top_url\" class=\"form-control\"\n            placeholder=\"url do banner do meio\" [ngModelOptions]=\"{standalone: true}\" required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"top_url\">Link URL</label>\n          <input type=\"text\" [(ngModel)]=\"home.banner_middle_link\" id=\"top_url\" class=\"form-control\"\n            placeholder=\"url do link do banner do meio\" [ngModelOptions]=\"{standalone: true}\" required>\n        </div>\n      </div>\n      <button type=\"button\" class=\"btn btn-primary\" (click)=\"updateBanner();\">Alterar</button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/painel/banner/banner.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/painel/banner/banner.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".blockBanner {\n  background: #fff;\n  padding: 1em;\n  margin-top: 1em;\n  border-radius: .5em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0JhY2t1cC9Kb2JzL09UQUJPQU5FTlNFL3R2L3NwYS9zcmMvYXBwL3BhaW5lbC9iYW5uZXIvYmFubmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixlQUFlO0VBQ2YsbUJBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWluZWwvYmFubmVyL2Jhbm5lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ibG9ja0Jhbm5lciB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHBhZGRpbmc6IDFlbTtcbiAgbWFyZ2luLXRvcDogMWVtO1xuICBib3JkZXItcmFkaXVzOiAuNWVtO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/painel/banner/banner.component.ts":
/*!***************************************************!*\
  !*** ./src/app/painel/banner/banner.component.ts ***!
  \***************************************************/
/*! exports provided: BannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerComponent", function() { return BannerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_home_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/home.service */ "./src/app/services/home.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");





var BannerComponent = /** @class */ (function () {
    function BannerComponent(afs, homeService, userService) {
        this.afs = afs;
        this.homeService = homeService;
        this.userService = userService;
    }
    BannerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.homeService.HomeEvent.subscribe(function (home) {
            _this.home = home;
        });
    };
    BannerComponent.prototype.updateBanner = function () {
        this.homeService.saveToDB(this.home);
    };
    BannerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'SPA-banner',
            template: __webpack_require__(/*! ./banner.component.html */ "./src/app/painel/banner/banner.component.html"),
            styles: [__webpack_require__(/*! ./banner.component.scss */ "./src/app/painel/banner/banner.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"],
            _services_home_service__WEBPACK_IMPORTED_MODULE_2__["HomeService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], BannerComponent);
    return BannerComponent;
}());



/***/ }),

/***/ "./src/app/painel/destaque/destaque.component.html":
/*!*********************************************************!*\
  !*** ./src/app/painel/destaque/destaque.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  destaque works!\n</p>\n"

/***/ }),

/***/ "./src/app/painel/destaque/destaque.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/painel/destaque/destaque.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhaW5lbC9kZXN0YXF1ZS9kZXN0YXF1ZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/painel/destaque/destaque.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/painel/destaque/destaque.component.ts ***!
  \*******************************************************/
/*! exports provided: DestaqueComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DestaqueComponent", function() { return DestaqueComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DestaqueComponent = /** @class */ (function () {
    function DestaqueComponent() {
    }
    DestaqueComponent.prototype.ngOnInit = function () {
    };
    DestaqueComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'SPA-destaque',
            template: __webpack_require__(/*! ./destaque.component.html */ "./src/app/painel/destaque/destaque.component.html"),
            styles: [__webpack_require__(/*! ./destaque.component.scss */ "./src/app/painel/destaque/destaque.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DestaqueComponent);
    return DestaqueComponent;
}());



/***/ }),

/***/ "./src/app/painel/login/login.component.html":
/*!***************************************************!*\
  !*** ./src/app/painel/login/login.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container login-container\">\n  <div class=\"row justify-content-center\">\n\n    <div class=\"col-md-6 login-form-2\">\n      <h3>Login TV TABOANENSE</h3>\n      <form>\n        <div class=\"form-group\">\n          <input type=\"text\" [(ngModel)]=\"user.email\" class=\"form-control\" placeholder=\"Email\" value=\"\" name=\"email\" />\n        </div>\n        <div class=\"form-group\">\n          <input type=\"password\" [(ngModel)]=\"user.password\" class=\"form-control\" placeholder=\"Senha\" value=\"\"\n            name=\"password\" />\n        </div>\n        <div class=\"form-group\">\n          <button class=\"btn btn-primary\" (click)=\"submit();\" value=\"Login\">Entrar</button>\n        </div>\n\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/painel/login/login.component.scss":
/*!***************************************************!*\
  !*** ./src/app/painel/login/login.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-container {\n  margin-top: 5%;\n  margin-bottom: 5%; }\n\n.login-form-1 {\n  padding: 5%;\n  box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 9px 26px 0 rgba(0, 0, 0, 0.19); }\n\n.login-form-1 h3 {\n  text-align: center;\n  color: #333; }\n\n.login-form-2 {\n  padding: 5%;\n  background: #0062cc;\n  box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 9px 26px 0 rgba(0, 0, 0, 0.19); }\n\n.login-form-2 h3 {\n  text-align: center;\n  color: #fff; }\n\n.login-container form {\n  padding: 10%; }\n\n.btnSubmit {\n  width: 50%;\n  border-radius: 1rem;\n  padding: 1.5%;\n  border: none;\n  cursor: pointer; }\n\n.login-form-1 .btnSubmit {\n  font-weight: 600;\n  color: #fff;\n  background-color: #0062cc; }\n\n.login-form-2 .btnSubmit {\n  font-weight: 600;\n  color: #0062cc;\n  background-color: #fff; }\n\n.login-form-2 .ForgetPwd {\n  color: #fff;\n  font-weight: 600;\n  text-decoration: none; }\n\n.login-form-1 .ForgetPwd {\n  color: #0062cc;\n  font-weight: 600;\n  text-decoration: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0JhY2t1cC9Kb2JzL09UQUJPQU5FTlNFL3R2L3NwYS9zcmMvYXBwL3BhaW5lbC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxXQUFXO0VBQ1gsNEVBQTRFLEVBQUE7O0FBRzlFO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVcsRUFBQTs7QUFHYjtFQUNFLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsNEVBQTRFLEVBQUE7O0FBRzlFO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVcsRUFBQTs7QUFHYjtFQUNFLFlBQVksRUFBQTs7QUFHZDtFQUNFLFVBQVU7RUFDVixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLFlBQVk7RUFDWixlQUFlLEVBQUE7O0FBR2pCO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCx5QkFBeUIsRUFBQTs7QUFHM0I7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLHNCQUFzQixFQUFBOztBQUd4QjtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIscUJBQXFCLEVBQUE7O0FBR3ZCO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixxQkFBcUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhaW5lbC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbi1jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiA1JTtcbiAgbWFyZ2luLWJvdHRvbTogNSU7XG59XG5cbi5sb2dpbi1mb3JtLTEge1xuICBwYWRkaW5nOiA1JTtcbiAgYm94LXNoYWRvdzogMCA1cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDlweCAyNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcbn1cblxuLmxvZ2luLWZvcm0tMSBoMyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICMzMzM7XG59XG5cbi5sb2dpbi1mb3JtLTIge1xuICBwYWRkaW5nOiA1JTtcbiAgYmFja2dyb3VuZDogIzAwNjJjYztcbiAgYm94LXNoYWRvdzogMCA1cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDlweCAyNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcbn1cblxuLmxvZ2luLWZvcm0tMiBoMyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5sb2dpbi1jb250YWluZXIgZm9ybSB7XG4gIHBhZGRpbmc6IDEwJTtcbn1cblxuLmJ0blN1Ym1pdCB7XG4gIHdpZHRoOiA1MCU7XG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gIHBhZGRpbmc6IDEuNSU7XG4gIGJvcmRlcjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubG9naW4tZm9ybS0xIC5idG5TdWJtaXQge1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNjJjYztcbn1cblxuLmxvZ2luLWZvcm0tMiAuYnRuU3VibWl0IHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICMwMDYyY2M7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG5cbi5sb2dpbi1mb3JtLTIgLkZvcmdldFB3ZCB7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogNjAwO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5sb2dpbi1mb3JtLTEgLkZvcmdldFB3ZCB7XG4gIGNvbG9yOiAjMDA2MmNjO1xuICBmb250LXdlaWdodDogNjAwO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/painel/login/login.component.ts":
/*!*************************************************!*\
  !*** ./src/app/painel/login/login.component.ts ***!
  \*************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var LoginComponent = /** @class */ (function () {
    function LoginComponent(userService) {
        this.userService = userService;
        this.user = {
            email: '',
            password: ''
        };
    }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent.prototype.submit = function () {
        this.userService.login(this.user);
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'SPA-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/painel/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/painel/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/painel/logout/logout.component.html":
/*!*****************************************************!*\
  !*** ./src/app/painel/logout/logout.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  logout works!\n</p>\n"

/***/ }),

/***/ "./src/app/painel/logout/logout.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/painel/logout/logout.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhaW5lbC9sb2dvdXQvbG9nb3V0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/painel/logout/logout.component.ts":
/*!***************************************************!*\
  !*** ./src/app/painel/logout/logout.component.ts ***!
  \***************************************************/
/*! exports provided: LogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function() { return LogoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LogoutComponent = /** @class */ (function () {
    function LogoutComponent() {
    }
    LogoutComponent.prototype.ngOnInit = function () {
    };
    LogoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'SPA-logout',
            template: __webpack_require__(/*! ./logout.component.html */ "./src/app/painel/logout/logout.component.html"),
            styles: [__webpack_require__(/*! ./logout.component.scss */ "./src/app/painel/logout/logout.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LogoutComponent);
    return LogoutComponent;
}());



/***/ }),

/***/ "./src/app/painel/video/editar/editar.component.html":
/*!***********************************************************!*\
  !*** ./src/app/painel/video/editar/editar.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row justify-content-center\">\n    <div class=\"header col-12\">\n      <h1>Editar Video</h1>\n    </div>\n    <div class=\"row justify-content-center col-9\">\n      <form class=\"body col-12 row justify-content-between\">\n        <div class=\"col-4\">\n          <img class=\"card-img-top\" src=\"https://img.youtube.com/vi/{{video.youtubeid}}/0.jpg\">\n        </div>\n        <div class=\"col-8\">\n\n          <!-- <div class=\"form-group\">\n            <label for=\"name\"><strong>ID VIDEO</strong></label>\n            <input type=\"text\" class=\"form-control\" id=\"idvideo\" placeholder=\"Id do video\" [(ngModel)]=\"video.id\"\n              name=\"idvideo\" required>\n          </div> -->\n\n          <div class=\"form-group\">\n            <label for=\"name\"><strong>YoutubeID</strong></label>\n            <input type=\"text\" class=\"form-control\" id=\"youtubeid\" placeholder=\"Id do Youtube\"\n              [(ngModel)]=\"video.youtubeid\" name=\"youtubeid\" required (change)=\"getVideoAPI()\">\n          </div>\n\n          <div class=\"form-group\">\n            <label for=\"name\">Nome do Vídeo</label>\n            <input type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"Nome do Video\" [(ngModel)]=\"video.name\"\n              name=\"name\" required>\n          </div>\n\n          <div class=\"form-group\">\n            <label for=\"name\">Descrição</label>\n            <textarea type=\"text\" class=\"form-control\" id=\"description\" placeholder=\"Descrição do Vídeo\"\n              [(ngModel)]=\"video.description\" name=\"description\" required></textarea>\n          </div>\n\n          <div class=\"form-group\">\n            <label for=\"name\">Data de Publicação</label>\n            <input type=\"text\" class=\"form-control\" id=\"date\" placeholder=\"Descrição do Vídeo\" [(ngModel)]=\"video.date\"\n              name=\"date\" required>\n          </div>\n\n          <!-- <div class=\"form-group\">\n            <label for=\"name\">Ordem</label>\n            <input type=\"text\" class=\"form-control\" id=\"order\" placeholder=\"Descrição do Vídeo\"\n              [(ngModel)]=\"video.order\" name=\"order\" required>\n          </div> -->\n\n          <button (click)=\"save();\" class=\"btn btn-primary\">Enviar</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/painel/video/editar/editar.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/painel/video/editar/editar.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".body {\n  background: white;\n  padding: 1em; }\n\n.header {\n  background: white;\n  padding: 1em;\n  margin: 0 0 1em; }\n\n.header h1 {\n  font-size: 1em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0JhY2t1cC9Kb2JzL09UQUJPQU5FTlNFL3R2L3NwYS9zcmMvYXBwL3BhaW5lbC92aWRlby9lZGl0YXIvZWRpdGFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLFlBQVksRUFBQTs7QUFHZDtFQUNFLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osZUFBZSxFQUFBOztBQUdqQjtFQUNFLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhaW5lbC92aWRlby9lZGl0YXIvZWRpdGFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvZHkge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgcGFkZGluZzogMWVtO1xufVxuXG4uaGVhZGVyIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHBhZGRpbmc6IDFlbTtcbiAgbWFyZ2luOiAwIDAgMWVtO1xufVxuXG4uaGVhZGVyIGgxIHtcbiAgZm9udC1zaXplOiAxZW07XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/painel/video/editar/editar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/painel/video/editar/editar.component.ts ***!
  \*********************************************************/
/*! exports provided: EditarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditarComponent", function() { return EditarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_video_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../services/video.service */ "./src/app/services/video.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");






var API = "https://noembed.com/embed?url=https://www.youtube.com/watch?v=";
var EditarComponent = /** @class */ (function () {
    function EditarComponent(videoService, router, http) {
        this.videoService = videoService;
        this.router = router;
        this.http = http;
        this.video = videoService.videoEdit;
        if (this.video == null) {
            this.video = {
                name: '',
                description: '',
                order: (1000 + (new Date().getUTCMilliseconds())),
                date: '',
                youtubeid: '',
                id: this.uuidv4(),
                url: ''
            };
        }
        console.log('VER VIDEO', this.video);
    }
    EditarComponent.prototype.getVideoAPI = function () {
        var _this = this;
        this.http.jsonp(API + this.video.youtubeid, 'callback').subscribe(function (value) {
            _this.video.name = value.title;
            _this.video.description = value.author_name;
            _this.video.date = "Publicado em " + Object(_angular_common__WEBPACK_IMPORTED_MODULE_5__["formatDate"])(new Date(), 'dd/MM/yyyy', 'en');
        });
    };
    EditarComponent.prototype.save = function () {
        if (this.router.url == '/painel/video/novo') {
            // this.video.id = this.uuidv4();
            this.videoService.addVideo(this.video);
        }
        else {
            this.videoService.editVideo(this.video);
        }
    };
    EditarComponent.prototype.uuidv4 = function () {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = (Math.random() * 16) | 0, v = c == 'x' ? r : (r & 0x3) | 0x8;
            return v.toString(16);
        });
    };
    EditarComponent.prototype.ngOnInit = function () { };
    EditarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'SPA-editar',
            template: __webpack_require__(/*! ./editar.component.html */ "./src/app/painel/video/editar/editar.component.html"),
            styles: [__webpack_require__(/*! ./editar.component.scss */ "./src/app/painel/video/editar/editar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_video_service__WEBPACK_IMPORTED_MODULE_1__["VideoService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], EditarComponent);
    return EditarComponent;
}());



/***/ }),

/***/ "./src/app/painel/videos/videos.component.html":
/*!*****************************************************!*\
  !*** ./src/app/painel/videos/videos.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row justify-content-center\">\n    <div class=\"header col-12\">\n      <h1>Listagem de Videos</h1>\n      <div class=\"row justify-content-between\">\n        <div class=\"col-4 text-left\">\n          <div class=\"btn-group\" role=\"group\" aria-label=\"Basic example\">\n            <button class=\"btn btn-primary\" (click)=\"new();\">NOVO VIDEO</button>\n            <button class=\"btn btn-primary\" (click)=\"logout();\">SAIR</button>\n\n          </div>\n        </div>\n        <div class=\"col-8 text-right\">\n          <input type=\"text\" id=\"videoHome\" placeholde=\"videoHome\" [(ngModel)]=\"videoHome\" style=\"padding: 7px;\n          width: 380px;\n          position: relative;\n          top: 2px;\n      \">\n          <button class=\"btn btn-primary\" (click)=\"updateHome();\">Atualizar Video Home</button>\n        </div>\n      </div>\n\n    </div>\n\n    <div class=\"bodyVideos card-deck\">\n      <div class=\"card\" *ngFor=\"let video of videos | async\" style=\"min-width: 250px;\">\n        <img class=\"card-img-top\" src=\"https://img.youtube.com/vi/{{video.youtubeid}}/0.jpg\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">{{ video.name }}</h5>\n          <!-- <p class=\"card-text\">{{ video.description }}</p> -->\n          <p>{{ video.id }}</p>\n        </div>\n        <div class=\"card-body\">\n          <button class=\"card-link btn btn-info\" (click)=\"edit(video)\">Editar</button>\n          <button class=\"card-link btn btn-warning\" (click)=\"remove(video)\">Excluir</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/painel/videos/videos.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/painel/videos/videos.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  background: white;\n  padding: 1em;\n  margin: 0; }\n\n.header h1 {\n  font-size: 1em; }\n\n.bodyVideos {\n  margin: 1em; }\n\n.card-columns {\n  -moz-column-count: 5;\n       column-count: 5; }\n\n.card {\n  border: none;\n  transition: all 0.5s; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0JhY2t1cC9Kb2JzL09UQUJPQU5FTlNFL3R2L3NwYS9zcmMvYXBwL3BhaW5lbC92aWRlb3MvdmlkZW9zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixTQUFTLEVBQUE7O0FBR1g7RUFDRSxjQUFjLEVBQUE7O0FBR2hCO0VBQ0UsV0FBVyxFQUFBOztBQUdiO0VBQ0Usb0JBQWU7T0FBZixlQUFlLEVBQUE7O0FBR2pCO0VBR0UsWUFBWTtFQUNaLG9CQUFvQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFpbmVsL3ZpZGVvcy92aWRlb3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHBhZGRpbmc6IDFlbTtcbiAgbWFyZ2luOiAwO1xufVxuXG4uaGVhZGVyIGgxIHtcbiAgZm9udC1zaXplOiAxZW07XG59XG5cbi5ib2R5VmlkZW9zIHtcbiAgbWFyZ2luOiAxZW07XG59XG5cbi5jYXJkLWNvbHVtbnMge1xuICBjb2x1bW4tY291bnQ6IDU7XG59XG5cbi5jYXJkIHtcbiAgLy8gbWFyZ2luOiAuNWVtO1xuICAvLyB3aWR0aDogMTZyZW07XG4gIGJvcmRlcjogbm9uZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gIC8vIGhlaWdodDogNDcwcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/painel/videos/videos.component.ts":
/*!***************************************************!*\
  !*** ./src/app/painel/videos/videos.component.ts ***!
  \***************************************************/
/*! exports provided: VideosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideosComponent", function() { return VideosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_video_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/video.service */ "./src/app/services/video.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);






var VideosComponent = /** @class */ (function () {
    function VideosComponent(userService, videoService, router) {
        var _this = this;
        this.userService = userService;
        this.videoService = videoService;
        this.router = router;
        this.videos = this.videoService.getVideos();
        this.videoService.getVideoHome().subscribe(function (data) {
            _this.videoHome = data.highlihgt;
        });
    }
    VideosComponent.prototype.ngOnInit = function () { };
    VideosComponent.prototype.edit = function (video) {
        this.videoService.videoEdit = video;
        this.router.navigate(['painel/video/editar']);
    };
    VideosComponent.prototype.new = function () {
        this.router.navigate(['painel/video/novo']);
    };
    VideosComponent.prototype.logout = function () {
        this.userService.logout();
        this.router.navigate(['painel/videos']);
    };
    VideosComponent.prototype.remove = function (video) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({ title: 'Apagar Vídeo', text: 'Deseja realmente apagar este vídeo ?', type: 'info', showCancelButton: true, showCloseButton: true }).then(function (success) {
            if (success.value) {
                _this.videoService.removeVideo(video);
            }
        });
    };
    VideosComponent.prototype.updateHome = function () {
        this.videoService.updateHome(this.videoHome);
    };
    VideosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'SPA-videos',
            template: __webpack_require__(/*! ./videos.component.html */ "./src/app/painel/videos/videos.component.html"),
            styles: [__webpack_require__(/*! ./videos.component.scss */ "./src/app/painel/videos/videos.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _services_video_service__WEBPACK_IMPORTED_MODULE_1__["VideoService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], VideosComponent);
    return VideosComponent;
}());



/***/ }),

/***/ "./src/app/player/player.component.html":
/*!**********************************************!*\
  !*** ./src/app/player/player.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"body col-12 row justify-content-center\">\n  <div class=\"col-12 col-sm-11 row justify-content-between base\">\n    <div class=\"col-12 col-sm-8 base2\">\n      <div class=\"video-container\">\n\n        <iframe width=\"800\" height=\"450\" *ngIf=\"movieHighlight != null\"\n          [src]=\"sanitizer.bypassSecurityTrustResourceUrl((movieHighlight | async)?.url+ '?autoplay=1&rel=0') \"\n          frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n          allowfullscreen></iframe>\n      </div>\n\n\n    </div>\n    <div class=\"col-12 col-sm-4 text-left base3\">\n      <h1>{{ (movieHighlight | async)?.name }}</h1>\n      <h4 class=\"date\">{{ (movieHighlight | async)?.date }}</h4>\n      <!-- <p>{{ (movieHighlight | async)?.description }}</p> -->\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/player/player.component.scss":
/*!**********************************************!*\
  !*** ./src/app/player/player.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".body {\n  padding: 2em 0;\n  margin: 0;\n  background: #141414;\n  color: #fff;\n  box-shadow: inset 0px 5px 5px rgba(0, 0, 0, 0.63); }\n\n.video-container {\n  position: relative;\n  padding-bottom: 56.25%;\n  padding-top: 30px;\n  height: 0;\n  overflow: hidden; }\n\n.video-container iframe,\n.video-container object,\n.video-container embed {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%; }\n\nh1 {\n  font-weight: 600;\n  color: white;\n  font-family: 'Signika', sans-serif;\n  font-size: 3.2rem; }\n\n.date {\n  font-size: 10px;\n  margin-bottom: 2em;\n  border: 2px solid #f00;\n  color: #f00;\n  padding: .5em;\n  display: inline-block;\n  border-radius: 4px;\n  font-family: 'Open Sans Condensed';\n  text-transform: uppercase;\n  font-weight: 600;\n  letter-spacing: 1px; }\n\np {\n  line-height: 1.2em;\n  font-weight: 300;\n  font-size: 1.5em; }\n\n@media only screen and (max-width: 600px) {\n  .body {\n    padding: 10px 0; }\n  .base {\n    padding: 0; }\n  .base2 {\n    padding: 0; }\n  .base3 {\n    padding: 1em 1em 0 2em; }\n  h1 {\n    font-size: 20px;\n    margin-top: 1em; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0JhY2t1cC9Kb2JzL09UQUJPQU5FTlNFL3R2L3NwYS9zcmMvYXBwL3BsYXllci9wbGF5ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsU0FBUztFQUNULG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsaURBQWlELEVBQUE7O0FBR25EO0VBQ0Usa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsU0FBUztFQUNULGdCQUFnQixFQUFBOztBQUlsQjs7O0VBR0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsV0FBVztFQUNYLFlBQVksRUFBQTs7QUFHZDtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osa0NBQWtDO0VBQ2xDLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixrQ0FBa0M7RUFDbEMseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQixFQUFBOztBQUlsQjtFQUNFO0lBQ0UsZUFBZSxFQUFBO0VBR2pCO0lBQ0UsVUFBVSxFQUFBO0VBR1o7SUFDRSxVQUFVLEVBQUE7RUFHWjtJQUNFLHNCQUFzQixFQUFBO0VBR3hCO0lBQ0UsZUFBZTtJQUNmLGVBQWUsRUFBQSxFQUNoQiIsImZpbGUiOiJzcmMvYXBwL3BsYXllci9wbGF5ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm9keSB7XG4gIHBhZGRpbmc6IDJlbSAwO1xuICBtYXJnaW46IDA7XG4gIGJhY2tncm91bmQ6ICMxNDE0MTQ7XG4gIGNvbG9yOiAjZmZmO1xuICBib3gtc2hhZG93OiBpbnNldCAwcHggNXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuNjMpO1xufVxuXG4udmlkZW8tY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLWJvdHRvbTogNTYuMjUlO1xuICBwYWRkaW5nLXRvcDogMzBweDtcbiAgaGVpZ2h0OiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICAvLyAgIGJveC1zaGFkb3c6IDZweCA3cHggM3B4IHJnYmEoMCwgMCwgMCwgMC4wNyk7XG59XG5cbi52aWRlby1jb250YWluZXIgaWZyYW1lLFxuLnZpZGVvLWNvbnRhaW5lciBvYmplY3QsXG4udmlkZW8tY29udGFpbmVyIGVtYmVkIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbmgxIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LWZhbWlseTogJ1NpZ25pa2EnLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDMuMnJlbTtcbn1cblxuLmRhdGUge1xuICBmb250LXNpemU6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDJlbTtcbiAgYm9yZGVyOiAycHggc29saWQgI2YwMDtcbiAgY29sb3I6ICNmMDA7XG4gIHBhZGRpbmc6IC41ZW07XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBmb250LWZhbWlseTogJ09wZW4gU2FucyBDb25kZW5zZWQnO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogNjAwO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xufVxuXG5wIHtcbiAgbGluZS1oZWlnaHQ6IDEuMmVtO1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LXNpemU6IDEuNWVtO1xufVxuXG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLmJvZHkge1xuICAgIHBhZGRpbmc6IDEwcHggMDtcbiAgfVxuXG4gIC5iYXNlIHtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG5cbiAgLmJhc2UyIHtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG5cbiAgLmJhc2UzIHtcbiAgICBwYWRkaW5nOiAxZW0gMWVtIDAgMmVtO1xuICB9XG5cbiAgaDEge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBtYXJnaW4tdG9wOiAxZW07XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/player/player.component.ts":
/*!********************************************!*\
  !*** ./src/app/player/player.component.ts ***!
  \********************************************/
/*! exports provided: PlayerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerComponent", function() { return PlayerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _services_home_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../services/home.service */ "./src/app/services/home.service.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");






var PlayerComponent = /** @class */ (function () {
    function PlayerComponent(afs, sanitizer, homeService, meta, title) {
        var _this = this;
        this.afs = afs;
        this.sanitizer = sanitizer;
        this.homeService = homeService;
        this.meta = meta;
        this.title = title;
        this.itemDoc = this.afs.doc('home/' + this.homeService.getHOME());
        this.item = this.itemDoc.valueChanges();
        this.item.subscribe(function (val) {
            _this.itemsCollection = _this.afs.doc('movies/' + (_this.videoplayer != null ? _this.videoplayer : val.highlihgt));
            _this.movieHighlight = _this.itemsCollection.valueChanges();
            _this.movieHighlight.subscribe(function (val) {
                _this.movieHOME = val;
                var tags = {
                    description: val.description,
                    title: 'TV TABOANENSE • ' + val.name,
                    url: val.youtubeid,
                    image: 'https://img.youtube.com/vi/' + val.youtubeid + '/0.jpg'
                };
                _this.setMetaData(tags);
            });
        });
    }
    PlayerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.homeService.aClickedEvent.subscribe(function (movie) {
            _this.changePlayer(movie);
        });
    };
    PlayerComponent.prototype.changePlayer = function (movie) {
        var _this = this;
        this.itemsCollection = this.afs.doc('movies/' + movie.id);
        this.movieHighlight = this.itemsCollection.valueChanges();
        this.movieHighlight.subscribe(function (val) {
            _this.movieHOME = val;
        });
    };
    PlayerComponent.prototype.setMetaData = function (data) {
        this.title.setTitle(data.title);
        this.meta.updateTag({ name: 'description', content: data.description });
        this.meta.updateTag({ property: 'og:title', content: data.title });
        this.meta.updateTag({ property: 'og:url', content: data.url });
        this.meta.updateTag({ property: 'og:image', content: data.image });
        this.meta.updateTag({ property: 'og:image:alt', content: data.title });
        this.meta.updateTag({ property: 'og:description', content: data.description });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PlayerComponent.prototype, "movie", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PlayerComponent.prototype, "videoplayer", void 0);
    PlayerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'SPA-player',
            template: __webpack_require__(/*! ./player.component.html */ "./src/app/player/player.component.html"),
            styles: [__webpack_require__(/*! ./player.component.scss */ "./src/app/player/player.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"],
            _services_home_service__WEBPACK_IMPORTED_MODULE_3__["HomeService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Meta"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]])
    ], PlayerComponent);
    return PlayerComponent;
}());



/***/ }),

/***/ "./src/app/services/home.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/home.service.ts ***!
  \******************************************/
/*! exports provided: HomeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeService", function() { return HomeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");






var URL = 'https://www.otaboanense.com.br/wp-json/wp/v2/posts/?per_page=5&_embed';
var HomeService = /** @class */ (function () {
    function HomeService(afs, http) {
        var _this = this;
        this.afs = afs;
        this.http = http;
        this.homeID = 'mASRjAsNATTfPenPzpZI';
        this.aClickedEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.HomeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.NewsEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        var itemNews = this.http.get(URL);
        itemNews.subscribe(function (data) {
            _this.NewsEvent.emit(data);
        });
    }
    Object.defineProperty(HomeService.prototype, "news", {
        get: function () {
            return this._news;
        },
        enumerable: true,
        configurable: true
    });
    HomeService.prototype.getHOME = function () {
        return this.homeID;
    };
    HomeService.prototype.setHOME = function (home) {
        this.homeID = home;
        this.aClickedEvent.emit(this.homeID);
    };
    Object.defineProperty(HomeService.prototype, "homeFull", {
        get: function () {
            return this._homeFull;
        },
        set: function (home) {
            this._homeFull = home;
            this.HomeEvent.emit(this._homeFull);
        },
        enumerable: true,
        configurable: true
    });
    HomeService.prototype.saveToDB = function (home) {
        var myhome = this.afs.doc('home/' + this.getHOME());
        myhome
            .update({
            banner_middle_link: home.banner_middle_link,
            banner_middle_image: home.banner_middle_image,
            banner_top_image: home.banner_top_image,
            banner_top_url: home.banner_top_url
        })
            .then(function () {
            return sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                title: 'Sucesso',
                text: 'Informações atualizadas com sucesso!',
                type: 'info',
                confirmButtonText: 'Legal!'
            });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], HomeService.prototype, "aClickedEvent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], HomeService.prototype, "HomeEvent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], HomeService.prototype, "NewsEvent", void 0);
    HomeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], HomeService);
    return HomeService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);





var UserService = /** @class */ (function () {
    function UserService(auth, route) {
        var _this = this;
        this.auth = auth;
        this.route = route;
        console.log('USER SERVICE ON');
        this.auth.auth.onAuthStateChanged(function (user) {
            if (!user) {
                _this.route.navigate(['/painel/login']);
            }
            else {
                _this.user = user;
            }
        });
    }
    UserService.prototype.login = function (user) {
        var _this = this;
        this.auth.auth
            .signInWithEmailAndPassword(user.email, user.password)
            .then(function (user) { return _this.route.navigate(['painel/videos']); })
            .catch(function (error) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Error', 'Ocorreu um erro ao entrar. Verifique as informações inseridas', 'error');
        });
    };
    UserService.prototype.logout = function () {
        var _this = this;
        this.auth.auth.signOut().then(function (success) {
            _this.route.navigate(['painel/login']);
        });
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/services/video.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/video.service.ts ***!
  \*******************************************/
/*! exports provided: VideoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoService", function() { return VideoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");





var VideoService = /** @class */ (function () {
    function VideoService(afs, router) {
        this.afs = afs;
        this.router = router;
        this.videosCollection = this.afs.collection('movies', function (ref) { return ref.orderBy('order', 'desc'); });
        // this.videos = this.videosCollection.valueChanges();
        this.videos = this.videosCollection.snapshotChanges().map(function (videos) {
            return videos.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ id: id }, data);
            });
        });
    }
    VideoService.prototype.getVideos = function () {
        return this.videos;
    };
    Object.defineProperty(VideoService.prototype, "videoEdit", {
        get: function () {
            return this._videoEdit;
        },
        set: function (video) {
            this._videoEdit = video;
        },
        enumerable: true,
        configurable: true
    });
    VideoService.prototype.editVideo = function (video) {
        var _this = this;
        video.url = 'https://www.youtube.com/embed/' + video.youtubeid;
        var videoRef = this.afs
            .doc('movies/' + video.id)
            .update(video)
            .then(function (video) { return _this.router.navigate(['/painel/videos']); });
    };
    VideoService.prototype.addVideo = function (video) {
        var _this = this;
        console.log('veio para adicionar', video);
        video.url = 'https://www.youtube.com/embed/' + video.youtubeid;
        var videoRef = this.afs
            .collection('movies')
            .doc(video.id)
            .set(video)
            .then(function (video) { return _this.router.navigate(['/painel/videos']); });
    };
    VideoService.prototype.getVideoHome = function () {
        return this.afs.doc('home/mASRjAsNATTfPenPzpZI').valueChanges();
    };
    VideoService.prototype.updateHome = function (videoHome) {
        this.afs.doc('home/mASRjAsNATTfPenPzpZI').update({ 'highlihgt': videoHome }).then(function (success) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire('Sucesso', 'Home atualizada com sucesso', 'success');
        });
    };
    VideoService.prototype.removeVideo = function (video) {
        this.afs.doc('/movies/' + video.id).delete();
    };
    VideoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], VideoService);
    return VideoService;
}());



/***/ }),

/***/ "./src/app/test/test.component.html":
/*!******************************************!*\
  !*** ./src/app/test/test.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  test works!\n</p>\n"

/***/ }),

/***/ "./src/app/test/test.component.scss":
/*!******************************************!*\
  !*** ./src/app/test/test.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rlc3QvdGVzdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/test/test.component.ts":
/*!****************************************!*\
  !*** ./src/app/test/test.component.ts ***!
  \****************************************/
/*! exports provided: TestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestComponent", function() { return TestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TestComponent = /** @class */ (function () {
    function TestComponent() {
    }
    TestComponent.prototype.ngOnInit = function () {
    };
    TestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'SPA-test',
            template: __webpack_require__(/*! ./test.component.html */ "./src/app/test/test.component.html"),
            styles: [__webpack_require__(/*! ./test.component.scss */ "./src/app/test/test.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TestComponent);
    return TestComponent;
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
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyBD2koAP5W2alzrQ2_SrZQE2QpHmJpESp0",
        authDomain: "tvtaboanense-230d2.firebaseapp.com",
        databaseURL: "https://tvtaboanense-230d2.firebaseio.com",
        projectId: "tvtaboanense-230d2",
        storageBucket: "",
        messagingSenderId: "426201767301"
    }
};


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
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_browser_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.browser.module */ "./src/app/app.browser.module.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
document.addEventListener('DOMContentLoaded', function () {
    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_browser_module__WEBPACK_IMPORTED_MODULE_3__["AppBrowserModule"])
        .catch(function (err) { return console.error(err); });
});


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Volumes/Backup/Jobs/OTABOANENSE/tv/spa/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map