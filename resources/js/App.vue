<template>
    <div class="d-flex flex-column flex-grow-1">
        <navbar v-if="isLogged"/>
        <div class="container-fluid p-0 d-flex flex-column flex-grow-1">
            <router-view></router-view>
        </div>
        <Loader :isLoading="isLoading"/>
        <alert :alerts="alerts"/>
    </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Loader from './components/Loader'
import Alert from './components/Alert'
import bootstrap from 'bootstrap/dist/js/bootstrap.min.js'
    export default {
        components:{ Navbar, Loader, Alert },
        data(){
            return{
                isLoading : false,
                isLogged : UserClass.loggedIn(),
                
                alerts : [
                    // {
                    //     name : "Error",
                    //     type : 'danger',
                    //     desc : "Hello, world! This is a toast message. This is a toast message. This is a toast message.",
                    // },
                    // {
                    //     name : "Success",
                    //     type : 'success',
                    //     desc : "Hello, world! This is a toast message. This is a toast message.",
                    // },
                    // {
                    //     name : "Primary",
                    //     type : 'primary',
                    //     desc : "Hello, world! This is a toast message.",
                    // }
                ]
            }
        },
        mounted(){
            // console.log('bootstrap', bootstrap)
            EventBus.$on("Search", () => {
                alert("search")
            })
            EventBus.$on("alert", (d) => {
                let newIndex = this.alerts.length
                this.alerts.push(d)
                if(d.time){
                    setTimeout(()=>{
                        this.alerts.splice(newIndex,1)
                    },d.time)
                }
            })
            EventBus.$on("loading", () => {
                this.isLoading = true
            })
            EventBus.$on("loadingDone", () => {
                this.isLoading = false
            })
            axios.interceptors.request.use(function (config) {

                // spinning start to show
                // UPDATE: Add this code to show global loading indicator
                EventBus.$emit("loading")

                const token = window.localStorage.token;

                return config
            }, function (error) {
                return Promise.reject(error);
            });
            axios.interceptors.response.use(function (response) {

                // spinning hide
                // UPDATE: Add this code to hide global loading indicator
                EventBus.$emit("loadingDone")

                return response;
            }, function (error) {
                return Promise.reject(error);
            });

        }
    }
</script>
<style>
body{
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
}
.hover{
    cursor: pointer;
}
::-webkit-scrollbar {
    width: 2px;
    height: 2px;
}
::-webkit-scrollbar-thumb {
    background-color: #ebebeb;
    border-radius: 1px;
}
::-moz-selection { /* Code for Firefox */
    color: #fff;
    background: var(--primary-text);
}
</style>
