(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/SalesOperations.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/SalesOperations.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
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
        name: 'Sales',
        link: '/sales',
        show: true,
        icon: 'bag-check'
      }, {
        name: 'Lead Generation',
        link: '/lead-generation',
        show: true,
        icon: 'binoculars'
      }, {
        name: 'Sales Operations',
        link: '/sales-operations',
        show: true,
        icon: 'clipboard-data'
      }, {
        name: 'Sales Leadership',
        link: '/sales-leadership',
        show: true,
        icon: 'people'
      }, {
        name: 'Relationship Management',
        link: '/relationship-management',
        show: true,
        icon: 'hand-thumbs-up'
      }, {
        name: 'Sales Console',
        link: '/sales-console',
        show: true,
        icon: 'bar-chart-line'
      }]
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/SalesOperations.vue?vue&type=template&id=61f45e7d&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/SalesOperations.vue?vue&type=template&id=61f45e7d& ***!
  \******************************************************************************************************************************************************************************************************************/
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
    [_c("side-bar", { attrs: { links: _vm.links } }), _vm._v(" "), _vm._m(0)],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "main",
      { staticClass: "col-md-9 ml-sm-auto col-lg-10 px-md-4" },
      [
        _c("div", [
          _c(
            "div",
            {
              staticClass:
                "d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom"
            },
            [
              _c("h1", { staticClass: "h2" }, [_vm._v("Dashboard")]),
              _vm._v(" "),
              _c("div", { staticClass: "btn-toolbar mb-2 mb-md-0" }, [
                _c("div", { staticClass: "btn-group mr-2" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-sm btn-outline-secondary",
                      attrs: { type: "button" }
                    },
                    [_vm._v("Share")]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-sm btn-outline-secondary",
                      attrs: { type: "button" }
                    },
                    [_vm._v("Export")]
                  )
                ]),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass:
                      "btn btn-sm btn-outline-secondary dropdown-toggle",
                    attrs: { type: "button" }
                  },
                  [
                    _c("span", { attrs: { "data-feather": "calendar" } }),
                    _vm._v("\n                    This week\n                ")
                  ]
                )
              ])
            ]
          ),
          _vm._v(" "),
          _c("h2", [_vm._v("Sales Operations")]),
          _vm._v(" "),
          _c("div", { staticClass: "table-responsive" }, [
            _c("table", { staticClass: "table table-striped table-sm" }, [
              _c("thead", [
                _c("tr", [
                  _c("th", [_vm._v("#")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("Header")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("Header")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("Header")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("Header")])
                ])
              ]),
              _vm._v(" "),
              _c("tbody", [
                _c("tr", [
                  _c("td", [_vm._v("1,001")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("Lorem")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("ipsum")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("dolor")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("sit")])
                ]),
                _vm._v(" "),
                _c("tr", [
                  _c("td", [_vm._v("1,002")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("amet")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("consectetur")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("adipiscing")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("elit")])
                ]),
                _vm._v(" "),
                _c("tr", [
                  _c("td", [_vm._v("1,003")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("Integer")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("nec")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("odio")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("Praesent")])
                ]),
                _vm._v(" "),
                _c("tr", [
                  _c("td", [_vm._v("1,003")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("libero")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("Sed")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("cursus")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("ante")])
                ]),
                _vm._v(" "),
                _c("tr", [
                  _c("td", [_vm._v("1,004")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("dapibus")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("diam")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("Sed")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("nisi")])
                ]),
                _vm._v(" "),
                _c("tr", [
                  _c("td", [_vm._v("1,005")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("Nulla")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("quis")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("sem")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("at")])
                ]),
                _vm._v(" "),
                _c("tr", [
                  _c("td", [_vm._v("1,006")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("nibh")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("elementum")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("imperdiet")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("Duis")])
                ]),
                _vm._v(" "),
                _c("tr", [
                  _c("td", [_vm._v("1,007")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("sagittis")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("ipsum")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("Praesent")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("mauris")])
                ]),
                _vm._v(" "),
                _c("tr", [
                  _c("td", [_vm._v("1,008")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("Fusce")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("nec")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("tellus")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("sed")])
                ]),
                _vm._v(" "),
                _c("tr", [
                  _c("td", [_vm._v("1,009")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("augue")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("semper")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("porta")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("Mauris")])
                ]),
                _vm._v(" "),
                _c("tr", [
                  _c("td", [_vm._v("1,010")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("massa")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("Vestibulum")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("lacinia")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("arcu")])
                ]),
                _vm._v(" "),
                _c("tr", [
                  _c("td", [_vm._v("1,011")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("eget")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("nulla")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("Class")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("aptent")])
                ]),
                _vm._v(" "),
                _c("tr", [
                  _c("td", [_vm._v("1,012")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("taciti")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("sociosqu")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("ad")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("litora")])
                ]),
                _vm._v(" "),
                _c("tr", [
                  _c("td", [_vm._v("1,013")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("torquent")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("per")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("conubia")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("nostra")])
                ]),
                _vm._v(" "),
                _c("tr", [
                  _c("td", [_vm._v("1,014")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("per")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("inceptos")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("himenaeos")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("Curabitur")])
                ]),
                _vm._v(" "),
                _c("tr", [
                  _c("td", [_vm._v("1,015")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("sodales")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("ligula")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("in")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("libero")])
                ])
              ])
            ])
          ])
        ])
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/SalesOperations.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/SalesOperations.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SalesOperations_vue_vue_type_template_id_61f45e7d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SalesOperations.vue?vue&type=template&id=61f45e7d& */ "./resources/js/components/SalesOperations.vue?vue&type=template&id=61f45e7d&");
/* harmony import */ var _SalesOperations_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SalesOperations.vue?vue&type=script&lang=js& */ "./resources/js/components/SalesOperations.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SalesOperations_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SalesOperations_vue_vue_type_template_id_61f45e7d___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SalesOperations_vue_vue_type_template_id_61f45e7d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/SalesOperations.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/SalesOperations.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/SalesOperations.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SalesOperations_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./SalesOperations.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/SalesOperations.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SalesOperations_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/SalesOperations.vue?vue&type=template&id=61f45e7d&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/SalesOperations.vue?vue&type=template&id=61f45e7d& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SalesOperations_vue_vue_type_template_id_61f45e7d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./SalesOperations.vue?vue&type=template&id=61f45e7d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/SalesOperations.vue?vue&type=template&id=61f45e7d&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SalesOperations_vue_vue_type_template_id_61f45e7d___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SalesOperations_vue_vue_type_template_id_61f45e7d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);