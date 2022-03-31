import Vue from 'vue';
import { Chart, ChartData, ChartOptions, ChartType, InteractionItem, Plugin } from 'chart.js';
export default class ChartJsWrapper extends Vue {
    type: ChartType;
    data: ChartData;
    options: ChartOptions;
    plugins: Plugin[];
    dragYaxis: boolean;
    draggableDataSet: number;
    mounted(): void;
    element: InteractionItem | undefined;
    yAxisID: string | undefined;
    getElement(sourceEvent: any, chartInstance: Chart): void;
    updateData(sourceEvent: any, chartInstance: Chart): void;
    dragEndCallback(sourceEvent: any, chart: Chart): void;
    chart: Chart;
    resetChart(): void;
    windowResized(): void;
    beforeDestroy(): void;
    onTypeChanged(): void;
    onDataChanged(newData: ChartData): void;
    onOptionsChanged(): void;
}
