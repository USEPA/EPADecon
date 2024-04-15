<template>
  <v-tooltip bottom :max-width="300">
    <template v-slot:activator="{ on }">
      <v-card v-on="on">
        <div class="pa-5">
          <v-card-title v-if="!results.length" class="headline pa-0" v-text="text[0]" />
          <v-menu v-else>
            <template v-slot:activator="{ on, attrs }">
              <v-card-title class="headline pa-0" v-bind="attrs" v-on="on">
                {{ text[selectedIndex] }} <v-icon>mdi-menu-down</v-icon></v-card-title
              >
            </template>
            <v-list>
              <v-list-item v-for="(result, i) of results" @click="selectChanged(i)" link :key="result">
                <v-list-item-title>{{ text[i] }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
          <chart-js-wrapper type="pie" :data="data" :options="options" :plugins="[]" />
        </div>
      </v-card>
    </template>
    <span>{{ definition }}</span>
  </v-tooltip>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { ChartJsWrapper } from 'battelle-common-vue-charting';
import { ChartData } from 'chart.js';
import container from '@/dependencyInjection/config';
import TYPES from '@/dependencyInjection/types';
import IChartOptionsProvider from '@/interfaces/providers/IChartOptionsProvider';
import Result from '@/enums/jobs/results/result';

@Component({ components: { ChartJsWrapper } })
export default class DashboardChartCard extends Vue {
  @Prop() text!: string[];

  @Prop() data!: ChartData;

  @Prop({ default: () => [] }) results!: Result[];

  @Prop() definition!: string;

  private chartOptionsProvider = container.get<IChartOptionsProvider>(TYPES.ChartOptionsProvider);

  options = this.chartOptionsProvider.getPieOptions();

  selectedIndex = 0;

  initializeChart(): void {
    if (this.options.plugins) {
      this.options.plugins.legend = {
        position: 'right',
      };
    }
    if (this.results.length) {
      this.selectedIndex = 0;
    }
  }

  selectChanged(selectedIndex: number): void {
    if (selectedIndex === this.selectedIndex) {
      return;
    }

    this.selectedIndex = selectedIndex;
    this.$emit('resultChanged', this.results[this.selectedIndex]);
  }

  created(): void {
    this.initializeChart();
  }
}
</script>

<style lang="scss" scoped>
.chart {
  width: 100%;
  height: 350px;
}
</style>
