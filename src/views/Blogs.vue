<template>
    <div class="w-full">
        <OverviewPanel title="Blogs">
            <BlogOverview />
            <Modal>
                <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                    <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <div class="sm:flex sm:items-start">
                            <div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                            <!-- Heroicon name: exclamation -->
                                <svg class="h-6 w-6 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                </svg>
                            </div>
                            <div class="mt-3 w-full text-center sm:mt-0 sm:ml-4 sm:text-left">
                                <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
                                    Add new Blog post
                                </h3>
                                <div class="mt-2 w-full">
                                    <FormInput labelFor="title" labelContent="Title" inputType="text" v-on:updated="form.title = $event" />
                                </div>
                                <div class="mt-2 w-full">
                                    <FormInput labelFor="date" labelContent="Date" inputType="date" v-on:updated="form.date = $event" />
                                </div>
                                <div class="mt-2 w-full">
                                    <FormInput labelFor="author" labelContent="Author" inputType="text" v-on:updated="form.author = $event" />
                                </div>
                                <div class="mt-2 w-full">
                                    <FormInputSelect labelFor="status" labelContent="Status" v-bind:options="['Pending', 'Published']" v-on:updated="form.status = $event" />
                                </div>
                                <div class="mt-2 w-full">
                                    <FormInputTextArea labelFor="blogPost" labelContent="Blog Post" v-on:updated="form.blogPost = $event" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                        <button v-on:click.prevent="handleClick" type="button" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">
                            Add Blog
                        </button>
                        <button v-on:click.prevent="handleClick" type="button" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                            Cancel
                        </button>
                    </div>
                </div>
            </Modal>
        </OverviewPanel>
    </div>
</template>

<script>
    import OverviewPanel from "../components/OverviewPanel"
    import BlogOverview from "../components/blogs/BlogOverview"
    import Modal from "../components/Modal"
    import FormInput from "../components/forms/FormInput"
    import FormInputSelect from "../components/forms/FormInputSelect"
    import FormInputTextArea from "../components/forms/FormInputTextArea"
    import EventBus from "../EventBus.js"
    export default {
        components: {
            OverviewPanel,
            BlogOverview,
            Modal,
            FormInput,
            FormInputSelect,
            FormInputTextArea
        },
        data(){
            return {
                form: {
                    title: "",
                    date: "",
                    author: "",
                    status: "",
                    blogPost: ""
                }
            }
        },
        methods: {
            handleClick(){
                EventBus.$emit("handle-click")
                console.log(this.form)
            }
        }
    }
</script>