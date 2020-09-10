(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AppLogin.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/AppLogin.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      email: "ahsan.web.ml@gmail.com",
      password: "Ahsan@2020",
      rememberMe: false,
      logged: UserClass.loggedIn(),
      showPass: false
    };
  },
  methods: {
    login: function login() {
      var _this = this;

      axios.post("/login", {
        password: this.password,
        email: this.email,
        remember_me: this.rememberMe
      }).then(function (res) {
        console.log(res.data);
        UserClass.storeToken(res.data);

        _this.$router.push('/dashboard');
      })["catch"](function (err) {
        return alert(err);
      });
    }
  },
  beforeCreate: function beforeCreate() {
    if (UserClass.loggedIn()) {
      this.$router.push('/dashboard');
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AppLogin.vue?vue&type=template&id=19a6a333&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/AppLogin.vue?vue&type=template&id=19a6a333& ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "main",
    {
      staticClass: "d-flex flex-column flex-grow-1 justify-content-center",
      staticStyle: {
        "background-image":
          "url('https://res.cloudinary.com/ahsan-zaman/image/upload/w_1366,ar_16:9,c_fill,q_50/v1599470366/pexels-skinny-alien-2318554_zr4pyg.webp')"
      }
    },
    [
      _c(
        "div",
        {
          staticClass: "card mb-3 w-100 mx-auto",
          staticStyle: {
            "max-width": "25rem",
            "min-width": "320px",
            "background-color": "rgba(256,256,256,.9)"
          }
        },
        [
          _vm._m(0),
          _vm._v(" "),
          _c("div", { staticClass: "card-body" }, [
            _c("div", { staticClass: "mb-3" }, [
              _c(
                "label",
                { staticClass: "form-label", attrs: { for: "Email" } },
                [_vm._v("Email")]
              ),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.email,
                    expression: "email"
                  }
                ],
                staticClass: "form-control",
                attrs: { type: "text", id: "Email", placeholder: "Jhon Doe" },
                domProps: { value: _vm.email },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.email = $event.target.value
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "mb-3" }, [
              _c(
                "label",
                { staticClass: "form-label", attrs: { for: "Password" } },
                [_vm._v("Password")]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "input-group" }, [
                (_vm.showPass ? "text" : "password") === "checkbox"
                  ? _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.password,
                          expression: "password"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        id: "Password",
                        placeholder: "Another input placeholder",
                        type: "checkbox"
                      },
                      domProps: {
                        checked: Array.isArray(_vm.password)
                          ? _vm._i(_vm.password, null) > -1
                          : _vm.password
                      },
                      on: {
                        change: function($event) {
                          var $$a = _vm.password,
                            $$el = $event.target,
                            $$c = $$el.checked ? true : false
                          if (Array.isArray($$a)) {
                            var $$v = null,
                              $$i = _vm._i($$a, $$v)
                            if ($$el.checked) {
                              $$i < 0 && (_vm.password = $$a.concat([$$v]))
                            } else {
                              $$i > -1 &&
                                (_vm.password = $$a
                                  .slice(0, $$i)
                                  .concat($$a.slice($$i + 1)))
                            }
                          } else {
                            _vm.password = $$c
                          }
                        }
                      }
                    })
                  : (_vm.showPass ? "text" : "password") === "radio"
                  ? _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.password,
                          expression: "password"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        id: "Password",
                        placeholder: "Another input placeholder",
                        type: "radio"
                      },
                      domProps: { checked: _vm._q(_vm.password, null) },
                      on: {
                        change: function($event) {
                          _vm.password = null
                        }
                      }
                    })
                  : _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.password,
                          expression: "password"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        id: "Password",
                        placeholder: "Another input placeholder",
                        type: _vm.showPass ? "text" : "password"
                      },
                      domProps: { value: _vm.password },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.password = $event.target.value
                        }
                      }
                    }),
                _vm._v(" "),
                _c(
                  "span",
                  {
                    staticClass: "input-group-text hover",
                    on: {
                      click: function($event) {
                        _vm.showPass = !_vm.showPass
                      }
                    }
                  },
                  [
                    _c(
                      "svg",
                      {
                        staticClass: "bi",
                        attrs: {
                          width: "20",
                          height: "20",
                          fill: "currentColor"
                        }
                      },
                      [
                        _c("use", {
                          attrs: {
                            "xlink:href":
                              "/assets/icons/bootstrap-icons.svg#" +
                              (_vm.showPass ? "eye-slash" : "eye")
                          }
                        })
                      ]
                    )
                  ]
                )
              ])
            ]),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "btn btn-block btn-primary mb-3",
                on: { click: _vm.login }
              },
              [_vm._v("Login")]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "mb-3" }, [
              _c("label", { attrs: { for: "gridCheck" } }, [
                _vm._v("\n                    Remember me\n                ")
              ]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.rememberMe,
                    expression: "rememberMe"
                  }
                ],
                attrs: { type: "checkbox", id: "gridCheck" },
                domProps: {
                  checked: Array.isArray(_vm.rememberMe)
                    ? _vm._i(_vm.rememberMe, null) > -1
                    : _vm.rememberMe
                },
                on: {
                  change: function($event) {
                    var $$a = _vm.rememberMe,
                      $$el = $event.target,
                      $$c = $$el.checked ? true : false
                    if (Array.isArray($$a)) {
                      var $$v = null,
                        $$i = _vm._i($$a, $$v)
                      if ($$el.checked) {
                        $$i < 0 && (_vm.rememberMe = $$a.concat([$$v]))
                      } else {
                        $$i > -1 &&
                          (_vm.rememberMe = $$a
                            .slice(0, $$i)
                            .concat($$a.slice($$i + 1)))
                      }
                    } else {
                      _vm.rememberMe = $$c
                    }
                  }
                }
              })
            ]),
            _vm._v(" "),
            _vm._m(1)
          ])
        ]
      ),
      _vm._v(" "),
      _vm._m(2)
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("h2", [_vm._v("Login")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "d-flex" }, [
      _c("a", { attrs: { href: "#" } }, [_vm._v("Forget your password?")]),
      _vm._v(" "),
      _c("a", { staticClass: "ml-auto", attrs: { href: "#" } }, [
        _vm._v("Use custom domain")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { attrs: { align: "center" } }, [
      _c("span", { staticClass: "mx-3 link-light" }, [
        _vm._v("Not a customer?")
      ]),
      _vm._v(" "),
      _c("button", { staticClass: "btn btn-outline-light" }, [
        _vm._v("Try for free")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/AppLogin.vue":
/*!**********************************************!*\
  !*** ./resources/js/components/AppLogin.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppLogin_vue_vue_type_template_id_19a6a333___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppLogin.vue?vue&type=template&id=19a6a333& */ "./resources/js/components/AppLogin.vue?vue&type=template&id=19a6a333&");
/* harmony import */ var _AppLogin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppLogin.vue?vue&type=script&lang=js& */ "./resources/js/components/AppLogin.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AppLogin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AppLogin_vue_vue_type_template_id_19a6a333___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AppLogin_vue_vue_type_template_id_19a6a333___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/AppLogin.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/AppLogin.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/components/AppLogin.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppLogin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./AppLogin.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AppLogin.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppLogin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/AppLogin.vue?vue&type=template&id=19a6a333&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/AppLogin.vue?vue&type=template&id=19a6a333& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppLogin_vue_vue_type_template_id_19a6a333___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./AppLogin.vue?vue&type=template&id=19a6a333& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AppLogin.vue?vue&type=template&id=19a6a333&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppLogin_vue_vue_type_template_id_19a6a333___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppLogin_vue_vue_type_template_id_19a6a333___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);