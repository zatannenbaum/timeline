webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_timeline_timeline_component__ = __webpack_require__("../../../../../src/app/components/timeline/timeline.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_homepage_homepage_component__ = __webpack_require__("../../../../../src/app/components/homepage/homepage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_add_post_add_post_component__ = __webpack_require__("../../../../../src/app/components/add-post/add-post.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_edit_post_edit_post_component__ = __webpack_require__("../../../../../src/app/components/edit-post/edit-post.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__authguard_service__ = __webpack_require__("../../../../../src/app/authguard.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_4__components_homepage_homepage_component__["a" /* HomepageComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'timeline', component: __WEBPACK_IMPORTED_MODULE_3__components_timeline_timeline_component__["a" /* TimelineComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_7__authguard_service__["a" /* AuthGuardService */]] },
    { path: 'edit/:uuid', component: __WEBPACK_IMPORTED_MODULE_6__components_edit_post_edit_post_component__["a" /* EditPostComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_7__authguard_service__["a" /* AuthGuardService */]] },
    { path: 'add_post', component: __WEBPACK_IMPORTED_MODULE_5__components_add_post_add_post_component__["a" /* AddPostComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_7__authguard_service__["a" /* AuthGuardService */]] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* AppComponent's private CSS styles */\nh1 {\n  font-size: 1.2em;\n  color: #999;\n  margin-bottom: 0;\n}\nh2 {\n  font-size: 2em;\n  margin-top: 0;\n  padding-top: 0;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"align-content: center;\">\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_image_cropper__ = __webpack_require__("../../../../ngx-image-cropper/ngx-image-cropper.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_primeng_calendar__ = __webpack_require__("../../../../primeng/calendar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_primeng_calendar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_primeng_calendar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__auth_interceptor__ = __webpack_require__("../../../../../src/app/auth.interceptor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__authguard_service__ = __webpack_require__("../../../../../src/app/authguard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_timeline_timeline_component__ = __webpack_require__("../../../../../src/app/components/timeline/timeline.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_post_post_component__ = __webpack_require__("../../../../../src/app/components/post/post.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_post_service__ = __webpack_require__("../../../../../src/app/services/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_homepage_homepage_component__ = __webpack_require__("../../../../../src/app/components/homepage/homepage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_nav_nav_component__ = __webpack_require__("../../../../../src/app/components/nav/nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_add_post_add_post_component__ = __webpack_require__("../../../../../src/app/components/add-post/add-post.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_edit_post_edit_post_component__ = __webpack_require__("../../../../../src/app/components/edit-post/edit-post.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_timeline_timeline_component__["a" /* TimelineComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_post_post_component__["a" /* PostComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_homepage_homepage_component__["a" /* HomepageComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_nav_nav_component__["a" /* NavComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_add_post_add_post_component__["a" /* AddPostComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_edit_post_edit_post_component__["a" /* EditPostComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_8__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_6_ngx_image_cropper__["a" /* ImageCropperModule */],
                __WEBPACK_IMPORTED_MODULE_7_primeng_calendar__["CalendarModule"],
            ],
            providers: [
                {
                    provide: __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
                    useClass: __WEBPACK_IMPORTED_MODULE_9__auth_interceptor__["a" /* AuthInterceptor */],
                    multi: true,
                },
                __WEBPACK_IMPORTED_MODULE_16__services_post_service__["a" /* PostService */],
                __WEBPACK_IMPORTED_MODULE_17__services_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_10__authguard_service__["a" /* AuthGuardService */],
                __WEBPACK_IMPORTED_MODULE_11__services_auth_service__["a" /* AuthService */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/auth.interceptor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor() {
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        // Get the auth header from the service.
        if (req.url.indexOf(__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].base_url) === 0) {
            var authToken = localStorage.getItem('token');
            var authReq = req;
            // Clone the request to add the new header.
            if (authToken) {
                authReq = req.clone({ setHeaders: { Authorization: 'Token ' + authToken } });
            }
            // Pass on the cloned request instead of the original request.
            return next.handle(authReq);
        }
        else if (req.url.indexOf(__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].aws_url) === 0) {
            var aws_key = localStorage.getItem('aws_key');
            var aws_md5 = localStorage.getItem('aws_md5');
            var awsReq = req.clone({ setHeaders: {
                    'Content-Type': 'image/png',
                    'x-amz-server-side-encryption-customer-algorithm': 'AES256',
                    'x-amz-server-side-encryption-customer-key': aws_key,
                    'x-amz-server-side-encryption-customer-key-MD5': aws_md5
                }
            });
            // Pass on the cloned request instead of the original request.
            return next.handle(awsReq);
        }
        return next.handle(req);
    };
    AuthInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], AuthInterceptor);
    return AuthInterceptor;
}());



