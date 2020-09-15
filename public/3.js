(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

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
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      tabs: ['Project Info', // 'Select Template',
      'Time Rule & payment', 'Select Supplier', 'Summary'],
      active: 0,
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
        name: 'Public tenders',
        link: '/public-tenders',
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
      // First form
      categories: ["Accommodation", "Accounting Services", "Actuarial Services", "Administrative and support activities", "Advertising and Marketing", "Equipment", "Agriculture", "Forestry and Fisheries", "Installation and Maintenance", "Air Conditioning", "HVAC", "Air transport", "Airport Equipment and Operations", "Animal and Meat Trade", "Animal Feed", "Appliances", "Architectural and Engineering Services", "Armed Response", "Arms and Ammunition", "Arts", "entertainment and recreation", "Audio Visual Equipment", "Audit Services - Technical", "Operational", "Financial", "Compliance and Information Technology", "Incinerators and Sterilisation Equipment", "Automotive and Equipment Fluid Supplies", "Certificates and Medals", "Books", "Exploration and Geotechnical Drilling Services and Equipment", "Brand Tracking and Media Monitoring Services", "Building Upgrades and Maintenance", "Burglar Proofing and Security Gates", "Business Development and Governance", "Car Wash Services", "Carpeting", "Tiling and Floor Covering", "Carports", "Shadeports and Awnings", "Cash in Transit Services", "Catering Services", "CCTV", "Access Control", "Biometric Security and Alarm Systems", "Chemical and Gas Supplies", "Civil Engineering", "Civil Works Services", "Sewer", "Plumbing and Engineering Supplies", "Cleaning Services", "Computer and Networking Equipment", "Software and Support", "Computer programming", "Consultancy and related activities", "Computer Software Supply and License Management", "Concrete Products", "Conference Facilities and Services", "Construction and Building Services", "Construction of buildings", "Contact Centre and Call Centre Solutions", "Copywriting", "Cranes", "Hoists", "Forklifts and Lifting Equipment", "Creative", "Debt Collection and Debt Counselling Services", "Demolition Services and Supplies", "Reconnections and Meter Reading Services", "Disposals and Auctions", "Diving Equipment Supplies and Maintenance", "Doors", "Drones and Aerial photography", "Dry Cleaning and Laundry Services and Equipment", "Economic Development", "Training", "Electrical Engineering", "Electrical Equipment and Supplies", "Electrical Services", "Emergency Response Equipment and Services", "Employment and Recruitment Services", "Engineering Consulting", "Environmental Monitoring", "Assessment and Consulting", "Environmental Rehabilitation", "Equipment Spares", "Event Management Services and Event Logistics", "Extraction of crude petroleum and natural gas", "Facilitation and Moderation Services", "Facilities Management", "Fans and Blowers", "Feasibility and Impact Studies", "Fibre Optic Supplies", "Fibreglass and Composite Materials", "Filtration Equipment", "Firefighting Equipment and Services", "Flood Control and Stormwater Infrastructure", "Food and Beverage Supplies", "Forensic Services", "Fuel and Petroleum Products", "Fuel Management and Fuel Storage Tank Supply and Maintenance", "Fundraising Services", "Funeral and Body Removal Services", "Furniture Supplies", "Gardening Tools", "Vegetation Management and Landscaping Services", "Gas Supply Systems Installation and Maintenance", "Gearbox Supplies", "Generator Installation", "Geotechnical and Geological Services", "Glass Supply", "Graphic Design and Branding", "Guarding Services", "Guy Wire Services", "Hazardous Materials Handling", "Housing Development", "Human health and social work activities", "Human Resources and Labour", "Hydraulic and Pneumatic Tools and Equipment", "Industrial and Plant Cleaning Services", "Information and Communications Technology", "Infrastructure Delivery Management", "Inspection and Quality Assurance", "Insurance and Medical Aid Services", "Interior Design and Decorating", "Internet Services - Connectivity", "Websites", "ISO Standards Certification Services", "Kitchen Appliances and Accessories", "Laboratory", "Sampling and Analytical Equipment", "Laboratory", "Testing and Analytical Services", "Land Surveying Services and Equipment", "Law Enforcement & Legal Services", "Legislation and regulation", "Libraries", "Archives", "Museums and other Cultural Activities", "Lifts & Escalators", "Livestock Enclosures", "Logistics", "Freight Forwarding and Customs Clearing", "Lubricant Supplies", "Management Consulting", "Manufacture and Supply of Textiles", "Manufacture of basic metals", "Manufacture of basic pharmaceutical products and pharmaceutical preparations", "Manufacture of coke and refined petroleum products", "Manufacture of computer", "Manufacture of Electrical Equipment", "Manufacture of fabricated metal products", "Manufacture of food products", "Manufacture of leather and related products", "Manufacture of machinery and equipment n.e.c.", "Manufacture of motor vehicles", "Manufacture of other non-metallic mineral products", "Manufacture of other transport equipment", "Manufacture of paper and paper products", "Manufacture of wearing apparel", "Market Research and Surveys", "Mast Supply", "Materials recovery", "Mechanical Services", "Mechanical Tools and Equipment and Power Tools", "Medical Equipment and Supplies", "Medical Services", "Metal and Alloy Products", "Mining and Industry Services and Equipment", "Mining and quarrying", "Video and television programme production", "Sound recording and music publishing activities", "Office Equipment Sales and Rental", "Office Space and Property Rentals", "Other manufacturing", "Other mining and quarrying", "Other personal service activities", "Other professional", "scientific and technical activities", "Other service activities", "Outsourcing", "PA and Intercom Installation and Maintenance", "Packaging Materials", "Paint and Painting Supplies", "Parking Systems Services and Equipment", "Payment Services", "Pension Funding", "Personal Hygiene Products", "Personal Protective Equipment (PPE)", "Pest Control", "Photography and Videography", "Pipework", "Plastic and Rubber Products", "Plumbing", "Pollution Control Equipment", "Pool and Spa Installation and Maintenance", "Printing Supplies and Stationery", "Reproduction and Distribution Services", "Procurement and Supply Chain Management", "Professional Services", "Programming and broadcasting activities", "Project Management", "Psychometric and Competency Assessments", "Public Relations and Communication", "Publishing activities", "Quality Management Systems", "Transcribing and Translation", "Relocation and Moving Services", "Renewable Energy", "Repair", "Research and development", "Retail trade", "Risk Management and Risk Assessment", "Road Construction", "Repairs and Maintenance", "Road Marking Services and Supplies", "Road Safety Equipment", "Sensors", "PLC and SCADA", "Shelving", "Shipping Container Sales and Conversions", "Social Media Marketing and Management", "Supplies: Clothing/Textiles/Footwear", "Supply and Delivery Services", "Supply and Installation of Machinery and Equipment", "Tank and Pipeline Cleaning", "IP PBX", "SIP", "VoIP - Supplies", "Town and Urban Planning", "Traffic Engineering and Management", "Transformer Oil Supplies and Processing", "Transportation", "Travel agency", "TV and Satellite Dish Installation and Repairs", "Vehicle Tracking and Fleet Management", "Verification and Investigation Services", "Water transport", "Waterproofing", "Welding Services"],
      project_name: '',
      project_category: '',
      project_price: '',
      project_summary: '',
      boq: '',
      district: '',
      city: '',
      country: '',
      publicRFX: null,
      // form2 
      start: "",
      end: "",
      startTime: ("0" + new Date().getHours()).substr(-2) + ":" + new Date().getMinutes(),
      endTime: ("0" + new Date().getHours()).substr(-2) + ":" + new Date().getMinutes(),
      award: "",
      payOpt: "",
      upfront: "",
      // #rd form 
      mySuppliers: [// {
        //     name : 'Procurement tender management',
        //     description : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est maxime accusantium saepe dignissimos, impedit repudiandae perferendis quaerat blanditiis deleniti.',
        //     id : Math.random(1000),
        //     checked : false,
        //     profile : '/assets/profile_1.jpg'
        // },
        // {
        //     name : 'Procurement tender management',
        //     description : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est maxime accusantium saepe dignissimos, impedit repudiandae perferendis quaerat blanditiis deleniti.',
        //     id : Math.random(1000),
        //     checked : false,
        //     profile : '/assets/profile_1.jpg'
        // },
        // {
        //     name : 'Procurement tender management',
        //     description : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est maxime accusantium saepe dignissimos, impedit repudiandae perferendis quaerat blanditiis deleniti.',
        //     id : Math.random(1000),
        //     checked : false,
        //     profile : '/assets/profile_1.jpg'
        // },
      ],
      MPSuppliers: [{
        name: 'Saudi Procurement Service',
        description: 'Management and Business Professionals and Administrative Services',
        id: Math.random(1000),
        checked: false,
        profile: '/assets/1.png'
      }, {
        name: 'FP Group',
        description: 'Electrical Systems and Lighting and Components and Accessories and Supplies',
        id: Math.random(1000),
        checked: false,
        profile: '/assets/2.jpeg'
      }, {
        name: 'BONYAT ALBENAA FACTORY',
        description: 'Building and Construction Machinery and Accessories',
        id: Math.random(1000),
        checked: false,
        profile: '/assets/3.jpg'
      }],
      supName: "",
      supEmail: "",
      inviteSuppliers: []
    };
  },
  methods: {
    validate: function validate() {
      if (this.active == 0) {
        if (!this.$refs.form1.checkValidity()) {
          this.$refs.form1.classList.add('was-validated');
          EventBus.$emit('alert', {
            name: "Form Validation",
            type: 'danger',
            desc: "Please fill in all the required fields",
            id: Math.random(10000),
            time: 5000
          });
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
        var sMySup = this.mySuppliers.filter(function (s) {
          return s.checked;
        }).length;
        var sMPSup = this.MPSuppliers.filter(function (s) {
          return s.checked;
        }).length;
        var sInviteSup = this.inviteSuppliers.length;

        if (sMySup || sMPSup || sInviteSup) {
          // Go to summary 
          if (this.active < this.tabs.length - 1) {
            this.active = this.active + 1;
          }
        } else {
          EventBus.$emit('alert', {
            name: "Supplier outage",
            type: 'danger',
            desc: "Please select atleast one supplier or invite them.",
            id: Math.random(10000),
            time: 5000
          });
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
    },
    selectSup: function selectSup(i, str) {
      if (str == "MP") {
        this.MPSuppliers[i].checked = !this.MPSuppliers[i].checked;
      } else {
        this.mySuppliers[i].checked = !this.mySuppliers[i].checked;
      }
    },
    selectAll: function selectAll(str) {
      if (str == "MP") {
        if (!this.allSelectedMP) {
          this.MPSuppliers.forEach(function (s) {
            return s.checked = true;
          });
        } else {
          this.MPSuppliers.forEach(function (s) {
            return s.checked = !s.checked;
          });
        }
      } else {
        if (!this.allSelected) {
          this.mySuppliers.forEach(function (s) {
            return s.checked = true;
          });
        } else {
          this.mySuppliers.forEach(function (s) {
            return s.checked = !s.checked;
          });
        }
      }
    },
    validateSup: function validateSup(e) {
      e.preventDefault();

      if (!this.$refs.form3.checkValidity()) {
        this.$refs.form3.classList.add('was-validated');
        EventBus.$emit('alert', {
          name: "Form Validation",
          type: 'danger',
          desc: "Please fill in all the required fields",
          id: Math.random(10000),
          time: 5000
        });
      } else {
        this.inviteSuppliers.push({
          name: this.supName,
          email: this.supEmail
        });
        this.supName = "";
        this.supEmail = "";
      }
    },
    removeSup: function removeSup(i) {
      this.inviteSuppliers.splice(i, 1);
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
  },
  computed: {
    allSelected: function allSelected() {
      var check = true;

      var _iterator = _createForOfIteratorHelper(this.mySuppliers),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var s = _step.value;

          if (!s.checked) {
            check = false;
            break;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return check;
    },
    allSelectedMP: function allSelectedMP() {
      var check = true;

      var _iterator2 = _createForOfIteratorHelper(this.MPSuppliers),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var s = _step2.value;

          if (!s.checked) {
            check = false;
            break;
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      return check;
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
exports.push([module.i, "\n.nav-scroller {\nposition: relative;\nz-index: 2;\noverflow-y: hidden;\n}\n.nav-scroller .nav {\ndisplay: flex;\nflex-wrap: nowrap;\nmargin-top: -1px;\noverflow-x: auto;\ncolor: rgba(255, 255, 255, .75);\ntext-align: center;\nwhite-space: nowrap;\n-webkit-overflow-scrolling: touch;\n}\n.tab-controlers .done{\n    color: var(--bs-success);\n}\n.tab-controlers .active{\n    background-color: var(--bs-success);\n    color: #fff;\n    padding: .5rem .75rem;\n    border-radius: 4px;\n}\n", ""]);

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
                            _c("h4", { staticClass: "col-12" }, [
                              _vm._v("Project details")
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
                                    attrs: { for: "project_name" }
                                  },
                                  [_vm._v("Project name")]
                                ),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.project_name,
                                      expression: "project_name"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: {
                                    type: "text",
                                    id: "project_name",
                                    required: ""
                                  },
                                  domProps: { value: _vm.project_name },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.project_name = $event.target.value
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                _c("div", { staticClass: "valid-feedback" }, [
                                  _vm._v(
                                    "\n                                Looks good!\n                            "
                                  )
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "invalid-feedback" }, [
                                  _vm._v(
                                    "\n                                Please enter project name.\n                            "
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
                                    attrs: { for: "category" }
                                  },
                                  [_vm._v("Project category")]
                                ),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.project_category,
                                      expression: "project_category"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: {
                                    list: "catList",
                                    id: "category",
                                    required: ""
                                  },
                                  domProps: { value: _vm.project_category },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.project_category = $event.target.value
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                _c(
                                  "datalist",
                                  { attrs: { id: "catList" } },
                                  _vm._l(_vm.categories, function(c, i) {
                                    return _c(
                                      "option",
                                      { key: i, domProps: { value: c } },
                                      [_vm._v(_vm._s(c))]
                                    )
                                  }),
                                  0
                                ),
                                _vm._v(" "),
                                _c("div", { staticClass: "valid-feedback" }, [
                                  _vm._v(
                                    "\n                                Looks good!\n                            "
                                  )
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "invalid-feedback" }, [
                                  _vm._v(
                                    "\n                                Please select project category.\n                            "
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
                                    attrs: { for: "price" }
                                  },
                                  [_vm._v("Project price")]
                                ),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.project_price,
                                      expression: "project_price"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: {
                                    type: "number",
                                    id: "price",
                                    required: ""
                                  },
                                  domProps: { value: _vm.project_price },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.project_price = $event.target.value
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                _c("div", { staticClass: "invalid-feedback" }, [
                                  _vm._v(
                                    "\n                                Please enter project budget/ contract price.\n                            "
                                  )
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "valid-feedback" }, [
                                  _vm._v(
                                    "\n                                Looks good.\n                            "
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
                                  attrs: { for: "summary" }
                                },
                                [_vm._v("Project summary")]
                              ),
                              _vm._v(" "),
                              _c("textarea", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.project_summary,
                                    expression: "project_summary"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  rows: "6",
                                  id: "summary",
                                  placeholder: "Deatails about this RFP",
                                  required: ""
                                },
                                domProps: { value: _vm.project_summary },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.project_summary = $event.target.value
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c("div", { staticClass: "invalid-feedback" }, [
                                _vm._v(
                                  "\n                                Please enter summary of the project.\n                            "
                                )
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "valid-feedback" }, [
                                _vm._v(
                                  "\n                            Looks good!\n                            "
                                )
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-12" }, [
                              _c(
                                "label",
                                {
                                  staticClass: "form-label",
                                  attrs: { for: "detail" }
                                },
                                [_vm._v("Project details (BoQ)")]
                              ),
                              _vm._v(" "),
                              _c("textarea", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.boq,
                                    expression: "boq"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  rows: "6",
                                  id: "detail",
                                  placeholder: "Deatails about this RFP",
                                  required: ""
                                },
                                domProps: { value: _vm.boq },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.boq = $event.target.value
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c("div", { staticClass: "invalid-feedback" }, [
                                _vm._v(
                                  "\n                                Please enter details of the project.\n                            "
                                )
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "valid-feedback" }, [
                                _vm._v(
                                  "\n                            Looks good!\n                            "
                                )
                              ])
                            ]),
                            _vm._v(" "),
                            _c("h4", { staticClass: "col-12" }, [
                              _vm._v("Location details")
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
                                    attrs: { for: "district" }
                                  },
                                  [_vm._v("District/Area")]
                                ),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.district,
                                      expression: "district"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: { id: "district", required: "" },
                                  domProps: { value: _vm.district },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.district = $event.target.value
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                _c("div", { staticClass: "invalid-feedback" }, [
                                  _vm._v(
                                    "\n                                Please enter location district\n                            "
                                  )
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "valid-feedback" }, [
                                  _vm._v(
                                    "\n                                Looks good.\n                            "
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
                                    attrs: { for: "city" }
                                  },
                                  [_vm._v("City")]
                                ),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.city,
                                      expression: "city"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: { id: "city", required: "" },
                                  domProps: { value: _vm.city },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.city = $event.target.value
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                _c("div", { staticClass: "invalid-feedback" }, [
                                  _vm._v(
                                    "\n                                Please enter location city\n                            "
                                  )
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "valid-feedback" }, [
                                  _vm._v(
                                    "\n                                Looks good.\n                            "
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
                                    attrs: { for: "country" }
                                  },
                                  [_vm._v("Country")]
                                ),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.country,
                                      expression: "country"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: { id: "country", required: "" },
                                  domProps: { value: _vm.country },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.country = $event.target.value
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                _c("div", { staticClass: "invalid-feedback" }, [
                                  _vm._v(
                                    "\n                                Please enter location country\n                            "
                                  )
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "valid-feedback" }, [
                                  _vm._v(
                                    "\n                                Looks good.\n                            "
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
                                  attrs: { type: "checkbox" },
                                  domProps: {
                                    checked: Array.isArray(_vm.publicRFX)
                                      ? _vm._i(_vm.publicRFX, null) > -1
                                      : _vm.publicRFX
                                  },
                                  on: {
                                    change: function($event) {
                                      var $$a = _vm.publicRFX,
                                        $$el = $event.target,
                                        $$c = $$el.checked ? true : false
                                      if (Array.isArray($$a)) {
                                        var $$v = null,
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
                                  { staticClass: "form-check-label" },
                                  [
                                    _vm._v(
                                      "\n                                    Make this Project public?\n                                "
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
                                [_vm._v("Date of last inquiry")]
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
                                  max: _vm.end,
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
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-12" }, [
                              _c(
                                "label",
                                {
                                  staticClass: "form-label",
                                  attrs: { for: "pay options" }
                                },
                                [_vm._v("Payment Options")]
                              ),
                              _vm._v(" "),
                              _c(
                                "select",
                                {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.payOpt,
                                      expression: "payOpt"
                                    }
                                  ],
                                  staticClass: "form-select",
                                  attrs: { id: "pay options", required: "" },
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
                                      _vm.payOpt = $event.target.multiple
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
                                  _c("option", [_vm._v("Full payment")]),
                                  _vm._v(" "),
                                  _c("option", [_vm._v("Milestone payment")])
                                ]
                              ),
                              _vm._v(" "),
                              _c("div", { staticClass: "invalid-feedback" }, [
                                _vm._v(
                                  "\n                                Please select a payment option.\n                            "
                                )
                              ])
                            ]),
                            _vm._v(" "),
                            _vm.payOpt == "Milestone payment"
                              ? _c("div", [
                                  _c(
                                    "label",
                                    {
                                      staticClass: "form-label",
                                      attrs: { for: "upfront" }
                                    },
                                    [_vm._v("Upfront payment")]
                                  ),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "input-group" }, [
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.upfront,
                                          expression: "upfront"
                                        }
                                      ],
                                      staticClass: "form-control",
                                      attrs: {
                                        type: "number",
                                        id: "upfront",
                                        placeholder: "Enter percentage",
                                        required: ""
                                      },
                                      domProps: { value: _vm.upfront },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.upfront = $event.target.value
                                        }
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c(
                                      "span",
                                      { staticClass: "input-group-text" },
                                      [_vm._v("%")]
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "invalid-feedback" },
                                    [
                                      _vm._v(
                                        "\n                                Please choose a username.\n                            "
                                      )
                                    ]
                                  )
                                ])
                              : _vm._e()
                          ]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.active == 2
                      ? _c(
                          "div",
                          {
                            key: 3,
                            staticClass: "mx-auto",
                            staticStyle: { "max-width": "800px" }
                          },
                          [
                            _c(
                              "ul",
                              {
                                staticClass:
                                  "nav nav-tabs d-flex justify-content-center",
                                attrs: { id: "myTab", role: "tablist" }
                              },
                              [
                                _c(
                                  "li",
                                  {
                                    staticClass: "nav-item",
                                    attrs: { role: "presentation" }
                                  },
                                  [
                                    _c(
                                      "a",
                                      {
                                        staticClass: "nav-link active",
                                        attrs: {
                                          id: "home-tab",
                                          "data-toggle": "tab",
                                          href: "#home",
                                          role: "tab",
                                          "aria-controls": "home",
                                          "aria-selected": "true"
                                        }
                                      },
                                      [_vm._v("My suppliers list")]
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "li",
                                  {
                                    staticClass: "nav-item",
                                    attrs: { role: "presentation" }
                                  },
                                  [
                                    _c(
                                      "a",
                                      {
                                        staticClass: "nav-link",
                                        attrs: {
                                          id: "profile-tab",
                                          "data-toggle": "tab",
                                          href: "#profile",
                                          role: "tab",
                                          "aria-controls": "profile",
                                          "aria-selected": "false"
                                        }
                                      },
                                      [_vm._v("Suppliers from marketplace")]
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "li",
                                  {
                                    staticClass: "nav-item",
                                    attrs: { role: "presentation" }
                                  },
                                  [
                                    _c(
                                      "a",
                                      {
                                        staticClass: "nav-link",
                                        attrs: {
                                          id: "contact-tab",
                                          "data-toggle": "tab",
                                          href: "#contact",
                                          role: "tab",
                                          "aria-controls": "contact",
                                          "aria-selected": "false"
                                        }
                                      },
                                      [_vm._v("Invite new suppliers")]
                                    )
                                  ]
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass: "tab-content",
                                attrs: { id: "myTabContent" }
                              },
                              [
                                _c(
                                  "div",
                                  {
                                    staticClass: "tab-pane fade show active",
                                    attrs: { id: "home", role: "tabpanel" }
                                  },
                                  [
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "container py-3 px-0 px-md-3"
                                      },
                                      [
                                        _c("div", { staticClass: "row" }, [
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "my-1 col-12 col-sm-8 col-md-9 col-lg-10 d-flex align-items-center"
                                            },
                                            [
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "input-group mb-2 px-1"
                                                },
                                                [
                                                  _c(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "input-group-text bg-transparent text-primary border-right-0"
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
                                                                "/assets/icons/bootstrap-icons.svg#search"
                                                            }
                                                          })
                                                        ]
                                                      )
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c("input", {
                                                    staticClass:
                                                      "form-control border-left-0",
                                                    attrs: {
                                                      type: "text",
                                                      placeholder:
                                                        "Search my suppliers"
                                                    }
                                                  }),
                                                  _vm._v(" "),
                                                  _c(
                                                    "button",
                                                    {
                                                      staticClass:
                                                        "btn btn-outline-primary"
                                                    },
                                                    [_vm._v("Search")]
                                                  )
                                                ]
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "my-1 col-12 col-sm-4 col-md-3 col-lg-2"
                                            },
                                            [
                                              _c(
                                                "span",
                                                {
                                                  staticClass:
                                                    "btn btn-sm border-0 float-right",
                                                  class: _vm.allSelected
                                                    ? "btn-dark"
                                                    : "btn-outline-dark",
                                                  on: { click: _vm.selectAll }
                                                },
                                                [_vm._v(" Select all ")]
                                              )
                                            ]
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _vm._l(_vm.mySuppliers, function(s, i) {
                                          return _c(
                                            "div",
                                            {
                                              key: s.id,
                                              staticClass:
                                                "row hover link-dark my-2 border-bottom py-3",
                                              on: {
                                                click: function($event) {
                                                  return _vm.selectSup(i)
                                                }
                                              }
                                            },
                                            [
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "col-3 col-sm-2 col-lg-1"
                                                },
                                                [
                                                  _c("div", {
                                                    staticClass:
                                                      "rounded shadow",
                                                    staticStyle: {
                                                      width: "55px",
                                                      height: "55px"
                                                    },
                                                    style:
                                                      "background:url(" +
                                                      s.profile +
                                                      ") center/contain no-repeat"
                                                  })
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "col-7 col-sm-9 col-lg-10 d-flex flex-column justify-content-center"
                                                },
                                                [
                                                  _c(
                                                    "span",
                                                    {
                                                      staticClass:
                                                        "font-weight-bold"
                                                    },
                                                    [_vm._v(_vm._s(s.name))]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "span",
                                                    {
                                                      staticClass:
                                                        "d-none d-sm-block"
                                                    },
                                                    [
                                                      _vm._v(
                                                        _vm._s(s.description)
                                                      )
                                                    ]
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "col-2 col-sm-1 d-flex align-items-center"
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
                                                            (s.checked
                                                              ? "check-square-fill"
                                                              : "check-square")
                                                        }
                                                      })
                                                    ]
                                                  )
                                                ]
                                              )
                                            ]
                                          )
                                        })
                                      ],
                                      2
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticClass: "tab-pane fade",
                                    attrs: { id: "profile", role: "tabpanel" }
                                  },
                                  [
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "container py-3 px-0 px-md-3"
                                      },
                                      [
                                        _c("div", { staticClass: "row" }, [
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "my-1 col-12 col-sm-8 col-md-9 col-lg-10 d-flex align-items-center"
                                            },
                                            [
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "input-group mb-2 px-1"
                                                },
                                                [
                                                  _c(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "input-group-text bg-transparent text-primary border-right-0"
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
                                                                "/assets/icons/bootstrap-icons.svg#search"
                                                            }
                                                          })
                                                        ]
                                                      )
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c("input", {
                                                    staticClass:
                                                      "form-control border-left-0",
                                                    attrs: {
                                                      type: "text",
                                                      placeholder:
                                                        "Search suppliers"
                                                    }
                                                  }),
                                                  _vm._v(" "),
                                                  _c(
                                                    "button",
                                                    {
                                                      staticClass:
                                                        "btn btn-outline-primary"
                                                    },
                                                    [_vm._v("Search")]
                                                  )
                                                ]
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "my-1 col-12 col-sm-4 col-md-3 col-lg-2"
                                            },
                                            [
                                              _c(
                                                "span",
                                                {
                                                  staticClass:
                                                    "btn btn-sm border-0 float-right",
                                                  class: _vm.allSelectedMP
                                                    ? "btn-dark"
                                                    : "btn-outline-dark",
                                                  on: {
                                                    click: function($event) {
                                                      return _vm.selectAll("MP")
                                                    }
                                                  }
                                                },
                                                [_vm._v(" Select all ")]
                                              )
                                            ]
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _vm._l(_vm.MPSuppliers, function(s, i) {
                                          return _c(
                                            "div",
                                            {
                                              key: s.id,
                                              staticClass:
                                                "row hover link-dark my-2 border-bottom py-3",
                                              on: {
                                                click: function($event) {
                                                  return _vm.selectSup(i, "MP")
                                                }
                                              }
                                            },
                                            [
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "col-3 col-sm-2 col-lg-1"
                                                },
                                                [
                                                  _c("div", {
                                                    staticClass:
                                                      "rounded shadow",
                                                    staticStyle: {
                                                      width: "55px",
                                                      height: "55px"
                                                    },
                                                    style:
                                                      "background:url(" +
                                                      s.profile +
                                                      ") center/contain no-repeat"
                                                  })
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "col-7 col-sm-9 col-lg-10 d-flex flex-column justify-content-center"
                                                },
                                                [
                                                  _c("span", [
                                                    _vm._v(_vm._s(s.name))
                                                  ]),
                                                  _vm._v(" "),
                                                  _c(
                                                    "span",
                                                    {
                                                      staticClass:
                                                        "d-none d-sm-block"
                                                    },
                                                    [
                                                      _vm._v(
                                                        _vm._s(s.description)
                                                      )
                                                    ]
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "col-2 col-sm-1 d-flex align-items-center"
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
                                                            (s.checked
                                                              ? "check-square-fill"
                                                              : "check-square")
                                                        }
                                                      })
                                                    ]
                                                  )
                                                ]
                                              )
                                            ]
                                          )
                                        })
                                      ],
                                      2
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticClass: "tab-pane fade",
                                    attrs: { id: "contact", role: "tabpanel" }
                                  },
                                  [
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "container py-3 px-0 px-md-3"
                                      },
                                      [
                                        _c(
                                          "form",
                                          {
                                            ref: "form3",
                                            staticClass:
                                              "row g-3 needs-validation",
                                            attrs: { novalidate: "" },
                                            on: { submit: _vm.validateSup }
                                          },
                                          [
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "my-3 col-12 col-md-4 col-lg-5"
                                              },
                                              [
                                                _c("input", {
                                                  directives: [
                                                    {
                                                      name: "model",
                                                      rawName: "v-model",
                                                      value: _vm.supName,
                                                      expression: "supName"
                                                    }
                                                  ],
                                                  staticClass: "form-control",
                                                  attrs: {
                                                    type: "text",
                                                    placeholder:
                                                      "Enter supplier name",
                                                    id: "esn",
                                                    required: ""
                                                  },
                                                  domProps: {
                                                    value: _vm.supName
                                                  },
                                                  on: {
                                                    input: function($event) {
                                                      if (
                                                        $event.target.composing
                                                      ) {
                                                        return
                                                      }
                                                      _vm.supName =
                                                        $event.target.value
                                                    }
                                                  }
                                                }),
                                                _vm._v(" "),
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "invalid-feedback"
                                                  },
                                                  [
                                                    _vm._v(
                                                      "\n                                                Please provide a name.\n                                            "
                                                    )
                                                  ]
                                                )
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "my-3 col-12 col-md-4 col-lg-5"
                                              },
                                              [
                                                _c("input", {
                                                  directives: [
                                                    {
                                                      name: "model",
                                                      rawName: "v-model",
                                                      value: _vm.supEmail,
                                                      expression: "supEmail"
                                                    }
                                                  ],
                                                  staticClass: "form-control",
                                                  attrs: {
                                                    type: "email",
                                                    placeholder:
                                                      "Enter supplier email",
                                                    id: "ese",
                                                    required: ""
                                                  },
                                                  domProps: {
                                                    value: _vm.supEmail
                                                  },
                                                  on: {
                                                    input: function($event) {
                                                      if (
                                                        $event.target.composing
                                                      ) {
                                                        return
                                                      }
                                                      _vm.supEmail =
                                                        $event.target.value
                                                    }
                                                  }
                                                }),
                                                _vm._v(" "),
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "invalid-feedback"
                                                  },
                                                  [
                                                    _vm._v(
                                                      "\n                                                Please provide a valide email.\n                                            "
                                                    )
                                                  ]
                                                )
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "my-3 col-12 col-md-4 col-lg-2"
                                              },
                                              [
                                                _c(
                                                  "button",
                                                  {
                                                    staticClass:
                                                      "btn btn-outline-success float-right",
                                                    attrs: { type: "submit" },
                                                    on: {
                                                      click: _vm.validateSup
                                                    }
                                                  },
                                                  [_vm._v(" Add ")]
                                                )
                                              ]
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _vm._l(_vm.inviteSuppliers, function(
                                          s,
                                          i
                                        ) {
                                          return _c(
                                            "div",
                                            {
                                              key: i,
                                              staticClass:
                                                "row my-3 border-bottom py-2"
                                            },
                                            [
                                              _c(
                                                "div",
                                                { staticClass: "col-5" },
                                                [_vm._v(_vm._s(s.name))]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "div",
                                                { staticClass: "col-5" },
                                                [_vm._v(_vm._s(s.email))]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "div",
                                                { staticClass: "col-2" },
                                                [
                                                  _c(
                                                    "span",
                                                    {
                                                      staticClass:
                                                        "text-danger hover",
                                                      attrs: {
                                                        title: "Remove supplier"
                                                      },
                                                      on: {
                                                        click: function(
                                                          $event
                                                        ) {
                                                          return _vm.removeSup(
                                                            i
                                                          )
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
                                                                "/assets/icons/bootstrap-icons.svg#x-square"
                                                            }
                                                          })
                                                        ]
                                                      )
                                                    ]
                                                  )
                                                ]
                                              )
                                            ]
                                          )
                                        })
                                      ],
                                      2
                                    )
                                  ]
                                )
                              ]
                            )
                          ]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.active == 3
                      ? _c("div", { key: 4 }, [
                          _c("div", { staticClass: "container" }, [
                            _c("div", { staticClass: "row" }, [
                              _c(
                                "div",
                                {
                                  staticClass: "my-3 col-12 col-sm-6 col-lg-4"
                                },
                                [
                                  _c("h5", { staticClass: "text-primary" }, [
                                    _vm._v(
                                      "\n                                        Overview\n                                    "
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "row my-3" }, [
                                    _c("div", { staticClass: "col-5" }, [
                                      _c(
                                        "span",
                                        { staticClass: "text-primary" },
                                        [_vm._v("Project Name")]
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "col-7" }, [
                                      _vm._v(_vm._s(_vm.project_name))
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "row my-3" }, [
                                    _c("div", { staticClass: "col-5" }, [
                                      _c(
                                        "span",
                                        { staticClass: "text-primary" },
                                        [_vm._v("Project Category")]
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "col-7" }, [
                                      _vm._v(
                                        "\n                                            " +
                                          _vm._s(_vm.project_category) +
                                          "\n                                        "
                                      )
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "row my-3" }, [
                                    _c("div", { staticClass: "col-5" }, [
                                      _c(
                                        "span",
                                        { staticClass: "text-primary" },
                                        [_vm._v("Project Type")]
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "col-7" }, [
                                      _vm._v(
                                        "\n                                            " +
                                          _vm._s(
                                            _vm.publicRFX ? "Public" : "Private"
                                          ) +
                                          "\n                                        "
                                      )
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "row my-3" }, [
                                    _c("div", { staticClass: "col-5" }, [
                                      _c(
                                        "span",
                                        { staticClass: "text-primary" },
                                        [_vm._v("Project Price")]
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "col-7" }, [
                                      _vm._v(
                                        "\n                                            " +
                                          _vm._s(_vm.project_price) +
                                          "\n                                        "
                                      )
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "row my-3" }, [
                                    _c("div", { staticClass: "col-5" }, [
                                      _c(
                                        "span",
                                        { staticClass: "text-primary" },
                                        [_vm._v("Summary")]
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "col-7" }, [
                                      _vm._v(
                                        "\n                                            " +
                                          _vm._s(_vm.project_summary) +
                                          "\n                                        "
                                      )
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "row my-3" }, [
                                    _c("div", { staticClass: "col-5" }, [
                                      _c(
                                        "span",
                                        { staticClass: "text-primary" },
                                        [_vm._v("Project Details")]
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "col-7" }, [
                                      _vm._v(
                                        "\n                                            " +
                                          _vm._s(_vm.boq) +
                                          "\n                                        "
                                      )
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "row my-3" }, [
                                    _c("div", { staticClass: "col-5" }, [
                                      _c(
                                        "span",
                                        { staticClass: "text-primary" },
                                        [_vm._v("Location")]
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "col-7" }, [
                                      _vm._v(
                                        "\n                                            " +
                                          _vm._s(_vm.district) +
                                          ", " +
                                          _vm._s(_vm.city) +
                                          ", " +
                                          _vm._s(_vm.country) +
                                          "\n                                        "
                                      )
                                    ])
                                  ])
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "border-left border-primary my-3 col-12 col-sm-6 col-lg-4"
                                },
                                [
                                  _c("h5", { staticClass: "text-primary" }, [
                                    _vm._v(
                                      "\n                                        Time rules\n                                    "
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "row my-3" }, [
                                    _c("div", { staticClass: "col-6" }, [
                                      _c(
                                        "span",
                                        { staticClass: "text-primary" },
                                        [_vm._v("Start Date")]
                                      ),
                                      _c("br"),
                                      _vm._v(
                                        "\n                                            " +
                                          _vm._s(
                                            new Date(
                                              _vm.start
                                            ).toLocaleDateString(undefined, {
                                              year: "numeric",
                                              month: "long",
                                              day: "numeric"
                                            })
                                          ) +
                                          "\n                                        "
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "col-6" }, [
                                      _c(
                                        "span",
                                        { staticClass: "text-primary" },
                                        [_vm._v("Start Time")]
                                      ),
                                      _c("br"),
                                      _vm._v(
                                        "\n                                            " +
                                          _vm._s(_vm.startTime) +
                                          "\n                                        "
                                      )
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "row my-3" }, [
                                    _c("div", { staticClass: "col-6" }, [
                                      _c(
                                        "span",
                                        { staticClass: "text-primary" },
                                        [_vm._v("End Date")]
                                      ),
                                      _c("br"),
                                      _vm._v(
                                        "\n                                            " +
                                          _vm._s(
                                            new Date(
                                              _vm.end
                                            ).toLocaleDateString(undefined, {
                                              year: "numeric",
                                              month: "long",
                                              day: "numeric"
                                            })
                                          ) +
                                          "\n                                        "
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "col-6" }, [
                                      _c(
                                        "span",
                                        { staticClass: "text-primary" },
                                        [_vm._v("End Time")]
                                      ),
                                      _c("br"),
                                      _vm._v(
                                        "\n                                            " +
                                          _vm._s(_vm.endTime) +
                                          "\n                                        "
                                      )
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "row my-3" }, [
                                    _c("div", { staticClass: "col" }, [
                                      _c(
                                        "span",
                                        { staticClass: "text-primary" },
                                        [_vm._v("Estimated Award Date")]
                                      ),
                                      _c("br"),
                                      _vm._v(
                                        "\n                                        " +
                                          _vm._s(
                                            new Date(
                                              _vm.award
                                            ).toLocaleDateString(undefined, {
                                              year: "numeric",
                                              month: "long",
                                              day: "numeric"
                                            })
                                          ) +
                                          "\n                                        "
                                      )
                                    ])
                                  ])
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "border-left border-primary my-3 col-12 col-lg-4"
                                },
                                [
                                  _c("h5", { staticClass: "text-primary" }, [
                                    _vm._v(
                                      "\n                                        Suppliers\n                                    "
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _vm._l(_vm.MPSuppliers, function(s, i) {
                                    return _c(
                                      "div",
                                      {
                                        key: s.id,
                                        staticClass:
                                          "row hover link-dark my-2 border-bottom py-3",
                                        on: {
                                          click: function($event) {
                                            return _vm.selectSup(i)
                                          }
                                        }
                                      },
                                      [
                                        _c("div", { staticClass: "col-3" }, [
                                          _c("div", {
                                            staticClass: "rounded shadow",
                                            staticStyle: {
                                              width: "55px",
                                              height: "55px"
                                            },
                                            style:
                                              "background:url(" +
                                              s.profile +
                                              ") center/contain no-repeat"
                                          })
                                        ]),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "col-9 d-flex flex-column justify-content-center"
                                          },
                                          [
                                            _c(
                                              "span",
                                              {
                                                staticClass: "font-weight-bold"
                                              },
                                              [_vm._v(_vm._s(s.name))]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "span",
                                              {
                                                staticClass: "d-none d-sm-block"
                                              },
                                              [_vm._v(_vm._s(s.description))]
                                            )
                                          ]
                                        )
                                      ]
                                    )
                                  })
                                ],
                                2
                              )
                            ])
                          ])
                        ])
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "d-flex my-5" }, [
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
                      [
                        _vm._v(
                          "\n                        " +
                            _vm._s(_vm.active == 3 ? "Submit Order" : "Next") +
                            "\n                    "
                        )
                      ]
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