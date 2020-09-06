import App from './App.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'
import router from './Router/router'
import axios from 'axios'
import UserClass from "./UserClass"
import EventBus from "./EventBus"
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */
window.Vue = Vue
Vue.use(VueRouter)

window.axios = axios;
window.axios.defaults.baseURL = "/api/auth";
window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
window.axios.defaults.headers.common["Accept"] = "application/json";
window.axios.defaults.headers.common[
    "Authorization"
] = `Bearer ${UserClass.getToken()}`;

window.UserClass = UserClass;
window.EventBus = EventBus;
// window.Bootstrap = Bootstrap;

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

new Vue({
    router,
    render: h => h(App)
}).$mount("#app");
