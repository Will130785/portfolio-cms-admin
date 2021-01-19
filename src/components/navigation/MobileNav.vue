<template>
    <nav class="w-1/4 p-5 bg-indigo-600 text-white">
        <ul>
            <li class="py-3 cursor-pointer" v-for="(link, index) in navLinks" :key="index">{{link.name}}</li>
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