<template>
    <nav class="w-1/4 p-5 bg-indigo-600 text-white z-10 fixed">
        <ul class="flex flex-col">
            <router-link 
                class="py-3 cursor-pointer"
                v-for="(link, index) in navLinks"
                :key="index"
                :to="{ name: link.name }">
                {{link.name}}
            </router-link>
        </ul>
    </nav>
</template>

<script>
    export default {
        computed: {
            navLinks(){
                return [
                    {name: "Profile", link: ""},
                    {name: "Blogs", link: ""},
                    {name: "News", link: ""},
                    {name: "Services", link: ""},
                    {name: "Projects", link: ""},
                    {name: "Experience", link: ""},
                    {name: "Education", link: ""}
                ]
            }
        }
    }
</script>

<style scoped>

</style>