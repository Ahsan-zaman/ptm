<template>
    <civ class="container">
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
                    <table class="table table-striped table-borderless">
                        <thead>
                            <tr>
                                <th>
                                    <svg class="bi" width="20" height="20" fill="currentColor">
                                        <use xlink:href="/assets/icons/bootstrap-icons.svg#square"/>
                                    </svg>
                                </th>
                                <th scope="col text-weight-bold">
                                    <svg class="bi" width="20" height="20" fill="currentColor">
                                        <use xlink:href="/assets/icons/bootstrap-icons.svg#sort-down"/>
                                    </svg>
                                    SR#
                                </th>
                                <th scope="col text-weight-bold">
                                    <svg class="bi" width="20" height="20" fill="currentColor">
                                        <use xlink:href="/assets/icons/bootstrap-icons.svg#sort-down"/>
                                    </svg>
                                    Vendor Id
                                </th>
                                <th scope="col text-weight-bold">
                                    <svg class="bi" width="20" height="20" fill="currentColor">
                                        <use xlink:href="/assets/icons/bootstrap-icons.svg#sort-down"/>
                                    </svg>
                                    Supplier Name
                                </th>
                                <th scope="col text-weight-bold">
                                    <svg class="bi" width="20" height="20" fill="currentColor">
                                        <use xlink:href="/assets/icons/bootstrap-icons.svg#sort-down"/>
                                    </svg>
                                    Location
                                </th>
                                <th scope="col text-weight-bold">
                                    <svg class="bi" width="20" height="20" fill="currentColor">
                                        <use xlink:href="/assets/icons/bootstrap-icons.svg#sort-down"/>
                                    </svg>
                                    Contact#
                                </th>
                                <th scope="col text-weight-bold">
                                    <svg class="bi" width="20" height="20" fill="currentColor">
                                        <use xlink:href="/assets/icons/bootstrap-icons.svg#sort-down"/>
                                    </svg>
                                    POC person
                                </th>
                                <th scope="col text-weight-bold">
                                    <svg class="bi" width="20" height="20" fill="currentColor">
                                        <use xlink:href="/assets/icons/bootstrap-icons.svg#sort-down"/>
                                    </svg>
                                    Industry type
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(s,i) in suppliers" :key="i">
                                <th>
                                    <svg class="bi" width="20" height="20" fill="currentColor">
                                        <use xlink:href="/assets/icons/bootstrap-icons.svg#square"/>
                                    </svg>
                                </th>
                            <td>{{s.id}}</td>
                            <td>{{s.vId}}</td>
                            <td>{{s.name}}</td>
                            <td>{{s.location}}</td>
                            <td>{{s.contact}}</td>
                            <td>
                                <div @click="gotoPOC(s.poc.id)" style="min-width:125px" class="badge rounded-pill bg-primary px-1 py-1 hover">
                                    <img :src="s.poc.dp" width="25px" class="img-thumbnail rounded-circle border-0 p-0" alt="...">
                                    <span class="px-3">{{s.poc.name}}</span>
                                    <svg class="bi" width="10" height="10" fill="currentColor">
                                        <use xlink:href="/assets/icons/bootstrap-icons.svg#chevron-right"/>
                                    </svg>
                                </div>
                            </td>
                            <td>{{s.industry_type}}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    </div>
    </civ>
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
                suppliers : [
                    {
                        id : Math.round(Math.random()*10),
                        vId : Math.random(1000),
                        name : 'Ahsan web',
                        location : 'Jeddah, KSA',
                        contact : '0571708606',
                        poc : {
                            id : Math.random(10),
                            name : 'Ahsan',
                            dp : 'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairDreads01&accessoriesType=Round&hairColor=Brown&facialHairType=BeardMagestic&facialHairColor=Black&clotheType=GraphicShirt&clotheColor=Blue01&graphicType=Resist&eyeType=EyeRoll&eyebrowType=FlatNatural&mouthType=Disbelief&skinColor=Light'
                        },
                        industry_type : 'Saas'
                    },
                    {
                        id : Math.round(Math.random()*10),
                        vId : Math.random(1000),
                        name : 'Pro cure',
                        location : 'Khobar, KSA',
                        contact : '0550893217',
                        poc : {
                            id : Math.random(10),
                            name : 'Test 2',
                            dp : 'https://ui-avatars.com/api/?name=Ahsan'
                        },
                        industry_type : 'Hardware'
                    },
                    {
                        id : Math.round(Math.random()*10),
                        vId : Math.random(1000),
                        name : 'Builder Co.',
                        location : 'Dammam, KSA',
                        contact : '0569723698',
                        poc : {
                            id : Math.random(10),
                            name : 'Abdullah',
                            dp : 'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortWaved&accessoriesType=Blank&hairColor=Brown&facialHairType=BeardLight&facialHairColor=Black&clotheType=Hoodie&clotheColor=Red&eyeType=Side&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Tanned'
                        },
                        industry_type : 'Construction'
                    },
                ]
            }
        },
        methods:{
            gotoPOC(id){
                alert(`View POC with id ${id}`)
            }
        },
        beforeCreate(){
            if(!UserClass.loggedIn()){
                this.$router.push('/')
            }
        }
    }
</script>
