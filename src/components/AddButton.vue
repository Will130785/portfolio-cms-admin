<template>
    <button @click="openModal"
            class="p-2 text-red-100"
            :class="[bgColor, bgColorHover]">
            {{ content }}
    </button>
</template>

<script>
    import EventBus from "../EventBus.js"
    export default {
        props: ["content", "bgColor", "bgColorHover"],
        methods: {
            openModal(){
                EventBus.$emit("open-modal")
            }
        },
    }
</script>

<style scoped lang="scss">
    // .btn {
    //     @apply p-2 bg-red-500 text-red-100 hover:bg-red-700;
    // }
</style>