import { ChartDataset } from 'chart.js';
export interface IChartSeries extends ChartDataset<'line'> {
    axisLabels?: (string | string[] | number | number[] | Date | Date[])[];
    useStraightLines: boolean;
}
