<template>
    <nav class="w-1/4 p-5 hidden sm:block"
        :class="[background, textColor]">
        <ul class="flex flex-col cursor-pointer">
            <router-link class="py-3 cursor-pointer"
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
        props: ["background", "textColor"],
        computed: {
            navLinks(){
                return [
                    {name: "Profile", link: "/profile"},
                    {name: "Blogs", link: "/blogs"},
                    {name: "News", link: "/news"},
                    {name: "Services", link: "/services"},
                    {name: "Projects", link: "/projects"},
                    {name: "Experience", link: "/experience"},
                    {name: "Education", link: "/education"}
                ]
            }
        }
    }
</script>

<style scoped>

</style>