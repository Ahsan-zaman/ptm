import VueRouter from 'vue-router'

export default new VueRouter({
    mode:"history",
    routes:[
        {path:'/',name : 'Home',component: () => import("../components/AppLogin.vue")},
        {path:'/sales',name : 'Sales',component: () => import("../components/Sales.vue")},
        {path:'/lead-generation',name : 'Lead Generation',component: () => import("../components/LeadGeneration.vue")},
        {path:'/sales-operations',name : 'Sales Operations',component: () => import("../components/SalesOperations.vue")},
        {path:'/sales-leadership',name : 'Sales Leadership',component: () => import("../components/SalesLeadership.vue")},
        {path:'/relationship-management',name : 'Releationship Management',component: () => import("../components/RelationshipManagement.vue")},
        {path:'/sales-console',name : 'SalesConsole',component: () => import("../components/SalesConsole.vue")},
    ]
})