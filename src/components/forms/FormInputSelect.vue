<template>
    <div>
        <label for="labelFor">{{ labelContent }}</label>
        <select id="labelFor" 
                v-model="value"
                v-on:change="$emit('updated', value)">
            <option v-for="(option, index) in options"
                    :key="index">
                    {{ option }}
            </option>
        </select>
    </div>
</template>

<script>
    export default {
        props: {
            labelFor: String,
            labelContent: String,
            options: Array
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