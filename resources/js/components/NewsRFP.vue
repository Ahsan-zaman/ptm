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
                            <div class="col-12 col-md-6 col-lg-4">
                                <label for="rfr" class="form-label">Reason for requisition</label>
                                <select class="form-select" v-model="reasonForRequisition" id="rfr" required>
                                <option selected disabled value="">Choose...</option>
                                <option>Projects</option>
                                <option>Other</option>
                                </select>
                                <div class="invalid-feedback">
                                    Please select a valid reason.
                                </div>
                            </div>
                            <div class="col-12 col-md-6 col-lg-4">
                                <label for="sp" class="form-label">Select project</label>
                                <select class="form-select" id="sp" v-model="sp" required>
                                <option selected disabled value="">Choose...</option>
                                <option>Projects</option>
                                <option>Other</option>
                                </select>
                                <div class="invalid-feedback">
                                    Please select a project.
                                </div>
                            </div>
                            <div class="col-12 col-md-6 col-lg-4">
                                <label for="erfr" class="form-label">Enter reason for requisition</label>
                                <input type="text" class="form-control" placeholder="Enter reason" id="erfr" v-model="erfr" required>
                                <div class="valid-feedback">
                                Looks good!
                                </div>
                            </div>
                            <div class="col-12 col-md-6 col-lg-4">
                                <label for="budget" class="form-label">Budget</label>
                                <select class="form-select" id="budget" v-model="budget" required>
                                <option selected disabled value="">Choose...</option>
                                <option>Get custom budgets</option>
                                <option>Other</option>
                                </select>
                                <div class="invalid-feedback">
                                    Please select a budget.
                                </div>
                            </div>
                            <div class="col-12 col-md-6 col-lg-4">
                                <label for="ot" class="form-label">Order type</label>
                                <select class="form-select" id="ot" v-model="ot" required>
                                <option selected disabled value="">Choose...</option>
                                <option>Product</option>
                                <option>Service</option>
                                </select>
                                <div class="invalid-feedback">
                                    Please select a budget.
                                </div>
                            </div>
                            <div class="col-12">
                                <label for="Specification" class="form-label">Specification</label>
                                <textarea class="form-control" v-model="specification" rows="8" id="Specification" placeholder="Deatails about this RFP" required></textarea>
                                <div class="invalid-feedback">
                                    Please enter a RFX specification(s).
                                </div>
                            </div>
                            <div class="col-12">
                                <label for="address" class="form-label">Address</label>
                                <select class="form-select" id="address" v-model="address" required>
                                <option selected disabled value="">Choose...</option>
                                <option>Get addresses</option>
                                <option>Others</option>
                                </select>
                                <div class="invalid-feedback">
                                    Please select address.
                                </div>
                            </div>
                            <div class="col-12 col-md-6 col-lg-4">
                                <label for="Commodity" class="form-label">Commodity</label>
                                <input type="text" class="form-control" v-model="commodity" placeholder="Enter commodity" id="Commodity" required>
                                <div class="invalid-feedback">
                                    Please provide a commodity.
                                </div>
                            </div>
                            <div class="col-12 col-md-6 col-lg-4">
                                <label for="Category" class="form-label">Category</label>
                                <select class="form-select" id="Category" v-model="category" required>
                                <option selected disabled value="">Choose...</option>
                                <option>Manually input later</option>
                                <option>others</option>
                                </select>
                                <div class="invalid-feedback">
                                    Please select a category.
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" v-model="publicRFX">
                                    <label class="form-check-label" >
                                        Do you want to make this RFX public?
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
                                <label for="award" class="form-label">Estimated Award Date</label>
                                <input type="date" :min="end" class="form-control" v-model="award" placeholder="Select award date" id="award" required>
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
                                    <input type="number" class="form-control" id="upfront" placeholder="Enter percentage" required>
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
                                                <div class="rounded shadow" :style="`background:url(${s.profile}) center/cover no-repeat`" style="width:55px;height:55px"></div>
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
                                                    <input type="text" class="form-control border-left-0" placeholder="Search my suppliers">
                                                    <button class="btn btn-outline-primary">Search</button>
                                                </div>
                                            </div>
                                            <div class="my-1 col-12 col-sm-4 col-md-3 col-lg-2">
                                                <span @click="selectAll('MP')" :class="allSelectedMP ? 'btn-dark' : 'btn-outline-dark'" class="btn btn-sm border-0 float-right"> Select all </span>
                                            </div>
                                        </div>
                                        <div v-for="(s,i) in MPSuppliers" :key="s.id" @click="selectSup(i,'MP')" class="row hover link-dark my-2 border-bottom py-3">
                                            <div class="col-3 col-sm-2 col-lg-1">
                                                <div class="rounded shadow" :style="`background:url(${s.profile}) center/cover no-repeat`" style="width:55px;height:55px"></div>
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
                                            <div class="col"><span class="text-primary">Reason for requisition</span><br>{{reasonForRequisition}}</div>
                                        </div>
                                        <div class="row my-3">
                                            <div class="col-6">
                                                <span class="text-primary">Order Type</span><br>
                                                {{ot}}
                                            </div>
                                            <div class="col-6">
                                                <span class="text-primary">
                                                    Visibility
                                                </span><br>
                                                {{publicRFX ? 'Public' : 'Private'}}
                                            </div>
                                        </div>
                                        <div class="row my-3">
                                            <div class="col">
                                                <span class="text-primary">
                                                Description
                                            </span><br>
                                            {{specification}}
                                            </div>
                                        </div>
                                        <div class="row my-3">
                                            <div class="col">
                                                <span class="text-primary">
                                                Address
                                            </span><br>
                                            {{address}}
                                            </div>
                                        </div>
                                        <div class="row my-3">
                                            <div class="col-6">
                                                <span class="text-primary">
                                                    commodity
                                                </span><br>
                                                {{commodity}}
                                            </div>
                                            <div class="col-6">
                                                <span class="text-primary">
                                                    category
                                                </span><br>
                                                {{category}}
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
                                            {{award}}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="border-left border-primary my-3 col-12 col-lg-4">
                                        <h5 class="text-primary">
                                            Suppliers
                                        </h5>
                                        <div v-for="(s,i) in MPSuppliers" :key="s.id" @click="selectSup(i)" class="row hover link-dark my-2 border-bottom py-3">
                                            <div class="col-3">
                                                <div class="rounded shadow" :style="`background:url(${s.profile}) center/cover no-repeat`" style="width:55px;height:55px"></div>
                                            </div>
                                            <div class="col-9 d-flex flex-column justify-content-center">
                                                <span class="font-weight-bold">{{s.name}}</span>
                                                <span class="d-none d-sm-block">{{s.description}}</span>
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
        <alert/>
    </div>
    </div>
