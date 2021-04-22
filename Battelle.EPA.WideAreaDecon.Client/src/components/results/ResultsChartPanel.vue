<template>
  <v-card class="d-flex justify-center" height="100%">
    <div class="d-flex justify-center flex-column">
      <v-btn width="150" v-text="'Create Chart'" color="secondary" class="mx-auto" @click="$emit('showModal')"></v-btn>
      <v-card-text class="text-center">
        <p class="text-subtitle-1">View data by using at least one of the following methods:</p>
        <ul class="text-subtitle-2" id="methodList">
          <li>Creating a chart</li>
          <li>Adding runs to the table below</li>
        </ul>
      </v-card-text>
    </div>
    <!-- <chart-options v-model="showModal" /> -->
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ChartOptions from '@/components/modals/results/ChartOptions.vue';

@Component({ components: { ChartOptions } })
export default class ResultsChartPanel extends Vue {}
</script>

<style lang="scss" scoped>
#methodList {
  list-style-type: '- ';
  list-style-position: inside;
  padding-left: 0;
}
</style>
