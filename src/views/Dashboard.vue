<template>
  <div>
    <Navbar />
    <Sidebar />
    <div class="position-sticky dashboard">
      <div class="m-3">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  import Navbar from "./Layout/Navbar.vue";
  import Sidebar from "./Layout/Sidebar.vue";
  export default {
    components: {
      Navbar,
      Sidebar,
    },
  };
</script>

<style>
  .dashboard {
    margin-left: 250px !important;
  }
</style>
