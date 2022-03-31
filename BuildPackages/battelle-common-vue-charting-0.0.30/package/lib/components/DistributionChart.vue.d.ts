import Vue from 'vue';
import Distribution, { DistributionDataGenerator } from 'battelle-common-typescript-statistics';
import { ChartType } from 'chart.js';
import { IChartSeries } from '../interfaces/data/IChartSeries';
export default class DistributionChart extends Vue {
    distributionSeries: Distribution[];
    dataGenerator: DistributionDataGenerator;
    requestedChartType: ChartType;
    xAxisLabel: string;
    yAxisLabel: string;
    xAxisScale: string;
    yAxisScale: string;
    forceXAxisMinZero: boolean;
    showDataPoints: boolean;
    validation?: any;
    straightLinesDistTypes: string[];
    steppedLineDistTypes: string[];
    defaultChartProperties(seriesIndex: number, seriesType: ChartType): Partial<IChartSeries>;
    multiSeriesDefaultChartProperties(seriesIndex: number, subSeriesIndex: number, seriesType: ChartType): Partial<IChartSeries>;
    getSingleSeriesProperties(multiSeriesProperties: any, index: number): any;
    get distributionData(): any;
    onDistributionTypeChanged(): void;
    onValidationChanged(newValid: any): void;
}
