(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/StrategicSourcing.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/StrategicSourcing.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SideBar_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SideBar.vue */ "./resources/js/components/SideBar.vue");
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
  components: {
    SideBar: _SideBar_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      links: [{
        name: 'Dashboard',
        link: '/dashboard',
        show: true,
        icon: 'bar-chart-line'
      }, {
        name: 'Stratagic Sourcing',
        link: '/strategic-sourcing',
        show: true,
        icon: 'file-check'
      }, {
        name: 'e-Auction',
        link: '/e-auction',
        show: true,
        icon: 'tags'
      }, {
        name: 'Approval Center',
        link: '/approval-center',
        show: true,
        icon: 'check-circle'
      }, {
        name: 'Invoice Management',
        link: '/invoice-management',
        show: true,
        icon: 'file-spreadsheet'
      }, {
        name: 'Supplier Management',
        link: '/supplier-management',
        show: true,
        icon: 'people'
      }, {
        name: 'Settings',
        link: '/setting',
        show: false,
        icon: 'gear'
      }]
    };
  },
  beforeCreate: function beforeCreate() {
    if (!UserClass.loggedIn()) {
      this.$router.push('/');
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/StrategicSourcing.vue?vue&type=template&id=7ffdf8bd&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/StrategicSourcing.vue?vue&type=template&id=7ffdf8bd& ***!
  \********************************************************************************************************************************************************************************************************************/
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
    "div",
    { staticClass: "row" },
    [
      _c("side-bar", { attrs: { links: _vm.links } }),
      _vm._v(" "),
      _c("main", { staticClass: "col-md-9 ml-sm-auto col-lg-10 px-md-4" }, [
        _c("div", [
          _c(
            "div",
            {
              staticClass:
                "d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 border-bottom"
            },
            [
              _c("h1", { staticClass: "h2" }, [_vm._v("Stratagic Sourcing")]),
              _vm._v(" "),
              _c("div", { staticClass: "btn-toolbar mb-2 mb-md-0" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-sm btn-primary",
                    attrs: { type: "button" }
                  },
                  [
                    _c(
                      "svg",
                      {
                        staticClass: "bi",
                        attrs: {
                          width: "18",
                          height: "18",
                          fill: "currentColor"
                        }
                      },
                      [
                        _c("use", {
                          attrs: {
                            "xlink:href":
                              "/assets/icons/bootstrap-icons.svg#plus"
                          }
                        })
                      ]
                    ),
                    _vm._v("\n                    New RFP\n                ")
                  ]
                )
              ])
            ]
          ),
          _vm._v(" "),
          _vm._m(0)
        ])
      ])
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "container" }, [
      _c("div", { staticClass: "row align-items-start" }, [
        _c("div", { staticClass: "col-12 col-md-6" }, [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-4 p-2" }, [
              _c("div", { staticClass: "bg-red rounded-lg shadow" }, [
                _c(
                  "span",
                  {
                    staticClass: "d-block px-3 py-2",
                    staticStyle: { "background-color": "rgba(0,0,0,.1)" }
                  },
                  [_vm._v("Sourcing")]
                ),
                _vm._v(" "),
                _c("h3", { staticClass: "p-3" }, [
                  _vm._v(
                    "\n                                    1 project\n                                "
                  )
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-4 p-2" }, [
              _c("div", { staticClass: "bg-yellow rounded-lg shadow" }, [
                _c(
                  "span",
                  {
                    staticClass: "d-block px-3 py-2",
                    staticStyle: { "background-color": "rgba(0,0,0,.1)" }
                  },
                  [_vm._v("Awarded")]
                ),
                _vm._v(" "),
                _c("h3", { staticClass: "p-3" }, [
                  _vm._v(
                    "\n                                    0 Awarded\n                                "
                  )
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-4 p-2" }, [
              _c("div", { staticClass: "bg-green rounded-lg shadow" }, [
                _c(
                  "span",
                  {
                    staticClass: "d-block px-3 py-2",
                    staticStyle: { "background-color": "rgba(0,0,0,.1)" }
                  },
                  [_vm._v("Completed")]
                ),
                _vm._v(" "),
                _c("h3", { staticClass: "p-3" }, [
                  _vm._v(
                    "\n                                    0 Completed\n                                "
                  )
                ])
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-12 col-md-6 bg-primary" }, [
          _vm._v(
            "\n                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi sit eum, totam aliquid officiis id aut earum sed accusamus tempore, perspiciatis possimus iure molestiae culpa nisi. Enim eos placeat sint.\n                "
          )
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/StrategicSourcing.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/StrategicSourcing.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _StrategicSourcing_vue_vue_type_template_id_7ffdf8bd___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StrategicSourcing.vue?vue&type=template&id=7ffdf8bd& */ "./resources/js/components/StrategicSourcing.vue?vue&type=template&id=7ffdf8bd&");
/* harmony import */ var _StrategicSourcing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StrategicSourcing.vue?vue&type=script&lang=js& */ "./resources/js/components/StrategicSourcing.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _StrategicSourcing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _StrategicSourcing_vue_vue_type_template_id_7ffdf8bd___WEBPACK_IMPORTED_MODULE_0__["render"],
  _StrategicSourcing_vue_vue_type_template_id_7ffdf8bd___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/StrategicSourcing.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/StrategicSourcing.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/StrategicSourcing.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StrategicSourcing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./StrategicSourcing.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/StrategicSourcing.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StrategicSourcing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/StrategicSourcing.vue?vue&type=template&id=7ffdf8bd&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/StrategicSourcing.vue?vue&type=template&id=7ffdf8bd& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StrategicSourcing_vue_vue_type_template_id_7ffdf8bd___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./StrategicSourcing.vue?vue&type=template&id=7ffdf8bd& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/StrategicSourcing.vue?vue&type=template&id=7ffdf8bd&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StrategicSourcing_vue_vue_type_template_id_7ffdf8bd___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StrategicSourcing_vue_vue_type_template_id_7ffdf8bd___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);