<template>
    <div class="shadow-md flex flex-col">
        <label for="labelFor">{{ labelContent }}</label>
        <textarea id="labelFor"
                class="h10"
                v-model="value"
                v-on:input="$emit('updated', value)">
        </textarea>
    </div>    
</template>

<script>
    export default {
        props: {
            labelFor: String,
            labelContent: String
        },
        data(){
            return {
                value: ""
            }
        }
    }
</script>

<style scoped>

</style>