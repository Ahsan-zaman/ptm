(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/SupplierManagement.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/SupplierManagement.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
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
      }],
      suppliers: [{
        id: Math.round(Math.random() * 10),
        vId: Math.random(1000),
        name: 'Ahsan web',
        location: 'Jeddah, KSA',
        contact: '0571708606',
        poc: {
          id: Math.random(10),
          name: 'Ahsan',
          dp: 'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairDreads01&accessoriesType=Round&hairColor=Brown&facialHairType=BeardMagestic&facialHairColor=Black&clotheType=GraphicShirt&clotheColor=Blue01&graphicType=Resist&eyeType=EyeRoll&eyebrowType=FlatNatural&mouthType=Disbelief&skinColor=Light'
        },
        industry_type: 'Saas'
      }, {
        id: Math.round(Math.random() * 10),
        vId: Math.random(1000),
        name: 'Pro cure',
        location: 'Khobar, KSA',
        contact: '0550893217',
        poc: {
          id: Math.random(10),
          name: 'Test 2',
          dp: 'https://ui-avatars.com/api/?name=Ahsan'
        },
        industry_type: 'Hardware'
      }, {
        id: Math.round(Math.random() * 10),
        vId: Math.random(1000),
        name: 'Builder Co.',
        location: 'Dammam, KSA',
        contact: '0569723698',
        poc: {
          id: Math.random(10),
          name: 'Abdullah',
          dp: 'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortWaved&accessoriesType=Blank&hairColor=Brown&facialHairType=BeardLight&facialHairColor=Black&clotheType=Hoodie&clotheColor=Red&eyeType=Side&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Tanned'
        },
        industry_type: 'Construction'
      }]
    };
  },
  methods: {
    gotoPOC: function gotoPOC(id) {
      alert("View POC with id ".concat(id));
    }
  },
  beforeCreate: function beforeCreate() {
    if (!UserClass.loggedIn()) {
      this.$router.push('/');
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/SupplierManagement.vue?vue&type=template&id=7a7b8d4c&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/SupplierManagement.vue?vue&type=template&id=7a7b8d4c& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
  return _c("civ", { staticClass: "container" }, [
    _c(
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
                _c("h1", { staticClass: "h2" }, [
                  _vm._v("Supplier Management")
                ]),
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
                      _vm._v(
                        "\n                    This week\n                "
                      )
                    ]
                  )
                ])
              ]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "nav-scroller bg-white shadow-sm mb-3" }, [
              _c("nav", { staticClass: "nav nav-underline" }, [
                _c("a", { staticClass: "nav-link", attrs: { href: "#" } }, [
                  _vm._v("\n                    Home\n                    "),
                  _c(
                    "span",
                    {
                      staticClass:
                        "badge bg-light text-dark rounded-pill align-text-bottom"
                    },
                    [_vm._v("27")]
                  )
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
                  _vm._v("Opportunities")
                ]),
                _vm._v(" "),
                _c("a", { staticClass: "nav-link", attrs: { href: "#" } }, [
                  _vm._v("Leads")
                ]),
                _vm._v(" "),
                _c("a", { staticClass: "nav-link", attrs: { href: "#" } }, [
                  _vm._v("Dashboards")
                ]),
                _vm._v(" "),
                _c("a", { staticClass: "nav-link", attrs: { href: "#" } }, [
                  _vm._v("Reports")
                ]),
                _vm._v(" "),
                _c("a", { staticClass: "nav-link", attrs: { href: "#" } }, [
                  _vm._v("Groups")
                ])
              ])
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "table-responsive my-3 bg-light rounded shadow" },
              [
                _c(
                  "table",
                  { staticClass: "table table-striped table-borderless" },
                  [
                    _c("thead", [
                      _c("tr", [
                        _c("th", [
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
                                    "/assets/icons/bootstrap-icons.svg#square"
                                }
                              })
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("th", { attrs: { scope: "col text-weight-bold" } }, [
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
                                    "/assets/icons/bootstrap-icons.svg#sort-down"
                                }
                              })
                            ]
                          ),
                          _vm._v(
                            "\n                                SR#\n                            "
                          )
                        ]),
                        _vm._v(" "),
                        _c("th", { attrs: { scope: "col text-weight-bold" } }, [
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
                                    "/assets/icons/bootstrap-icons.svg#sort-down"
                                }
                              })
                            ]
                          ),
                          _vm._v(
                            "\n                                Vendor Id\n                            "
                          )
                        ]),
                        _vm._v(" "),
                        _c("th", { attrs: { scope: "col text-weight-bold" } }, [
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
                                    "/assets/icons/bootstrap-icons.svg#sort-down"
                                }
                              })
                            ]
                          ),
                          _vm._v(
                            "\n                                Supplier Name\n                            "
                          )
                        ]),
                        _vm._v(" "),
                        _c("th", { attrs: { scope: "col text-weight-bold" } }, [
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
                                    "/assets/icons/bootstrap-icons.svg#sort-down"
                                }
                              })
                            ]
                          ),
                          _vm._v(
                            "\n                                Location\n                            "
                          )
                        ]),
                        _vm._v(" "),
                        _c("th", { attrs: { scope: "col text-weight-bold" } }, [
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
                                    "/assets/icons/bootstrap-icons.svg#sort-down"
                                }
                              })
                            ]
                          ),
                          _vm._v(
                            "\n                                Contact#\n                            "
                          )
                        ]),
                        _vm._v(" "),
                        _c("th", { attrs: { scope: "col text-weight-bold" } }, [
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
                                    "/assets/icons/bootstrap-icons.svg#sort-down"
                                }
                              })
                            ]
                          ),
                          _vm._v(
                            "\n                                POC person\n                            "
                          )
                        ]),
                        _vm._v(" "),
                        _c("th", { attrs: { scope: "col text-weight-bold" } }, [
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
                                    "/assets/icons/bootstrap-icons.svg#sort-down"
                                }
                              })
                            ]
                          ),
                          _vm._v(
                            "\n                                Industry type\n                            "
                          )
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "tbody",
                      _vm._l(_vm.suppliers, function(s, i) {
                        return _c("tr", { key: i }, [
                          _c("th", [
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
                                      "/assets/icons/bootstrap-icons.svg#square"
                                  }
                                })
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(s.id))]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(s.vId))]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(s.name))]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(s.location))]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(s.contact))]),
                          _vm._v(" "),
                          _c("td", [
                            _c(
                              "div",
                              {
                                staticClass:
                                  "badge rounded-pill bg-primary px-1 py-1 hover",
                                staticStyle: { "min-width": "125px" },
                                on: {
                                  click: function($event) {
                                    return _vm.gotoPOC(s.poc.id)
                                  }
                                }
                              },
                              [
                                _c("img", {
                                  staticClass:
                                    "img-thumbnail rounded-circle border-0 p-0",
                                  attrs: {
                                    src: s.poc.dp,
                                    width: "25px",
                                    alt: "..."
                                  }
                                }),
                                _vm._v(" "),
                                _c("span", { staticClass: "px-3" }, [
                                  _vm._v(_vm._s(s.poc.name))
                                ]),
                                _vm._v(" "),
                                _c(
                                  "svg",
                                  {
                                    staticClass: "bi",
                                    attrs: {
                                      width: "10",
                                      height: "10",
                                      fill: "currentColor"
                                    }
                                  },
                                  [
                                    _c("use", {
                                      attrs: {
                                        "xlink:href":
                                          "/assets/icons/bootstrap-icons.svg#chevron-right"
                                      }
                                    })
                                  ]
                                )
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(s.industry_type))])
                        ])
                      }),
                      0
                    )
                  ]
                )
              ]
            )
          ])
        ])
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/SupplierManagement.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/SupplierManagement.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SupplierManagement_vue_vue_type_template_id_7a7b8d4c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SupplierManagement.vue?vue&type=template&id=7a7b8d4c& */ "./resources/js/components/SupplierManagement.vue?vue&type=template&id=7a7b8d4c&");
/* harmony import */ var _SupplierManagement_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SupplierManagement.vue?vue&type=script&lang=js& */ "./resources/js/components/SupplierManagement.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SupplierManagement_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SupplierManagement_vue_vue_type_template_id_7a7b8d4c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SupplierManagement_vue_vue_type_template_id_7a7b8d4c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/SupplierManagement.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/SupplierManagement.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/SupplierManagement.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SupplierManagement_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./SupplierManagement.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/SupplierManagement.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SupplierManagement_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/SupplierManagement.vue?vue&type=template&id=7a7b8d4c&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/SupplierManagement.vue?vue&type=template&id=7a7b8d4c& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SupplierManagement_vue_vue_type_template_id_7a7b8d4c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./SupplierManagement.vue?vue&type=template&id=7a7b8d4c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/SupplierManagement.vue?vue&type=template&id=7a7b8d4c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SupplierManagement_vue_vue_type_template_id_7a7b8d4c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SupplierManagement_vue_vue_type_template_id_7a7b8d4c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);