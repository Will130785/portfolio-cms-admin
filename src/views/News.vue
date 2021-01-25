<template>
    <div class="w-full">
        <OverviewPanel title="News">
            <NewsOverview />
        </OverviewPanel>
    </div>
</template>

<script>
    import OverviewPanel from "../components/OverviewPanel"
    import NewsOverview from "../components/news/NewsOverview"
    export default {
        components: {
            OverviewPanel,
            NewsOverview
        }
    }
</script>