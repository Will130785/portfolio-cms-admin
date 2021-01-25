<template>
    <div class="w-full">
        <OverviewPanel title="Services">
            <ServicesOverview />
        </OverviewPanel>
    </div>
</template>

<script>
    import OverviewPanel from "../components/OverviewPanel"
    import ServicesOverview from "../components/services/ServicesOverview"
    export default {
        components: {
            OverviewPanel,
            ServicesOverview
        }
    }
</script>