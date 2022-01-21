<template>
  <div>
    <div class="row">
      <div class="col-lg-4">
        <div
          class="
            card
            d-flex
            justify-content-center
            align-items-center
            bg-white
            p-4
            overview-item
          "
        >
          <h6 class="text-muted">Database Count</h6>
          <h2>1</h2>
        </div>
      </div>
      <div class="col-lg-4">
        <div
          class="
            card
            d-flex
            justify-content-center
            align-items-center
            bg-white
            p-4
            overview-item
          "
        >
          <h6 class="text-muted">Table Count</h6>
          <h2>2</h2>
        </div>
      </div>
      <div class="col-lg-4">
        <div
          class="
            card
            d-flex
            justify-content-center
            align-items-center
            bg-white
            p-4
            overview-item
          "
        >
          <h6>Data Count</h6>
          <h2>10</h2>
        </div>
      </div>
    </div>
    <div class="row mt-4">
      <div class="col-12 d-flex justify-content-center">
        <apexchart width="1000" type="area" :options="options" :series="series">
        </apexchart>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Last Activities</th>
              <th scope="col"><a href="#">View details</a></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="i in 3" :key="i">
              <td>Table{{ i }} Get Request</td>
              <td>2{{ i }} May 2021, 09:4{{ i }} PM</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
  import VueApexCharts from "vue-apexcharts";
  export default {
    name: "Overview",
    components: {
      apexchart: VueApexCharts,
    },
    data: () => ({
      options: {
        chart: {
          id: "vuechart-example",
        },
        xaxis: {
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
        },
      },
      series: [
        {
          name: "series-1",
          data: [55, 62, 89, 66, 98, 72, 101, 75, 94, 120, 117, 139],
        },
      ],
    }),
  };
</script>

<style lang="scss">
  @import "@/assets/css/bootstrap.sass";
  .overview-item:hover {
    cursor: pointer;
    color: $primary !important;
    border: 1px solid $primary;
  }
</style>
