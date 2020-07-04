function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _rest_rest_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./rest/rest.component */
    "./src/app/rest/rest.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _mqtt_mqtt_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./mqtt/mqtt.component */
    "./src/app/mqtt/mqtt.component.ts");

    var routes = [{
      path: 'mqtt',
      component: _mqtt_mqtt_component__WEBPACK_IMPORTED_MODULE_3__["MqttComponent"]
    }, {
      path: 'rest',
      component: _rest_rest_component__WEBPACK_IMPORTED_MODULE_0__["RestComponent"]
    }, {
      path: '',
      redirectTo: 'mqtt',
      pathMatch: 'full'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var electron__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! electron */
    "electron");
    /* harmony import */


    var electron__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(electron__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _ipc_ipc_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./ipc/ipc.service */
    "./src/app/ipc/ipc.service.ts");
    /* harmony import */


    var _mqtt_mqtt_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./mqtt/mqtt.component */
    "./src/app/mqtt/mqtt.component.ts");
    /* harmony import */


    var _rest_rest_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./rest/rest.component */
    "./src/app/rest/rest.component.ts");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(ipcRenderer, ref) {
        _classCallCheck(this, AppComponent);

        this.ipcRenderer = ipcRenderer;
        this.ref = ref;
        this.title = 'Settings';
        this.config = {
          server: {}
        };
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.ipcRenderer.on('server-settings', function (_, conf) {
            _this.config = Object.assign({}, conf);
            console.log('ngonverinit');

            _this.ref.detectChanges();
          });
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.ipcRenderer.send('get-server-settings');
        }
      }, {
        key: "mqttEvent",
        value: function mqttEvent(fg) {
          this.mqttFg = fg;
        }
      }, {
        key: "restEvent",
        value: function restEvent(fg) {
          this.restFg = fg;
        }
      }, {
        key: "sendForm",
        value: function sendForm() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var res;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (!(this.mqttFg.valid && this.restFg.valid)) {
                      _context.next = 20;
                      break;
                    }

                    this.config.server.mqtt.host = this.mqttFg.get('host').value;
                    this.config.server.mqtt.port = this.mqttFg.get('port').value;
                    this.config.server.mqtt.username = this.mqttFg.get('username').value;
                    this.config.server.mqtt.password = this.mqttFg.get('password').value;
                    this.config.meta.applicationId = this.mqttFg.get('applicationId').value;
                    this.config.server.restApi.scheme = this.restFg.get('scheme').value;
                    this.config.server.restApi.host = this.restFg.get('host').value;
                    this.config.server.restApi.port = this.restFg.get('port').value;
                    this.config.server.restApi.username = this.restFg.get('username').value;
                    this.config.server.restApi.password = this.restFg.get('password').value;
                    this.config.server.restApi.uri = this.restFg.get('uri').value;
                    this.config.server.restApi.uriLogin = this.restFg.get('uriLogin').value;
                    this.ipcRenderer.send('save-configuration', this.config);
                    _context.next = 16;
                    return electron__WEBPACK_IMPORTED_MODULE_2__["remote"].dialog.showMessageBox({
                      type: 'none',
                      title: 'Saved',
                      message: 'SETTINGS SAVED!',
                      detail: 'Application needs to relaunch for changes to properly take effect.',
                      buttons: ['Relaunch Later', 'Relaunch Now'],
                      cancelId: 0
                    });

                  case 16:
                    res = _context.sent;

                    if (res.response === 1) {
                      electron__WEBPACK_IMPORTED_MODULE_2__["remote"].app.relaunch();
                      electron__WEBPACK_IMPORTED_MODULE_2__["remote"].app.quit();
                    }

                    _context.next = 21;
                    break;

                  case 20:
                    electron__WEBPACK_IMPORTED_MODULE_2__["remote"].dialog.showErrorBox('Invalid Input', 'Some settings you have entered are not valid. Please check again before saving.');

                  case 21:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "resetConfigurations",
        value: function resetConfigurations() {
          this.config = this.ipcRenderer.sendSync('get-default-configuration');
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ipc_ipc_service__WEBPACK_IMPORTED_MODULE_3__["IpcService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 19,
      vars: 2,
      consts: [["id", "myTab", "role", "tablist", 1, "nav", "nav-tabs", 2, "margin", "0px 10px"], ["role", "presentation", 1, "nav-item"], ["id", "mqtt-tab", "data-toggle", "tab", "href", "#mqtt", "role", "tab", "aria-controls", "mqtt", "aria-selected", "true", 1, "nav-link", "active"], ["id", "rest-tab", "data-toggle", "tab", "href", "#rest", "role", "tab", "aria-controls", "rest", "aria-selected", "false", 1, "nav-link"], ["id", "myTabContent", 1, "tab-content"], ["id", "mqtt", "role", "tabpanel", "aria-labelledby", "mqtt-tab", 1, "tab-pane", "fade", "show", "active"], [3, "config", "mqttEvent"], ["id", "rest", "role", "tabpanel", "aria-labelledby", "rest-tab", 1, "tab-pane", "fade"], [3, "config", "restEvent"], [1, "text-center"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click"], ["type", "button", "id", "save", 1, "btn", "btn-primary", 3, "click"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "li", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "MQTT");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "li", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "REST");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "app-mqtt", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mqttEvent", function AppComponent_Template_app_mqtt_mqttEvent_10_listener($event) {
            return ctx.mqttEvent($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "app-rest", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("restEvent", function AppComponent_Template_app_rest_restEvent_13_listener($event) {
            return ctx.restEvent($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_Template_button_click_15_listener() {
            return ctx.resetConfigurations();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Reset to default");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_Template_button_click_17_listener() {
            return ctx.sendForm();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("config", ctx.config);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("config", ctx.config);
        }
      },
      directives: [_mqtt_mqtt_component__WEBPACK_IMPORTED_MODULE_4__["MqttComponent"], _rest_rest_component__WEBPACK_IMPORTED_MODULE_5__["RestComponent"]],
      styles: [".nav-item[_ngcontent-%COMP%] {\n  cursor: pointer;\n  width: 5rem;\n  text-align: center;\n}\n.nav-item[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.hide[_ngcontent-%COMP%] {\n  display: none;\n}\n.nav-link[_ngcontent-%COMP%] {\n  color: black;\n}\n.btn[_ngcontent-%COMP%] {\n  margin: 0 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxyYXlkaVxcRGVza3RvcFxcSGl2ZWNvcmVcXDNTIFRlY2hub2xvZ2llc1xcU21va2UgQWxhcm0gQXBwIDNTXFxNYWluIFByb2plY3RcXHNldHRpbmdzdmlldy9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDQ0o7QURBSTtFQUNJLGlCQUFBO0FDRVI7QURFQTtFQUNJLGFBQUE7QUNDSjtBREVBO0VBQ0ksWUFBQTtBQ0NKO0FERUE7RUFDSSxhQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2LWl0ZW17XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB3aWR0aDogNXJlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIC5hY3RpdmUge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG59XHJcblxyXG4uaGlkZXtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5uYXYtbGluayB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5idG4ge1xyXG4gICAgbWFyZ2luOiAwIDVweDtcclxufSIsIi5uYXYtaXRlbSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgd2lkdGg6IDVyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5uYXYtaXRlbSAuYWN0aXZlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5oaWRlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLm5hdi1saW5rIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4uYnRuIHtcbiAgbWFyZ2luOiAwIDVweDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], function () {
        return [{
          type: _ipc_ipc_service__WEBPACK_IMPORTED_MODULE_3__["IpcService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _mqtt_mqtt_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./mqtt/mqtt.component */
    "./src/app/mqtt/mqtt.component.ts");
    /* harmony import */


    var _ipc_ipc_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./ipc/ipc.service */
    "./src/app/ipc/ipc.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _rest_rest_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./rest/rest.component */
    "./src/app/rest/rest.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_ipc_ipc_service__WEBPACK_IMPORTED_MODULE_5__["IpcService"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _mqtt_mqtt_component__WEBPACK_IMPORTED_MODULE_4__["MqttComponent"], _rest_rest_component__WEBPACK_IMPORTED_MODULE_7__["RestComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _mqtt_mqtt_component__WEBPACK_IMPORTED_MODULE_4__["MqttComponent"], _rest_rest_component__WEBPACK_IMPORTED_MODULE_7__["RestComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]],
          providers: [_ipc_ipc_service__WEBPACK_IMPORTED_MODULE_5__["IpcService"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/ipc/ipc.service.ts":
  /*!************************************!*\
    !*** ./src/app/ipc/ipc.service.ts ***!
    \************************************/

  /*! exports provided: IpcService */

  /***/
  function srcAppIpcIpcServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IpcService", function () {
      return IpcService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var IpcService =
    /*#__PURE__*/
    function () {
      function IpcService() {
        _classCallCheck(this, IpcService);

        this._ipc = void 0;

        if (window.require) {
          try {
            this._ipc = window.require('electron').ipcRenderer;
          } catch (e) {
            throw e;
          }
        } else {
          console.warn('Electron\'s IPC was not loaded');
        }
      }

      _createClass(IpcService, [{
        key: "on",
        value: function on(channel, listener) {
          if (!this._ipc) {
            return;
          }

          this._ipc.on(channel, listener);
        }
      }, {
        key: "once",
        value: function once(channel, listener) {
          if (!this._ipc) {
            return;
          }

          this._ipc.once(channel, listener);
        }
      }, {
        key: "send",
        value: function send(channel) {
          var _this$_ipc;

          if (!this._ipc) {
            return;
          }

          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }

          (_this$_ipc = this._ipc).send.apply(_this$_ipc, [channel].concat(args));
        }
      }, {
        key: "sendSync",
        value: function sendSync(channel) {
          var _this$_ipc2;

          if (!this._ipc) {
            return;
          }

          for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            args[_key2 - 1] = arguments[_key2];
          }

          return (_this$_ipc2 = this._ipc).sendSync.apply(_this$_ipc2, [channel].concat(args));
        }
      }, {
        key: "off",
        value: function off(event, listener) {
          if (!this._ipc) {
            return;
          }

          return this._ipc.off(event, listener);
        }
      }]);

      return IpcService;
    }();

    IpcService.ɵfac = function IpcService_Factory(t) {
      return new (t || IpcService)();
    };

    IpcService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: IpcService,
      factory: IpcService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IpcService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/mqtt/mqtt.component.ts":
  /*!****************************************!*\
    !*** ./src/app/mqtt/mqtt.component.ts ***!
    \****************************************/

  /*! exports provided: MqttComponent */

  /***/
  function srcAppMqttMqttComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MqttComponent", function () {
      return MqttComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var MqttComponent =
    /*#__PURE__*/
    function () {
      function MqttComponent() {
        _classCallCheck(this, MqttComponent);

        this.mqttEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.mqtt = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
          host: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
          port: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](0),
          username: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
          password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
          applicationId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
      }

      _createClass(MqttComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.mqtt.valueChanges.subscribe(function () {
            _this2.mqttEvent.emit(_this2.mqtt);
          });
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges() {
          try {
            this.mqtt.patchValue(this.config.server.mqtt);
            this.mqtt.get('applicationId').setValue(this.config.meta.applicationId);
          } catch (e) {
            if (!(e instanceof TypeError)) {
              console.error(e);
            }
          }
        }
      }]);

      return MqttComponent;
    }();

    MqttComponent.ɵfac = function MqttComponent_Factory(t) {
      return new (t || MqttComponent)();
    };

    MqttComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MqttComponent,
      selectors: [["app-mqtt"]],
      inputs: {
        config: "config"
      },
      outputs: {
        mqttEvent: "mqttEvent"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      decls: 27,
      vars: 1,
      consts: [[3, "formGroup"], [1, "input-group", "mb-3"], [1, "input-group-prepend", "invalid"], ["id", "basic-addon1", 1, "input-group-text"], ["type", "text", "formControlName", "host", "placeholder", "IP or Domain", "aria-label", "Host", "required", "", 1, "form-control"], [1, "input-group-prepend"], ["type", "number", "formControlName", "port", "max", "65535", "min", "0", "placeholder", "443", "aria-label", "Port", "required", "", 1, "form-control"], ["type", "text", "formControlName", "username", "placeholder", "john.doe", "aria-label", "Username", 1, "form-control"], ["type", "password", "formControlName", "password", "placeholder", "******", "aria-label", "Password", 1, "form-control"], ["type", "number", "formControlName", "applicationId", "min", "1", "placeholder", "1", "aria-label", "Port", "required", "", 1, "form-control"]],
      template: function MqttComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Host");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Port");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Username");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Application ID");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.mqtt);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"]],
      styles: ["input[_ngcontent-%COMP%]::-webkit-outer-spin-button, input[_ngcontent-%COMP%]::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\nform[_ngcontent-%COMP%] {\n  margin: 0px 15px;\n}\n\n[_ngcontent-%COMP%]::-moz-placeholder {\n  color: #b9b9b9;\n}\n\n[_ngcontent-%COMP%]::-ms-input-placeholder {\n  color: #b9b9b9;\n}\n\n[_ngcontent-%COMP%]::placeholder {\n  color: #b9b9b9;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXF0dC9DOlxcVXNlcnNcXHJheWRpXFxEZXNrdG9wXFxIaXZlY29yZVxcM1MgVGVjaG5vbG9naWVzXFxTbW9rZSBBbGFybSBBcHAgM1NcXE1haW4gUHJvamVjdFxcc2V0dGluZ3N2aWV3L3NyY1xcYXBwXFxtcXR0XFxtcXR0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tcXR0L21xdHQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0JFOztFQUVFLHdCQUFBO0VBQ0EsU0FBQTtBQ25CSjs7QURxQkU7RUFHRSxnQkFBQTtBQ3BCSjs7QUR1QkE7RUFDSSxjQUFBO0FDcEJKOztBRG1CQTtFQUNJLGNBQUE7QUNwQko7O0FEbUJBO0VBQ0ksY0FBQTtBQ3BCSiIsImZpbGUiOiJzcmMvYXBwL21xdHQvbXF0dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vICo6Zm9jdXMge1xyXG4vLyAgICAgb3V0bGluZTogbm9uZTtcclxuLy8gICB9XHJcbi8vICAgYnV0dG9uIHtcclxuLy8gICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbi8vICAgICAvKiBib3JkZXItcmFkaXVzOiA1cHg7ICovXHJcbi8vICAgICBwYWRkaW5nOiAxMHB4O1xyXG4vLyAgICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuLy8gICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAxMzIsIDI1NSk7XHJcbi8vICAgfVxyXG5cclxuLy8gICBhIHtcclxuLy8gICAgIGNvbG9yOiByZ2IoMCwgMTMyLCAyNTUpO1xyXG4vLyAgIH1cclxuLy8gICBpbnB1dCB7XHJcbi8vICAgICB3aWR0aDogMTAwJTtcclxuLy8gICAgIGhlaWdodDogMzBweDtcclxuLy8gICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbi8vICAgICAvKiBib3JkZXItcmFkaXVzOiA1cHg7ICovXHJcbi8vICAgfVxyXG4gIGlucHV0Ojotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uLFxyXG4gIGlucHV0Ojotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uIHtcclxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcbiAgZm9ybSB7XHJcbiAgICAvLyBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICAvLyBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gICAgbWFyZ2luOiAwcHggMTVweDtcclxuICB9XHJcblxyXG46OnBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOiByZ2IoMTg1LCAxODUsIDE4NSk7XHJcbn1cclxuIiwiaW5wdXQ6Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24sXG5pbnB1dDo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xufVxuXG5mb3JtIHtcbiAgbWFyZ2luOiAwcHggMTVweDtcbn1cblxuOjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjYjliOWI5O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MqttComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-mqtt',
          templateUrl: './mqtt.component.html',
          styleUrls: ['./mqtt.component.scss']
        }]
      }], function () {
        return [];
      }, {
        config: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        mqttEvent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/rest/rest.component.ts":
  /*!****************************************!*\
    !*** ./src/app/rest/rest.component.ts ***!
    \****************************************/

  /*! exports provided: RestComponent */

  /***/
  function srcAppRestRestComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RestComponent", function () {
      return RestComponent;
    });
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var RestComponent =
    /*#__PURE__*/
    function () {
      function RestComponent() {
        _classCallCheck(this, RestComponent);

        this.restEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.rest = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
          host: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
          uriLogin: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
          username: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
          password: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
          uri: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
          port: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](0),
          scheme: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('https://')
        });
      }

      _createClass(RestComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.rest.valueChanges.subscribe(function () {
            _this3.restEvent.emit(_this3.rest);
          });
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges() {
          try {
            this.rest.patchValue(this.config.server.restApi);
          } catch (e) {
            if (!(e instanceof TypeError)) {
              console.error(e);
            }
          }
        }
      }]);

      return RestComponent;
    }();

    RestComponent.ɵfac = function RestComponent_Factory(t) {
      return new (t || RestComponent)();
    };

    RestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: RestComponent,
      selectors: [["app-rest"]],
      inputs: {
        config: "config"
      },
      outputs: {
        restEvent: "restEvent"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
      decls: 42,
      vars: 1,
      consts: [[2, "margin", "0 15px"], [3, "formGroup"], [1, "input-group", "mb-3"], [1, "input-group-prepend"], ["for", "inputGroupSelect01", 1, "input-group-text"], ["id", "inputGroupSelect01", "formControlName", "scheme", "required", "", 1, "custom-select"], ["value", "http://"], ["selected", "", "value", "https://"], ["id", "basic-addon1", 1, "input-group-text"], ["type", "text", "formControlName", "host", "placeholder", "IP or Domain", "aria-label", "Host", "required", "", 1, "form-control"], ["type", "number", "formControlName", "port", "max", "65535", "min", "0", "placeholder", "443", "aria-label", "Port", "required", "", 1, "form-control"], ["type", "text", "formControlName", "username", "placeholder", "john.smith", "aria-label", "Username", 1, "form-control"], ["type", "password", "formControlName", "password", "placeholder", "******", "aria-label", "Password", 1, "form-control"], ["type", "text", "formControlName", "uriLogin", "placeholder", "/api/internal/login", "aria-label", "loginUrl", "required", "", 1, "form-control"], ["type", "text", "formControlName", "uri", "placeholder", "/api", "aria-label", "apiUrl", "required", "", 1, "form-control"]],
      template: function RestComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "form", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "label", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Scheme");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "select", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "option", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "http://");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "option", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "https://");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Host");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Port");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Username");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Login URL");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Base API URL");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.rest);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NumberValueAccessor"]],
      styles: ["input[_ngcontent-%COMP%]::-webkit-outer-spin-button, input[_ngcontent-%COMP%]::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzdC9DOlxcVXNlcnNcXHJheWRpXFxEZXNrdG9wXFxIaXZlY29yZVxcM1MgVGVjaG5vbG9naWVzXFxTbW9rZSBBbGFybSBBcHAgM1NcXE1haW4gUHJvamVjdFxcc2V0dGluZ3N2aWV3L3NyY1xcYXBwXFxyZXN0XFxyZXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9yZXN0L3Jlc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUsd0JBQUE7RUFDQSxTQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9yZXN0L3Jlc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dDo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbixcclxuaW5wdXQ6Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xyXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICBtYXJnaW46IDA7XHJcbn0iLCJpbnB1dDo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbixcbmlucHV0Ojotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICBtYXJnaW46IDA7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RestComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-rest',
          templateUrl: './rest.component.html',
          styleUrls: ['./rest.component.scss']
        }]
      }], function () {
        return [];
      }, {
        config: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        restEvent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\raydi\Desktop\Hivecore\3S Technologies\Smoke Alarm App 3S\Main Project\settingsview\src\main.ts */
    "./src/main.ts");
    /***/
  },

  /***/
  "electron":
  /*!***************************!*\
    !*** external "electron" ***!
    \***************************/

  /*! no static exports found */

  /***/
  function electron(module, exports) {
    module.exports = require("electron");
    /***/
  }
}, [[0, "runtime", "vendor"]]]); //# sourceMappingURL=main.js.map
//# sourceMappingURL=main.js.map