(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/TenderView.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/TenderView.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
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
//
//
//
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
        name: 'Tenders',
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
  },
  methods: {
    download: function download() {
      alert('later');
    },
    print: function print() {
      window.print();
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/TenderView.vue?vue&type=template&id=28124fc4&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/TenderView.vue?vue&type=template&id=28124fc4& ***!
  \*************************************************************************************************************************************************************************************************************/
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
          _c(
            "div",
            {
              staticClass:
                "d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 border-bottom"
            },
            [
              _c("h1", { staticClass: "h2" }, [_vm._v("Public Tenders")]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "btn-toolbar mb-2 mb-md-0 d-print-none" },
                [
                  _vm._m(0),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-sm btn-outline-secondary",
                      attrs: { type: "button" },
                      on: { click: _vm.print }
                    },
                    [
                      _vm._v(
                        "\n                        Print\n                    "
                      )
                    ]
                  )
                ]
              )
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "container" }, [
            _c("div", { staticClass: "row mt-3" }, [
              _c(
                "div",
                {
                  staticClass: "col-12 col-sm-8 col-lg-9 border-top border-left"
                },
                [
                  _vm._m(1),
                  _vm._v(" "),
                  _c("div", { staticClass: "row border-bottom" }, [
                    _c("div", { staticClass: "py-2 col-4 bg-white" }, [
                      _vm._v("Tender number")
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "py-2 col-8" }, [
                      _vm._v(_vm._s(_vm.$route.params.id))
                    ])
                  ]),
                  _vm._v(" "),
                  _vm._m(2),
                  _vm._v(" "),
                  _vm._m(3),
                  _vm._v(" "),
                  _vm._m(4),
                  _vm._v(" "),
                  _vm._m(5)
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "col-12 col-sm-4 col-lg-3 border d-flex flex-column d-print-none",
                  staticStyle: { "min-height": "150px" }
                },
                [
                  _c("div", {
                    staticClass: "mx-auto w-100",
                    staticStyle: { "flex-grow": "1" },
                    style:
                      "background:url('/assets/3.jpg') center/contain no-repeat"
                  }),
                  _vm._v(" "),
                  _vm._m(6)
                ]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "col-12 mt-3" }, [
                _c("div", { staticClass: "row" }, [
                  _vm._m(7),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "tab-content",
                      attrs: { id: "myTabContent" }
                    },
                    [
                      _vm._m(8),
                      _vm._v(" "),
                      _vm._m(9),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "tab-pane fade",
                          attrs: {
                            id: "contact",
                            role: "tabpanel",
                            "aria-labelledby": "contact-tab"
                          }
                        },
                        [
                          _c("div", { staticClass: "col-12" }, [
                            _c("div", { staticClass: "row border py-2" }, [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "col-6 font-weight-bold hover link-primary",
                                  on: { click: _vm.download }
                                },
                                [
                                  _vm._v(
                                    "\n                                            Synopsis of contract.pdf\n                                        "
                                  )
                                ]
                              )
                            ])
                          ])
                        ]
                      )
                    ]
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
    return _c("div", { staticClass: "btn-group mr-2" }, [
      _c(
        "button",
        {
          staticClass: "btn btn-sm btn-outline-secondary",
          attrs: { type: "button" }
        },
        [_vm._v("Place Bid")]
      ),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "btn btn-sm btn-outline-secondary",
          attrs: { type: "button" }
        },
        [_vm._v("Send RFI")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row border-bottom" }, [
      _c("div", { staticClass: "py-2 col-4 bg-white" }, [
        _vm._v("Tender name")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "py-2 col-8" }, [
        _vm._v("تجهيز وإنشاء وحدات سكنية بحي الخليج")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row border-bottom" }, [
      _c("div", { staticClass: "py-2 col-4 bg-white" }, [
        _vm._v("Tender type")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "py-2 col-8" }, [_vm._v("Public")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row border-bottom" }, [
      _c("div", { staticClass: "py-2 col-4 bg-white" }, [
        _vm._v("Government Agency")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "py-2 col-8" }, [
        _vm._v("تجهيز وإنشاء وحدات سكنية بحي الخليج")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row border-bottom" }, [
      _c("div", { staticClass: "py-2 col-4 bg-white" }, [
        _vm._v("Tender purpose")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "py-2 col-8" }, [
        _vm._v(
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ipsam molestias ab placeat veniam facilis perspiciatis expedita in ad eius dignissimos impedit, quia iste veritatis ipsa nostrum hic debitis excepturi."
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row border-bottom" }, [
      _c("div", { staticClass: "py-2 col-4 bg-white" }, [_vm._v("Price")]),
      _vm._v(" "),
      _c("div", { staticClass: "py-2 col-8" }, [_vm._v("14,000 SAR")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass:
          "d-flex flex-column align-items-center justify-content-center p-2 mb-2"
      },
      [
        _c("span", { staticClass: "text-success" }, [
          _vm._v(
            "\n                                13 Day - 16 Hour\n                            "
          )
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "progress w-100", staticStyle: { height: ".5rem" } },
          [
            _c("div", {
              staticClass: "progress-bar bg-success",
              staticStyle: {
                width: "0%",
                transition: "all 500ms ease-in-out 500ms"
              },
              attrs: {
                role: "progressbar",
                "aria-valuenow": "25",
                "aria-valuemin": "0",
                "aria-valuemax": "100"
              }
            })
          ]
        )
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "ul",
      {
        staticClass: "nav nav-pills mb-3",
        attrs: { id: "myTab", role: "tablist" }
      },
      [
        _c(
          "li",
          { staticClass: "nav-item mr-2", attrs: { role: "presentation" } },
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
              [_vm._v("Tender dates")]
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "li",
          { staticClass: "nav-item mr-2", attrs: { role: "presentation" } },
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
              [_vm._v("Addresses")]
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "li",
          { staticClass: "nav-item mr-2", attrs: { role: "presentation" } },
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
              [_vm._v("Public file(s)")]
            )
          ]
        )
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "tab-pane fade show active",
        attrs: { id: "home", role: "tabpanel", "aria-labelledby": "home-tab" }
      },
      [
        _c("div", { staticClass: "col-12" }, [
          _c("div", { staticClass: "row border py-2" }, [
            _c("div", { staticClass: "col-6 font-weight-bold text-primary" }, [
              _vm._v(
                "\n                                            Last Date to accept vendors questions and upload attachments\t\n                                        "
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-6" }, [
              _vm._v(
                "\n                                            Date: 1442/02/04 "
              ),
              _c("br"),
              _vm._v(
                "\n                                            Gregorian: 21/09/2020\n                                        "
              )
            ])
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "row border-bottom border-left border-right py-2" },
            [
              _c(
                "div",
                { staticClass: "col-6 font-weight-bold text-primary" },
                [
                  _vm._v(
                    "\n                                            Closing Date\t\n                                        "
                  )
                ]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "col-6" }, [
                _vm._v(
                  "\n                                            Date: 1442/02/11 "
                ),
                _c("br"),
                _vm._v(
                  "\n                                            Gregorian: 28/09/2020 "
                ),
                _c("br"),
                _vm._v(
                  "\n                                            At time: 13:50\n                                        "
                )
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "row border-bottom border-left border-right py-2" },
            [
              _c(
                "div",
                { staticClass: "col-6 font-weight-bold text-primary" },
                [
                  _vm._v(
                    "\n                                            Bid Opening Date and Time\t\t\n                                        "
                  )
                ]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "col-6" }, [
                _vm._v(
                  "\n                                            Date: 1442/02/11 "
                ),
                _c("br"),
                _vm._v(
                  "\n                                            Gregorian: 28/09/2020 "
                ),
                _c("br"),
                _vm._v(
                  "\n                                            At time: 14:00\n                                        "
                )
              ])
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
    return _c(
      "div",
      {
        staticClass: "tab-pane fade",
        attrs: {
          id: "profile",
          role: "tabpanel",
          "aria-labelledby": "profile-tab"
        }
      },
      [
        _c("div", { staticClass: "col-12" }, [
          _c("div", { staticClass: "row border py-2" }, [
            _c("div", { staticClass: "col-6 font-weight-bold text-primary" }, [
              _vm._v(
                "\n                                            Proposal submission address\t\t\n                                        "
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-6" }, [
              _vm._v(
                "\n                                            Apply onile via the portal\n                                        "
              )
            ])
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "row border-bottom border-left border-right py-2" },
            [
              _c(
                "div",
                { staticClass: "col-6 font-weight-bold text-primary" },
                [
                  _vm._v(
                    "\n                                            Bid opening location\t\n                                        "
                  )
                ]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "col-6" }, [
                _vm._v(
                  "\n                                            قم صندوق البريد : 10001\n                                            رمز المدينة : 13\n                                            الرمز البريدي : 31961\n                                            الهيئة الملكية بالجبيل\n                                            إدارة العقود والمشتريات\n                                        "
                )
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "row border-bottom border-left border-right py-2" },
            [
              _c(
                "div",
                { staticClass: "col-6 font-weight-bold text-primary" },
                [
                  _vm._v(
                    "\n                                            Execution Location\t\t\n                                        "
                  )
                ]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "col-6" }, [
                _vm._v(
                  "\n                                            National\n                                            مدينة الجبيل الصناعية\n                                        "
                )
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "row border-bottom border-left border-right py-2" },
            [
              _c(
                "div",
                { staticClass: "col-6 font-weight-bold text-primary" },
                [
                  _vm._v(
                    "\n                                            Regions\t\t\n                                        "
                  )
                ]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "col-6" }, [
                _vm._v(
                  "\n                                            Eastern Province\n                                        "
                )
              ])
            ]
          )
        ])
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/TenderView.vue":
/*!************************************************!*\
  !*** ./resources/js/components/TenderView.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TenderView_vue_vue_type_template_id_28124fc4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TenderView.vue?vue&type=template&id=28124fc4& */ "./resources/js/components/TenderView.vue?vue&type=template&id=28124fc4&");
/* harmony import */ var _TenderView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TenderView.vue?vue&type=script&lang=js& */ "./resources/js/components/TenderView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TenderView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TenderView_vue_vue_type_template_id_28124fc4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TenderView_vue_vue_type_template_id_28124fc4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/TenderView.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/TenderView.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/TenderView.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TenderView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./TenderView.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/TenderView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TenderView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/TenderView.vue?vue&type=template&id=28124fc4&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/TenderView.vue?vue&type=template&id=28124fc4& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TenderView_vue_vue_type_template_id_28124fc4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./TenderView.vue?vue&type=template&id=28124fc4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/TenderView.vue?vue&type=template&id=28124fc4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TenderView_vue_vue_type_template_id_28124fc4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TenderView_vue_vue_type_template_id_28124fc4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);