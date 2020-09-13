(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AppRegister.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/AppRegister.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    return _defineProperty({
      email: "",
      showPass2: false,
      showPass: false,
      password: "",
      rememberMe: false,
      logged: UserClass.loggedIn()
    }, "showPass", false);
  },
  methods: {
    register: function register(e) {
      var _this = this;

      e.preventDefault();

      if (!this.$refs.form.checkValidity()) {
        this.$refs.form.classList.add('was-validated');
      } else {
        axios.post("/login", {
          password: this.password,
          email: this.email,
          remember_me: this.rememberMe
        }).then(function (res) {
          // console.log(res.data)
          axios.defaults.headers.common["Authorization"] = "Bearer ".concat(res.data.access_token);
          UserClass.storeToken(res.data);

          _this.$router.push('/dashboard');
        })["catch"](function (err) {
          EventBus.$emit('alert', {
            name: "Login error",
            type: 'danger',
            desc: err.message,
            id: Math.random(10000),
            time: 5000
          });
        });
      }
    }
  },
  beforeCreate: function beforeCreate() {
    if (UserClass.loggedIn()) {
      this.$router.push('/dashboard');
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AppRegister.vue?vue&type=template&id=75ca766e&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/AppRegister.vue?vue&type=template&id=75ca766e& ***!
  \**************************************************************************************************************************************************************************************************************/
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
      _c("div", { staticClass: "container py-5" }, [
        _c(
          "div",
          {
            staticClass: "card my-3 w-100 mx-auto",
            staticStyle: { "background-color": "rgba(256,256,256,.9)" }
          },
          [
            _vm._m(0),
            _vm._v(" "),
            _c(
              "form",
              {
                ref: "form",
                staticClass: "card-body row needs-validation",
                attrs: { novalidate: "" }
              },
              [
                _c("h3", { staticClass: "col-12" }, [
                  _vm._v(
                    "\n                    Company details\n                "
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-12 col-md-6 mb-3" }, [
                  _c(
                    "label",
                    { staticClass: "form-label", attrs: { for: "c_name" } },
                    [_vm._v("Company name")]
                  ),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.company_name,
                        expression: "company_name"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text", id: "c_name", required: "" },
                    domProps: { value: _vm.company_name },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.company_name = $event.target.value
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("div", { staticClass: "valid-feedback" }, [
                    _vm._v(
                      "\n                        Looks good!\n                    "
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "invalid-feedback" }, [
                    _vm._v(
                      "\n                        Please enter company name\n                    "
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-12 col-md-6 mb-3" }, [
                  _c(
                    "label",
                    { staticClass: "form-label", attrs: { for: "c_name_n" } },
                    [_vm._v("Company name (native)")]
                  ),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.company_name_native,
                        expression: "company_name_native"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "c_name_n", id: "c_name_n", required: "" },
                    domProps: { value: _vm.company_name_native },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.company_name_native = $event.target.value
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("div", { staticClass: "valid-feedback" }, [
                    _vm._v(
                      "\n                        Looks good!\n                    "
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "invalid-feedback" }, [
                    _vm._v(
                      "\n                        Please enter company name in native language\n                    "
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-12 col-md-6 mb-3" }, [
                  _c(
                    "label",
                    { staticClass: "form-label", attrs: { for: "cr" } },
                    [_vm._v("Business Registration Number")]
                  ),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.cr,
                        expression: "cr"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "number", id: "cr", required: "" },
                    domProps: { value: _vm.cr },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.cr = $event.target.value
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("div", { staticClass: "valid-feedback" }, [
                    _vm._v(
                      "\n                        Looks good!\n                    "
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "invalid-feedback" }, [
                    _vm._v(
                      "\n                        Please type in your Business Registration Number (CR)\n                    "
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-12 col-md-6 mb-3" }, [
                  _c(
                    "label",
                    { staticClass: "form-label", attrs: { for: "vat_number" } },
                    [_vm._v("Tax number")]
                  ),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.vat_number,
                        expression: "vat_number"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "number", id: "vat_number", required: "" },
                    domProps: { value: _vm.vat_number },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.vat_number = $event.target.value
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("div", { staticClass: "valid-feedback" }, [
                    _vm._v(
                      "\n                        Looks good!\n                    "
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "invalid-feedback" }, [
                    _vm._v(
                      "\n                        Please type in your Tax registration number (VAT)\n                    "
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("h3", { staticClass: "col-12" }, [
                  _vm._v(
                    "\n                    Contact details\n                "
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-12 col-md-6 mb-3" }, [
                  _c(
                    "label",
                    { staticClass: "form-label", attrs: { for: "name" } },
                    [_vm._v("POC Name")]
                  ),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.name,
                        expression: "name"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text", id: "name", required: "" },
                    domProps: { value: _vm.name },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.name = $event.target.value
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("div", { staticClass: "valid-feedback" }, [
                    _vm._v(
                      "\n                        Looks good!\n                    "
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "invalid-feedback" }, [
                    _vm._v(
                      "\n                        Please enter POC name\n                    "
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-12 col-md-6 mb-3" }, [
                  _c(
                    "label",
                    { staticClass: "form-label", attrs: { for: "email" } },
                    [_vm._v("POC Email")]
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
                    attrs: { type: "email", id: "email", required: "" },
                    domProps: { value: _vm.email },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.email = $event.target.value
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("div", { staticClass: "valid-feedback" }, [
                    _vm._v(
                      "\n                        Looks good!\n                    "
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "invalid-feedback" }, [
                    _vm._v(
                      "\n                        Please enter POC valid email\n                    "
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-12" }, [
                    _c("div", { staticClass: "col-12 col-md-6 mb-3" }, [
                      _c(
                        "label",
                        { staticClass: "form-label", attrs: { for: "mobile" } },
                        [_vm._v("POC Number")]
                      ),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.mobile,
                            expression: "mobile"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { type: "number", id: "mobile", required: "" },
                        domProps: { value: _vm.mobile },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.mobile = $event.target.value
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c("div", { staticClass: "valid-feedback" }, [
                        _vm._v(
                          "\n                            Looks good!\n                        "
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "invalid-feedback" }, [
                        _vm._v(
                          "\n                            Please enter POC mobile number\n                        "
                        )
                      ])
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-12 col-md-6 mb-3" }, [
                  _c(
                    "label",
                    {
                      staticClass: "form-label",
                      attrs: { for: "office_phone" }
                    },
                    [_vm._v("Office phone")]
                  ),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.office_phone,
                        expression: "office_phone"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "number", id: "office_phone", required: "" },
                    domProps: { value: _vm.office_phone },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.office_phone = $event.target.value
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("div", { staticClass: "valid-feedback" }, [
                    _vm._v(
                      "\n                        Looks good!\n                    "
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "invalid-feedback" }, [
                    _vm._v(
                      "\n                        Please enter office phone number\n                    "
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-12 col-md-6 mb-3" }, [
                  _c(
                    "label",
                    {
                      staticClass: "form-label",
                      attrs: { for: "office_address" }
                    },
                    [_vm._v("Office address")]
                  ),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.office_address,
                        expression: "office_address"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "address",
                      id: "office_address",
                      required: ""
                    },
                    domProps: { value: _vm.office_address },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.office_address = $event.target.value
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("div", { staticClass: "valid-feedback" }, [
                    _vm._v(
                      "\n                        Looks good!\n                    "
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "invalid-feedback" }, [
                    _vm._v(
                      "\n                        Please enter office address\n                    "
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("h3", { staticClass: "col-12" }, [
                  _vm._v(
                    "\n                    Account Details\n                "
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-12 mb-3" }, [
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-12 col-md-6" }, [
                      _c(
                        "label",
                        { staticClass: "form-label", attrs: { for: "rfr" } },
                        [_vm._v("Account type")]
                      ),
                      _vm._v(" "),
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.acc_type,
                              expression: "acc_type"
                            }
                          ],
                          staticClass: "form-select",
                          attrs: { id: "rfr", required: "" },
                          on: {
                            change: function($event) {
                              var $$selectedVal = Array.prototype.filter
                                .call($event.target.options, function(o) {
                                  return o.selected
                                })
                                .map(function(o) {
                                  var val = "_value" in o ? o._value : o.value
                                  return val
                                })
                              _vm.acc_type = $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            }
                          }
                        },
                        [
                          _c(
                            "option",
                            { attrs: { selected: "", disabled: "" } },
                            [_vm._v("Choose...")]
                          ),
                          _vm._v(" "),
                          _c("option", [_vm._v("Supplier")]),
                          _vm._v(" "),
                          _c("option", [_vm._v("Purchaser")])
                        ]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "valid-feedback" }, [
                        _vm._v(
                          "\n                                Looks good.\n                            "
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "invalid-feedback" }, [
                        _vm._v(
                          "\n                                Please select an account type.\n                            "
                        )
                      ])
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-12" }, [
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-12 col-md-6 mb-3" }, [
                      _c(
                        "label",
                        {
                          staticClass: "form-label",
                          attrs: { for: "password" }
                        },
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
                                minlength: "8",
                                id: "Password",
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
                                      $$i < 0 &&
                                        (_vm.password = $$a.concat([$$v]))
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
                                minlength: "8",
                                id: "Password",
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
                                minlength: "8",
                                id: "Password",
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
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "valid-feedback" }, [
                        _vm._v(
                          "\n                            Looks good!\n                        "
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "invalid-feedback" }, [
                        _vm._v(
                          "\n                            Password must be at least 8 characters\n                        "
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 col-md-6 mb-3" }, [
                      _c(
                        "label",
                        {
                          staticClass: "form-label",
                          attrs: { for: "password_confirmation" }
                        },
                        [_vm._v("Confirm password")]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "input-group" }, [
                        (_vm.showPass2 ? "text" : "password") === "checkbox"
                          ? _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.password_confirmation,
                                  expression: "password_confirmation"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: {
                                id: "password_confirmation",
                                required: "",
                                type: "checkbox"
                              },
                              domProps: {
                                checked: Array.isArray(
                                  _vm.password_confirmation
                                )
                                  ? _vm._i(_vm.password_confirmation, null) > -1
                                  : _vm.password_confirmation
                              },
                              on: {
                                change: function($event) {
                                  var $$a = _vm.password_confirmation,
                                    $$el = $event.target,
                                    $$c = $$el.checked ? true : false
                                  if (Array.isArray($$a)) {
                                    var $$v = null,
                                      $$i = _vm._i($$a, $$v)
                                    if ($$el.checked) {
                                      $$i < 0 &&
                                        (_vm.password_confirmation = $$a.concat(
                                          [$$v]
                                        ))
                                    } else {
                                      $$i > -1 &&
                                        (_vm.password_confirmation = $$a
                                          .slice(0, $$i)
                                          .concat($$a.slice($$i + 1)))
                                    }
                                  } else {
                                    _vm.password_confirmation = $$c
                                  }
                                }
                              }
                            })
                          : (_vm.showPass2 ? "text" : "password") === "radio"
                          ? _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.password_confirmation,
                                  expression: "password_confirmation"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: {
                                id: "password_confirmation",
                                required: "",
                                type: "radio"
                              },
                              domProps: {
                                checked: _vm._q(_vm.password_confirmation, null)
                              },
                              on: {
                                change: function($event) {
                                  _vm.password_confirmation = null
                                }
                              }
                            })
                          : _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.password_confirmation,
                                  expression: "password_confirmation"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: {
                                id: "password_confirmation",
                                required: "",
                                type: _vm.showPass2 ? "text" : "password"
                              },
                              domProps: { value: _vm.password_confirmation },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.password_confirmation =
                                    $event.target.value
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
                                _vm.showPass2 = !_vm.showPass2
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
                                      (_vm.showPass2 ? "eye-slash" : "eye")
                                  }
                                })
                              ]
                            )
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "valid-feedback" }, [
                        _vm._v(
                          "\n                            Looks good!\n                        "
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "invalid-feedback" }, [
                        _vm._v(
                          "\n                            Your Passwords don't match\n                        "
                        )
                      ])
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-12 col-md-4 col-lg-2 ml-auto" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-block btn-primary mb-3",
                      on: { click: _vm.register }
                    },
                    [_vm._v("Register")]
                  )
                ])
              ]
            )
          ]
        )
      ])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("h2", [_vm._v("New registration")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/AppRegister.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/AppRegister.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppRegister_vue_vue_type_template_id_75ca766e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppRegister.vue?vue&type=template&id=75ca766e& */ "./resources/js/components/AppRegister.vue?vue&type=template&id=75ca766e&");
/* harmony import */ var _AppRegister_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppRegister.vue?vue&type=script&lang=js& */ "./resources/js/components/AppRegister.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AppRegister_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AppRegister_vue_vue_type_template_id_75ca766e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AppRegister_vue_vue_type_template_id_75ca766e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/AppRegister.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/AppRegister.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/AppRegister.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppRegister_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./AppRegister.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AppRegister.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppRegister_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/AppRegister.vue?vue&type=template&id=75ca766e&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/AppRegister.vue?vue&type=template&id=75ca766e& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppRegister_vue_vue_type_template_id_75ca766e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./AppRegister.vue?vue&type=template&id=75ca766e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AppRegister.vue?vue&type=template&id=75ca766e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppRegister_vue_vue_type_template_id_75ca766e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppRegister_vue_vue_type_template_id_75ca766e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);