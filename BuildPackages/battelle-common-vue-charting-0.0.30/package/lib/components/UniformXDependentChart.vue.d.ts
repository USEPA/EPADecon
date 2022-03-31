import { Vue } from 'vue-property-decorator';
import { ChartType } from 'chart.js';
import { IChartSeries } from '../interfaces/data/IChartSeries';
import { IChartPoint } from '../interfaces/data/IChartPoint';
export default class UniformXDependentChart extends Vue {
    data: IChartPoint[][][];
    requestedChartType: ChartType;
    xAxisLabel: string;
    yAxisLabel: string;
    xAxisScale: string;
    yAxisScale: string;
    forceXAxisMinZero: boolean;
    showDataPoints: boolean;
    sliderValue: number;
    get dataPointSize(): number;
    get dataSeries(): IChartSeries[];
    static multiSeriesDefaultChartProperties(seriesIndex: number): Record<string, unknown>;
}
