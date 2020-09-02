<template>
    <div v-if="isLoading" class="loader-container">
        <div class="spinner-border text-primary" role="status">
            <span class="sr-only">Loading...</span>
        </div>
    </div>
</template>

<script>
export default {
    props : ['isLoading'],
}
</script>

<style>
.loader-container{
    position: fixed;
    z-index: 9999;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
    background-color: rgba(255, 255, 255, .6);
    transition: all 300ms;
}
</style>