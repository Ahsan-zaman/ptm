(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/NewsRFP.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/NewsRFP.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SideBar_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SideBar.vue */ "./resources/js/components/SideBar.vue");
/* harmony import */ var _Alert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Alert */ "./resources/js/components/Alert.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    SideBar: _SideBar_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    Alert: _Alert__WEBPACK_IMPORTED_MODULE_1__["default"]
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
      reasonForRequisitions: [''],
      reasonForRequisition: '',
      sp: '',
      erfr: '',
      budget: '',
      ot: '',
      specification: '',
      address: '',
      commodity: '',
      category: '',
      publicRFX: false,
      tabs: ['Project Info', // 'Select Template',
      'Time Rule & payment', 'Select Supplier', 'Summary'],
      active: 0,
      // form2 
      start: "",
      end: "",
      startTime: new Date().getHours() + ":" + new Date().getMinutes(),
      endTime: new Date().getHours() + ":" + new Date().getMinutes(),
      award: ""
    };
  },
  mounted: function mounted() {},
  methods: {
    validate: function validate() {
      if (this.active == 0) {
        if (!this.$refs.form1.checkValidity()) {
          this.$refs.form1.classList.add('was-validated');
        } else {
          // console.log('this.tabs', this.tabs)
          if (this.active < this.tabs.length - 1) {
            this.active = this.active + 1;
          }
        }
      } else if (this.active == 1) {
        if (!this.$refs.form2.checkValidity()) {
          this.$refs.form2.classList.add('was-validated');
        } else {
          // console.log('this.tabs', this.tabs)
          if (this.active < this.tabs.length - 1) {
            this.active = this.active + 1;
          }
        }
      } else if (this.active == 2) {
        // console.log('this.tabs', this.tabs)
        if (this.active < this.tabs.length - 1) {
          this.active = this.active + 1;
        }
      }
    },
    tabText: function tabText(txt, i) {
      if (window.innerWidth < 720) {
        return i + 1;
      } else {
        return txt;
      }
    },
    getClass: function getClass(i) {
      var str = "";

      if (i == this.active) {
        str = 'active';
      } else if (i <= this.active) {
        str += 'done';
      }

      return str;
    }
  },
  watch: {
    active: function active(newVal) {
      var Tabs = document.querySelectorAll('.tab-controlers span');
      Tabs.forEach(function (tab, i) {
        if (i <= newVal) {
          tab.classList.add('text-success');
        }
      });
    }
  },
  beforeCreate: function beforeCreate() {
    if (!UserClass.loggedIn()) {
      this.$router.push('/');
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/NewsRFP.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/NewsRFP.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.nav-scroller {\r\n  position: relative;\r\n  z-index: 2;\r\n  overflow-y: hidden;\n}\n.nav-scroller .nav {\r\n  display: flex;\r\n  flex-wrap: nowrap;\r\n  margin-top: -1px;\r\n  overflow-x: auto;\r\n  color: rgba(255, 255, 255, .75);\r\n  text-align: center;\r\n  white-space: nowrap;\r\n  -webkit-overflow-scrolling: touch;\n}\n.tab-controlers .done{\r\n    color: var(--bs-success);\n}\n.tab-controlers .active{\r\n    background-color: var(--bs-success);\r\n    color: #fff;\r\n    padding: .5rem .75rem;\r\n    border-radius: 4px;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/NewsRFP.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/NewsRFP.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./NewsRFP.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/NewsRFP.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/NewsRFP.vue?vue&type=template&id=3673e9ce&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/NewsRFP.vue?vue&type=template&id=3673e9ce& ***!
  \**********************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "container" }, [
    _c(
      "div",
      { staticClass: "row" },
      [
        _c("side-bar", { attrs: { links: _vm.links } }),
        _vm._v(" "),
        _c(
          "main",
          { staticClass: "col-md-9 ml-sm-auto col-lg-10 px-md-4 py-3" },
          [
            _vm._m(0),
            _vm._v(" "),
            _c("div", { staticClass: "card" }, [
              _c(
                "div",
                {
                  staticClass:
                    "card-header d-flex flex-column flex-lg-row justify-content-center align-items-center tab-controlers px-5",
                  staticStyle: { "min-height": "100px" }
                },
                _vm._l(_vm.tabs, function(tab, i) {
                  return _c(
                    "span",
                    {
                      key: i,
                      staticClass: "mx-3 text-nowrap font-weight-bold",
                      class: _vm.getClass(i)
                    },
                    [
                      _vm._v(
                        "\n                    " +
                          _vm._s(_vm.tabText(tab, i)) +
                          "\n                    "
                      ),
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
                                "/assets/icons/bootstrap-icons.svg#chevron-double-right"
                            }
                          })
                        ]
                      )
                    ]
                  )
                }),
                0
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "card-body" },
                [
                  _c("transition-group", { attrs: { name: "slide-fade" } }, [
                    _vm.active == 0
                      ? _c(
                          "form",
                          {
                            key: 1,
                            ref: "form1",
                            staticClass: "row g-3 needs-validation",
                            attrs: { novalidate: "" }
                          },
                          [
                            _c(
                              "div",
                              { staticClass: "col-12 col-md-6 col-lg-4" },
                              [
                                _c(
                                  "label",
                                  {
                                    staticClass: "form-label",
                                    attrs: { for: "rfr" }
                                  },
                                  [_vm._v("Reason for requisition")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "select",
                                  {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.reasonForRequisition,
                                        expression: "reasonForRequisition"
                                      }
                                    ],
                                    staticClass: "form-select",
                                    attrs: { id: "rfr", required: "" },
                                    on: {
                                      change: function($event) {
                                        var $$selectedVal = Array.prototype.filter
                                          .call($event.target.options, function(
                                            o
                                          ) {
                                            return o.selected
                                          })
                                          .map(function(o) {
                                            var val =
                                              "_value" in o ? o._value : o.value
                                            return val
                                          })
                                        _vm.reasonForRequisition = $event.target
                                          .multiple
                                          ? $$selectedVal
                                          : $$selectedVal[0]
                                      }
                                    }
                                  },
                                  [
                                    _c(
                                      "option",
                                      {
                                        attrs: {
                                          selected: "",
                                          disabled: "",
                                          value: ""
                                        }
                                      },
                                      [_vm._v("Choose...")]
                                    ),
                                    _vm._v(" "),
                                    _c("option", [_vm._v("Projects")]),
                                    _vm._v(" "),
                                    _c("option", [_vm._v("Other")])
                                  ]
                                ),
                                _vm._v(" "),
                                _c("div", { staticClass: "invalid-feedback" }, [
                                  _vm._v(
                                    "\n                                Please select a valid reason.\n                            "
                                  )
                                ])
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "col-12 col-md-6 col-lg-4" },
                              [
                                _c(
                                  "label",
                                  {
                                    staticClass: "form-label",
                                    attrs: { for: "sp" }
                                  },
                                  [_vm._v("Select project")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "select",
                                  {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.sp,
                                        expression: "sp"
                                      }
                                    ],
                                    staticClass: "form-select",
                                    attrs: { id: "sp", required: "" },
                                    on: {
                                      change: function($event) {
                                        var $$selectedVal = Array.prototype.filter
                                          .call($event.target.options, function(
                                            o
                                          ) {
                                            return o.selected
                                          })
                                          .map(function(o) {
                                            var val =
                                              "_value" in o ? o._value : o.value
                                            return val
                                          })
                                        _vm.sp = $event.target.multiple
                                          ? $$selectedVal
                                          : $$selectedVal[0]
                                      }
                                    }
                                  },
                                  [
                                    _c(
                                      "option",
                                      {
                                        attrs: {
                                          selected: "",
                                          disabled: "",
                                          value: ""
                                        }
                                      },
                                      [_vm._v("Choose...")]
                                    ),
                                    _vm._v(" "),
                                    _c("option", [_vm._v("Projects")]),
                                    _vm._v(" "),
                                    _c("option", [_vm._v("Other")])
                                  ]
                                ),
                                _vm._v(" "),
                                _c("div", { staticClass: "invalid-feedback" }, [
                                  _vm._v(
                                    "\n                                Please select a project.\n                            "
                                  )
                                ])
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "col-12 col-md-6 col-lg-4" },
                              [
                                _c(
                                  "label",
                                  {
                                    staticClass: "form-label",
                                    attrs: { for: "erfr" }
                                  },
                                  [_vm._v("Enter reason for requisition")]
                                ),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.erfr,
                                      expression: "erfr"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: {
                                    type: "text",
                                    placeholder: "Enter reason",
                                    id: "erfr",
                                    required: ""
                                  },
                                  domProps: { value: _vm.erfr },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.erfr = $event.target.value
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                _c("div", { staticClass: "valid-feedback" }, [
                                  _vm._v(
                                    "\n                            Looks good!\n                            "
                                  )
                                ])
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "col-12 col-md-6 col-lg-4" },
                              [
                                _c(
                                  "label",
                                  {
                                    staticClass: "form-label",
                                    attrs: { for: "budget" }
                                  },
                                  [_vm._v("Budget")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "select",
                                  {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.budget,
                                        expression: "budget"
                                      }
                                    ],
                                    staticClass: "form-select",
                                    attrs: { id: "budget", required: "" },
                                    on: {
                                      change: function($event) {
                                        var $$selectedVal = Array.prototype.filter
                                          .call($event.target.options, function(
                                            o
                                          ) {
                                            return o.selected
                                          })
                                          .map(function(o) {
                                            var val =
                                              "_value" in o ? o._value : o.value
                                            return val
                                          })
                                        _vm.budget = $event.target.multiple
                                          ? $$selectedVal
                                          : $$selectedVal[0]
                                      }
                                    }
                                  },
                                  [
                                    _c(
                                      "option",
                                      {
                                        attrs: {
                                          selected: "",
                                          disabled: "",
                                          value: ""
                                        }
                                      },
                                      [_vm._v("Choose...")]
                                    ),
                                    _vm._v(" "),
                                    _c("option", [
                                      _vm._v("Get custom budgets")
                                    ]),
                                    _vm._v(" "),
                                    _c("option", [_vm._v("Other")])
                                  ]
                                ),
                                _vm._v(" "),
                                _c("div", { staticClass: "invalid-feedback" }, [
                                  _vm._v(
                                    "\n                                Please select a budget.\n                            "
                                  )
                                ])
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "col-12 col-md-6 col-lg-4" },
                              [
                                _c(
                                  "label",
                                  {
                                    staticClass: "form-label",
                                    attrs: { for: "ot" }
                                  },
                                  [_vm._v("Order type")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "select",
                                  {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.ot,
                                        expression: "ot"
                                      }
                                    ],
                                    staticClass: "form-select",
                                    attrs: { id: "ot", required: "" },
                                    on: {
                                      change: function($event) {
                                        var $$selectedVal = Array.prototype.filter
                                          .call($event.target.options, function(
                                            o
                                          ) {
                                            return o.selected
                                          })
                                          .map(function(o) {
                                            var val =
                                              "_value" in o ? o._value : o.value
                                            return val
                                          })
                                        _vm.ot = $event.target.multiple
                                          ? $$selectedVal
                                          : $$selectedVal[0]
                                      }
                                    }
                                  },
                                  [
                                    _c(
                                      "option",
                                      {
                                        attrs: {
                                          selected: "",
                                          disabled: "",
                                          value: ""
                                        }
                                      },
                                      [_vm._v("Choose...")]
                                    ),
                                    _vm._v(" "),
                                    _c("option", [_vm._v("Product")]),
                                    _vm._v(" "),
                                    _c("option", [_vm._v("Service")])
                                  ]
                                ),
                                _vm._v(" "),
                                _c("div", { staticClass: "invalid-feedback" }, [
                                  _vm._v(
                                    "\n                                Please select a budget.\n                            "
                                  )
                                ])
                              ]
                            ),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-12" }, [
                              _c(
                                "label",
                                {
                                  staticClass: "form-label",
                                  attrs: { for: "Specification" }
                                },
                                [_vm._v("Specification")]
                              ),
                              _vm._v(" "),
                              _c("textarea", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.specification,
                                    expression: "specification"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  rows: "8",
                                  id: "Specification",
                                  placeholder: "Deatails about this RFP",
                                  required: ""
                                },
                                domProps: { value: _vm.specification },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.specification = $event.target.value
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c("div", { staticClass: "invalid-feedback" }, [
                                _vm._v(
                                  "\n                                Please enter a RFX specification(s).\n                            "
                                )
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-12" }, [
                              _c(
                                "label",
                                {
                                  staticClass: "form-label",
                                  attrs: { for: "address" }
                                },
                                [_vm._v("Address")]
                              ),
                              _vm._v(" "),
                              _c(
                                "select",
                                {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.address,
                                      expression: "address"
                                    }
                                  ],
                                  staticClass: "form-select",
                                  attrs: { id: "address", required: "" },
                                  on: {
                                    change: function($event) {
                                      var $$selectedVal = Array.prototype.filter
                                        .call($event.target.options, function(
                                          o
                                        ) {
                                          return o.selected
                                        })
                                        .map(function(o) {
                                          var val =
                                            "_value" in o ? o._value : o.value
                                          return val
                                        })
                                      _vm.address = $event.target.multiple
                                        ? $$selectedVal
                                        : $$selectedVal[0]
                                    }
                                  }
                                },
                                [
                                  _c(
                                    "option",
                                    {
                                      attrs: {
                                        selected: "",
                                        disabled: "",
                                        value: ""
                                      }
                                    },
                                    [_vm._v("Choose...")]
                                  ),
                                  _vm._v(" "),
                                  _c("option", [_vm._v("Get addresses")]),
                                  _vm._v(" "),
                                  _c("option", [_vm._v("Others")])
                                ]
                              ),
                              _vm._v(" "),
                              _c("div", { staticClass: "invalid-feedback" }, [
                                _vm._v(
                                  "\n                                Please select address.\n                            "
                                )
                              ])
                            ]),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "col-12 col-md-6 col-lg-4" },
                              [
                                _c(
                                  "label",
                                  {
                                    staticClass: "form-label",
                                    attrs: { for: "Commodity" }
                                  },
                                  [_vm._v("Commodity")]
                                ),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.commodity,
                                      expression: "commodity"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: {
                                    type: "text",
                                    placeholder: "Enter commodity",
                                    id: "Commodity",
                                    required: ""
                                  },
                                  domProps: { value: _vm.commodity },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.commodity = $event.target.value
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                _c("div", { staticClass: "invalid-feedback" }, [
                                  _vm._v(
                                    "\n                                Please provide a commodity.\n                            "
                                  )
                                ])
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "col-12 col-md-6 col-lg-4" },
                              [
                                _c(
                                  "label",
                                  {
                                    staticClass: "form-label",
                                    attrs: { for: "Category" }
                                  },
                                  [_vm._v("Category")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "select",
                                  {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.category,
                                        expression: "category"
                                      }
                                    ],
                                    staticClass: "form-select",
                                    attrs: { id: "Category", required: "" },
                                    on: {
                                      change: function($event) {
                                        var $$selectedVal = Array.prototype.filter
                                          .call($event.target.options, function(
                                            o
                                          ) {
                                            return o.selected
                                          })
                                          .map(function(o) {
                                            var val =
                                              "_value" in o ? o._value : o.value
                                            return val
                                          })
                                        _vm.category = $event.target.multiple
                                          ? $$selectedVal
                                          : $$selectedVal[0]
                                      }
                                    }
                                  },
                                  [
                                    _c(
                                      "option",
                                      {
                                        attrs: {
                                          selected: "",
                                          disabled: "",
                                          value: ""
                                        }
                                      },
                                      [_vm._v("Choose...")]
                                    ),
                                    _vm._v(" "),
                                    _c("option", [
                                      _vm._v("Manually input later")
                                    ]),
                                    _vm._v(" "),
                                    _c("option", [_vm._v("others")])
                                  ]
                                ),
                                _vm._v(" "),
                                _c("div", { staticClass: "invalid-feedback" }, [
                                  _vm._v(
                                    "\n                                Please select a category.\n                            "
                                  )
                                ])
                              ]
                            ),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-12" }, [
                              _c("div", { staticClass: "form-check" }, [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.publicRFX,
                                      expression: "publicRFX"
                                    }
                                  ],
                                  staticClass: "form-check-input",
                                  attrs: {
                                    type: "checkbox",
                                    value: "",
                                    id: "invalidCheck"
                                  },
                                  domProps: {
                                    checked: Array.isArray(_vm.publicRFX)
                                      ? _vm._i(_vm.publicRFX, "") > -1
                                      : _vm.publicRFX
                                  },
                                  on: {
                                    change: function($event) {
                                      var $$a = _vm.publicRFX,
                                        $$el = $event.target,
                                        $$c = $$el.checked ? true : false
                                      if (Array.isArray($$a)) {
                                        var $$v = "",
                                          $$i = _vm._i($$a, $$v)
                                        if ($$el.checked) {
                                          $$i < 0 &&
                                            (_vm.publicRFX = $$a.concat([$$v]))
                                        } else {
                                          $$i > -1 &&
                                            (_vm.publicRFX = $$a
                                              .slice(0, $$i)
                                              .concat($$a.slice($$i + 1)))
                                        }
                                      } else {
                                        _vm.publicRFX = $$c
                                      }
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                _c(
                                  "label",
                                  {
                                    staticClass: "form-check-label",
                                    attrs: { for: "invalidCheck" }
                                  },
                                  [
                                    _vm._v(
                                      "\n                                Do you want to make this RFX public?\n                            "
                                    )
                                  ]
                                )
                              ])
                            ])
                          ]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.active == 1
                      ? _c(
                          "form",
                          {
                            key: 2,
                            ref: "form2",
                            staticClass: "row g-3 needs-validation",
                            attrs: { novalidate: "" }
                          },
                          [
                            _c("div", { staticClass: "col-12 col-md-6" }, [
                              _c(
                                "label",
                                {
                                  staticClass: "form-label",
                                  attrs: { for: "start" }
                                },
                                [_vm._v("Response start date")]
                              ),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.start,
                                    expression: "start"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  type: "date",
                                  min: new Date().toISOString().split("T")[0],
                                  placeholder: "Select start date",
                                  id: "start",
                                  required: ""
                                },
                                domProps: { value: _vm.start },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.start = $event.target.value
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c("div", { staticClass: "invalid-feedback" }, [
                                _vm._v(
                                  "\n                                Please provide a valid date.\n                            "
                                )
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-12 col-md-6" }, [
                              _c(
                                "label",
                                {
                                  staticClass: "form-label",
                                  attrs: { for: "end" }
                                },
                                [_vm._v("Response end date")]
                              ),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.end,
                                    expression: "end"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  type: "date",
                                  min: _vm.start,
                                  placeholder: "Select end date",
                                  id: "end",
                                  required: ""
                                },
                                domProps: { value: _vm.end },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.end = $event.target.value
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c("div", { staticClass: "invalid-feedback" }, [
                                _vm._v(
                                  "\n                                Please provide a valid date.\n                            "
                                )
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-12 col-md-6" }, [
                              _c(
                                "label",
                                {
                                  staticClass: "form-label",
                                  attrs: { for: "starTime" }
                                },
                                [_vm._v("Response start time")]
                              ),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.startTime,
                                    expression: "startTime"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  type: "time",
                                  placeholder: "Select time",
                                  id: "starTime",
                                  required: ""
                                },
                                domProps: { value: _vm.startTime },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.startTime = $event.target.value
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c("div", { staticClass: "invalid-feedback" }, [
                                _vm._v(
                                  "\n                                Please select time.\n                            "
                                )
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-12 col-md-6" }, [
                              _c(
                                "label",
                                {
                                  staticClass: "form-label",
                                  attrs: { for: "endTime" }
                                },
                                [_vm._v("Response end time")]
                              ),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.endTime,
                                    expression: "endTime"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  type: "time",
                                  placeholder: "Select time",
                                  id: "endTime",
                                  required: ""
                                },
                                domProps: { value: _vm.endTime },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.endTime = $event.target.value
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c("div", { staticClass: "invalid-feedback" }, [
                                _vm._v(
                                  "\n                                Please select time.\n                            "
                                )
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-12" }, [
                              _c(
                                "label",
                                {
                                  staticClass: "form-label",
                                  attrs: { for: "award" }
                                },
                                [_vm._v("Estimated Award Date")]
                              ),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.award,
                                    expression: "award"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  type: "date",
                                  min: _vm.end,
                                  placeholder: "Select award date",
                                  id: "award",
                                  required: ""
                                },
                                domProps: { value: _vm.award },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.award = $event.target.value
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c("div", { staticClass: "invalid-feedback" }, [
                                _vm._v(
                                  "\n                                Please provide a valid date.\n                            "
                                )
                              ])
                            ])
                          ]
                        )
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "d-flex my-4" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-outline-primary mr-auto",
                        attrs: { disabled: _vm.active == 0, type: "submit" },
                        on: {
                          click: function($event) {
                            _vm.active -= 1
                          }
                        }
                      },
                      [_vm._v("Previous")]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-primary",
                        attrs: { type: "submit" },
                        on: { click: _vm.validate }
                      },
                      [_vm._v("Next")]
                    )
                  ])
                ],
                1
              )
            ])
          ]
        ),
        _vm._v(" "),
        _c("alert")
      ],
      1
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass:
          "d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2"
      },
      [
        _c("h1", { staticClass: "h2" }, [_vm._v("Create new RFP")]),
        _vm._v(" "),
        _c("div", { staticClass: "btn-toolbar mb-2 mb-md-0" }, [
          _c(
            "button",
            {
              staticClass: "btn btn-sm btn-outline-primary",
              attrs: { type: "button" }
            },
            [_vm._v("\n                    save in draft\n                ")]
          )
        ])
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/NewsRFP.vue":
/*!*********************************************!*\
  !*** ./resources/js/components/NewsRFP.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NewsRFP_vue_vue_type_template_id_3673e9ce___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NewsRFP.vue?vue&type=template&id=3673e9ce& */ "./resources/js/components/NewsRFP.vue?vue&type=template&id=3673e9ce&");
