import VueRouter from 'vue-router'

export default new VueRouter({
    mode:"history",
    routes:[
        {path:'/',name : 'Home',component: () => import("../components/AppLogin.vue")},
        {path:'/dashboard',name : 'Dashboard',component: () => import("../components/Dashboard.vue")},
        {
            path:'/strategic-sourcing',
            name : 'Strategic Sourcing',
            component: () => import("../components/StrategicSourcing.vue"),
        },
        {path:'/e-auction',name : 'eAuction',component: () => import("../components/EAuction.vue")},
        {path:'/approval-center',name : 'ApprovalCenter',component: () => import("../components/ApprovalCenter.vue")},
        {path:'/invoice-management',name : 'InvoiceManagement',component: () => import("../components/InvoiceManagement.vue")},
        {path:'/supplier-management',name : 'SupplierManagement',component: () => import("../components/SupplierManagement.vue")},
        {
            path:'/strategic-sourcing/new',
            name : 'newRFP',
            component: () => import("../components/NewsRFP.vue"),
        }
    ]
})