<template>
    <nav class="w-full h-10 flex justify-between items-center"
        :class="background">
        <Hamburger v-on:got-clicked="handleClick"/>
        <div class="left">
            <p class="p-4"
                :class="textColor">{{ title }}
            </p>
        </div>
        
        <ul class="flex" :class="textColor">
            <router-link class="cursor-pointer p-4"
                v-for="(link, index) in navLinks" 
                :key="index"
                :to="{ name: link.linkName }">
                {{link.linkName}}
            </router-link>
        </ul>
    </nav>     
</template>

<script>
    import Hamburger from "./Hamburger"
    export default {
        data(){
            return {
                title: "Portfolio CMS"
            }
        },
        props: ["background", "textColor"],
        computed: {
            navLinks(){
                return [
                    { linkName: "Register User", link: "" },
                    { linkName: "Logout", link: "" }
                ]
            }
        },
        components: {
            Hamburger
        },
        methods: {
            handleClick(){
                this.$emit("got-clicked")
            }
        }
    }
</script>

<style scoped>

</style>