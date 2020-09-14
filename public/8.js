(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/EAuction.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/EAuction.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
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
      tender_name: "",
      tender_id: "",
      date_from: "",
      date_to: "",
      categories: ["Accommodation", "Accounting Services", "Actuarial Services", "Administrative and support activities", "Advertising and Marketing", "Equipment", "Agriculture", "Forestry and Fisheries", "Installation and Maintenance", "Air Conditioning", "HVAC", "Air transport", "Airport Equipment and Operations", "Animal and Meat Trade", "Animal Feed", "Appliances", "Architectural and Engineering Services", "Armed Response", "Arms and Ammunition", "Arts", "entertainment and recreation", "Audio Visual Equipment", "Audit Services - Technical", "Operational", "Financial", "Compliance and Information Technology", "Incinerators and Sterilisation Equipment", "Automotive and Equipment Fluid Supplies", "Certificates and Medals", "Books", "Exploration and Geotechnical Drilling Services and Equipment", "Brand Tracking and Media Monitoring Services", "Building Upgrades and Maintenance", "Burglar Proofing and Security Gates", "Business Development and Governance", "Car Wash Services", "Carpeting", "Tiling and Floor Covering", "Carports", "Shadeports and Awnings", "Cash in Transit Services", "Catering Services", "CCTV", "Access Control", "Biometric Security and Alarm Systems", "Chemical and Gas Supplies", "Civil Engineering", "Civil Works Services", "Sewer", "Plumbing and Engineering Supplies", "Cleaning Services", "Computer and Networking Equipment", "Software and Support", "Computer programming", "Consultancy and related activities", "Computer Software Supply and License Management", "Concrete Products", "Conference Facilities and Services", "Construction and Building Services", "Construction of buildings", "Contact Centre and Call Centre Solutions", "Copywriting", "Cranes", "Hoists", "Forklifts and Lifting Equipment", "Creative", "Debt Collection and Debt Counselling Services", "Demolition Services and Supplies", "Reconnections and Meter Reading Services", "Disposals and Auctions", "Diving Equipment Supplies and Maintenance", "Doors", "Drones and Aerial photography", "Dry Cleaning and Laundry Services and Equipment", "Economic Development", "Training", "Electrical Engineering", "Electrical Equipment and Supplies", "Electrical Services", "Emergency Response Equipment and Services", "Employment and Recruitment Services", "Engineering Consulting", "Environmental Monitoring", "Assessment and Consulting", "Environmental Rehabilitation", "Equipment Spares", "Event Management Services and Event Logistics", "Extraction of crude petroleum and natural gas", "Facilitation and Moderation Services", "Facilities Management", "Fans and Blowers", "Feasibility and Impact Studies", "Fibre Optic Supplies", "Fibreglass and Composite Materials", "Filtration Equipment", "Firefighting Equipment and Services", "Flood Control and Stormwater Infrastructure", "Food and Beverage Supplies", "Forensic Services", "Fuel and Petroleum Products", "Fuel Management and Fuel Storage Tank Supply and Maintenance", "Fundraising Services", "Funeral and Body Removal Services", "Furniture Supplies", "Gardening Tools", "Vegetation Management and Landscaping Services", "Gas Supply Systems Installation and Maintenance", "Gearbox Supplies", "Generator Installation", "Geotechnical and Geological Services", "Glass Supply", "Graphic Design and Branding", "Guarding Services", "Guy Wire Services", "Hazardous Materials Handling", "Housing Development", "Human health and social work activities", "Human Resources and Labour", "Hydraulic and Pneumatic Tools and Equipment", "Industrial and Plant Cleaning Services", "Information and Communications Technology", "Infrastructure Delivery Management", "Inspection and Quality Assurance", "Insurance and Medical Aid Services", "Interior Design and Decorating", "Internet Services - Connectivity", "Websites", "ISO Standards Certification Services", "Kitchen Appliances and Accessories", "Laboratory", "Sampling and Analytical Equipment", "Laboratory", "Testing and Analytical Services", "Land Surveying Services and Equipment", "Law Enforcement & Legal Services", "Legislation and regulation", "Libraries", "Archives", "Museums and other Cultural Activities", "Lifts & Escalators", "Livestock Enclosures", "Logistics", "Freight Forwarding and Customs Clearing", "Lubricant Supplies", "Management Consulting", "Manufacture and Supply of Textiles", "Manufacture of basic metals", "Manufacture of basic pharmaceutical products and pharmaceutical preparations", "Manufacture of coke and refined petroleum products", "Manufacture of computer", "Manufacture of Electrical Equipment", "Manufacture of fabricated metal products", "Manufacture of food products", "Manufacture of leather and related products", "Manufacture of machinery and equipment n.e.c.", "Manufacture of motor vehicles", "Manufacture of other non-metallic mineral products", "Manufacture of other transport equipment", "Manufacture of paper and paper products", "Manufacture of wearing apparel", "Market Research and Surveys", "Mast Supply", "Materials recovery", "Mechanical Services", "Mechanical Tools and Equipment and Power Tools", "Medical Equipment and Supplies", "Medical Services", "Metal and Alloy Products", "Mining and Industry Services and Equipment", "Mining and quarrying", "Video and television programme production", "Sound recording and music publishing activities", "Office Equipment Sales and Rental", "Office Space and Property Rentals", "Other manufacturing", "Other mining and quarrying", "Other personal service activities", "Other professional", "scientific and technical activities", "Other service activities", "Outsourcing", "PA and Intercom Installation and Maintenance", "Packaging Materials", "Paint and Painting Supplies", "Parking Systems Services and Equipment", "Payment Services", "Pension Funding", "Personal Hygiene Products", "Personal Protective Equipment (PPE)", "Pest Control", "Photography and Videography", "Pipework", "Plastic and Rubber Products", "Plumbing", "Pollution Control Equipment", "Pool and Spa Installation and Maintenance", "Printing Supplies and Stationery", "Reproduction and Distribution Services", "Procurement and Supply Chain Management", "Professional Services", "Programming and broadcasting activities", "Project Management", "Psychometric and Competency Assessments", "Public Relations and Communication", "Publishing activities", "Quality Management Systems", "Transcribing and Translation", "Relocation and Moving Services", "Renewable Energy", "Repair", "Research and development", "Retail trade", "Risk Management and Risk Assessment", "Road Construction", "Repairs and Maintenance", "Road Marking Services and Supplies", "Road Safety Equipment", "Sensors", "PLC and SCADA", "Shelving", "Shipping Container Sales and Conversions", "Social Media Marketing and Management", "Supplies: Clothing/Textiles/Footwear", "Supply and Delivery Services", "Supply and Installation of Machinery and Equipment", "Tank and Pipeline Cleaning", "IP PBX", "SIP", "VoIP - Supplies", "Town and Urban Planning", "Traffic Engineering and Management", "Transformer Oil Supplies and Processing", "Transportation", "Travel agency", "TV and Satellite Dish Installation and Repairs", "Vehicle Tracking and Fleet Management", "Verification and Investigation Services", "Water transport", "Waterproofing", "Welding Services"],
      category: "",
      locations: ["Riyadh", "Makkah", "Madinah", "Qassim", "Eastern Province", "Asir", "Tabuk", "Hail", "Northern Borders", "Jizan", "Najran", "Bahah", "Jouf"],
      location: "",
      price_ranges: ["Free", "1-1000", "1001-10000", "10001-20000", "20001-40000", "40001-50000", ">50000"],
      price_range: "",
      tenders: [{
        tender_name: 'Tender/Project name example placeholder ...',
        company_name: 'Company Name : Saudi Procurement Service',
        company_logo: '/assets/1.png',
        tender_no: '098 – ع 68',
        tender_price: '14,000',
        published_at: '1441/03/30',
        close_at: '1441/03/30',
        open_at: '1442/02/11 - 14:00',
        days_remaining: '2 days - 19 hours'
      }, {
        tender_name: 'Tender/Project example name 2 ...',
        company_name: 'Saudi Procurement Service',
        company_logo: '/assets/2.jpeg',
        tender_no: '099 – ع 68',
        tender_price: '4,000',
        published_at: '1441/03/23',
        close_at: '1441/03/27',
        open_at: '1442/03/11 - 17:00',
        days_remaining: '14 days - 01 hours'
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/EAuction.vue?vue&type=template&id=75750089&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/EAuction.vue?vue&type=template&id=75750089& ***!
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
  return _c("div", { staticClass: "container-fluid" }, [
    _c(
      "div",
      { staticClass: "row" },
      [
        _c("side-bar", { attrs: { links: _vm.links } }),
        _vm._v(" "),
        _c("main", { staticClass: "col-md-9 ml-sm-auto col-lg-10 px-md-4" }, [
          _vm._m(0),
          _vm._v(" "),
          _c("div", { staticClass: "row mt-3" }, [
            _c(
              "div",
              { staticClass: "d-none d-lg-block col-12 col-md-4 col-lg-3" },
              [
                _c(
                  "div",
                  {
                    staticClass:
                      "d-flex p-2 mb-2 align-items-center bg-primary text-white rounded"
                  },
                  [
                    _c("h4", { staticClass: "mb-0" }, [
                      _vm._v("Search Tenders")
                    ]),
                    _vm._v(" "),
                    _c(
                      "svg",
                      {
                        staticClass: "bi ml-auto",
                        staticStyle: { transform: "translateX(-1)" },
                        attrs: {
                          width: "24",
                          height: "24",
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
                _c("div", { staticClass: "mb-2" }, [
                  _c(
                    "label",
                    {
                      staticClass: "form-label",
                      attrs: { for: "tender_name" }
                    },
                    [_vm._v("Tender name")]
                  ),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.tender_name,
                        expression: "tender_name"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text", id: "tender_name" },
                    domProps: { value: _vm.tender_name },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.tender_name = $event.target.value
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "mb-2" }, [
                  _c(
                    "label",
                    { staticClass: "form-label", attrs: { for: "tender_id" } },
                    [_vm._v("Tender number")]
                  ),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.tender_id,
                        expression: "tender_id"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text", id: "tender_id" },
                    domProps: { value: _vm.tender_id },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.tender_id = $event.target.value
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "mb-2" }, [
                  _c(
                    "label",
                    { staticClass: "form-label", attrs: { for: "date_from" } },
                    [_vm._v("Start date")]
                  ),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.date_from,
                        expression: "date_from"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "date", id: "date_from" },
                    domProps: { value: _vm.date_from },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.date_from = $event.target.value
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "mb-2" }, [
                  _c(
                    "label",
                    { staticClass: "form-label", attrs: { for: "date_to" } },
                    [_vm._v("To date")]
                  ),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.date_to,
                        expression: "date_to"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "date", id: "date_to" },
                    domProps: { value: _vm.date_to },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.date_to = $event.target.value
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "mb-2" }, [
                  _c(
                    "label",
                    { staticClass: "form-label", attrs: { for: "category" } },
                    [_vm._v("Category")]
                  ),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.category,
                        expression: "category"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { list: "catList", id: "category" },
                    domProps: { value: _vm.category },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.category = $event.target.value
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "datalist",
                    { attrs: { id: "catList" } },
                    _vm._l(_vm.categories, function(c, i) {
                      return _c("option", { key: i, domProps: { value: c } }, [
                        _vm._v(_vm._s(c))
                      ])
                    }),
                    0
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "mb-2" }, [
                  _c(
                    "label",
                    { staticClass: "form-label", attrs: { for: "location" } },
                    [_vm._v("City/Region")]
                  ),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.location,
                        expression: "location"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { list: "subList", id: "location" },
                    domProps: { value: _vm.location },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.location = $event.target.value
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "datalist",
                    { attrs: { id: "subList" } },
                    _vm._l(_vm.locations, function(c, i) {
                      return _c("option", { key: i, domProps: { value: c } }, [
                        _vm._v(_vm._s(c))
                      ])
                    }),
                    0
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "mb-2" }, [
                  _c(
                    "label",
                    {
                      staticClass: "form-label",
                      attrs: { for: "price_range" }
                    },
                    [_vm._v("Price range")]
                  ),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.price_range,
                        expression: "price_range"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { list: "datalistOptions", id: "price_range" },
                    domProps: { value: _vm.price_range },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.price_range = $event.target.value
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "datalist",
                    { attrs: { id: "datalistOptions" } },
                    _vm._l(_vm.price_ranges, function(c, i) {
                      return _c("option", { key: i, domProps: { value: c } }, [
                        _vm._v(_vm._s(c))
                      ])
                    }),
                    0
                  )
                ]),
                _vm._v(" "),
                _vm._m(1)
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-12 col-lg-9" },
              _vm._l(_vm.tenders, function(tender, i) {
                return _c(
                  "div",
                  { key: i, staticClass: "border shadow-sm rounded p-1 my-2" },
                  [
                    _c("div", { staticClass: "row g-0 border-bottom" }, [
                      _c(
                        "div",
                        {
                          staticClass:
                            "col-12 col-md-9 d-flex align-items-center p-2"
                        },
                        [
                          _c(
                            "div",
                            { staticClass: "row" },
                            [
                              _c("div", { staticClass: "col-4 col-md-3" }, [
                                _c("div", {
                                  staticClass: "mx-auto",
                                  staticStyle: {
                                    width: "90px",
                                    height: "90px"
                                  },
                                  style:
                                    "background:url('" +
                                    tender.company_logo +
                                    "') center/cover no-repeat"
                                })
                              ]),
                              _vm._v(" "),
                              _c(
                                "router-link",
                                {
                                  staticClass:
                                    "col-8 col-md-9 text-decoration-none",
                                  attrs: {
                                    to: "/e-auction/" + tender.tender_no
                                  }
                                },
                                [
                                  _c("h3", { staticClass: "link-primary" }, [
                                    _vm._v(_vm._s(tender.tender_name))
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "span",
                                    { staticClass: "font-weight-bold" },
                                    [_vm._v(_vm._s(tender.company_name))]
                                  )
                                ]
                              )
                            ],
                            1
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col-12 col-md-3 border-left" },
                        [
                          _c("div", { staticClass: "row g-0" }, [
                            _c(
                              "div",
                              {
                                staticClass:
                                  "col-6 col-md-12 text-center text-md-left lh-sm p-2"
                              },
                              [
                                _vm._v("Tender Number "),
                                _c("br"),
                                _vm._v(" " + _vm._s(tender.tender_no))
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass:
                                  "col-6 col-md-12 text-center text-md-left lh-sm p-2"
                              },
                              [
                                _vm._v("Price "),
                                _c("br"),
                                _vm._v(_vm._s(tender.tender_price))
                              ]
                            )
                          ])
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row g-0" }, [
                      _c(
                        "div",
                        {
                          staticClass:
                            "col-12 col-md-9 d-flex align-items-center"
                        },
                        [
                          _c("div", { staticClass: "row g-0" }, [
                            _c("div", { staticClass: "col-4" }, [
                              _c(
                                "p",
                                {
                                  staticClass:
                                    "text-primary font-weight-bold px-2 pb-1 mb-0"
                                },
                                [_vm._v("Online publish date")]
                              ),
                              _vm._v(" "),
                              _c("p", { staticClass: "px-2 pb-1 mb-0" }, [
                                _c(
                                  "svg",
                                  {
                                    staticClass: "bi mb-1",
                                    attrs: {
                                      width: "14",
                                      height: "14",
                                      fill: "currentColor"
                                    }
                                  },
                                  [
                                    _c("use", {
                                      attrs: {
                                        "xlink:href":
                                          "/assets/icons/bootstrap-icons.svg#calendar3"
                                      }
                                    })
                                  ]
                                ),
                                _vm._v(
                                  "\n                                        " +
                                    _vm._s(tender.published_at)
                                )
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-4" }, [
                              _c(
                                "p",
                                {
                                  staticClass:
                                    "text-primary font-weight-bold px-2 pb-1 mb-0"
                                },
                                [_vm._v("Closing date")]
                              ),
                              _vm._v(" "),
                              _c("p", { staticClass: "px-2 pb-1 mb-0" }, [
                                _c(
                                  "svg",
                                  {
                                    staticClass: "bi mb-1",
                                    attrs: {
                                      width: "14",
                                      height: "14",
                                      fill: "currentColor"
                                    }
                                  },
                                  [
                                    _c("use", {
                                      attrs: {
                                        "xlink:href":
                                          "/assets/icons/bootstrap-icons.svg#calendar3"
                                      }
                                    })
                                  ]
                                ),
                                _vm._v(
                                  "\n                                        " +
                                    _vm._s(tender.close_at)
                                )
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-4" }, [
                              _c(
                                "p",
                                {
                                  staticClass:
                                    "text-primary font-weight-bold px-2 pb-1 mb-0"
                                },
                                [_vm._v("Bid Opening Date and Time")]
                              ),
                              _vm._v(" "),
                              _c("p", { staticClass: "px-2 pb-1 mb-0" }, [
                                _c(
                                  "svg",
                                  {
                                    staticClass: "bi mb-1",
                                    attrs: {
                                      width: "14",
                                      height: "14",
                                      fill: "currentColor"
                                    }
                                  },
                                  [
                                    _c("use", {
                                      attrs: {
                                        "xlink:href":
                                          "/assets/icons/bootstrap-icons.svg#calendar3"
                                      }
                                    })
                                  ]
                                ),
                                _vm._v(
                                  "\n                                        " +
                                    _vm._s(tender.open_at)
                                )
                              ])
                            ])
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass:
                            "col-12 col-md-3 d-flex flex-column align-items-center justify-content-center border-left p-2"
                        },
                        [
                          _c("span", { staticClass: "text-success" }, [
                            _vm._v(
                              "\n                                " +
                                _vm._s(tender.days_remaining) +
                                "\n                            "
                            )
                          ]),
                          _vm._v(" "),
                          _vm._m(2, true)
                        ]
                      )
                    ])
                  ]
                )
              }),
              0
            )
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
    return _c(
      "div",
      {
        staticClass:
          "d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 border-bottom"
      },
      [
        _c("h1", { staticClass: "h2" }, [_vm._v("Public Tenders")]),
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
              staticClass: "btn btn-sm btn-outline-secondary dropdown-toggle",
              attrs: { type: "button" }
            },
            [
              _c("span", { attrs: { "data-feather": "calendar" } }),
              _vm._v("\n                This week\n            ")
            ]
          )
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "mb-2" }, [
      _c("span", { staticClass: "btn btn-primary float-right" }, [
        _vm._v("Search")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "progress w-100", staticStyle: { height: ".5rem" } },
      [
        _c("div", {
          staticClass: "progress-bar bg-success",
          staticStyle: { width: "25%" },
          attrs: {
            role: "progressbar",
            "aria-valuenow": "25",
            "aria-valuemin": "0",
            "aria-valuemax": "100"
          }
        })
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/EAuction.vue":
/*!**********************************************!*\
  !*** ./resources/js/components/EAuction.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EAuction_vue_vue_type_template_id_75750089___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EAuction.vue?vue&type=template&id=75750089& */ "./resources/js/components/EAuction.vue?vue&type=template&id=75750089&");
/* harmony import */ var _EAuction_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EAuction.vue?vue&type=script&lang=js& */ "./resources/js/components/EAuction.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EAuction_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EAuction_vue_vue_type_template_id_75750089___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EAuction_vue_vue_type_template_id_75750089___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/EAuction.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/EAuction.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/components/EAuction.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EAuction_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./EAuction.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/EAuction.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EAuction_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/EAuction.vue?vue&type=template&id=75750089&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/EAuction.vue?vue&type=template&id=75750089& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EAuction_vue_vue_type_template_id_75750089___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./EAuction.vue?vue&type=template&id=75750089& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/EAuction.vue?vue&type=template&id=75750089&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EAuction_vue_vue_type_template_id_75750089___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EAuction_vue_vue_type_template_id_75750089___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);