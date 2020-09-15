<template>
    <div class="container-fluid">
        <div class="row">
        <side-bar :links="links" />
        <main class="col-md-9 ml-sm-auto col-lg-10 px-md-4">
            <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 border-bottom">
                <h1 class="h2">Public Tenders</h1>
                <div class="btn-toolbar mb-2 mb-md-0">
                <div class="btn-group mr-2">
                    <button type="button" class="btn btn-sm btn-outline-secondary">Share</button>
                    <button type="button" class="btn btn-sm btn-outline-secondary">Export</button>
                </div>
                <button type="button" class="btn btn-sm btn-outline-secondary">
                    This week
                </button>
                </div>
            </div>
            <div class="row mt-3">
                <div class="d-none d-lg-block col-12 col-md-4 col-lg-3">
                    <div class="d-flex p-2 mb-2 align-items-center bg-primary text-white rounded">
                        <h4 class="mb-0">Search Tenders</h4>
                        <svg style="transform:translateX(-1)" class="bi ml-auto" width="24" height="24" fill="currentColor">
                            <use xlink:href="/assets/icons/bootstrap-icons.svg#search"/>
                        </svg>
                    </div>
                    <div class="mb-2">
                        <label for="tender_name" class="form-label">Tender name</label>
                        <input type="text" class="form-control" v-model="tender_name" id="tender_name">
                    </div>
                    <div class="mb-2">
                        <label for="tender_id" class="form-label">Tender number</label>
                        <input type="text" class="form-control" v-model="tender_id" id="tender_id">
                    </div>
                    <div class="mb-2">
                        <label for="date_from" class="form-label">Start date</label>
                        <input type="date" class="form-control" v-model="date_from" id="date_from">
                    </div>
                    <div class="mb-2">
                        <label for="date_to" class="form-label">To date</label>
                        <input type="date" class="form-control" v-model="date_to" id="date_to">
                    </div>
                    <div class="mb-2">
                        <label for="category" class="form-label">Category</label>
                        <input class="form-control" list="catList" id="category" v-model="category">
                        <datalist id="catList">
                            <option v-for="(c,i) in categories" :key="i" :value="c" >{{c}}</option>
                        </datalist>
                    </div>
                    <div class="mb-2">
                        <label for="location" class="form-label">City/Region</label>
                        <input class="form-control" list="subList" id="location" v-model="location">
                        <datalist id="subList">
                            <option v-for="(c,i) in locations" :key="i" :value="c" >{{c}}</option>
                        </datalist>
                    </div>
                    <div class="mb-2">
                        <label for="price_range" class="form-label">Price range</label>
                        <input class="form-control" list="datalistOptions" id="price_range" v-model="price_range">
                        <datalist id="datalistOptions">
                            <option v-for="(c,i) in price_ranges" :key="i" :value="c" >{{c}}</option>
                        </datalist>
                    </div>
                    <div class="mb-2">
                        <span class="btn btn-primary float-right">Search</span>
                    </div>
                </div>
                <div class="col-12 col-lg-9">
                    <div v-for="(tender,i) in tenders" :key="i" class="border shadow-sm rounded p-1 my-2">
                        <div class="row g-0 border-bottom">
                            <div class="col-12 col-md-9 d-flex align-items-center p-2">
                                <div class="row">
                                    <div class="col-4 col-md-3">
                                        <div class="mx-auto" :style="`background:url('${tender.company_logo}') center/cover no-repeat`" style="width:90px;height:90px"></div>
                                    </div>
                                    <router-link :to="`/public-tenders/${tender.tender_no}`" class="col-8 col-md-9 text-decoration-none">
                                        <h3 class="link-primary">{{tender.tender_name}}</h3>
                                        <span class="font-weight-bold">{{tender.company_name}}</span>
                                    </router-link>
                                </div>
                            </div>
                            <div class="col-12 col-md-3 border-left">
                                <div class="row g-0">
                                    <div class="col-6 col-md-12 text-center text-md-left lh-sm p-2">Tender Number <br> {{tender.tender_no}}</div>
                                    <div class="col-6 col-md-12 text-center text-md-left lh-sm p-2">Price <br>{{tender.tender_price}}</div>
                                </div>
                            </div>
                        </div>
                        <div class="row g-0">
                            <div class="col-12 col-md-9 d-flex align-items-center">
                                <div class="row g-0">
                                    <div class="col-4">
                                        <p class="text-primary font-weight-bold px-2 pb-1 mb-0">Online publish date</p>
                                        <p class="px-2 pb-1 mb-0">
                                            <svg class="bi mb-1" width="14" height="14" fill="currentColor">
                                                <use xlink:href="/assets/icons/bootstrap-icons.svg#calendar3"/>
                                            </svg>
                                            {{tender.published_at}}</p>
                                    </div>
                                    <div class="col-4">
                                        <p class="text-primary font-weight-bold px-2 pb-1 mb-0">Closing date</p>
                                        <p class="px-2 pb-1 mb-0">
                                            <svg class="bi mb-1" width="14" height="14" fill="currentColor">
                                                <use xlink:href="/assets/icons/bootstrap-icons.svg#calendar3"/>
                                            </svg>
                                            {{tender.close_at}}</p>
                                    </div>
                                    <div class="col-4">
                                        <p class="text-primary font-weight-bold px-2 pb-1 mb-0">Bid Opening Date and Time</p>
                                        <p class="px-2 pb-1 mb-0">
                                            <svg class="bi mb-1" width="14" height="14" fill="currentColor">
                                                <use xlink:href="/assets/icons/bootstrap-icons.svg#calendar3"/>
                                            </svg>
                                            {{tender.open_at}}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-md-3 d-flex flex-column align-items-center justify-content-center border-left p-2">
                                <span class="text-success">
                                    {{tender.days_remaining}}
                                </span>
                                <div class="progress w-100" style=" height:.5rem;">
                                    <div class="progress-bar bg-success" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
    </div>