/***/ }),

/***/ "../../../../../src/app/authguard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(router) {
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function (route, state) {
        if (localStorage.getItem('token')) {
            return true;
        }
        else {
            this.router.navigate(['/login'], {
                queryParams: {
                    return: state.url
                }
            });
            return false;
        }
    };
    AuthGuardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "../../../../../src/app/components/add-post/add-post.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@media screen and (max-width: 799px) {\n  .card-width {\n    width: 100%;\n  }\n}\n\n@media screen and (min-width: 800px) {\n  .card-width {\n    width: 700px;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/add-post/add-post.component.html":
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\n<div class=\"container\">\n  <div class=\"card card-width mx-auto my-3 rounded\">\n    <img class=\"card-img-top mx-auto px-4 pt-4\" style=\"width: 99.5%;\" [src]=\"croppedImage\" *ngIf=\"croppedImage\">\n    <div class=\"card-body\">\n      <!-- Form with submit method and template variable (#fileInput) -->\n      <form (submit)=\"createPost($event)\">\n        <div class=\"form-group\">\n\n          <image-cropper style=\"width: 50%; margin-left: auto; margin-right: auto;\"\n            [imageChangedEvent]=\"imageChangedEvent\"\n            [maintainAspectRatio]=\"true\"\n            [aspectRatio]=\"1 / 1\"\n            [resizeToWidth]=\"500\"\n            format=\"png\"\n            (imageCropped)=\"imageCropped($event)\"\n            (imageLoaded)=\"imageLoaded()\"\n            (loadImageFailed)=\"loadImageFailed()\"\n          ></image-cropper>\n\n          <label class=\"btn btn-primary\" style=\"margin-left: auto; margin-right: auto;\">\n            Add a photo<input name=\"image\" class=\"form-control-file\" type=\"file\" id=\"newPostImage\" (change)=\"fileChangeEvent($event)\" #fileInput hidden>\n          </label>\n\n          <br><br>\n\n          <label for=\"newPostDate\">Date of Photo/Memory/Event:</label>\n          <br>\n          <p-calendar class=\"calendar-input\" name=\"date\" id=\"newPostDate\" dateFormat=\"MM d, yy\" [(ngModel)]=\"date_of_event\">\n            <ng-template pTemplate=\"date\" let-date>\n              <span style=\"font-family: Cambria, Georgia;\">{{date.day}}</span>\n            </ng-template>\n          </p-calendar>\n          <br><br>\n\n          <label for=\"newPostTitle\">Title:</label>\n          <input name=\"title\" class=\"form-control\" type=\"text\" id=\"newPostTitle\" [(ngModel)]=\"body.title\">\n          <br>\n\n          <label for=\"newPostBody\">Content:</label>\n          <textarea name=\"content\" class=\"form-control\" id=\"newPostBody\" rows=\"5\" [(ngModel)]=\"body.content\"></textarea>\n          <br>\n\n          <button class=\"btn btn-success btn-block\" type=\"submit\" [ngClass]=\"{'disabled': saving}\"><i *ngIf=\"saving\" class=\"fa fa-spin fa-spinner\"></i> Upload</button>\n        </div>\n\n      </form>\n      <p *ngIf=\"overallErrorMsg\" style=\"color:red\">{{overallErrorMsg}}</p>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/add-post/add-post.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddPostComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_post_service__ = __webpack_require__("../../../../../src/app/services/post.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddPostComponent = /** @class */ (function () {
    function AddPostComponent(postService, router) {
        this.postService = postService;
        this.router = router;
        this.imageChangedEvent = '';
        this.croppedImage = '';
        this.saving = false;
        this.overallErrorMsg = '';
        this.body = {
            title: '',
            content: ''
        };
    }
    AddPostComponent.prototype.fileChangeEvent = function (event) {
        this.imageChangedEvent = event;
    };
    AddPostComponent.prototype.imageCropped = function (image) {
        this.croppedImage = image;
    };
    AddPostComponent.prototype.ngOnInit = function () {
    };
    AddPostComponent.prototype.createPost = function (event) {
        var _this = this;
        event.preventDefault();
        this.saving = true;
        var data = {};
        // get only the base64 file
        if (this.croppedImage.length > 0) {
            data = {
                'image': this.croppedImage,
                'title': this.body.title,
                'content': this.body.content
            };
        }
        else {
            data = {
                'title': this.body.title,
                'content': this.body.content
            };
        }
        if (this.date_of_event) {
            data['date_of_event'] = this.date_of_event.getTime();
        }
        this.postService.addPost(data)
            .subscribe(function (resp) {
            _this.saving = false;
            _this.router.navigate(['/timeline']);
            _this.croppedImage = '';
        }, function (err) {
            _this.saving = false;
            _this.overallErrorMsg = 'Could not create a new post.';
        });
    };
    AddPostComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-post',
            template: __webpack_require__("../../../../../src/app/components/add-post/add-post.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/add-post/add-post.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_post_service__["a" /* PostService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AddPostComponent);
    return AddPostComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/edit-post/edit-post.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@media screen and (max-width: 799px) {\n  .card-width {\n    width: 100%;\n  }\n}\n\n@media screen and (min-width: 800px) {\n  .card-width {\n    width: 700px;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/edit-post/edit-post.component.html":
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\n<div class=\"container\">\n  <div class=\"card card-width mx-auto my-3 rounded\">\n    <div class=\"mx-auto px-4 pt-4\" style=\"width: 99.5%; text-align: center;\" *ngIf=\"loadingImage\">\n      <i class=\"mx-auto fa fa-spin fa-spinner fa-3x\"></i>\n    </div>\n    <img id=\"postImage\"class=\"card-img-top mx-auto px-4 pt-4\" style=\"width: 99.5%;\" [src]=\"image\" *ngIf=\"image\">\n    <div class=\"card-body\">\n      <!-- Form with submit method and template variable (#fileInput) -->\n      <form (submit)=\"updatePost($event)\">\n        <div class=\"form-group\">\n\n<!--           <image-cropper style=\"width: 50%; margin-left: auto; margin-right: auto;\"\n            [imageChangedEvent]=\"imageChangedEvent\"\n            [maintainAspectRatio]=\"true\"\n            [aspectRatio]=\"1 / 1\"\n            [resizeToWidth]=\"500\"\n            format=\"png\"\n            (imageCropped)=\"imageCropped($event)\"\n            (imageLoaded)=\"imageLoaded()\"\n            (loadImageFailed)=\"loadImageFailed()\"\n          ></image-cropper>\n -->\n<!--           <label class=\"btn btn-primary\" style=\"margin-left: auto; margin-right: auto;\">\n            Update photo<input name=\"image\" class=\"form-control-file\" type=\"file\" id=\"newPostImage\" (change)=\"fileChangeEvent($event)\" #fileInput hidden>\n          </label> -->\n\n          <br><br>\n\n          <label for=\"newPostDate\">Date of Photo/Memory/Event:</label>\n          <br>\n          <p-calendar class=\"calendar-input\" name=\"date\" id=\"postDate\" dateFormat=\"MM d, yy\" [(ngModel)]=\"date_of_event\">\n            <ng-template pTemplate=\"date\" let-date>\n              <span style=\"font-family: Cambria, Georgia;\">{{date.day}}</span>\n            </ng-template>\n          </p-calendar>\n          <br><br>\n\n          <label for=\"newPostTitle\">Title:</label>\n          <input name=\"title\" class=\"form-control\" type=\"text\" id=\"postTitle\" [(ngModel)]=\"post.title\">\n          <br>\n\n          <label for=\"newPostBody\">Content:</label>\n          <textarea name=\"content\" class=\"form-control\" id=\"postBody\" rows=\"5\" [(ngModel)]=\"post.content\"></textarea>\n          <br>\n\n          <button class=\"btn btn-success btn-block\" type=\"submit\">Save Changes</button>\n\n          <button type=\"button\" class=\"btn btn-danger btn-block\" (click)=\"archive()\">Archive Post</button>\n\n        </div>\n\n      </form>\n      <p *ngIf=\"overallErrorMsg\" style=\"color:red\">{{overallErrorMsg}}</p>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/edit-post/edit-post.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditPostComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_post_service__ = __webpack_require__("../../../../../src/app/services/post.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditPostComponent = /** @class */ (function () {
    function EditPostComponent(route, http, postService, router) {
        this.route = route;
        this.http = http;
        this.postService = postService;
        this.router = router;
        this.post = {
            uuid: '',
            created_by_user: null,
            title: '',
            content: '',
            date_created: null,
            date_updated: null,
            date_of_event: null,
            image_url: null
        };
        this.imageChangedEvent = '';
        this.image = '';
        this.loadingImage = true;
        this.imageChanged = false;
        this.overallErrorMsg = '';
    }
    EditPostComponent.prototype.ngOnInit = function () {
        this.getPost();
    };
    EditPostComponent.prototype.getPost = function () {
        var _this = this;
        var uuid = this.route.snapshot.paramMap.get('uuid');
        this.postService.getPost(uuid)
            .subscribe(function (resp) {
            _this.post = resp;
            _this.getImage();
            if (_this.post.date_of_event) {
                _this.date_of_event = __WEBPACK_IMPORTED_MODULE_3_moment__(_this.post.date_of_event).toDate();
            }
        });
    };
    EditPostComponent.prototype.getImage = function () {
        var _this = this;
        if (this.post.image_url) {
            this.http
                .get(this.post.image_url, { responseType: 'blob' })
                .subscribe(function (data) {
                console.log(data);
                _this.createImageFromBlob(data);
                _this.loadingImage = false;
            }, function (err) {
                console.log(err);
                _this.loadingImage = false;
            });
        }
        else {
            this.loadingImage = false;
        }
    };
    EditPostComponent.prototype.createImageFromBlob = function (blob) {
        var _this = this;
        var reader = new FileReader();
        reader.addEventListener("load", function () {
            _this.image = reader.result;
        }, false);
        if (blob) {
            reader.readAsDataURL(blob);
        }
    };
    EditPostComponent.prototype.updatePost = function (event) {
        var _this = this;
        event.preventDefault();
        var data = {
            'title': this.post.title,
            'content': this.post.content
        };
        if (this.date_of_event) {
            data['date_of_event'] = this.date_of_event.getTime();
        }
        this.postService.updatePost(this.post.uuid, data)
            .subscribe(function (resp) {
            _this.router.navigate(['/timeline']);
            _this.image = '';
        }, function (err) {
            _this.overallErrorMsg = 'Could not update the post.';
        });
    };
    EditPostComponent.prototype.archive = function () {
        var _this = this;
        this.postService.archivePost(this.post.uuid)
            .subscribe(function (resp) {
            _this.router.navigate(['/timeline']);
        });
    };
    EditPostComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-edit-post',
            template: __webpack_require__("../../../../../src/app/components/edit-post/edit-post.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/edit-post/edit-post.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_4__services_post_service__["a" /* PostService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], EditPostComponent);
    return EditPostComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/homepage/homepage.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/homepage/homepage.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"card mx-auto my-3 rounded\">\n    <div class=\"card-body\" id=\"content\">\n      <h5 class=\"card-title text-center\" style=\"margin-bottom: 0.4rem;\">Happy 3 years my Greta!</h5>\n      <div class=\"card-text\" style=\"margin-bottom: 5px;\">\n\n<p style=\"white-space: pre-wrap;\">G,\n\nIn the past few weeks I may have told some white lies a few times or maybe more. They included telling you I was going to watch TV when you asked what I was going to be doing for the night or telling you I was learning about really interesting coding stuff while explaining why I was up so late. That \"really interesting coding stuff\" was me working on this (which wasn't so much a lie as just not the whole truth) and a lot of my nights after work the past few weeks have been spent working on this.\n\nSo, what is this? This is a website I made for you and us where we can share our photos, and add titles, stories, letters, or whatever else we want to them, and we can access it whenever, wherever (hopefully, iPhone access is being difficult). It's all private just to us. I don't remember how this idea came to me, I think I wanted to work on another project besides work and decided I wanted to make something for you, and this is what I came up with. In addition to creating the website, I started to add to it for us.\n\nI'm sure you'd like to see more at this point so you can click below to continue. I hope you love it.\n\nI love you more than anything my Greta, and I always will. Happy 3 years and I can't wait for the rest of our lives together.\n\n-Z\n</p>\n\n        <p *ngIf=\"!loggedIn\" class=\"text-center\">\n          <a class=\"btn btn-primary btn-sm\" href=\"/login\" role=\"button\">Login</a>\n        </p>\n        <p *ngIf=\"loggedIn\" class=\"text-center\">\n          <a class=\"btn btn-primary btn-sm\" href=\"/timeline\" role=\"button\">Go to Timeline</a>\n        </p>\n      </div>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/homepage/homepage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomepageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomepageComponent = /** @class */ (function () {
    function HomepageComponent(router) {
        this.router = router;
        this.title = 'Our Timeline';
        this.loggedIn = false;
    }
    HomepageComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('token')) {
            this.loggedIn = true;
        }
    };
    HomepageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-homepage',
            template: __webpack_require__("../../../../../src/app/components/homepage/homepage.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/homepage/homepage.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], HomepageComponent);
    return HomepageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@media screen and (max-width: 499px) {\n  .card-width {\n    width: 100%;\n  }\n}\n\n@media screen and (min-width: 500px) {\n  .card-width {\n    width: 400px;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"margin-top: 10%;\">\n  <div class=\"card card-width mx-auto rounded align-middle\">\n    <div class=\"card-header\">\n      Login\n    </div>\n    <div class=\"card-body\">\n      <form (ngSubmit)=\"login()\" novalidate>\n       <div class=\"form-group\">\n         <label for=\"email\">Email</label>\n         <input type=\"text\" class=\"form-control\" id=\"email\" placeholder=\"enter email\" [(ngModel)]=\"loginForm.username\" name=\"email\" required>\n       </div>\n       <div class=\"form-group\">\n         <label for=\"password\">Password</label>\n         <input type=\"password\" class=\"form-control\" id=\"password\" placeholder=\"enter password\" [(ngModel)]=\"loginForm.password\" name=\"password\" required>\n       </div>\n       <button type=\"submit\" class=\"btn btn-primary btn-block\">Login</button>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_login__ = __webpack_require__("../../../../../src/app/models/login.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(auth, router, route) {
        this.auth = auth;
        this.router = router;
        this.route = route;
        this.loginForm = new __WEBPACK_IMPORTED_MODULE_2__models_login__["a" /* Login */]();
        this.return = '';
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.auth.isValid()) {
            this.router.navigateByUrl('/timeline');
        }
        this.route.queryParams
            .subscribe(function (params) { return _this.return = params['return'] || '/timeline'; });
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        if (!this.loginForm.username || !this.loginForm.password) {
            return;
        }
        this.auth.login(this.loginForm)
            .subscribe(function (data) {
            localStorage.setItem('token', data['token']);
            _this.auth.getAWSKeys()
                .subscribe(function (aws) {
                localStorage.setItem('aws_key', aws['key']);
                localStorage.setItem('aws_md5', aws['md5']);
                _this.router.navigateByUrl(_this.return);
            });
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/nav/nav.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "nav {\n  background-color: #585a56;\n  -webkit-box-shadow: 0 4px 9px rgba(0, 0, 0, .3);\n}\n\n.navbar .navbar-brand {\n    color: #fafafa;\n    font-family: \"Lato\",\"Helvetica Neue\",Arial,sans-serif;\n}\n\n.nav-link {\n  color: #fafafa !important;\n  font-family: Cambria, Georgia;\n}\n\n.dropdown-menu {\n  right: 0;\n  left: auto !important;\n}\n\ni {\n  width: 18px;\n  font-size: 16px;\n  margin-right: 5px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/nav/nav.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md fixed-top navbar-dark bg-dark\">\n  <a class=\"navbar-brand\" href=\"/timeline\">\n    <img src=\"/static/icon.png\" width=\"30\" height=\"30\" alt=\"\">\n  </a>\n\n  <ul class=\"navbar-nav ml-auto\">\n    <li class=\"nav-item dropdown ml-auto\">\n      <a class=\"nav-link\" href=\"#\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n        <img class=\"rounded-circle\" src=\"{{ user.image_url }}\" style=\"height: 30px; padding-right: 4px;\">\n        {{ user.first_name }}\n      </a>\n      <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdownMenuLink\">\n        <a class=\"dropdown-item\" href=\"/add_post\">\n          <i class=\"fa fa-plus-circle fa-fw\" style=\"width: 18px; font-size: 16px; margin-right: 5px;\"></i> Add Post\n        </a>\n        <a class=\"dropdown-item\" (click)=\"logout()\" href=\"/\">\n          <i class=\"fa fa-sign-out fa-fw\" style=\"width: 18px; font-size: 16px; margin-right: 5px;\"></i> Logout\n        </a>\n      </div>\n    </li>\n  </ul>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/nav/nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavComponent = /** @class */ (function () {
    function NavComponent(auth, userService, router) {
        this.auth = auth;
        this.userService = userService;
        this.router = router;
        this.user = {
            uuid: '',
            email: '',
            first_name: '',
            last_name: '',
            full_name: '',
            image_url: ''
        };
    }
    NavComponent.prototype.ngOnInit = function () {
        this.getUser();
    };
    NavComponent.prototype.getUser = function () {
        var _this = this;
        this.userService.getUser()
            .subscribe(function (user) { return _this.user = user; });
    };
    NavComponent.prototype.logout = function () {
        this.auth.logout();
        this.router.navigateByUrl('/');
    };
    NavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__("../../../../../src/app/components/nav/nav.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/nav/nav.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/post/post.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* PostComponent's private CSS styles */\nlabel {\n  display: inline-block;\n  width: 3em;\n  margin: .5em 0;\n  color: #607D8B;\n  font-weight: bold;\n}\ninput {\n  height: 2em;\n  font-size: 1em;\n  padding-left: .4em;\n}\nbutton {\n  margin-top: 20px;\n  font-family: Arial;\n  background-color: #eee;\n  border: none;\n  padding: 5px 10px;\n  border-radius: 4px;\n  cursor: pointer; cursor: hand;\n}\nbutton:hover {\n  background-color: #cfd8dc;\n}\nbutton:disabled {\n  background-color: #eee;\n  color: #ccc;\n  cursor: auto;\n}\n.polaroid {\n  -webkit-box-shadow: 0 4px 6px rgba(0, 0, 0, .3);\n}\n.polaroid img {\n  display: block;\n  width: inherit;\n}\n@media screen and (max-width: 799px) {\n  .card-width {\n    width: 100%;\n  }\n  .px-4 {\n    padding-left: 0.5rem !important;\n    padding-right: 0.5rem !important;\n  }\n  .pt-4 {\n    padding-top: 0.5rem !important;\n  }\n}\n@media screen and (min-width: 800px) {\n  .card-width {\n    width: 700px;\n  }\n}\n.date-of-event {\n  white-space: pre-wrap;\n  font-size: 0.9rem;\n}\n.post-writer {\n  font-size: 0.85rem;\n}\n#content p.showContent {\n  display: block;\n}\n#content p.hideContent {\n  display: block;\n  height: 50px !important;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.dropdown-content {\n    display: none;\n    position: absolute;\n    background-color: #f1f1f1;\n    min-width: 160px;\n    -webkit-box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\n            box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\n    z-index: 1;\n}\n.dropdown-content a:hover {background-color: #ddd}\n.dropdown:hover .dropdown-content {\n    display: block;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/post/post.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card card-width mx-auto my-3 rounded polaroid\" *ngIf=\"post\">\n  <div class=\"mx-auto px-4 pt-4\" style=\"width: 99.5%; text-align: center;\" *ngIf=\"loadingImage\">\n    <i class=\"mx-auto fa fa-spin fa-spinner fa-3x\"></i>\n  </div>\n  <img class=\"card-img-top mx-auto px-4 pt-4\" style=\"width: 99.5%;\" src=\"{{image}}\" alt=\"image\" *ngIf=\"image && !loadingImage\">\n  <div class=\"card-body\" id=\"content\">\n    <h5 class=\"card-title\" style=\"margin-bottom: 0.4rem;\">{{ post.title }}<span *ngIf=\"date_of_event\" class=\"date-of-event font-weight-light\"> ({{ date_of_event }})</span></h5>\n    <div class=\"dropdown float-right mr-3\">\n      <i class=\"dropbtn fa fa-ellipsis-h fa-lg text-muted\"></i>\n      <div class=\"dropdown-content\">\n        <a class=\"dropdown-item\" routerLink=\"/edit/{{post.uuid}}\">Edit Post</a>\n      </div>\n    </div>\n    <p class=\"card-subtitle post-writer mb-2 text-muted font-italic font-weight-light\">written by {{ post.created_by_user.full_name }} {{ date_created }}</p>\n    <p class=\"card-text\"\n      [ngClass]=\"{'showContent': show, 'hideContent': !show}\"\n      style=\"white-space: pre-wrap; margin-bottom: 5px;\"\n    >{{ post.content }}</p>\n    <a (click)=\"showOrHide()\" class=\"pull-right\" style=\"padding-right: 30px;color: gray;font-style: italic;font-size: .9rem;\" href=\"javascript:;\">\n      {{ show_option }}\n    </a>\n  </div>\n</div>\n\n<!-- <button (click)=\"goBack()\">go back</button> -->\n"

/***/ }),

/***/ "../../../../../src/app/components/post/post.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_post_service__ = __webpack_require__("../../../../../src/app/services/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_post__ = __webpack_require__("../../../../../src/app/models/post.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PostComponent = /** @class */ (function () {
    function PostComponent(route, postService, location, http) {
        this.route = route;
        this.postService = postService;
        this.location = location;
        this.http = http;
        this.image = '';
        this.date_of_event = false;
        this.loadingImage = false;
        this.show = false;
        this.show_option = '+ Show More';
    }
    PostComponent.prototype.ngOnInit = function () {
        this.getImage();
        this.getDates();
    };
    // getPost(): void {
    //   const uuid = this.route.snapshot.paramMap.get('uuid');
    //   this.postService.getPost(uuid)
    //     .subscribe(post => this.post = post);
    // }
    PostComponent.prototype.getImage = function () {
        var _this = this;
        if (this.post.image_url) {
            this.loadingImage = true;
            this.http
                .get(this.post.image_url, { responseType: 'blob' })
                .subscribe(function (data) {
                _this.createImageFromBlob(data);
                _this.loadingImage = false;
            }, function (err) {
                console.log(err);
                _this.loadingImage = false;
            });
        }
    };
    PostComponent.prototype.getDates = function () {
        if (this.post.date_of_event) {
            this.date_of_event = __WEBPACK_IMPORTED_MODULE_4_moment__(this.post.date_of_event).format("MMM D, YYYY");
        }
        this.date_created = __WEBPACK_IMPORTED_MODULE_4_moment__(this.post.date_created).fromNow();
    };
    PostComponent.prototype.createImageFromBlob = function (blob) {
        var _this = this;
        var reader = new FileReader();
        reader.addEventListener("load", function () {
            _this.image = reader.result;
        }, false);
        if (blob) {
            reader.readAsDataURL(blob);
        }
    };
    PostComponent.prototype.goBack = function () {
        this.location.back();
    };
    PostComponent.prototype.showOrHide = function () {
        this.show = !this.show;
        if (this.show) {
            this.show_option = '- Show Less';
        }
        else {
            this.show_option = '+ Show More';
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6__models_post__["a" /* Post */])
    ], PostComponent.prototype, "post", void 0);
    PostComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-post',
            template: __webpack_require__("../../../../../src/app/components/post/post.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/post/post.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_5__services_post_service__["a" /* PostService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["Location"],
            __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], PostComponent);
    return PostComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/timeline/timeline.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".page-item.active .page-link {\n  background-color: #42a1f4;\n  border-color: #42a1f4;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/timeline/timeline.component.html":
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\n<div class=\"container\">\n  <div class=\"text-center mt-3\">\n    <p style=\"display: inline-block;\">Posts {{ 1 + (page - 1) * 10 }} - {{ postsOnPage + (page-1) * 10 }} out of {{ totalPosts }}</p>\n    <div class=\"dropdown\" style=\"display: inline-block;\">\n      <button class=\"btn btn-secondary btn-sm dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n        Ordering\n      </button>\n      <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n        <a class=\"dropdown-item\" href=\"javascript:;\" (click)=\"changeOrder('date_created', '-')\">\n          Most Recently Created First\n          <i *ngIf=\"'date_created' === ordering && '-' === ascending\" class=\"fa fa-check\"></i>\n        </a>\n        <a class=\"dropdown-item\" href=\"javascript:;\" (click)=\"changeOrder('date_created', '')\">\n          Oldest Created First\n          <i *ngIf=\"'date_created' === ordering && '' === ascending\" class=\"fa fa-check\"></i>\n        </a>\n        <a class=\"dropdown-item\" href=\"javascript:;\" (click)=\"changeOrder('date_of_event', '-')\">\n          Most Recent Date First\n          <i *ngIf=\"'date_of_event' === ordering && '-' === ascending\" class=\"fa fa-check\"></i>\n        </a>\n        <a class=\"dropdown-item\" href=\"javascript:;\" (click)=\"changeOrder('date_of_event', '')\">\n          Oldest Date First\n          <i *ngIf=\"'date_of_event' === ordering && '' === ascending\" class=\"fa fa-check\"></i>\n        </a>\n      </div>\n    </div>\n  </div>\n  <div *ngFor=\"let post of posts\">\n    <app-post [post]=\"post\"></app-post>\n  </div>\n  <nav aria-label=\"navigation\">\n    <ul class=\"pagination pagination-sm justify-content-center\">\n      <li class=\"page-item\" [ngClass]=\"{'disabled': page === 1}\">\n        <a class=\"page-link\" (click)=\"changePage(page - 1)\">\n          <i class=\"fa fa-chevron-circle-left\"></i>\n        </a>\n      </li>\n      <!-- first of three options -->\n      <li *ngIf=\"page === 1\" class=\"page-item active\">\n        <a class=\"page-link\">1</a>\n      </li>\n      <li *ngIf=\"page !== 1 && page !== totalPages\" class=\"page-item\">\n        <a class=\"page-link\" (click)=\"changePage(page - 1)\">{{ page - 1 }}</a>\n      </li>\n      <li *ngIf=\"page === totalPages && totalPages > 2\" class=\"page-item\">\n        <a class=\"page-link\" (click)=\"changePage(page - 2)\">{{ page - 2 }}</a>\n      </li>\n      <!-- middle of three options -->\n      <li *ngIf=\"page !== 1 && page !== totalPages && totalPages > 1\" class=\"page-item active\">\n        <a class=\"page-link\">{{ page }}</a>\n      </li>\n      <li *ngIf=\"page === 1 && totalPages > 1\" class=\"page-item\">\n        <a class=\"page-link\" (click)=\"changePage(page + 1)\">{{ page + 1 }}</a>\n      </li>\n      <li *ngIf=\"page === totalPages && totalPages === 2\" class=\"page-item active\">\n        <a class=\"page-link\">{{ page }}</a>\n      </li>\n      <li *ngIf=\"page === totalPages && totalPages > 2\" class=\"page-item\">\n        <a class=\"page-link\" (click)=\"changePage(page - 1)\">{{ page - 1 }}</a>\n      </li>\n      <!-- last of three options -->\n      <li *ngIf=\"page !== 1 && page !== totalPages && totalPages > 2\" class=\"page-item\">\n        <a class=\"page-link\" (click)=\"changePage(page + 1)\">{{ page + 1 }}</a>\n      </li>\n      <li *ngIf=\"page === 1 && totalPages > 2\" class=\"page-item\">\n        <a class=\"page-link\" (click)=\"changePage(page + 2)\">{{ page + 2 }}</a>\n      </li>\n      <li *ngIf=\"page === totalPages && totalPages > 2\" class=\"page-item active\">\n        <a class=\"page-link\">{{ page }}</a>\n      </li>\n      <li class=\"page-item\" [ngClass]=\"{'disabled': page === totalPages}\">\n        <a class=\"page-link\" (click)=\"changePage(page + 1)\">\n          <i class=\"fa fa-chevron-circle-right\"></i>\n        </a>\n      </li>\n    </ul>\n  </nav>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/timeline/timeline.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimelineComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_post_service__ = __webpack_require__("../../../../../src/app/services/post.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TimelineComponent = /** @class */ (function () {
    function TimelineComponent(postService, route) {
        this.postService = postService;
        this.route = route;
        this.ordering = 'date_created';
        this.ascending = '-';
        this.page = 1;
    }
    TimelineComponent.prototype.ngOnInit = function () {
        this.getPosts();
    };
    TimelineComponent.prototype.getPosts = function () {
        var _this = this;
        var orderFilter = this.ascending + this.ordering;
        this.postService.getPosts(this.page, orderFilter)
            .subscribe(function (resp) {
            _this.posts = resp['results'];
            _this.postsOnPage = _this.posts.length;
            _this.totalPosts = resp['count'];
            _this.totalPages = Math.ceil(_this.totalPosts / 10);
        });
    };
    TimelineComponent.prototype.changeOrder = function (ordering, ascending) {
        this.ordering = ordering;
        this.ascending = ascending;
        this.getPosts();
    };
    TimelineComponent.prototype.changePage = function (newPage) {
        this.page = newPage;
        this.getPosts();
    };
    TimelineComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-timeline',
            template: __webpack_require__("../../../../../src/app/components/timeline/timeline.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/timeline/timeline.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_post_service__["a" /* PostService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], TimelineComponent);
    return TimelineComponent;
}());



/***/ }),

/***/ "../../../../../src/app/models/login.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Login; });
var Login = /** @class */ (function () {
    function Login() {
    }
    return Login;
}());



/***/ }),

/***/ "../../../../../src/app/models/post.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Post; });
var Post = /** @class */ (function () {
    function Post() {
    }
    return Post;
}());



/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]().set('Content-Type', 'application/json');
    }
    AuthService.prototype.isValid = function () {
        if (localStorage.getItem('token')) {
            return true;
        }
        return false;
    };
    AuthService.prototype.login = function (loginForm) {
        var url = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].base_url + "/api/login/";
        return this.http.post(url, loginForm, { headers: this.headers });
    };
    AuthService.prototype.getAWSKeys = function () {
        var url = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].base_url + "/api/aws_tokens/";
        return this.http.get(url);
    };
    AuthService.prototype.logout = function () {
        localStorage.clear();
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/services/post.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PostService = /** @class */ (function () {
    function PostService(http) {
        this.http = http;
    }
    PostService.prototype.getPosts = function (page_number, ordering) {
        var url = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].base_url + "/api/post/?page=" + page_number + "&ordering=" + ordering;
        return this.http.get(url);
    };
    PostService.prototype.getPost = function (uuid) {
        var url = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].base_url + "/api/post/" + uuid + "/";
        return this.http.get(url);
    };
    PostService.prototype.addPost = function (body) {
        var url = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].base_url + "/api/post/";
        return this.http.post(url, body);
    };
    PostService.prototype.updatePost = function (uuid, body) {
        var url = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].base_url + "/api/post/" + uuid + "/";
        return this.http.put(url, body);
    };
    PostService.prototype.archivePost = function (uuid) {
        var url = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].base_url + "/api/post/" + uuid + "/archive/";
        return this.http.post(url, {});
    };
    PostService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], PostService);
    return PostService;
}());



/***/ }),

/***/ "../../../../../src/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.getUser = function () {
        if (this.user) {
            return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["a" /* of */])(this.user);
        }
        var url = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].base_url + "/api/user/account/";
        return this.http.get(url);
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    base_url: 'https://gztimeline.herokuapp.com',
    aws_url: 'https://s3.us-east-1.amazonaws.com/greta-zach-timeline/',
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bm": "../../../../moment/locale/bm.js",
	"./bm.js": "../../../../moment/locale/bm.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es-us": "../../../../moment/locale/es-us.js",
	"./es-us.js": "../../../../moment/locale/es-us.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./gu": "../../../../moment/locale/gu.js",
	"./gu.js": "../../../../moment/locale/gu.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./mt": "../../../../moment/locale/mt.js",
	"./mt.js": "../../../../moment/locale/mt.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map