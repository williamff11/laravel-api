<template>
  <div>
    <h1>Relatório de Produtos</h1>
    <hr />
    <line-chart></line-chart>
  </div>
</template>

<script>
import LineChart from "./charts/LineChart";
import RadarChart from "./charts/RadarChart";

export default {
  components: {
    LineChart,
    RadarChart
  }
};
</script>
