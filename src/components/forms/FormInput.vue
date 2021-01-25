<template>
    <div class="flex flex-col w-full">
        <label :for="labelFor">{{ labelContent }}</label>
        <input class="shadow-md w-full"
            :id="labelFor"
            :type="inputType"
            v-model="value"
            v-on:input="$emit('updated', value)" />
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