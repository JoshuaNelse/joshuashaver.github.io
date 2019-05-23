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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html class='body_background'>    \n<app-graph></app-graph>\n</html>"

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


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'invest-tool';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _graph_graph_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./graph/graph.component */ "./src/app/graph/graph.component.ts");



 //<-- NgModel lives here


var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _graph_graph_component__WEBPACK_IMPORTED_MODULE_5__["GraphComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/graph/graph.component.css":
/*!*******************************************!*\
  !*** ./src/app/graph/graph.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form_list{\r\n    margin:5px;\r\n    list-style-type: none;\r\n    width:350px;\r\n    border-radius: 4px;\r\n    background-color: black;\r\n    color:white; \r\n    opacity: .8;\r\n    padding:5px;\r\n}\r\n.form_list li {\r\n    font-size: 1.2em;\r\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\r\n    padding: 3px;\r\n}\r\n.form_list li input{\r\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\r\n    border-radius: 4px;\r\n    float: right;\r\n    padding: 3px;\r\n}\r\n.form_list li div{\r\n    text-align: center;\r\n    width:35%;\r\n    float:center;\r\n    border-radius: 5px;\r\n    padding:5px;\r\n    background: gray;\r\n    opacity: .8;\r\n    margin-left:25%;\r\n    margin-top: 5px;\r\n}\r\n.form_list li div:hover{\r\n    background-color:green;\r\n}\r\n.test_div {\r\n    float: left;\r\n    display: inline;\r\n    padding: 5px;\r\n    width:240px;\r\n}\r\n.test_div ul{\r\n    padding: 5px;\r\n    background-color: black;\r\n    opacity: .8;\r\n    color: white;\r\n    list-style-type: none;\r\n    border-radius: 5px;\r\n}\r\n.test_div ul li{\r\n    padding: 5px;\r\n}\r\n.year_list li a{\r\n    float:right;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ3JhcGgvZ3JhcGguY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVixxQkFBcUI7SUFDckIsV0FBVztJQUNYLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsV0FBVztJQUNYLFdBQVc7SUFDWCxXQUFXO0FBQ2Y7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQix3RUFBd0U7SUFDeEUsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksd0VBQXdFO0lBQ3hFLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osWUFBWTtBQUNoQjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGVBQWU7SUFDZixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLFdBQVc7SUFDWCxlQUFlO0lBQ2YsWUFBWTtJQUNaLFdBQVc7QUFDZjtBQUNBO0lBQ0ksWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFFQTtJQUNJLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2dyYXBoL2dyYXBoLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybV9saXN0e1xyXG4gICAgbWFyZ2luOjVweDtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgIHdpZHRoOjM1MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBjb2xvcjp3aGl0ZTsgXHJcbiAgICBvcGFjaXR5OiAuODtcclxuICAgIHBhZGRpbmc6NXB4O1xyXG59XHJcbi5mb3JtX2xpc3QgbGkge1xyXG4gICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgIGZvbnQtZmFtaWx5OiAnRnJhbmtsaW4gR290aGljIE1lZGl1bScsICdBcmlhbCBOYXJyb3cnLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgIHBhZGRpbmc6IDNweDtcclxufVxyXG4uZm9ybV9saXN0IGxpIGlucHV0e1xyXG4gICAgZm9udC1mYW1pbHk6ICdGcmFua2xpbiBHb3RoaWMgTWVkaXVtJywgJ0FyaWFsIE5hcnJvdycsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgcGFkZGluZzogM3B4O1xyXG59XHJcblxyXG4uZm9ybV9saXN0IGxpIGRpdntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOjM1JTtcclxuICAgIGZsb2F0OmNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHBhZGRpbmc6NXB4O1xyXG4gICAgYmFja2dyb3VuZDogZ3JheTtcclxuICAgIG9wYWNpdHk6IC44O1xyXG4gICAgbWFyZ2luLWxlZnQ6MjUlO1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG59XHJcbi5mb3JtX2xpc3QgbGkgZGl2OmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpncmVlbjtcclxufVxyXG4udGVzdF9kaXYge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICB3aWR0aDoyNDBweDtcclxufVxyXG4udGVzdF9kaXYgdWx7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIG9wYWNpdHk6IC44O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcbi50ZXN0X2RpdiB1bCBsaXtcclxuICAgIHBhZGRpbmc6IDVweDtcclxufVxyXG5cclxuLnllYXJfbGlzdCBsaSBhe1xyXG4gICAgZmxvYXQ6cmlnaHQ7XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/graph/graph.component.html":
/*!********************************************!*\
  !*** ./src/app/graph/graph.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ul class=\"form_list\">\n  <li>Initial Amount:<input type=\"number\" [(ngModel)]=\"initialAmount\" placeholder='initial amount'/></li>\n  <li>Yearly contribution: <input type=\"number\" [(ngModel)]=\"yearlyContribution\" placeholder='Yearly contribution'/> </li>\n  <li>Interest return:<input type=\"number\" [(ngModel)]=\"interestReturn\" placeholder='Interest return'/></li>\n  <li> <div (click)='recalculate()'>Calculate</div></li>\n</ul>\n\n<div class=\"test_div\">\n  <ul class=\"year_list\">\n    <li>Years<a>Dollar Amount</a></li>\n      <li *ngFor=\"let year of yearList1; let i=index\" >\n          {{year.yearNumber}} <a>{{year.dollarAmount}}</a>\n      </li>\n    </ul>\n</div>\n<div class=\"test_div\">\n  <ul class=\"year_list\">\n    <li>Years<a>Dollar Amount</a></li>\n      <li *ngFor=\"let year of yearList2; let i=index\" >\n            {{year.yearNumber}} <a>{{year.dollarAmount}}</a>\n      </li>\n  </ul>\n</div>\n<div class=\"test_div\">\n    <ul class=\"year_list\">\n      <li>Years<a>Dollar Amount</a></li>\n        <li *ngFor=\"let year of yearList3; let i=index\" >\n              {{year.yearNumber}} <a>{{year.dollarAmount}}</a>\n        </li>\n    </ul>\n  </div>\n\n<form>\n\n</form>\n\n"

/***/ }),

