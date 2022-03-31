import Vue from 'vue';
import { Chart, ChartData, ChartOptions, CoreScaleOptions, ChartType, Plugin, Scale, ScaleType } from 'chart.js';
import { IChartSeries } from '../interfaces/data/IChartSeries';
export default class LineChart extends Vue {
    chartSeries: IChartSeries[];
    yAxisLabel: string;
    yAxisScale: ScaleType;
    xAxisLabel: string;
    xAxisScale: ScaleType;
    forceXAxisMinZero: boolean;
    dataPointSize: number;
    type: ChartType;
    plugins: Plugin[];
    dragYaxis: boolean;
    yScaleMax: number;
    yScaleMin: number;
    draggableDataSet: number;
    chartFontSize: number;
    chart: Chart;
    get chartData(): ChartData;
    get chartOptions(): ChartOptions;
    get xAxisProperties(): {
        type: keyof import("chart.js").ScaleTypeRegistry;
        suggestedMin: number | undefined;
        ticks: {
            autoSkip: boolean;
            font: {
                size: number;
            };
            callback: (value: string | number) => string | number;
        };
        title: {
            text: string;
            font: {
                size: number;
                weight: string;
            };
            display: boolean;
        };
        afterDataLimits(axis: Scale<CoreScaleOptions>): void;
    };
    get yAxisProperties(): {
        type: keyof import("chart.js").ScaleTypeRegistry;
        max: number;
        min: number;
        ticks: {
            font: {
                size: number;
            };
            callback(value: string | number): string | number;
        };
        grid: {
            tickLength: number;
        };
        title: {
            text: string;
            font: {
                size: number;
                weight: string;
            };
            display: boolean;
        };
        afterDataLimits(axis: Scale<CoreScaleOptions>): void;
    };
    resetChart(): void;
    static formatLabel(label: string): string;
    valueChanged(index: number, datasetIndex: number, chart: Chart): void;
}
