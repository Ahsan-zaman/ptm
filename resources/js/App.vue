<template>
    <div>
        <navbar/>
        <div class="container-fluid">
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
    export default {
        components:{ Navbar, Loader, Alert },
        data(){
            return{
                isLoading : false,
                
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
            EventBus.$on("Search", () => {
                alert("search")
            })
            EventBus.$on("alert", (d) => {
                alert("search")
            })
        }
    }
</script>
<style>
.hover{
    cursor: pointer;
}
.hover:hover{
    color: var(--bs-primary);
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
