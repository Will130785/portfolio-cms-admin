<template>
    <div class="w-full">
        <OverviewPanel title="Experience">
            <ExperienceOverview />
        </OverviewPanel>
    </div>
</template>

<script>
    import OverviewPanel from "../components/OverviewPanel"
    import ExperienceOverview from "../components/experience/ExperienceOverview"
    export default {
        components: {
            OverviewPanel,
            ExperienceOverview
        }
    }
</script>