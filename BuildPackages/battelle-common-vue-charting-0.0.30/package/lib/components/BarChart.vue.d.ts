import Vue from 'vue';
import { ChartOptions } from 'chart.js';
export default class BarChart extends Vue {
    dataObject: any;
    yAxisLabel: string;
    yAxisScale: string;
    xAxisLabel: string;
    xAxisScale: string;
    chartFontSize: number;
    displayLegend: boolean;
    isStacked: boolean;
    get chartData(): unknown;
    get chartOptions(): ChartOptions;
    get xAxisProperties(): {
        scaleLabel: {
            labelString: string;
            fontSize: number;
            fontStyle: string;
            display: boolean;
        };
        stacked: boolean;
    };
    get yAxisProperties(): {
        ticks: {
            fontSize: number;
            suggestedMin: number;
            callback(value: number | string): string;
        };
        scaleLabel: {
            labelString: string;
            fontSize: number;
            fontStyle: string;
            display: boolean;
        };
        stacked: boolean;
    };
}