/* harmony import */ var _NewsRFP_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NewsRFP.vue?vue&type=script&lang=js& */ "./resources/js/components/NewsRFP.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _NewsRFP_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NewsRFP.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/NewsRFP.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _NewsRFP_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NewsRFP_vue_vue_type_template_id_3673e9ce___WEBPACK_IMPORTED_MODULE_0__["render"],
  _NewsRFP_vue_vue_type_template_id_3673e9ce___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/NewsRFP.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/NewsRFP.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/components/NewsRFP.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NewsRFP_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./NewsRFP.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/NewsRFP.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NewsRFP_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/NewsRFP.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/NewsRFP.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NewsRFP_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./NewsRFP.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/NewsRFP.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NewsRFP_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NewsRFP_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NewsRFP_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NewsRFP_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NewsRFP_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/NewsRFP.vue?vue&type=template&id=3673e9ce&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/NewsRFP.vue?vue&type=template&id=3673e9ce& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NewsRFP_vue_vue_type_template_id_3673e9ce___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./NewsRFP.vue?vue&type=template&id=3673e9ce& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/NewsRFP.vue?vue&type=template&id=3673e9ce&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NewsRFP_vue_vue_type_template_id_3673e9ce___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NewsRFP_vue_vue_type_template_id_3673e9ce___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);