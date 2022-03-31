import { ChartData, ChartDataset } from 'chart.js';
export declare class DefaultChartData implements ChartData {
    datasets: ChartDataset[];
    labels?: unknown[];
    constructor(datasets: ChartDataset[], labels?: unknown[]);
}
