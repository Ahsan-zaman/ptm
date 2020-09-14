(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/StrategicSourcing.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/StrategicSourcing.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SideBar_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SideBar.vue */ "./resources/js/components/SideBar.vue");
/* harmony import */ var highcharts_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highcharts-vue */ "./node_modules/highcharts-vue/dist/highcharts-vue.min.js");
/* harmony import */ var highcharts_vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(highcharts_vue__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

 // import Highcharts from 'highcharts'
// import exportingInit from 'highcharts/modules/exporting'

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    SideBar: _SideBar_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    highcharts: highcharts_vue__WEBPACK_IMPORTED_MODULE_1__["Chart"]
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
      chartOptions: {
        chart: {
          // type: 'column',
          backgroundColor: "#f8fafc",
          plotBorderWidth: 0,
          type: 'pie',
          colors: ['#3490dc', '#6c757d', '#38c172', '#ffed4a', '#e3342f', '#4dc0b5', '#f66d9b', '#9561e2', '#6574cd']
        },
        credits: {
          enabled: false // href : "https://twin.twinsa.net",
          // text : 'Twin SA',
          // style:{
          //     // color : "pink",
          //     fontSize : '1.2em'
          // }

        },
        title: {
          // text: 'Monthly sales report. January, 2020'
          text: ''
        },
        tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        accessibility: {
          point: {
            valueSuffix: '%'
          }
        },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
              enabled: false
            },
            showInLegend: true
          }
        },
        series: [{
          name: 'Brands',
          colorByPoint: true,
          data: [{
            name: 'Chrome',
            y: 61.41 // sliced: true,
            // selected: true

          }, {
            name: 'Internet Explorer',
            y: 11.84
          }, {
            name: 'Firefox',
            y: 10.85
          }, {
            name: 'Other',
            y: 2.61
          }]
        }]
      },
      barChart: {
        chart: {
          type: 'column',
          colors: ['#3490dc', '#6c757d', '#38c172', '#ffed4a', '#e3342f', '#4dc0b5', '#f66d9b', '#9561e2', '#6574cd']
        },
        credits: {
          enabled: false
        },
        title: {
          text: 'Browser market shares. January, 2018'
        },
        // subtitle: {
        //     text: 'Click the columns to view versions. Source: <a href="http://statcounter.com" target="_blank">statcounter.com</a>'
        // },
        accessibility: {
          announceNewData: {
            enabled: true
          }
        },
        xAxis: {
          type: 'category'
        },
        yAxis: {
          title: {
            text: 'Number of RFX'
          }
        },
        legend: {
          enabled: true // backgroundColor : "Yellowish background"

        },
        plotOptions: {
          series: {
            borderWidth: 0,
            dataLabels: {
              enabled: true,
              format: '{point.y:.1f}%'
            },
            showInLegend: true
          }
        },
        tooltip: {
          headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
          pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
        },
        series: [{
          name: "Sourcing",
          colorByPoint: true,
          data: [{
            name: "Sourcing",
            y: 62.74
          }, {
            name: "Awarded",
            y: 10.57
          }, {
            name: "Completed",
            y: 10.58
          }]
        }]
      }
    };
  },
  beforeCreate: function beforeCreate() {
    if (!UserClass.loggedIn()) {
      this.$router.push('/');
    }
  }
});

/***/ }),