/***/ "./src/app/graph/graph.component.ts":
/*!******************************************!*\
  !*** ./src/app/graph/graph.component.ts ***!
  \******************************************/
/*! exports provided: GraphComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphComponent", function() { return GraphComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GraphComponent = /** @class */ (function () {
    function GraphComponent() {
        this.yearList1 = [];
        this.yearList2 = [];
        this.yearList3 = [];
        this.initialAmount = 1000;
        this.yearlyContribution = 1000;
        this.interestReturn = 10;
    }
    GraphComponent.prototype.ngOnInit = function () {
        this.recalculate();
    };
    GraphComponent.prototype.recalculate = function () {
        console.log("click actuated");
        this.yearList1 = [];
        this.yearList2 = [];
        this.yearList3 = [];
        var numOfYears = 30;
        var money = this.initialAmount;
        for (var i = 1; i <= numOfYears; i++) {
            var year = new yearSummary();
            year.yearNumber = i;
            money += money * (this.interestReturn / 100) + this.yearlyContribution;
            year.dollarAmount = '$' + Number(Math.round(money * 100) / 100).toLocaleString();
            if (i <= 10) {
                this.yearList1.push(year);
            }
            else {
                (i <= 20) ? this.yearList2.push(year) : this.yearList3.push(year);
            }
        }
    };
    GraphComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-graph',
            template: __webpack_require__(/*! ./graph.component.html */ "./src/app/graph/graph.component.html"),
            styles: [__webpack_require__(/*! ./graph.component.css */ "./src/app/graph/graph.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GraphComponent);
    return GraphComponent;
}());

var yearSummary = /** @class */ (function () {
    function yearSummary() {
        this.yearNumber = 0;
        this.dollarAmount = "";
    }
    return yearSummary;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\joshs\projects\invest-tool\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map