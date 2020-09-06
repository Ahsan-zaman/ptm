<template>
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
                </div>
            </div>
        </main>
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
