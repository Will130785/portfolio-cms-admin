<template>
    <section class="w-3/4 shadow-lg m-4 p-4">
        <div>
            <h1>{{ title }}</h1>
        </div>
        <div>
            <div>
                <ul class="flex justify-between">
                    <li v-for="(item, index) in overviewTitles" :key="index">{{ item }}</li>
                </ul>
            </div>
            <slot></slot>
        </div>
    </section>
</template>

<script>
    export default {
        props: ["title", "margin"],
        computed: {
            overviewTitles(){
                return [
                    "Title",
                    "Date",
                    "Status",
                    "Action"
                ]
            }
        }
    }
</script>

<style scoped>

</style>