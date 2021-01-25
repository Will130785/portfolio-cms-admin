<template>
    <div class="w-full">
        <OverviewPanel title="Blogs">
            <BlogOverview />
        </OverviewPanel>
    </div>
</template>

<script>
    import OverviewPanel from "../components/OverviewPanel"
    import BlogOverview from "../components/blogs/BlogOverview"
    export default {
        components: {
            OverviewPanel,
            BlogOverview
        }
    }
</script>