<template>
    <div style="z-index:999;position: fixed; bottom: 0; left: 0;">
        <transition-group name="slide-fade">
            <div v-for="(alert,i) in alerts" :key="alert.id" class="toast show m-3" role="alert" aria-live="assertive" aria-atomic="true">
                <div class="toast-header" :class="`text-${alert.type}`">
                    <svg class="bi mr-2" width="20" height="20" fill="currentColor">
                        <use :xlink:href="`/assets/icons/bootstrap-icons.svg#${getIcon(alert.type)}`"/>
                    </svg>
                    <strong class="mr-auto">{{alert.name}}</strong>
                    <!-- <small class="text-muted">11 mins ago</small> -->

                    <svg @click="remove(i)" style="cursor:pointer" class="bi" :class="`link-${alert.type}`" width="30" height="30" fill="currentColor">
                        <use xlink:href="/assets/icons/bootstrap-icons.svg#x"/>
                    </svg>
                </div>
                <div class="toast-body" :class="`text-${alert.type}`">
                    {{alert.desc}}
                </div>
            </div>
        </transition-group>
    </div>
</template>

<script>
export default {
    props : ['alerts'],
    methods:{
        remove(index){
            this.alerts = this.alerts.filter((d,i) => i != index)
        },
        getIcon(type){
            if( type == 'success'){
                return "check-square"
            }
            else if( type == 'danger'){
                return "exclamation-circle"
            }
            else if( type == 'primary'){
                return "info-circle"
            }
        }
    }
}
</script>

<style>
.toast{
    transition: all 500ms;
}
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all 200ms cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(-100%);
  opacity: 0;
}
</style>