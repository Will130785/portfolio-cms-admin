<template>
    <div class="w-full">
        <OverviewPanel title="Education">
            <EducationOverview />
        </OverviewPanel>
    </div>
</template>

<script>
    import OverviewPanel from "../components/OverviewPanel"
    import EducationOverview from "../components/education/EducationOverview"
    export default {
        components: {
            OverviewPanel,
            EducationOverview
        }
    }
</script>