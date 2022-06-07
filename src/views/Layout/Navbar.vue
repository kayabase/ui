<template>
  <nav class="navbar navbar-expand-lg sticky-top p-0 bg-white">
    <div class="container-fluid p-0 d-flex justify-content-between p-3">
      <span>{{ $route.name }}</span>
      <span
        >{{
          $store.getters.authUser.first_name +
          " " +
          $store.getters.authUser.last_name
        }}
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6-5GagR_L2PllzfIMhifve6QJKA5exZ4v9zNeBHIYwec0FYe_bK4TSHp1bqnXIH3Riig&usqp=CAU"
          alt="profile_picture"
          width="48"
          height="48"
          class="rounded-circle"
      /></span>
    </div>
  </nav>
</template>

<style scoped lang="scss">
.navbar {
  margin-left: 250px !important;
}
</style>
