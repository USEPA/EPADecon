import Vue from 'vue';
import { ChartData, ChartOptions, ChartType, Plugin } from 'chart.js';
export default class ScatterPlotWrapper extends Vue {
    data: ChartData;
    type: ChartType;
    options: ChartOptions;
    plugins: Plugin[];
}
