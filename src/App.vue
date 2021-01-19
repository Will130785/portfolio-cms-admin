<template>
  <div>
    <!-- Topbar -->
    <TopBar 
      background="bg-indigo-600"
      textColor="text-white"/>
    <!-- Sidebar and content view -->
    <div class="flex">
      <SideBar
        background="bg-indigo-600"
        textColor="text-white"/>
      <router-view />
    </div>
  </div>
</template>

<script>
  import TopBar from "./components/navigation/TopBar"
  import SideBar from "./components/navigation/SideBar"
  export default {
    name: "App",
    components: {
      TopBar,
      SideBar,
    }
  }
</script>

<style lang="scss">

</style>