</template>

<script>
import SideBar from './SideBar.vue'
import Alert from './Alert'
import { each } from 'highcharts'
    export default {
        components:{ SideBar, Alert },
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
                        name : 'e-Auction',
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
                reasonForRequisitions:[
                    ''
                ],
                reasonForRequisition:'',
                sp:'',
                erfr:'',
                budget:'',
                ot:'',
                specification:'',
                address:'',
                commodity:'',
                category:'',
                publicRFX:false,
                tabs : [
                    'Project Info',
                    // 'Select Template',
                    'Time Rule & payment',
                    'Select Supplier',
                    'Summary'
                ],
                active : 0,
                // form2 
                start:"",
                end:"",
                startTime :("0" + new Date().getHours()).substr(-2) + ":"+ new Date().getMinutes(),
                endTime : ("0" + new Date().getHours()).substr(-2) + ":"+ new Date().getMinutes(),
                award : "",
                payOpt : "",
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
                    var sMySup = this.mySuppliers.filter(s => s.checked).length
                    var sMPSup = this.MPSuppliers.filter(s => s.checked).length
                    var sInviteSup = this.inviteSuppliers.length
                    
                    if( sMySup || sMPSup || sInviteSup){
                        // Go to summary 
                        if(this.active < this.tabs.length -1){
                            this.active = this.active + 1
                        }
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
