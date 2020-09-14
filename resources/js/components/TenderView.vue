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
                    <button type="button" class="btn btn-sm btn-outline-secondary dropdown-toggle">
                        <span data-feather="calendar"></span>
                        This week
                    </button>
                    </div>
                </div>
                <div class="container">
                    <div class="row g-0 mt-3">
                        <!-- {{$route.params.id}} -->
                        <div class="col-12 col-sm-8 col-lg-9 border-top border-left">
                            <div class="row border-bottom">
                                <div class="py-2 col-4 bg-white">Tender name</div>
                                <div class="py-2 col-8">تجهيز وإنشاء وحدات سكنية بحي الخليج</div>
                            </div>
                            <div class="row border-bottom">
                                <div class="py-2 col-4 bg-white">Tender number</div>
                                <div class="py-2 col-8">{{$route.params.id}}</div>
                            </div>
                            <div class="row border-bottom">
                                <div class="py-2 col-4 bg-white">Tender type</div>
                                <div class="py-2 col-8">Public</div>
                            </div>
                            <div class="row border-bottom">
                                <div class="py-2 col-4 bg-white">Government Agency</div>
                                <div class="py-2 col-8">تجهيز وإنشاء وحدات سكنية بحي الخليج</div>
                            </div>
                            <div class="row border-bottom">
                                <div class="py-2 col-4 bg-white">Tender purpose</div>
                                <div class="py-2 col-8">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ipsam molestias ab placeat veniam facilis perspiciatis expedita in ad eius dignissimos impedit, quia iste veritatis ipsa nostrum hic debitis excepturi.</div>
                            </div>
                            <div class="row border-bottom">
                                <div class="py-2 col-4 bg-white">Price</div>
                                <div class="py-2 col-8">14,000 SAR</div>
                            </div>
                        </div>
                        <div style="min-height:150px" class="col-12 col-sm-4 col-lg-3 border d-flex flex-column">
                            <div style="flex-grow:1" class="mx-auto w-100" :style="`background:url('/assets/3.jpg') center/contain no-repeat`"></div>
                            <div class="d-flex flex-column align-items-center justify-content-center p-2 mb-2">
                                <span class="text-success">
                                    13 Day - 16 Hour
                                </span>
                                <div class="progress w-100" style=" height:.5rem;">
                                    <div class="progress-bar bg-success" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12">
                            <ul class="nav nav-tabs" id="myTab" role="tablist">
                                <li class="nav-item" role="presentation">
                                    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Tender dates</a>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Addresses</a>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Public file(s)</a>
                                </li>
                            </ul>
                            <div class="tab-content" id="myTabContent">
                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">...</div>
                            <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">...</div>
                            <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">...</div>
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
                        name : 'Tenders',
                        link: '/e-auction',
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