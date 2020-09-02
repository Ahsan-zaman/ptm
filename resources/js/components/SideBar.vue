<template>
    <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
        <div class="position-sticky h-100 d-flex flex-column">
            <ul class="nav py-3 flex-column">
                <li v-for="(link,i) in links" :key="i" class="nav-item">
                    <router-link v-slot="{ isActive, navigate }" v-if="link.show" class="d-flex align-items-center" :to="link.link">
                        <div @click="navigate" :class="isActive ? 'active' : ''" class="nav-link">
                            <svg class="bi mr-3" width="18" height="18" fill="currentColor">
                                <use :xlink:href="`/assets/icons/bootstrap-icons.svg#${link.icon}`"/>
                            </svg>
                            <span>{{link.name}}</span>
                        </div>
                    </router-link>
                </li>
            </ul>

            <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
            <span>Saved reports</span>
            <a class="link-secondary" href="#" aria-label="Add a new report">
                <svg class="bi" width="18" height="18" fill="currentColor">
                    <use xlink:href="/assets/icons/bootstrap-icons.svg#star"/>
                </svg>
            </a>
            </h6>
            <ul class="nav flex-column mb-2">
                <li class="nav-item">
                    <router-link v-slot="{ isActive, href }" to="/">
                        <a :href="href" :class="isActive ? 'active' : ''" class="nav-link">Back</a>
                    </router-link>
                </li>
            </ul>
            <div class="flex-grow-1"></div>
            <div class="input-group mb-2 px-1">
                <input type="text" class="form-control" placeholder="Search" aria-label="Search" aria-describedby="button-addon2">
                <button @click="searchEvent" class="btn btn-outline-secondary btn-sm" type="button" id="button-addon2">
                    <svg class="bi" width="16" height="16" fill="currentColor">
                        <use xlink:href="/assets/icons/bootstrap-icons.svg#search"/>
                    </svg>
                </button>
            </div>
            <div class="mb-2 px-1 d-flex justify-content-end">
                <div title="log out" @click="logout" class="p-2 hover">
                    <svg class="bi" width="18" height="18" fill="currentColor">
                        <use xlink:href="/assets/icons/bootstrap-icons.svg#arrow-right-square"/>
                    </svg>
                    Log out
                </div>
            </div>

        </div>
    </nav>
</template>

<script>
export default {
    props:['links'],
    methods:{
        logout(){
            console.log('Working')
            axios.get("/logout")
            .then(res => {
                UserClass.clearToken()
                this.$router.push("/")
            })
            .catch(err =>{
                alert(err)
            })
        },
        searchEvent(){
            EventBus.$emit("Search")
        }
    }
}
</script>

<style>
.nav-item{
    cursor: pointer;
}
.nav-item:hover{
    cursor: pointer;
    background-color: rgba(0, 0, 0, .1);
}
</style>