<template>
  <div>
    <!-- Topbar -->
    <TopBar
      v-on:got-clicked="handleClick"
      background="bg-indigo-600"
      textColor="text-white"/>
    <!-- Sidebar and content view -->
    <div class="flex">
      <!-- Only display mobile nav if hamburger button has been clicked -->
      <MobileNav v-if="showSide"/>
      
      <SideBar
        background="bg-indigo-600"
        textColor="text-white"/>
      
      <!-- All page componenents rendered in router-view -->
      <router-view />
    </div>
  </div>
</template>

<script>
  import TopBar from "./components/navigation/TopBar"
  import SideBar from "./components/navigation/SideBar"
  import MobileNav from "./components/navigation/MobileNav"
  export default {
    name: "App",
    components: {
      TopBar,
      SideBar,
      MobileNav
    },
    data(){
      return {
        showSide: false
      }
    },
    methods: {
      handleClick(){
        if(this.showSide){
          this.showSide = false
        } else {
          this.showSide = true
        }
      }
    }
  }
</script>

<style lang="scss">

</style>
