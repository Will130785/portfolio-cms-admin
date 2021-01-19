<template>
    <nav class="w-full h-10 flex justify-between items-center"
        :class="background">
        <Hamburger />
        <div class="left">
            <p class="p-4"
                :class="textColor">Portfolio CMS
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
        }
    }
</script>

<style scoped>

</style>