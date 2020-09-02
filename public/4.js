(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/RelationshipManagement.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/RelationshipManagement.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
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
        show: false,
        icon: 'bar-chart-line'
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/RelationshipManagement.vue?vue&type=template&id=21eac746&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/RelationshipManagement.vue?vue&type=template&id=21eac746& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
                "d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 border-bottom"
            },
            [
              _c("h1", { staticClass: "h2" }, [_vm._v("Sales Dashboard")]),
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
          _c("div", { staticClass: "nav-scroller bg-white shadow-sm mb-3" }, [
            _c("nav", { staticClass: "nav nav-underline" }, [
              _c("a", { staticClass: "nav-link", attrs: { href: "#" } }, [
                _vm._v("Home")
              ]),
              _vm._v(" "),
              _c("a", { staticClass: "nav-link", attrs: { href: "#" } }, [
                _vm._v("Chatter")
              ]),
              _vm._v(" "),
              _c("a", { staticClass: "nav-link", attrs: { href: "#" } }, [
                _vm._v("Accounts")
              ]),
              _vm._v(" "),
              _c("a", { staticClass: "nav-link", attrs: { href: "#" } }, [
                _vm._v("Contacts")
              ]),
              _vm._v(" "),
              _c("a", { staticClass: "nav-link", attrs: { href: "#" } }, [
                _vm._v("Contracts")
              ]),
              _vm._v(" "),
              _c("a", { staticClass: "nav-link", attrs: { href: "#" } }, [
                _vm._v("Calendar")
              ]),
              _vm._v(" "),
              _c("a", { staticClass: "nav-link", attrs: { href: "#" } }, [
                _vm._v("Groups")
              ]),
              _vm._v(" "),
              _c("a", { staticClass: "nav-link", attrs: { href: "#" } }, [
                _vm._v("Notes")
              ]),
              _vm._v(" "),
              _c("a", { staticClass: "nav-link", attrs: { href: "#" } }, [
                _vm._v("Tasks")
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

/***/ "./resources/js/components/RelationshipManagement.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/RelationshipManagement.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RelationshipManagement_vue_vue_type_template_id_21eac746___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RelationshipManagement.vue?vue&type=template&id=21eac746& */ "./resources/js/components/RelationshipManagement.vue?vue&type=template&id=21eac746&");
/* harmony import */ var _RelationshipManagement_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RelationshipManagement.vue?vue&type=script&lang=js& */ "./resources/js/components/RelationshipManagement.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _RelationshipManagement_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RelationshipManagement_vue_vue_type_template_id_21eac746___WEBPACK_IMPORTED_MODULE_0__["render"],
  _RelationshipManagement_vue_vue_type_template_id_21eac746___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/RelationshipManagement.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/RelationshipManagement.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/RelationshipManagement.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RelationshipManagement_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./RelationshipManagement.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/RelationshipManagement.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RelationshipManagement_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/RelationshipManagement.vue?vue&type=template&id=21eac746&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/RelationshipManagement.vue?vue&type=template&id=21eac746& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RelationshipManagement_vue_vue_type_template_id_21eac746___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./RelationshipManagement.vue?vue&type=template&id=21eac746& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/RelationshipManagement.vue?vue&type=template&id=21eac746&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RelationshipManagement_vue_vue_type_template_id_21eac746___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RelationshipManagement_vue_vue_type_template_id_21eac746___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);