</template>

<script>
import SideBar from './SideBar.vue'
    export default {
        components:{ SideBar },
        data(){
            return{
                links : [
                    {
                        name : 'Dashboard',
                        link: '/dashboard',
                        show: true,
                        icon: 'bar-chart-line'
                    },
                    {
                        name : 'Stratagic Sourcing',
                        link: '/strategic-sourcing',
                        show: true,
                        icon: 'file-check'
                    },
                    {
                        name : 'Public tenders',
                        link: '/public-tenders',
                        show: true,
                        icon: 'tags'
                    },
                    {
                        name : 'Approval Center',
                        link: '/approval-center',
                        show: true,
                        icon: 'check-circle'
                    },
                    {
                        name : 'Invoice Management',
                        link: '/invoice-management',
                        show: true,
                        icon:'file-spreadsheet'
                    },
                    {
                        name : 'Supplier Management',
                        link: '/supplier-management',
                        show: true,
                        icon: 'people'
                    },
                    {
                        name : 'Settings',
                        link: '/setting',
                        show: false,
                        icon:'gear'
                    },
                ],
                tender_name : "",
                tender_id : "",
                date_from : "",
                date_to : "",
                categories : [
                    "Accommodation", 
                    "Accounting Services", 
                    "Actuarial Services", 
                    "Administrative and support activities", 
                    "Advertising and Marketing", 
                    "Equipment", 
                    "Agriculture", 
                    "Forestry and Fisheries", 
                    "Installation and Maintenance", 
                    "Air Conditioning", 
                    "HVAC", 
                    "Air transport", 
                    "Airport Equipment and Operations", 
                    "Animal and Meat Trade", 
                    "Animal Feed", 
                    "Appliances", 
                    "Architectural and Engineering Services", 
                    "Armed Response", 
                    "Arms and Ammunition", 
                    "Arts", 
                    "entertainment and recreation", 
                    "Audio Visual Equipment", 
                    "Audit Services - Technical", 
                    "Operational", 
                    "Financial", 
                    "Compliance and Information Technology", 
                    "Incinerators and Sterilisation Equipment", 
                    "Automotive and Equipment Fluid Supplies", 
                    "Certificates and Medals", 
                    "Books",
                    "Exploration and Geotechnical Drilling Services and Equipment", 
                    "Brand Tracking and Media Monitoring Services", 
                    "Building Upgrades and Maintenance", 
                    "Burglar Proofing and Security Gates", 
                    "Business Development and Governance", 
                    "Car Wash Services", 
                    "Carpeting", 
                    "Tiling and Floor Covering", 
                    "Carports", 
                    "Shadeports and Awnings", 
                    "Cash in Transit Services", 
                    "Catering Services", 
                    "CCTV", 
                    "Access Control", 
                    "Biometric Security and Alarm Systems", 
                    "Chemical and Gas Supplies", 
                    "Civil Engineering", 
                    "Civil Works Services", 
                    "Sewer", 
                    "Plumbing and Engineering Supplies", 
                    "Cleaning Services", 
                    "Computer and Networking Equipment", 
                    "Software and Support", 
                    "Computer programming", 
                    "Consultancy and related activities", 
                    "Computer Software Supply and License Management", 
                    "Concrete Products", 
                    "Conference Facilities and Services", 
                    "Construction and Building Services",  
                    "Construction of buildings", 
                    "Contact Centre and Call Centre Solutions", 
                    "Copywriting", 
                    "Cranes", 
                    "Hoists", 
                    "Forklifts and Lifting Equipment", 
                    "Creative", 
                    "Debt Collection and Debt Counselling Services", 
                    "Demolition Services and Supplies", 
                    "Reconnections and Meter Reading Services", 
                    "Disposals and Auctions", 
                    "Diving Equipment Supplies and Maintenance", 
                    "Doors", 
                    "Drones and Aerial photography", 
                    "Dry Cleaning and Laundry Services and Equipment", 
                    "Economic Development", 
                    "Training", 
                    "Electrical Engineering", 
                    "Electrical Equipment and Supplies", 
                    "Electrical Services", 
                    "Emergency Response Equipment and Services", 
                    "Employment and Recruitment Services", 
                    "Engineering Consulting", 
                    "Environmental Monitoring", 
                    "Assessment and Consulting", 
                    "Environmental Rehabilitation", 
                    "Equipment Spares", 
                    "Event Management Services and Event Logistics", 
                    "Extraction of crude petroleum and natural gas", 
                    "Facilitation and Moderation Services", 
                    "Facilities Management", 
                    "Fans and Blowers", 
                    "Feasibility and Impact Studies", 
                    "Fibre Optic Supplies", 
                    "Fibreglass and Composite Materials", 
                    "Filtration Equipment", 
                    "Firefighting Equipment and Services", 
                    "Flood Control and Stormwater Infrastructure", 
                    "Food and Beverage Supplies", 
                    "Forensic Services", 
                    "Fuel and Petroleum Products", 
                    "Fuel Management and Fuel Storage Tank Supply and Maintenance", 
                    "Fundraising Services", 
                    "Funeral and Body Removal Services", 
                    "Furniture Supplies", 
                    "Gardening Tools", 
                    "Vegetation Management and Landscaping Services", 
                    "Gas Supply Systems Installation and Maintenance", 
                    "Gearbox Supplies", 
                    "Generator Installation", 
                    "Geotechnical and Geological Services", 
                    "Glass Supply", 
                    "Graphic Design and Branding", 
                    "Guarding Services", 
                    "Guy Wire Services", 
                    "Hazardous Materials Handling", 
                    "Housing Development", 
                    "Human health and social work activities", 
                    "Human Resources and Labour", 
                    "Hydraulic and Pneumatic Tools and Equipment", 
                    "Industrial and Plant Cleaning Services", 
                    "Information and Communications Technology", 
                    "Infrastructure Delivery Management", 
                    "Inspection and Quality Assurance", 
                    "Insurance and Medical Aid Services", 
                    "Interior Design and Decorating", 
                    "Internet Services - Connectivity", 
                    "Websites", 
                    "ISO Standards Certification Services", 
                    "Kitchen Appliances and Accessories", 
                    "Laboratory", 
                    "Sampling and Analytical Equipment", 
                    "Laboratory", 
                    "Testing and Analytical Services", 
                    "Land Surveying Services and Equipment", 
                    "Law Enforcement & Legal Services", 
                    "Legislation and regulation", 
                    "Libraries", 
                    "Archives", 
                    "Museums and other Cultural Activities", 
                    "Lifts & Escalators", 
                    "Livestock Enclosures", 
                    "Logistics", 
                    "Freight Forwarding and Customs Clearing", 
                    "Lubricant Supplies", 
                    "Management Consulting", 
                    "Manufacture and Supply of Textiles", 
                    "Manufacture of basic metals", 
                    "Manufacture of basic pharmaceutical products and pharmaceutical preparations", 
                    "Manufacture of coke and refined petroleum products", 
                    "Manufacture of computer", 
                    "Manufacture of Electrical Equipment", 
                    "Manufacture of fabricated metal products", 
                    "Manufacture of food products", 
                    "Manufacture of leather and related products", 
                    "Manufacture of machinery and equipment n.e.c.",
                    "Manufacture of motor vehicles", 
                    "Manufacture of other non-metallic mineral products", 
                    "Manufacture of other transport equipment", 
                    "Manufacture of paper and paper products", 
                    "Manufacture of wearing apparel", 
                    "Market Research and Surveys", 
                    "Mast Supply", 
                    "Materials recovery", 
                    "Mechanical Services", 
                    "Mechanical Tools and Equipment and Power Tools", 
                    "Medical Equipment and Supplies", 
                    "Medical Services", 
                    "Metal and Alloy Products", 
                    "Mining and Industry Services and Equipment", 
                    "Mining and quarrying", 
                    "Video and television programme production", 
                    "Sound recording and music publishing activities", 
                    "Office Equipment Sales and Rental", 
                    "Office Space and Property Rentals", 
                    "Other manufacturing", 
                    "Other mining and quarrying", 
                    "Other personal service activities", 
                    "Other professional", 
                    "scientific and technical activities", 
                    "Other service activities", 
                    "Outsourcing", 
                    "PA and Intercom Installation and Maintenance", 
                    "Packaging Materials", 
                    "Paint and Painting Supplies", 
                    "Parking Systems Services and Equipment", 
                    "Payment Services", 
                    "Pension Funding", 
                    "Personal Hygiene Products", 
                    "Personal Protective Equipment (PPE)", 
                    "Pest Control", 
                    "Photography and Videography", 
                    "Pipework", 
                    "Plastic and Rubber Products", 
                    "Plumbing", 
                    "Pollution Control Equipment", 
                    "Pool and Spa Installation and Maintenance", 
                    "Printing Supplies and Stationery", 
                    "Reproduction and Distribution Services", 
                    "Procurement and Supply Chain Management", 
                    "Professional Services", 
                    "Programming and broadcasting activities", 
                    "Project Management", 
                    "Psychometric and Competency Assessments", 
                    "Public Relations and Communication", 
                    "Publishing activities", 
                    "Quality Management Systems", 
                    "Transcribing and Translation", 
                    "Relocation and Moving Services", 
                    "Renewable Energy", 
                    "Repair", 
                    "Research and development", 
                    "Retail trade", 
                    "Risk Management and Risk Assessment", 
                    "Road Construction", 
                    "Repairs and Maintenance", 
                    "Road Marking Services and Supplies", 
                    "Road Safety Equipment", 
                    "Sensors", 
                    "PLC and SCADA",
                    "Shelving",
                    "Shipping Container Sales and Conversions", 
                    "Social Media Marketing and Management",
                    "Supplies: Clothing/Textiles/Footwear", 
                    "Supply and Delivery Services", 
                    "Supply and Installation of Machinery and Equipment", 
                    "Tank and Pipeline Cleaning", 
                    "IP PBX", 
                    "SIP", 
                    "VoIP - Supplies", 
                    "Town and Urban Planning", 
                    "Traffic Engineering and Management", 
                    "Transformer Oil Supplies and Processing", 
                    "Transportation", 
                    "Travel agency", 
                    "TV and Satellite Dish Installation and Repairs", 
                    "Vehicle Tracking and Fleet Management", 
                    "Verification and Investigation Services", 
                    "Water transport", 
                    "Waterproofing", 
                    "Welding Services",
                ],
                category : "",
                locations : [
                    "Riyadh",
                    "Makkah",
                    "Madinah",
                    "Qassim",
                    "Eastern Province",
                    "Asir",
                    "Tabuk",
                    "Hail",
                    "Northern Borders",
                    "Jizan",
                    "Najran",
                    "Bahah",
                    "Jouf",
                ],
                location : "",
                price_ranges : [
                    "Free",
                    "1-1000",
                    "1001-10000",
                    "10001-20000",
                    "20001-40000",
                    "40001-50000",
                    ">50000",
                ],
                price_range : "",

                tenders:[
                    {
                        tender_name : 'Tender/Project name example placeholder ...',
                        company_name : 'Company Name : Saudi Procurement Service',
                        company_logo : '/assets/1.png',
                        tender_no : '098 – ع 68',
                        tender_price : '14,000',
                        published_at : '1441/03/30',
                        close_at : '1441/03/30',
                        open_at : '1442/02/11 - 14:00',
                        days_remaining : '2 days - 19 hours'
                    },
                    {
                        tender_name : 'Tender/Project example name 2 ...',
                        company_name : 'Saudi Procurement Service',
                        company_logo : '/assets/2.jpeg',
                        tender_no : '099 – ع 68',
                        tender_price : '4,000',
                        published_at : '1441/03/23',
                        close_at : '1441/03/27',
                        open_at : '1442/03/11 - 17:00',
                        days_remaining : '14 days - 01 hours'
                    },
                ]
            }
        },
        beforeCreate(){
            if(!UserClass.loggedIn()){
                this.$router.push('/')
            }
        }
    }
</script>