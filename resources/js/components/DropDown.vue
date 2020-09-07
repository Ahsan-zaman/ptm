<template>
    <div class="dropdown d-inline">
        <button class="btn btn-secondary btn-sm p-2 mr-3 rounded-circle" type="button" data-toggle="dropdown" aria-expanded="false">
            <svg class="bi" width="20" height="20" fill="currentColor">
                <use xlink:href="/assets/icons/bootstrap-icons.svg#person-circle"/>
            </svg>
        </button>
        <ul class="dropdown-menu dropdown-menu-right">
            ...
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return{
            dialog : false
        }
    },
    mounted(){
        // var myModal = document.getElementById('exampleModal')
        // console.log('bootstrap', bootstrap)
        // new Bootstrap.Modal(myModal)
    }
}
</script>

<style>

</style>