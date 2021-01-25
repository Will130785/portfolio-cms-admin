<template>
    <div class="w-full">
        <OverviewPanel title="Projects">
            <ProjectsOverview />
        </OverviewPanel>
    </div>
</template>

<script>
    import OverviewPanel from "../components/OverviewPanel"
    import ProjectsOverview from "../components/projects/ProjectsOverview"
    export default {
        components: {
            OverviewPanel,
            ProjectsOverview
        }
    }
</script>