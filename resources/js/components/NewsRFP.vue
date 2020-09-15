<template>
    <div class="container">
        <div class="row">
        <side-bar :links="links" />
        <main class="col-md-9 ml-sm-auto col-lg-10 px-md-4 py-3">
            <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2">
                <h1 class="h2">Create new RFP</h1>
                <div class="btn-toolbar mb-2 mb-md-0">
                    <button type="button" class="btn btn-sm btn-outline-primary">
                        save in draft
                    </button>
                </div>
            </div>
            <div class="card">
                <div style="min-height:100px" class="card-header d-flex flex-column flex-lg-row justify-content-center align-items-center tab-controlers px-5">
                    <span class="mx-3 text-nowrap font-weight-bold" v-for="(tab, i) in tabs" :key="i" :class="getClass(i)">
                        {{tabText(tab,i)}}
                        <svg class="bi" width="20" height="20" fill="currentColor">
                            <use xlink:href="/assets/icons/bootstrap-icons.svg#chevron-double-right"/>
                        </svg>
                    </span>
                </div>
                <div class="card-body">
                    <transition-group name="slide-fade">
                        <form v-if="active == 0" ref="form1" :key="1" class="row g-3 needs-validation" novalidate>
                            <h4 class="col-12">Project details</h4>
                            <div class="col-12 col-md-6 col-lg-4">
                                <label for="project_name" class="form-label">Project name</label>
                                <input type="text" class="form-control" id="project_name" v-model="project_name" required>
                                <div class="valid-feedback">
                                    Looks good!
                                </div>
                                <div class="invalid-feedback">
                                    Please enter project name.
                                </div>
                            </div>
                            <div class="col-12 col-md-6 col-lg-4"> 
                                <label for="category" class="form-label">Project category</label>
                                <input class="form-control" list="catList" id="category" v-model="project_category" required>
                                <datalist id="catList">
                                    <option v-for="(c,i) in categories" :key="i" :value="c" >{{c}}</option>
                                </datalist>
                                <div class="valid-feedback">
                                    Looks good!
                                </div>
                                <div class="invalid-feedback">
                                    Please select project category.
                                </div>
                            </div>
                            <div class="col-12 col-md-6 col-lg-4">
                                <label for="price" class="form-label">Project price</label>
                                <input type="number" class="form-control" id="price" v-model="project_price" required/>
                                <div class="invalid-feedback">
                                    Please enter project budget/ contract price.
                                </div>
                                <div class="valid-feedback">
                                    Looks good.
                                </div>
                            </div>
                            <div class="col-12">
                                <label for="summary" class="form-label">Project summary</label>
                                <textarea class="form-control" v-model="project_summary" rows="6" id="summary" placeholder="Deatails about this RFP" required></textarea>
                                <div class="invalid-feedback">
                                    Please enter summary of the project.
                                </div>
                                <div class="valid-feedback">
                                Looks good!
                                </div>
                            </div>
                            <div class="col-12">
                                <label for="detail" class="form-label">Project details (BoQ)</label>
                                <textarea class="form-control" v-model="boq" rows="6" id="detail" placeholder="Deatails about this RFP" required></textarea>
                                <div class="invalid-feedback">
                                    Please enter details of the project.
                                </div>
                                <div class="valid-feedback">
                                Looks good!
                                </div>
                            </div>
                            <h4 class="col-12">Location details</h4>
                            <div class="col-12 col-md-6 col-lg-4">
                                <label for="district" class="form-label">District/Area</label>
                                <input class="form-control" id="district" v-model="district" required/>
                                <div class="invalid-feedback">
                                    Please enter location district
                                </div>
                                <div class="valid-feedback">
                                    Looks good.
                                </div>
                            </div>
                            <div class="col-12 col-md-6 col-lg-4">
                                <label for="city" class="form-label">City</label>
                                <input class="form-control" id="city" v-model="city" required/>
                                <div class="invalid-feedback">
                                    Please enter location city
                                </div>
                                <div class="valid-feedback">
                                    Looks good.
                                </div>
                            </div>
                            <div class="col-12 col-md-6 col-lg-4">
                                <label for="country" class="form-label">Country</label>
                                <input class="form-control" id="country" v-model="country" required/>
                                <div class="invalid-feedback">
                                    Please enter location country
                                </div>
                                <div class="valid-feedback">
                                    Looks good.
                                </div>
                            </div>
                            
                            <div class="col-12">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" v-model="publicRFX">
                                    <label class="form-check-label" >
                                        Make this Project public?
                                    </label>
                                </div>
                            </div>
                        </form>
                        <form v-if="active == 1" ref="form2" :key="2" class="row g-3 needs-validation" novalidate>
                            <div class="col-12 col-md-6">
                                <label for="start" class="form-label">Response start date</label>
                                <input type="date" :min="new Date().toISOString().split('T')[0]" class="form-control" v-model="start" placeholder="Select start date" id="start" required>
                                <div class="invalid-feedback">
                                    Please provide a valid date.
                                </div>
                            </div>
                            <div class="col-12 col-md-6">
                                <label for="end" class="form-label">Response end date</label>
                                <input type="date" :min="start" class="form-control" v-model="end" placeholder="Select end date" id="end" required>
                                <div class="invalid-feedback">
                                    Please provide a valid date.
                                </div>
                            </div>
                            <div class="col-12 col-md-6">
                                <label for="starTime" class="form-label">Response start time</label>
                                <input type="time" class="form-control" v-model="startTime" placeholder="Select time" id="starTime" required>
                                <div class="invalid-feedback">
                                    Please select time.
                                </div>
                            </div>
                            <div class="col-12 col-md-6">
                                <label for="endTime" class="form-label">Response end time</label>
                                <input type="time" class="form-control" v-model="endTime" placeholder="Select time" id="endTime" required>
                                <div class="invalid-feedback">
                                    Please select time.
                                </div>
                            </div>
                            <div class="col-12">
                                <label for="award" class="form-label">Date of last inquiry</label>
                                <input type="date" :max="end" class="form-control" v-model="award" placeholder="Select award date" id="award" required>
                                <div class="invalid-feedback">
                                    Please provide a valid date.
                                </div>
                            </div>
                            <div class="col-12">
                                <label for="pay options" class="form-label">Payment Options</label>
                                <select class="form-select" id="pay options" v-model="payOpt" required>
                                <option selected disabled value="">Choose...</option>
                                <option>Full payment</option>
                                <option>Milestone payment</option>
                                </select>
                                <div class="invalid-feedback">
                                    Please select a payment option.
                                </div>
                            </div>
                            <div v-if="payOpt == 'Milestone payment'">
                                <label for="upfront" class="form-label">Upfront payment</label>
                                <div class="input-group">
                                    <input type="number" class="form-control" id="upfront" v-model="upfront" placeholder="Enter percentage" required>
                                    <span class="input-group-text" >%</span>
                                </div>
                                <div class="invalid-feedback">
                                    Please choose a username.
                                </div>
                            </div>
                        </form>
                        <div v-if="active == 2" :key="3" class="mx-auto" style="max-width:800px">
                            <ul class="nav nav-tabs d-flex justify-content-center" id="myTab" role="tablist">
                                <li class="nav-item" role="presentation">
                                    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">My suppliers list</a>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Suppliers from marketplace</a>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Invite new suppliers</a>
                                </li>
                            </ul>
                            <div class="tab-content" id="myTabContent">
                                <div class="tab-pane fade show active" id="home" role="tabpanel">
                                    <div class="container py-3 px-0 px-md-3">
                                        <div class="row">
                                            <div class="my-1 col-12 col-sm-8 col-md-9 col-lg-10 d-flex align-items-center">
                                                <div class="input-group mb-2 px-1">
                                                    <div class="input-group-text bg-transparent text-primary border-right-0">
                                                        <svg class="bi" width="18" height="18" fill="currentColor">
                                                            <use xlink:href="/assets/icons/bootstrap-icons.svg#search"/>
                                                        </svg>
                                                    </div>
                                                    <input type="text" class="form-control border-left-0" placeholder="Search my suppliers">
                                                    <button class="btn btn-outline-primary">Search</button>
                                                </div>
                                            </div>
                                            <div class="my-1 col-12 col-sm-4 col-md-3 col-lg-2">
                                                <span @click="selectAll" :class="allSelected ? 'btn-dark' : 'btn-outline-dark'" class="btn btn-sm border-0 float-right"> Select all </span>
                                            </div>
                                        </div>
                                        <div v-for="(s,i) in mySuppliers" :key="s.id" @click="selectSup(i)" class="row hover link-dark my-2 border-bottom py-3">
                                            <div class="col-3 col-sm-2 col-lg-1">
                                                <div class="rounded shadow" :style="`background:url(${s.profile}) center/contain no-repeat`" style="width:55px;height:55px"></div>
                                            </div>
                                            <div class="col-7 col-sm-9 col-lg-10 d-flex flex-column justify-content-center">
                                                <span class="font-weight-bold">{{s.name}}</span>
                                                <span class="d-none d-sm-block">{{s.description}}</span>
                                            </div>
                                            <div class="col-2 col-sm-1 d-flex align-items-center">
                                                <svg class="bi" width="20" height="20" fill="currentColor">
                                                    <use :xlink:href="`/assets/icons/bootstrap-icons.svg#${s.checked ? 'check-square-fill' : 'check-square'}`"/>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="profile" role="tabpanel">
                                    <div class="container py-3 px-0 px-md-3">
                                        <div class="row">
                                            <div class="my-1 col-12 col-sm-8 col-md-9 col-lg-10 d-flex align-items-center">
                                                <div class="input-group mb-2 px-1">
                                                    <div class="input-group-text bg-transparent text-primary border-right-0">
                                                        <svg class="bi" width="18" height="18" fill="currentColor">
                                                            <use xlink:href="/assets/icons/bootstrap-icons.svg#search"/>
                                                        </svg>
                                                    </div>
                                                    <input type="text" class="form-control border-left-0" placeholder="Search suppliers">
                                                    <button class="btn btn-outline-primary">Search</button>
                                                </div>
                                            </div>
                                            <div class="my-1 col-12 col-sm-4 col-md-3 col-lg-2">
                                                <span @click="selectAll('MP')" :class="allSelectedMP ? 'btn-dark' : 'btn-outline-dark'" class="btn btn-sm border-0 float-right"> Select all </span>
                                            </div>
                                        </div>
                                        <div v-for="(s,i) in MPSuppliers" :key="s.id" @click="selectSup(i,'MP')" class="row hover link-dark my-2 border-bottom py-3">
                                            <div class="col-3 col-sm-2 col-lg-1">
                                                <div class="rounded shadow" :style="`background:url(${s.profile}) center/contain no-repeat`" style="width:55px;height:55px"></div>
                                            </div>
                                            <div class="col-7 col-sm-9 col-lg-10 d-flex flex-column justify-content-center">
                                                <span>{{s.name}}</span>
                                                <span class="d-none d-sm-block">{{s.description}}</span>
                                            </div>
                                            <div class="col-2 col-sm-1 d-flex align-items-center">
                                                <svg class="bi" width="20" height="20" fill="currentColor">
                                                    <use :xlink:href="`/assets/icons/bootstrap-icons.svg#${s.checked ? 'check-square-fill' : 'check-square'}`"/>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="contact" role="tabpanel">
                                    <div class="container py-3 px-0 px-md-3">
                                        <form ref="form3" @submit="validateSup" class="row g-3 needs-validation" novalidate>
                                            <div class="my-3 col-12 col-md-4 col-lg-5">
                                                <input type="text" class="form-control" placeholder="Enter supplier name" id="esn" v-model="supName" required>
                                                <div class="invalid-feedback">
                                                    Please provide a name.
                                                </div>
                                            </div>
                                            <div class="my-3 col-12 col-md-4 col-lg-5">
                                                <input type="email" class="form-control" placeholder="Enter supplier email" id="ese" v-model="supEmail" required>
                                                <div class="invalid-feedback">
                                                    Please provide a valide email.
                                                </div>
                                            </div>
                                            <div class="my-3 col-12 col-md-4 col-lg-2">
                                                <button type="submit" @click="validateSup" class="btn btn-outline-success float-right"> Add </button>
                                            </div>
                                        </form>
                                        <div v-for="(s,i) in inviteSuppliers" :key="i" class="row my-3 border-bottom py-2">
                                            <div class="col-5">{{s.name}}</div>
                                            <div class="col-5">{{s.email}}</div>
                                            <div class="col-2">
                                                <span @click="removeSup(i)" class="text-danger hover" title="Remove supplier">
                                                    <svg class="bi" width="20" height="20" fill="currentColor">
                                                        <use xlink:href="/assets/icons/bootstrap-icons.svg#x-square"/>
                                                    </svg>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div v-if="active == 3" :key="4">
                            <div class="container">
                                <div class="row">
                                    <div class="my-3 col-12 col-sm-6 col-lg-4">
                                        <h5 class="text-primary">
                                            Overview
                                        </h5>
                                        <div class="row my-3">
                                            <div class="col-5"><span class="text-primary">Project Name</span></div>
                                            <div class="col-7">{{project_name}}</div>
                                        </div>
                                        <div class="row my-3">
                                            <div class="col-5">
                                                <span class="text-primary">Project Category</span>
                                            </div>
                                            <div class="col-7">
                                                {{project_category}}
                                            </div>
                                        </div>
                                        <div class="row my-3">
                                            <div class="col-5">
                                                <span class="text-primary">Project Type</span>
                                            </div>
                                            <div class="col-7">
                                                {{publicRFX ? 'Public' : 'Private'}}
                                            </div>
                                        </div>
                                        <div class="row my-3">
                                            <div class="col-5">
                                                <span class="text-primary">Project Price</span>
                                            </div>
                                            <div class="col-7">
                                                {{project_price}}
                                            </div>
                                        </div>
                                        <div class="row my-3">
                                            <div class="col-5">
                                                <span class="text-primary">Summary</span>
                                            </div>
                                            <div class="col-7">
                                                {{project_summary}}
                                            </div>
                                        </div>
                                        <div class="row my-3">
                                            <div class="col-5">
                                                <span class="text-primary">Project Details</span>
                                            </div>
                                            <div class="col-7">
                                                {{boq}}
                                            </div>
                                        </div>
                                        <div class="row my-3">
                                            <div class="col-5">
                                                <span class="text-primary">Location</span>
                                            </div>
                                            <div class="col-7">
                                                {{district}}, {{city}}, {{country}}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="border-left border-primary my-3 col-12 col-sm-6 col-lg-4">
                                        <h5 class="text-primary">
                                            Time rules
                                        </h5>
                                        <div class="row my-3">
                                            <div class="col-6">
                                                <span class="text-primary">Start Date</span><br>
                                                {{new Date(start).toLocaleDateString(undefined,{year: 'numeric', month: 'long', day: 'numeric'})}}
                                            </div>
                                            <div class="col-6">
                                                <span class="text-primary">Start Time</span><br>
                                                {{startTime}}
                                            </div>
                                        </div>
                                        <div class="row my-3">
                                            <div class="col-6">
                                                <span class="text-primary">End Date</span><br>
                                                {{new Date(end).toLocaleDateString(undefined,{year: 'numeric', month: 'long', day: 'numeric'})}}
                                            </div>
                                            <div class="col-6">
                                                <span class="text-primary">End Time</span><br>
                                                {{endTime}}
                                            </div>
                                        </div>
                                        <div class="row my-3">
                                            <div class="col">
                                                <span class="text-primary">Estimated Award Date</span><br>
                                            {{new Date(award).toLocaleDateString(undefined,{year: 'numeric', month: 'long', day: 'numeric'})}}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="border-left border-primary my-3 col-12 col-lg-4">
                                        <h5 class="text-primary">
                                            Suppliers
                                        </h5>
                                        <div v-for="(s,i) in summarySuppliers" :key="s.id" @click="selectSup(i)" class="row hover link-dark my-2 border-bottom py-3">
                                            <div class="col-3">
                                                <div class="rounded shadow" :style="`background:url(${s.profile || `https://ui-avatars.com/api/?name=${s.name}`}) center/contain no-repeat`" style="width:55px;height:55px"></div>
                                            </div>
                                            <div class="col-9 d-flex flex-column justify-content-center">
                                                <span class="font-weight-bold">{{s.name}}</span>
                                                <span class="d-none d-sm-block">{{s.description || s.email}}</span>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </transition-group>
                    <div class="d-flex my-5">
                        <button class="btn btn-outline-primary mr-auto" :disabled="active == 0" @click="active -= 1" type="submit">Previous</button>
                        <button class="btn btn-primary" @click="validate" type="submit">
                            {{active == 3 ? 'Submit Order' : 'Next'}}
                        </button>
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
                tabs : [
                    'Project Info',
                    // 'Select Template',
                    'Time Rule & payment',
                    'Select Supplier',
                    'Summary'
                ],
                active : 0,
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
                // First form
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
                project_name:'',
                project_category:'',
                project_price:'',
                project_summary:'',
                boq:'',
                district:'',
                city:'',
                country:'',
                publicRFX:null,
                
                // form2 
                start:"",
                end:"",
                startTime :("0" + new Date().getHours()).substr(-2) + ":"+ new Date().getMinutes(),
                endTime : ("0" + new Date().getHours()).substr(-2) + ":"+ new Date().getMinutes(),
                award : "",
                payOpt : "",
                upfront : "",
                // #rd form 
                mySuppliers : [
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
                    // {
                    //     name : 'Procurement tender management',
                    //     description : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est maxime accusantium saepe dignissimos, impedit repudiandae perferendis quaerat blanditiis deleniti.',
                    //     id : Math.random(1000),
                    //     checked : false,
                    //     profile : '/assets/profile_1.jpg'
                    // },
                ],
                MPSuppliers : [
                    {
                        name : 'Saudi Procurement Service',
                        description : 'Management and Business Professionals and Administrative Services',
                        id : Math.random(1000),
                        checked : false,
                        profile : '/assets/1.png'
                    },
                    {
                        name : 'FP Group',
                        description : 'Electrical Systems and Lighting and Components and Accessories and Supplies',
                        id : Math.random(1000),
                        checked : false,
                        profile : '/assets/2.jpeg'
                    },
                    {
                        name : 'BONYAT ALBENAA FACTORY',
                        description : 'Building and Construction Machinery and Accessories',
                        id : Math.random(1000),
                        checked : false,
                        profile : '/assets/3.jpg'
                    },
                ],
                supName : "",
                supEmail : "",
                inviteSuppliers : [],
                summarySuppliers : []

            }
        },
        methods:{
            validate(){
                if(this.active == 0){
                    if(!this.$refs.form1.checkValidity()){
                        this.$refs.form1.classList.add('was-validated')
                        EventBus.$emit('alert',{
                            name : "Form Validation",
                            type : 'danger',
                            desc : "Please fill in all the required fields",
                            id : Math.random(10000),
                            time : 5000
                        })
                    }else{
                        // console.log('this.tabs', this.tabs)
                        if(this.active < this.tabs.length -1){
                            this.active = this.active + 1
                        }
                    }
                }
                else if(this.active == 1){
                    if(!this.$refs.form2.checkValidity()){
                        this.$refs.form2.classList.add('was-validated')
                    }else{
                        // console.log('this.tabs', this.tabs)
                        if(this.active < this.tabs.length -1){
                            this.active = this.active + 1
                        }
                    }
                }
                else if(this.active == 2){
                    var sMySup = this.mySuppliers.filter(s => s.checked)
                    var sMPSup = this.MPSuppliers.filter(s => s.checked)
                    var sInviteSup = this.inviteSuppliers
                    
                    if( sMySup.length || sMPSup.length || sInviteSup.length){
                        // Go to summary 
                        if(this.active < this.tabs.length -1){
                            this.active = this.active + 1
                        }
                        this.summarySuppliers = [...sMySup,...sMPSup,...sInviteSup]
                    }else{
                        EventBus.$emit('alert',{
                            name : "Supplier outage",
                            type : 'danger',
                            desc : "Please select atleast one supplier or invite them.",
                            id : Math.random(10000),
                            time : 5000
                        })
                    }
                }
                else{
                    let data = {
                        project_name : this.project_name,
                        project_category : this.project_category,
                        project_price : this.project_price,
                        project_summary : this.project_summary,
                        boq : this.boq,
                        district : this.district,
                        city : this.city,
                        country : this.country,
                        start : this.start,
                        end : this.end,
                        start_time : this.startTime,
                        end_time : this.endTime,
                        rfi_last_date : this.award,
                        publicRFX : this.publicRFX ? 1 : 0,
                        suppliers : [...this.mySuppliers.filter(s => s.checked).map(s => s.id),...this.MPSuppliers.filter(s => s.checked).map(s => s.id)],
                        invite : this.inviteSuppliers,

                        // set project active 
                        project_status : 'active'
                    }

                    axios.post('/project',data)
                    .then(res => {
                        EventBus.$emit('alert',{
                            name : err.message,
                            type : 'danger',
                            desc : res.data.message,
                            id : Math.random(10000),
                            time : 5000
                        })
                    })
                    .catch(err => {
                        Object.entries(err.response.data.errors).forEach(error => {
                            err.response.data.errors[error[0]].forEach(e => {
                                setTimeout(() => {
                                    EventBus.$emit('alert',{
                                        name : 'Success',
                                        type : 'success',
                                        desc : e,
                                        id : Math.random(10000),
                                        time : 5000
                                    })
                                },200)
                            })
                        })
                        EventBus.$emit('alert',{
                            name : "Error creating new project",
                            type : 'danger',
                            desc : err.response.message,
                            id : Math.random(10000),
                        })
                    })
                }
            },
            tabText(txt,i){
                if(window.innerWidth < 720){
                    return i+1
                }else{
                    return txt
                }
            },
            getClass(i){
                let str = ""
                if(i == this.active){
                    str = 'active'
                }
                else if(i <= this.active){
                    str += 'done'
                }
                return str
            },
            selectSup(i, str){
                if(str == "MP"){
                    this.MPSuppliers[i].checked = !this.MPSuppliers[i].checked
                }else{

                    this.mySuppliers[i].checked = !this.mySuppliers[i].checked
                }
            },
            selectAll(str){
                if(str == "MP"){
                    if(!this.allSelectedMP){
                        this.MPSuppliers.forEach(s => s.checked = true)
                    }else{
                        this.MPSuppliers.forEach(s => s.checked = !s.checked)
                    }
                }else{
                    if(!this.allSelected){
                        this.mySuppliers.forEach(s => s.checked = true)
                    }else{
                        this.mySuppliers.forEach(s => s.checked = !s.checked)
                    }
                }
            },
            validateSup(e){
                e.preventDefault()
                if(!this.$refs.form3.checkValidity()){
                    this.$refs.form3.classList.add('was-validated')
                    EventBus.$emit('alert',{
                        name : "Form Validation",
                        type : 'danger',
                        desc : "Please fill in all the required fields",
                        id : Math.random(10000),
                        time : 5000
                    })
                }else{
                    this.inviteSuppliers.push({
                        name : this.supName,
                        email : this.supEmail
                    })
                    this.supName = ""
                    this.supEmail = ""
                }
            },
            removeSup(i){
                this.inviteSuppliers.splice(i,1)
            }
        },
        watch:{
            active : (newVal) => {
                let Tabs = document.querySelectorAll('.tab-controlers span')
                Tabs.forEach((tab,i) => {
                    if(i <= newVal){
                        tab.classList.add('text-success')
                    }
                })
            }
        },
        beforeCreate(){
            if(!UserClass.loggedIn()){
                this.$router.push('/')
            }
        },
        computed:{
            allSelected(){
                let check = true
                for(var s of this.mySuppliers){
                    if(!s.checked){
                        check = false
                        break
                    }
                }
                return check
            },
            allSelectedMP(){
                let check = true
                for(var s of this.MPSuppliers){
                    if(!s.checked){
                        check = false
                        break
                    }
                }
                return check
            }
        }
    }
</script>
<style>
    .nav-scroller {
    position: relative;
    z-index: 2;
    overflow-y: hidden;
    }
    .nav-scroller .nav {
    display: flex;
    flex-wrap: nowrap;
    margin-top: -1px;
    overflow-x: auto;
    color: rgba(255, 255, 255, .75);
    text-align: center;
    white-space: nowrap;
    -webkit-overflow-scrolling: touch;
    }
    .tab-controlers .done{
        color: var(--bs-success);
    }
    .tab-controlers .active{
        background-color: var(--bs-success);
        color: #fff;
        padding: .5rem .75rem;
        border-radius: 4px;
    }
</style>
