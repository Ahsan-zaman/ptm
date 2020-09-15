<template>
    <div class="container">
        <div class="row">
        <side-bar :links="links" />
        <main class="col-md-9 ml-sm-auto col-lg-10 px-md-4">
            <div>
                <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 border-bottom">
                    <h1 class="h2">Supplier Management</h1>
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

                <div class="nav-scroller bg-white shadow-sm mb-3">
                    <nav class="nav nav-underline">
                        <a class="nav-link" href="#">
                        Home
                        <span class="badge bg-light text-dark rounded-pill align-text-bottom">27</span>
                        </a>
                        <a class="nav-link" href="#">Chatter</a>
                        <a class="nav-link" href="#">Accounts</a>
                        <a class="nav-link" href="#">Opportunities</a>
                        <a class="nav-link" href="#">Leads</a>
                        <a class="nav-link" href="#">Dashboards</a>
                        <a class="nav-link" href="#">Reports</a>
                        <a class="nav-link" href="#">Groups</a>
                    </nav>
                    <!-- <img src='https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortWaved&accessoriesType=Blank&hairColor=Brown&facialHairType=BeardLight&facialHairColor=Black&clotheType=Hoodie&clotheColor=Red&eyeType=Side&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Tanned'/>
                    <img src='https://avataaars.io/?avatarStyle=Circle&topType=ShortHairDreads01&accessoriesType=Prescription01&hairColor=BlondeGolden&facialHairType=Blank&facialHairColor=Platinum&clotheType=ShirtScoopNeck&clotheColor=Blue02&eyeType=Default&eyebrowType=RaisedExcitedNatural&mouthType=ScreamOpen&skinColor=Tanned'/>
                    <img src='https://avataaars.io/?avatarStyle=Circle&topType=ShortHairDreads01&accessoriesType=Round&hairColor=Brown&facialHairType=BeardMagestic&facialHairColor=Black&clotheType=GraphicShirt&clotheColor=Blue01&graphicType=Resist&eyeType=EyeRoll&eyebrowType=FlatNatural&mouthType=Disbelief&skinColor=Light'/>
                    <img src="https://ui-avatars.com/api/?name=Ahsan"> -->
                </div>
                
                <div class="table-responsive my-3 bg-light rounded shadow">
                    <table style="overflow" class="table table-striped table-borderless mb-0">
                        <thead>
                            <tr>
                                <th @click="selectAll" class="hover">
                                    <svg class="bi" width="20" height="20" fill="currentColor">
                                        <use :xlink:href="`/assets/icons/bootstrap-icons.svg#${allSelected ? 'check-square-fill' : 'square'}`"/>
                                    </svg>
                                </th>
                                <th @click="sortBy('id')" class="hover" style="white-space:nowrap" scope="col text-weight-bold">
                                    <svg class="bi" width="20" height="20" fill="currentColor">
                                        <use xlink:href="/assets/icons/bootstrap-icons.svg#sort-down"/>
                                    </svg>
                                    SR#
                                </th>
                                <th @click="sortBy('vId')" class="hover" style="white-space:nowrap" scope="col text-weight-bold">
                                    <svg class="bi" width="20" height="20" fill="currentColor">
                                        <use xlink:href="/assets/icons/bootstrap-icons.svg#sort-down"/>
                                    </svg>
                                    Vendor Id
                                </th>
                                <th @click="sortBy('name')" class="hover" style="white-space:nowrap" scope="col text-weight-bold">
                                    <svg class="bi" width="20" height="20" fill="currentColor">
                                        <use xlink:href="/assets/icons/bootstrap-icons.svg#sort-down"/>
                                    </svg>
                                    Supplier Name
                                </th>
                                <th @click="sortBy('location')" class="hover" style="white-space:nowrap" scope="col text-weight-bold">
                                    <svg class="bi" width="20" height="20" fill="currentColor">
                                        <use xlink:href="/assets/icons/bootstrap-icons.svg#sort-down"/>
                                    </svg>
                                    Location
                                </th>
                                <th @click="sortBy('contact')" class="hover" style="white-space:nowrap" scope="col text-weight-bold">
                                    <svg class="bi" width="20" height="20" fill="currentColor">
                                        <use xlink:href="/assets/icons/bootstrap-icons.svg#sort-down"/>
                                    </svg>
                                    Contact#
                                </th>
                                <th @click="sortBy('poc')" class="hover" style="white-space:nowrap" scope="col text-weight-bold">
                                    <svg class="bi" width="20" height="20" fill="currentColor">
                                        <use xlink:href="/assets/icons/bootstrap-icons.svg#sort-down"/>
                                    </svg>
                                    POC person
                                </th>
                                <th @click="sortBy('industry_type')" class="hover" style="white-space:nowrap" scope="col text-weight-bold">
                                    <svg class="bi" width="20" height="20" fill="currentColor">
                                        <use xlink:href="/assets/icons/bootstrap-icons.svg#sort-down"/>
                                    </svg>
                                    Industry type
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(s,i) in suppliers" :key="i">
                                <th class="hover" @click="s.checked = !s.checked">
                                    <svg class="bi" width="20" height="20" fill="currentColor">
                                        <use :xlink:href="`/assets/icons/bootstrap-icons.svg#${ s.checked ?'check-square-fill':'square'}`"/>
                                    </svg>
                                </th>
                                <td>{{s.id}}</td>
                                <td>{{s.vId}}</td>
                                <td>{{s.name}}</td>
                                <td>{{s.location}}</td>
                                <td>{{s.contact}}</td>
                                <td>
                                    <div @click="gotoPOC(s.poc.id)" style="min-width:125px" class="badge rounded-pill bg-primary px-1 py-1 hover d-flex align-items-center">
                                        <img :src="s.poc.dp" width="25px" class="img-thumbnail rounded-circle border-0 p-0 pr-auto" alt="...">
                                        <span class="mx-auto">{{s.poc.name}}</span>
                                        <div>
                                            <svg class="bi" width="10" height="10" fill="currentColor">
                                                <use xlink:href="/assets/icons/bootstrap-icons.svg#chevron-right"/>
                                            </svg>
                                        </div>
                                    </div>
                                </td>
                                <td>{{s.industry_type}}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="p-3 d-flex align-items-center bg-white rounded shadow">
                    <select style="max-width:200px" v-model="limit" class="form-select form-select-sm">
                        <option value="10" selected>10</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                        <option value="all">all</option>
                    </select>
                    <div class="ml-auto d-flex">
                        <div @click="prev" class="link-primary hover mx-4">
                            <svg class="bi" width="24" height="24" fill="currentColor">
                                <use xlink:href="/assets/icons/bootstrap-icons.svg#arrow-left-square"/>
                            </svg>
                        </div>
                        <div @click="next" class="link-primary hover mx-4">
                            <svg class="bi" width="24" height="24" fill="currentColor">
                                <use xlink:href="/assets/icons/bootstrap-icons.svg#arrow-right-square"/>
                            </svg>
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
                limit : "10",
                page : 0,
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
                suppliers : [],
                tbdata : [
                    {
                        id : Math.round(Math.random()*10),
                        vId : Math.round(Math.random(1000)*1000),
                        name : 'Ahsan web',
                        location : 'Jeddah, KSA',
                        contact : '0571708606',
                        poc : {
                            id : Math.random(10),
                            name : 'Ahsan',
                            dp : 'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairDreads01&accessoriesType=Round&hairColor=Brown&facialHairType=BeardMagestic&facialHairColor=Black&clotheType=GraphicShirt&clotheColor=Blue01&graphicType=Resist&eyeType=EyeRoll&eyebrowType=FlatNatural&mouthType=Disbelief&skinColor=Light'
                        },
                        industry_type : 'Saas',
                        checked : false
                    },
                    {
                        id : Math.round(Math.random()*10),
                        vId : Math.round(Math.random(1000)*1000),
                        name : 'Pro cure',
                        location : 'Khobar, KSA',
                        contact : '0550893217',
                        poc : {
                            id : Math.random(10),
                            name : 'Test 2',
                            dp : 'https://ui-avatars.com/api/?name=Ahsan'
                        },
                        industry_type : 'Hardware',
                        checked : false
                    },
                    {
                        id : Math.round(Math.random()*10),
                        vId : Math.round(Math.random(1000)*1000),
                        name : 'Builder Co.',
                        location : 'Dammam, KSA',
                        contact : '0569723698',
                        poc : {
                            id : Math.random(10),
                            name : 'Abdullah',
                            dp : 'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortWaved&accessoriesType=Blank&hairColor=Brown&facialHairType=BeardLight&facialHairColor=Black&clotheType=Hoodie&clotheColor=Red&eyeType=Side&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Tanned'
                        },
                        industry_type : 'Construction',
                        checked : false
                    },
                    {
                        id : Math.round(Math.random()*10),
                        vId : Math.round(Math.random(1000)*1000),
                        name : 'Ahsan web',
                        location : 'Jeddah, KSA',
                        contact : '0571708606',
                        poc : {
                            id : Math.random(10),
                            name : 'Ahsan',
                            dp : 'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairDreads01&accessoriesType=Round&hairColor=Brown&facialHairType=BeardMagestic&facialHairColor=Black&clotheType=GraphicShirt&clotheColor=Blue01&graphicType=Resist&eyeType=EyeRoll&eyebrowType=FlatNatural&mouthType=Disbelief&skinColor=Light'
                        },
                        industry_type : 'Saas',
                        checked : false
                    },
                    {
                        id : Math.round(Math.random()*10),
                        vId : Math.round(Math.random(1000)*1000),
                        name : 'Pro cure',
                        location : 'Khobar, KSA',
                        contact : '0550893217',
                        poc : {
                            id : Math.random(10),
                            name : 'Test 2',
                            dp : 'https://ui-avatars.com/api/?name=Ahsan'
                        },
                        industry_type : 'Software',
                        checked : false
                    },
                    {
                        id : Math.round(Math.random()*10),
                        vId : Math.round(Math.random(1000)*1000),
                        name : 'Builder Co.',
                        location : 'Dammam, KSA',
                        contact : '0569723698',
                        poc : {
                            id : Math.random(10),
                            name : 'Abdullah',
                            dp : 'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortWaved&accessoriesType=Blank&hairColor=Brown&facialHairType=BeardLight&facialHairColor=Black&clotheType=Hoodie&clotheColor=Red&eyeType=Side&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Tanned'
                        },
                        industry_type : 'Instruments',
                        checked : false
                    },
                    {
                        id : Math.round(Math.random()*10),
                        vId : Math.round(Math.random(1000)*1000),
                        name : 'Builder Co.',
                        location : 'Dammam, KSA',
                        contact : '0569723698',
                        poc : {
                            id : Math.random(10),
                            name : 'Abdullah',
                            dp : 'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortWaved&accessoriesType=Blank&hairColor=Brown&facialHairType=BeardLight&facialHairColor=Black&clotheType=Hoodie&clotheColor=Red&eyeType=Side&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Tanned'
                        },
                        industry_type : 'Building',
                        checked : false
                    },
                    {
                        id : Math.round(Math.random()*10),
                        vId : Math.round(Math.random(1000)*1000),
                        name : 'Builder Co.',
                        location : 'Dammam, KSA',
                        contact : '0569723698',
                        poc : {
                            id : Math.random(10),
                            name : 'Abdullah',
                            dp : 'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortWaved&accessoriesType=Blank&hairColor=Brown&facialHairType=BeardLight&facialHairColor=Black&clotheType=Hoodie&clotheColor=Red&eyeType=Side&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Tanned'
                        },
                        industry_type : 'Construction',
                        checked : false
                    },
                    {
                        id : Math.round(Math.random()*10),
                        vId : Math.round(Math.random(1000)*1000),
                        name : 'Builder Co.',
                        location : 'Dammam, KSA',
                        contact : '0569723698',
                        poc : {
                            id : Math.random(10),
                            name : 'Abdullah',
                            dp : 'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortWaved&accessoriesType=Blank&hairColor=Brown&facialHairType=BeardLight&facialHairColor=Black&clotheType=Hoodie&clotheColor=Red&eyeType=Side&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Tanned'
                        },
                        industry_type : 'Construction',
                        checked : false
                    },
                    {
                        id : Math.round(Math.random()*10),
                        vId : Math.round(Math.random(1000)*1000),
                        name : 'Builder Co.',
                        location : 'Dammam, KSA',
                        contact : '0569723698',
                        poc : {
                            id : Math.random(10),
                            name : 'Abdullah',
                            dp : 'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortWaved&accessoriesType=Blank&hairColor=Brown&facialHairType=BeardLight&facialHairColor=Black&clotheType=Hoodie&clotheColor=Red&eyeType=Side&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Tanned'
                        },
                        industry_type : 'Construction',
                        checked : false
                    },
                    {
                        id : Math.round(Math.random()*10),
                        vId : Math.round(Math.random(1000)*1000),
                        name : 'Builder Co.',
                        location : 'Dammam, KSA',
                        contact : '0569723698',
                        poc : {
                            id : Math.random(10),
                            name : 'Abdullah',
                            dp : 'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortWaved&accessoriesType=Blank&hairColor=Brown&facialHairType=BeardLight&facialHairColor=Black&clotheType=Hoodie&clotheColor=Red&eyeType=Side&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Tanned'
                        },
                        industry_type : 'Construction',
                        checked : false
                    },
                    {
                        id : Math.round(Math.random()*10),
                        vId : Math.round(Math.random(1000)*1000),
                        name : 'Builder Co.',
                        location : 'Dammam, KSA',
                        contact : '0569723698',
                        poc : {
                            id : Math.random(10),
                            name : 'Abdullah',
                            dp : 'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortWaved&accessoriesType=Blank&hairColor=Brown&facialHairType=BeardLight&facialHairColor=Black&clotheType=Hoodie&clotheColor=Red&eyeType=Side&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Tanned'
                        },
                        industry_type : 'Construction',
                        checked : false
                    },
                    {
                        id : Math.round(Math.random()*10),
                        vId : Math.round(Math.random(1000)*1000),
                        name : 'Builder Co.',
                        location : 'Dammam, KSA',
                        contact : '0569723698',
                        poc : {
                            id : Math.random(10),
                            name : 'Abdullah',
                            dp : 'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortWaved&accessoriesType=Blank&hairColor=Brown&facialHairType=BeardLight&facialHairColor=Black&clotheType=Hoodie&clotheColor=Red&eyeType=Side&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Tanned'
                        },
                        industry_type : 'Construction',
                        checked : false
                    },
                ],
            }
        },
        mounted(){
            this.navigate()
        },
        methods:{
            gotoPOC(id){
                alert(`View POC with id ${id}`)
            },
            selectAll(){
                if(!this.allSelected){
                    this.suppliers.forEach(s => s.checked = true)
                }else{
                    this.suppliers.forEach(s => s.checked = !s.checked)
                }
            },
            sortBy(term){
                this.suppliers.sort((a,b) => {
                    if(typeof(a[term]) === 'string'){
                        if ( a[term] < b[term]){
                            return -1;
                        }
                        if ( a[term] > b[term]){
                            return 1;
                        }
                        return 0;
                    }
                    else if(typeof(a[term]) == 'number'){
                        return a[term] - b[term]
                    }
                    else if(typeof(a[term]) == 'object'){
                        if ( a[term]['name'] < b[term]['name']){
                            return -1;
                        }
                        if ( a[term]['name'] > b[term]['name']){
                            return 1;
                        }
                        return 0;
                    }
                })
            },
            next(){
                var tot = this.tbdata.length
                var maxPage = Math.ceil(tot / parseInt(this.limit)) -1
                if(this.page < maxPage){

                    this.page += 1
                }else{
                    this.page = 0
                }
                this.navigate()
            },
            prev(){
                var tot = this.tbdata.length
                var maxPage = Math.ceil(tot / parseInt(this.limit)) +1 
                if(this.page > 0){

                    this.page -= 1
                }else{
                    this.page = 0
                }
                this.navigate()
            },
            navigate(){
                this.suppliers = []
                this.tbdata.forEach((d,i) => {
                    if(i >= this.page * parseInt(this.limit) && i < parseInt(this.limit) * (this.page + 1)){
                        this.suppliers.push(d)
                    }
                })
            }
        },
        computed:{
            allSelected(){
                let check = true
                for(var s of this.suppliers){
                    if(!s.checked){
                        check = false
                        break
                    }
                }
                return check
            }
        },
        beforeCreate(){
            if(!UserClass.loggedIn()){
                this.$router.push('/')
            }
        }
    }
</script>
