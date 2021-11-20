<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center"><h1>KAYABASE1</h1></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "App",
    created() {
      console.log(this.$store.state.count)
    }
  };
</script>

<style lang="scss">
  @import "assets/css/style";
</style>