/***/ "./node_modules/highcharts-vue/dist/highcharts-vue.min.js":
/*!****************************************************************!*\
  !*** ./node_modules/highcharts-vue/dist/highcharts-vue.min.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e(__webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js")):undefined}("undefined"!=typeof self?self:this,function(t){return function(t){function e(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var r={};return e.m=t,e.c=r,e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=1)}([function(e,r){e.exports=t},function(t,e,r){"use strict";function n(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t.component(e.tagName||"highcharts",Object(o.a)(e.highcharts||i.a))}Object.defineProperty(e,"__esModule",{value:!0}),e.default=n,r.d(e,"Chart",function(){return a});var o=r(2),c=r(0),i=r.n(c),a=Object(o.a)(i.a)},function(t,e,r){"use strict";function n(t){return i(t)||c(t)||o()}function o(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function c(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function i(t){if(Array.isArray(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}var a=r(3),s=function(t){return{template:'<div ref="chart"></div>',render:function(t){return t("div",{ref:"chart"})},props:{constructorType:{type:String,default:"chart"},options:{type:Object,required:!0},callback:Function,updateArgs:{type:Array,default:function(){return[!0,!0]}},highcharts:{type:Object},deepCopyOnUpdate:{type:Boolean,default:!0}},watch:{options:{handler:function(t){var e;(e=this.chart).update.apply(e,[Object(a.a)(t,this.deepCopyOnUpdate)].concat(n(this.updateArgs)))},deep:!0}},mounted:function(){var e=this.highcharts||t;this.options&&e[this.constructorType]?this.chart=e[this.constructorType](this.$refs.chart,Object(a.a)(this.options,!0),this.callback?this.callback:null):this.options?console.warn("'".concat(this.constructorType,"' constructor-type is incorrect. Sometimes this error is caused by the fact, that the corresponding module wasn't imported.")):console.warn('The "options" parameter was not passed.')},beforeDestroy:function(){this.chart&&this.chart.destroy()}}};e.a=s},function(t,e,r){"use strict";function n(t,e,r){function o(o,i){!c.a.isObject(o,!r)||c.a.isClass(o)||c.a.isDOMElement(o)?t[i]=e[i]:t[i]=n(t[i]||c.a.isArray(o)?[]:{},o,r)}return c.a.isArray(e)?e.forEach(o):c.a.objectEach(e,o),t}r.d(e,"a",function(){return i});var o=r(0),c=r.n(o),i=function(t,e){return n({},t,e)}}])});

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
  return _c("div", { staticClass: "container-fluid" }, [
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
                _c("h1", { staticClass: "h2" }, [_vm._v("Stratagic Sourcing")]),
                _vm._v(" "),
                _c("div", { staticClass: "btn-toolbar mb-2 mb-md-0" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-sm btn-primary",
                      attrs: { type: "button" },
                      on: {
                        click: function($event) {
                          return _vm.$router.push("/strategic-sourcing/new")
                        }
                      }
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
                      _vm._v(
                        "\n                        New RFP\n                    "
                      )
                    ]
                  )
                ])
              ]
            ),
            _vm._v(" "),
            _c("div", [
              _c("div", { staticClass: "row align-items-start p-2" }, [
                _c("div", { staticClass: "col-12 col-md-6" }, [
                  _vm._m(0),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "my-2 shadow rounded" },
                    [_c("highcharts", { attrs: { options: _vm.barChart } })],
                    1
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-12 col-md-6" }, [
                  _c(
                    "div",
                    { staticClass: "p-2 rounded shadow" },
                    [
                      _c("highcharts", { attrs: { options: _vm.chartOptions } })
                    ],
                    1
                  )
                ])
              ])
            ])
          ])
        ])
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
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-4" }, [
        _c("div", { staticClass: "bg-red rounded-lg shadow" }, [
          _c(
            "span",
            {
              staticClass: "d-block text-center py-2",
              staticStyle: { "background-color": "rgba(0,0,0,.1)" }
            },
            [_vm._v("Sourcing")]
          ),
          _vm._v(" "),
          _c("h3", { staticClass: "p-3 text-center" }, [
            _vm._v("\n                                        1 "),
            _c("span", { staticClass: "d-none d-sm-block" }, [
              _vm._v("Project")
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-4" }, [
        _c("div", { staticClass: "bg-yellow rounded-lg shadow" }, [
          _c(
            "span",
            {
              staticClass: "d-block text-center py-2",
              staticStyle: { "background-color": "rgba(0,0,0,.1)" }
            },
            [_vm._v("Awarded")]
          ),
          _vm._v(" "),
          _c("h3", { staticClass: "p-3 text-center" }, [
            _vm._v("\n                                        0 "),
            _c("span", { staticClass: "d-none d-sm-block" }, [
              _vm._v("Awarded")
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-4" }, [
        _c("div", { staticClass: "bg-green rounded-lg shadow" }, [
          _c(
            "span",
            {
              staticClass: "d-block text-center py-2",
              staticStyle: { "background-color": "rgba(0,0,0,.1)" }
            },
            [_vm._v("Completed")]
          ),
          _vm._v(" "),
          _c("h3", { staticClass: "p-3 text-center" }, [
            _vm._v("\n                                        0 "),
            _c("span", { staticClass: "d-none d-sm-block" }, [
              _vm._v("Completed")
            ])
          ])
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