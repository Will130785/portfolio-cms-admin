<template>
    <div
        v-on:click="$emit('got-clicked')"
        class="p-4 cursor-pointer sm:hidden">
        <div class="pb-1 border-b-2 border-white w-5"></div>
        <div class="pb-1 border-b-2 border-white w-5"></div>
        <div class="pb-1 border-b-2 border-white w-5"></div>
    </div>    
</template>

<script>
    export default {
    
    }
</script>

<style scoped>

</style>